import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "Security Deposit Laws by State — What Renters Need to Know",
  description:
    "Learn what landlords can legally deduct from your security deposit, how long they have to return it, and the rules in California, Texas, New York, Florida, and Illinois.",
};

const STATE_RULES = [
  {
    state: "California",
    limit: "2× monthly rent (unfurnished); 3× (furnished)",
    returnDeadline: "21 days after move-out",
    keyRule:
      "Landlords must provide an itemized written statement of all deductions. Normal wear and tear cannot be charged. Tenants have the right to a pre-move-out inspection.",
  },
  {
    state: "Texas",
    limit: "No statutory maximum",
    returnDeadline: "30 days after move-out",
    keyRule:
      "The landlord must send a written, itemized list of deductions. If they fail to return the deposit in bad faith, you may be entitled to 3× the withheld amount plus attorney fees.",
  },
  {
    state: "New York",
    limit: "1× monthly rent",
    returnDeadline: "14 days after move-out",
    keyRule:
      "Landlords who fail to return the deposit within 14 days forfeit their right to keep any portion of it. Normal wear and tear is never chargeable.",
  },
  {
    state: "Florida",
    limit: "No statutory maximum",
    returnDeadline: "15 days (no deductions) or 30 days (with deductions)",
    keyRule:
      "If a landlord intends to make deductions, they must send written notice within 30 days. Failure to do so means they waive the right to withhold any of the deposit.",
  },
  {
    state: "Illinois",
    limit: "No statewide maximum (Chicago: 1.5× monthly rent)",
    returnDeadline: "30 days after move-out",
    keyRule:
      "In Chicago, landlords must pay interest on deposits held longer than 6 months. Statewide, an itemized statement is required for any deductions.",
  },
];

const RED_FLAGS = [
  "Charges for normal wear and tear — carpet fading, small nail holes, or minor scuffs are not your liability.",
  "No itemized deduction statement — landlords in every state must document what they're keeping and why.",
  "Deposits above the legal cap — any amount over the state maximum is unenforceable.",
  "Deductions for pre-existing damage — always do a written move-in inspection and photograph everything.",
  "Non-refundable security deposit language — most states require a true security deposit to be refundable.",
  "Return deadlines missed — if your landlord misses the deadline, you may be owed the full deposit back plus penalties.",
];

const ALLOWED_DEDUCTIONS = [
  "Unpaid rent or utility bills owed to the landlord",
  "Damage caused by you, your guests, or your pets beyond normal wear and tear",
  "Excessive cleaning costs (if you left the unit in a significantly worse state than you received it)",
  "Costs to replace items you removed or destroyed",
];

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function SecurityDepositLawsPage() {
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
          Security Deposits
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "var(--retro-cream)", marginBottom: "0.5rem" }}>
          Security Deposit Laws by State
        </h1>
        <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "1rem", color: "var(--retro-cream)", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
          Your security deposit is your money. Learn what landlords can legally keep, how long they have to return it, and when you&apos;re owed penalties for violations.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Intro: What can landlords deduct? */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>What Can a Landlord Legally Deduct?</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", lineHeight: "1.7", color: "var(--retro-ink)", marginBottom: "1rem" }}>
                Across all states, landlords are generally permitted to deduct for unpaid rent, damage caused by the tenant beyond normal wear and tear, and cleaning costs if the unit is left significantly dirtier than when you moved in. They cannot charge you for things that simply happen with normal use over time — faded paint, worn carpet, minor scuffs, or aging appliances.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {ALLOWED_DEDUCTIONS.map((item) => (
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
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Deposit Limit</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.limit}</p>
                      </div>
                      <div style={{ background: "rgba(0,40,104,0.05)", border: "1.5px solid rgba(0,40,104,0.15)", borderRadius: "2px", padding: "0.6rem 0.8rem" }}>
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Return Deadline</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.returnDeadline}</p>
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
              Have a security deposit clause in your lease?
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
