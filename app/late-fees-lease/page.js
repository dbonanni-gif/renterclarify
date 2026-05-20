import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "Late Rent Fees — How Much Can a Landlord Legally Charge?",
  description:
    "Find out the legal limits on late rent fees, what grace periods you're entitled to, and how the rules work in California, Texas, New York, Florida, and Illinois.",
};

const STATE_RULES = [
  {
    state: "California",
    feeLimit: "Must be 'reasonable' — courts typically accept 5–10% of monthly rent",
    gracePeriod: "No mandatory grace period (check your lease)",
    keyRule:
      "California does not set a specific dollar cap on late fees, but they must represent a reasonable estimate of the landlord's actual costs from late payment. Courts have struck down excessive flat fees as unenforceable penalties. The lease must clearly state the fee amount and when it applies.",
  },
  {
    state: "Texas",
    feeLimit: "Must be 'reasonable' — typically 10–12% of monthly rent; daily fees capped at 10% per day",
    gracePeriod: "Grace period through the 2nd day of the month",
    keyRule:
      "Texas law gives tenants until the second day of the month before a late fee can be charged. Daily late fees are allowed but capped. The lease must specify the fee amount to make it enforceable. Fees above the statutory guidelines can be challenged in court.",
  },
  {
    state: "New York",
    feeLimit: "$50 or 5% of monthly rent — whichever is less",
    gracePeriod: "5-day grace period required by state law",
    keyRule:
      "New York has some of the strictest late fee rules in the country. Landlords cannot charge more than $50 or 5% of the monthly rent, whichever is lower — and the fee cannot be charged until at least 5 days after the due date. Any amount above this cap is unenforceable.",
  },
  {
    state: "Florida",
    feeLimit: "No statutory cap — must be 'reasonable'",
    gracePeriod: "No mandatory grace period (check your lease)",
    keyRule:
      "Florida does not impose a specific dollar or percentage limit on late fees, but courts evaluate whether fees are reasonable given the circumstances. A common standard is 5% of monthly rent. Leases that include daily compounding late fees are more likely to face challenges.",
  },
  {
    state: "Illinois",
    feeLimit: "No statewide cap — must be 'reasonable' (Chicago: 5% of past-due rent)",
    gracePeriod: "No mandatory grace period statewide (Chicago: 5 days)",
    keyRule:
      "Chicago's RLTO caps late fees at 5% of the past-due rent and requires a 5-day grace period. Outside Chicago, no statewide cap applies, but courts will evaluate reasonableness. A 5–10% fee is generally considered the acceptable range.",
  },
];

const RED_FLAGS = [
  "Daily compounding late fees — a fee that doubles or grows each day can quickly become hundreds of dollars for a payment that's only a few days late.",
  "No grace period — while not required in all states, a lease with zero grace period means you're technically late the moment the clock strikes midnight on the due date.",
  "Late fees as a percentage of the total balance rather than monthly rent — this makes the fee grow with any unpaid amounts.",
  "Late fees applied to other fees — some leases charge late fees on top of other late fees, compounding an already large amount.",
  "Fees that exceed your state's legal cap — especially relevant in New York, where the cap is strictly enforced.",
  "Ambiguous due dates — a lease that says rent is 'due on the first' but 'late as of the first' may not give you even a day of cushion.",
];

const ENFORCEABILITY_FACTORS = [
  "The fee amount must be stated clearly in the lease — verbal agreements about late fees are rarely enforceable",
  "The fee must be 'reasonable' — it should approximate the landlord's actual cost from late payment, not be punitive",
  "The fee cannot be charged before any applicable grace period expires",
  "Daily compounding fees may be challenged as unenforceable penalties in many states",
  "The fee cannot exceed any statutory cap set by state or local law",
];

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function LateFeesLeasePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--retro-cream)" }}>
      <Navbar />

      {/* Navy banner */}
      <div style={{
        background:   "var(--retro-navy)",
        borderBottom: "3px solid var(--retro-gold)",
        padding:      "clamp(2rem, 5vw, 3.5rem) 1.5rem",
        textAlign:    "center",
      }}>
        <span className="retro-stamp retro-stamp-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>
          Late Fees
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "var(--retro-cream)", marginBottom: "0.5rem" }}>
          Late Rent Fees
        </h1>
        <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "1rem", color: "var(--retro-cream)", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
          A late fee should compensate your landlord — not punish you. Learn the legal limits, required grace periods, and when a clause crosses the line.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Intro: What makes a late fee enforceable? */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>What Makes a Late Fee Enforceable?</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", lineHeight: "1.7", color: "var(--retro-ink)", marginBottom: "1rem" }}>
                Every state treats late fees differently: some cap them at a specific dollar amount or percentage, others require a grace period before any fee can apply, and a few leave it entirely to the lease. Courts look at these factors when deciding whether to enforce a late fee clause:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {ENFORCEABILITY_FACTORS.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <span className="retro-stamp" style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "var(--retro-ink)", lineHeight: "1.6" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RetroCard>

          {/* State-by-state rules */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1.25rem" }}>State-by-State Rules</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {STATE_RULES.map((s) => (
                  <div key={s.state} style={{ border: "2px solid var(--retro-navy)", borderRadius: "2px", padding: "1rem 1.1rem" }}>
                    <h3 style={{ ...headingStyle, fontSize: "1rem", color: "var(--retro-navy)", marginBottom: "0.75rem" }}>{s.state}</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "0.6rem", marginBottom: "0.75rem" }}>
                      <div style={{ background: "rgba(0,40,104,0.05)", border: "1.5px solid rgba(0,40,104,0.15)", borderRadius: "2px", padding: "0.6rem 0.8rem" }}>
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Fee Limit</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.feeLimit}</p>
                      </div>
                      <div style={{ background: "rgba(0,40,104,0.05)", border: "1.5px solid rgba(0,40,104,0.15)", borderRadius: "2px", padding: "0.6rem 0.8rem" }}>
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Grace Period</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.gracePeriod}</p>
                      </div>
                    </div>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: "var(--retro-ink)", lineHeight: "1.65", margin: 0 }}>{s.keyRule}</p>
                  </div>
                ))}
              </div>
            </div>
          </RetroCard>

          {/* Red flags */}
          <RetroCard accent="red">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>Red Flags to Watch For</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {RED_FLAGS.map((flag) => (
                  <div key={flag} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <span className="retro-stamp retro-stamp-red" style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", flexShrink: 0, marginTop: "0.1rem" }}>!</span>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "var(--retro-ink)", lineHeight: "1.6" }}>{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </RetroCard>

          {/* CTA */}
          <div style={{ background: "var(--retro-navy)", borderRadius: "2px", padding: "2rem 1.75rem", textAlign: "center", boxShadow: "var(--retro-shadow)" }}>
            <h2 style={{ ...headingStyle, fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "var(--retro-cream)", marginBottom: "0.6rem" }}>
              Is your late fee clause fair?
            </h2>
            <p style={{ fontFamily: "Georgia, serif", color: "var(--retro-cream)", opacity: 0.8, fontSize: "0.9rem", marginBottom: "1.25rem", maxWidth: "480px", margin: "0 auto 1.25rem" }}>
              Paste your lease clause into our free analyzer — get a plain-English explanation, a risk score, and a fairer rewrite in seconds.
            </p>
            <Link
              href="/analyze"
              style={{
                display:        "inline-block",
                background:     "var(--retro-gold)",
                color:          "var(--retro-ink)",
                fontFamily:     "var(--font-oswald), Impact, sans-serif",
                fontWeight:     "700",
                fontSize:       "0.88rem",
                letterSpacing:  "0.07em",
                textTransform:  "uppercase",
                padding:        "0.65rem 1.6rem",
                borderRadius:   "2px",
                textDecoration: "none",
                boxShadow:      "3px 3px 0px rgba(255,255,255,0.15)",
              }}
            >
              Analyze My Lease Clause — Free
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "var(--retro-cream)", borderTop: "3px solid var(--retro-navy)", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontSize: "1.2rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--retro-navy)", textDecoration: "none" }}>
            Renter<span style={{ color: "var(--retro-gold)" }}>Clarify</span>
          </Link>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.6, textAlign: "center", margin: 0 }}>
            Educational information only — not legal advice.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.6 }}>&copy; {new Date().getFullYear()} RenterClarify</span>
            <Link href="/privacy-policy" style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem", color: "var(--retro-navy)", opacity: 0.6, textDecoration: "none" }}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
