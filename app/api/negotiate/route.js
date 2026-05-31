import { getPostHogClient } from "../../lib/posthog-server";

export const runtime = 'nodejs';

const VALID_TONES = ["polite", "firm", "assertive"];

const SYSTEM_PROMPT = `You are a tenant rights expert who drafts professional negotiation letters for renters. Given a list of lease red flags and a preferred tone, write a letter the tenant can send to their landlord requesting changes before signing.

Follow these rules exactly:
- Output ONLY the letter body in Markdown. No preamble, no explanation outside the letter.
- Open with a subject line formatted as: **Subject: Lease Amendment Request — [Unit/Property if known, otherwise omit the bracket placeholder]**
- Address the landlord as "Dear [Landlord/Property Manager],"
- Open with a brief, professional statement of intent (1–2 sentences).
- Dedicate one paragraph per red flag. Each paragraph must:
  - Describe the concern in plain English without restating the raw flag verbatim
  - Propose a specific, reasonable amendment (e.g. exact cap amount, notice period, mutual obligation)
  - If a state was provided, reference applicable tenant protection law by name where relevant
- Close with a cooperative statement inviting dialogue, then "Sincerely," followed by a blank signature line: "[Your Name]"
- Use Markdown formatting: **bold** for key terms and proposed changes, paragraph breaks between sections.

Tone guidance:
- polite: warm, collaborative, assumes good faith on both sides
- firm: professional and direct, clearly states expectations without apology
- assertive: rights-forward, cites protections explicitly, makes clear what is and isn't acceptable`;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const redFlags = body?.redFlags;
  const tone = typeof body?.tone === "string" ? body.tone.trim().toLowerCase() : "";
  const state = typeof body?.state === "string" ? body.state.trim() : "";

  if (!Array.isArray(redFlags) || redFlags.length === 0) {
    return Response.json({ error: "redFlags must be a non-empty array of strings." }, { status: 400 });
  }
  if (redFlags.length > 20) {
    return Response.json({ error: "Too many red flags. Please limit to 20." }, { status: 400 });
  }
  if (!VALID_TONES.includes(tone)) {
    return Response.json(
      { error: `tone must be one of: ${VALID_TONES.join(", ")}.` },
      { status: 400 }
    );
  }

  const sanitizedFlags = redFlags
    .filter((f) => typeof f === "string" && f.trim().length > 0)
    .map((f) => f.trim().slice(0, 500));

  if (sanitizedFlags.length === 0) {
    return Response.json({ error: "redFlags must contain at least one non-empty string." }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured on the server." }, { status: 500 });
  }

  const flagList = sanitizedFlags.map((f, i) => `${i + 1}. ${f}`).join("\n");
  const userMessage = [
    state ? `Tenant location: ${state}` : null,
    `Tone: ${tone}`,
    `Red flags to address:\n${flagList}`,
  ]
    .filter(Boolean)
    .join("\n\n");

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
        max_tokens: 1500,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: userMessage }],
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
      event: "negotiate_api_error",
      properties: { status_code: anthropicRes.status },
    });
    await posthog.shutdown();
    return Response.json({ error: "The AI service returned an error. Please try again." }, { status: 502 });
  }

  const data = await anthropicRes.json();
  const letter = data?.content?.[0]?.text ?? "";

  if (!letter.trim()) {
    return Response.json({ error: "The AI returned an empty response. Please try again." }, { status: 500 });
  }

  const posthog = getPostHogClient();
  posthog.capture({
    distinctId: "server",
    event: "negotiate_letter_generated",
    properties: {
      tone,
      red_flags_count: sanitizedFlags.length,
      state_provided: Boolean(state),
    },
  });
  await posthog.shutdown();

  return Response.json({ letter });
}
