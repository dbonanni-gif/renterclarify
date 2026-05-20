import { getPostHogClient } from "../../lib/posthog-server";

export const runtime = 'nodejs';

const SYSTEM_PROMPT = `You are a tenant rights expert who helps renters understand lease agreements. When given a lease clause or lease text, you analyze it and respond with ONLY a valid JSON object — no markdown, no explanation outside the JSON.

The JSON must have exactly these fields:
- "clauseType": The primary type of the pasted text. Choose the single most appropriate label from: "Security Deposit", "Pet Policy", "Maintenance & Repairs", "Early Termination", "Liability & Indemnification", "Late Fees", "Subletting", "Utilities", "Entry & Inspection", "Noise & Nuisance", "Lease Renewal", "Other".
- "plainEnglish": A 2-4 sentence overall summary in plain, accessible language written directly to the renter. Start with "This clause..." or "This lease section...". If a state was provided, note any relevant state-specific laws or tenant protections that apply.
- "redFlagScore": An integer from 1 to 10 rating the overall risk. 1 = completely fair and standard, 10 = extremely one-sided or potentially illegal.
- "redFlags": An array of strings, each describing a specific concern. Empty array [] if none. Each string should be one concise sentence starting with an action verb, e.g. "Requires you to...", "Allows the landlord to...", "Waives your right to...".
- "fairRewrite": A rewritten version of the most problematic clause that is balanced and fair to both parties. Use neutral legal language but keep it readable.
- "clauses": An array of clause objects identifying each distinct clause or provision in the pasted text. If only one clause is present, return an array with one item. Each object must have:
  - "title": A short descriptive name for this clause (e.g. "Late Fee Policy", "Automatic Renewal", "Entry Rights")
  - "risk": Exactly one of "High", "Medium", or "Low"
    - "High": clauses that could seriously harm the tenant — waiving right to sue, automatic renewal traps, excessive or illegal fees, unauthorized landlord entry, blanket indemnification
    - "Medium": clauses worth negotiating — high but legal late fees, vague maintenance responsibilities, strict guest policies, non-refundable fees
    - "Low": standard boilerplate that is tenant-neutral or typical in most residential leases
  - "explanation": A 1-2 sentence plain English explanation of what this specific clause means for the tenant
  - "whyRisky": A 1-2 sentence explanation of why this clause is risky or unfair. Set to null if risk is "Low".
  - "suggestedAction": A specific, actionable suggestion for the tenant (e.g. "Ask landlord to cap late fees at 5% of monthly rent", "No action needed — this is standard language", "Request a mutual entry notice of at least 24 hours")

Respond with ONLY the JSON object. Do not wrap it in markdown code blocks.`;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const clause = body?.clause?.trim() ?? "";
  if (!clause) {
    return Response.json({ error: "A lease clause is required." }, { status: 400 });
  }
  if (clause.length > 6000) {
    return Response.json({ error: "Clause is too long. Please limit to 6,000 characters." }, { status: 400 });
  }

  const state = typeof body?.state === "string" ? body.state.trim() : "";

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured on the server." }, { status: 500 });
  }

  const userMessage = state
    ? `Analyze this lease clause for a tenant in ${state}:\n\n${clause}`
    : `Analyze this lease clause:\n\n${clause}`;

  let anthropicRes;
  try {
    anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "prompt-caching-2024-07-31",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 2048,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [
          {
            role: "user",
            content: userMessage,
          },
        ],
      }),
    });
  } catch {
    return Response.json({ error: "Failed to reach the AI service." }, { status: 502 });
  }

  if (!anthropicRes.ok) {
    const errText = await anthropicRes.text().catch(() => "");
    console.error("Anthropic API error", anthropicRes.status, errText);
    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: "server",
      event: "clause_analysis_api_error",
      properties: { status_code: anthropicRes.status, reason: "anthropic_api_error" },
    });
    await posthog.shutdown();
    return Response.json(
      { error: "The AI service returned an error. Please try again." },
      { status: 502 }
    );
  }

  const data = await anthropicRes.json();
  const raw = data?.content?.[0]?.text ?? "";

  let parsed;
  try {
    const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    parsed = JSON.parse(cleaned);
  } catch {
    console.error("Failed to parse Claude response as JSON:", raw);
    return Response.json(
      { error: "The AI returned an unreadable response. Please try again." },
      { status: 500 }
    );
  }

  const { clauseType, plainEnglish, redFlagScore, redFlags, fairRewrite } = parsed;
  const clauses = Array.isArray(parsed.clauses) ? parsed.clauses : [];

  if (
    typeof clauseType !== "string" ||
    typeof plainEnglish !== "string" ||
    typeof redFlagScore !== "number" ||
    !Array.isArray(redFlags) ||
    typeof fairRewrite !== "string"
  ) {
    return Response.json(
      { error: "The AI returned an unexpected response format. Please try again." },
      { status: 500 }
    );
  }

  return Response.json({
    clauseType,
    plainEnglish,
    redFlagScore: Math.min(10, Math.max(1, Math.round(redFlagScore))),
    redFlags,
    fairRewrite,
    clauses,
  });
}
