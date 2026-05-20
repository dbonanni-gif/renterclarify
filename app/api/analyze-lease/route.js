import { getPostHogClient } from "../../lib/posthog-server";

export const runtime = 'nodejs';

// In-memory rate limiter — resets on process restart
const rateLimitStore = new Map();
const MAX_PER_DAY = 3;
const WINDOW_MS = 24 * 60 * 60 * 1000;

function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_PER_DAY) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `You are a tenant rights expert who analyzes complete residential lease agreements. When given the full text of a lease, you identify every major clause or section and assess its impact on the tenant.

Return ONLY a valid JSON object with exactly these fields:
- "summary": A 3-5 sentence plain-English overview of the lease. Highlight the most important tenant concerns, any unusually favorable or unfavorable terms, and the overall character of the lease.
- "overallScore": An integer from 1 to 10 rating the overall risk to the tenant. 1 = very tenant-friendly, 10 = extremely one-sided or contains potentially illegal provisions.
- "clauses": An array identifying every major clause or section found in the lease. Aim for 8-20 distinct clauses covering: rent and payment terms, security deposit, late fees, maintenance and repairs, landlord entry, subletting, pets, parking, utilities, early termination, lease renewal, noise and guests, liability and indemnification, and any other significant provisions. Each object must have:
  - "title": Short descriptive name (e.g. "Late Fee Policy", "Landlord Entry Rights", "Security Deposit")
  - "risk": Exactly one of "High", "Medium", or "Low"
    - "High": could seriously harm the tenant — waiving right to sue, automatic renewal traps, excessive or illegal fees, unauthorized entry, blanket indemnification, provisions that may violate tenant protection laws
    - "Medium": worth negotiating — high but legal fees, vague maintenance language, strict guest or pet policies, one-sided notice requirements
    - "Low": standard boilerplate, tenant-neutral, or typical in most residential leases
  - "explanation": 1-2 sentences in plain English explaining what this clause means for the tenant
  - "whyRisky": 1-2 sentences explaining why this is risky or unfair. Set to null if risk is "Low".
  - "suggestedAction": A specific actionable suggestion (e.g. "Ask landlord to specify a 24-hour minimum notice period", "No action needed — this is standard language")

Respond with ONLY the JSON object. Do not wrap it in markdown code blocks.`;

export async function POST(request) {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = (forwarded ? forwarded.split(',')[0].trim() : null)
    || request.headers.get('x-real-ip')
    || 'unknown';

  if (!checkRateLimit(ip)) {
    const posthog = getPostHogClient();
    posthog.capture({
      distinctId: ip,
      event: "analyze_lease_rate_limited",
      properties: { ip },
    });
    await posthog.shutdown();
    return Response.json(
      { error: "You've reached the limit of 3 full lease analyses per day. Please try again tomorrow." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const leaseText = typeof body?.leaseText === 'string' ? body.leaseText.trim() : '';
  if (!leaseText) {
    return Response.json({ error: "Lease text is required." }, { status: 400 });
  }
  if (leaseText.length > 100000) {
    return Response.json({ error: "Lease text is too long. Please limit to 100,000 characters." }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured on the server." }, { status: 500 });
  }

  let anthropicRes;
  try {
    anthropicRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: `Analyze this complete lease agreement:\n\n${leaseText}` }],
      }),
    });
  } catch {
    return Response.json({ error: "Failed to reach the AI service." }, { status: 502 });
  }

  if (!anthropicRes.ok) {
    const errText = await anthropicRes.text().catch(() => "");
    console.error("Anthropic API error", anthropicRes.status, errText);
    return Response.json({ error: "The AI service returned an error. Please try again." }, { status: 502 });
  }

  const data = await anthropicRes.json();
  const raw = data?.content?.[0]?.text ?? "";

  let parsed;
  try {
    const cleaned = raw.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "").trim();
    parsed = JSON.parse(cleaned);
  } catch {
    console.error("Failed to parse Claude response:", raw.slice(0, 500));
    return Response.json({ error: "The AI returned an unreadable response. Please try again." }, { status: 500 });
  }

  const { summary, overallScore, clauses } = parsed;
  if (
    typeof summary !== "string" ||
    typeof overallScore !== "number" ||
    !Array.isArray(clauses)
  ) {
    return Response.json({ error: "The AI returned an unexpected format. Please try again." }, { status: 500 });
  }

  return Response.json({
    summary,
    overallScore: Math.min(10, Math.max(1, Math.round(overallScore))),
    clauses,
  });
}
