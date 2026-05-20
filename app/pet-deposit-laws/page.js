import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "Pet Deposit Laws — Are Pet Deposits Refundable?",
  description:
    "Find out whether pet deposits are refundable, how they differ from pet fees, and what the rules are in California, Texas, New York, Florida, and Illinois.",
};

const STATE_RULES = [
  {
    state: "California",
    refundable: "Yes — always refundable (part of security deposit)",
    totalCap: "2× monthly rent (unfurnished); 3× (furnished) — combined with security deposit",
    keyRule:
      "California treats pet deposits as part of the overall security deposit. Landlords cannot charge a separate non-refundable pet fee for residential units. The total of all deposits combined — including pet — cannot exceed two months' rent for an unfurnished unit. Any deduction must be itemized.",
  },
  {
    state: "Texas",
    refundable: "Yes if called a 'pet deposit' — non-refundable if called a 'pet fee'",
    totalCap: "No statutory maximum",
    keyRule:
      "In Texas, the label matters. An amount called a 'pet deposit' must be treated like a security deposit and returned minus documented damages. A separately labeled 'pet fee' or 'pet rent' may be non-refundable if the lease clearly states so. The distinction must be explicit in writing.",
  },
  {
    state: "New York",
    refundable: "Yes — pet deposits must be refundable for residential tenants",
    totalCap: "1× monthly rent (security deposit cap includes pet)",
    keyRule:
      "New York's security deposit reform laws make it difficult for landlords to charge non-refundable fees separate from the security deposit. Any amount held to cover potential pet damage should be treated as part of the capped security deposit and returned if no damage occurs.",
  },
  {
    state: "Florida",
    refundable: "Depends on the lease — can be non-refundable if clearly stated",
    totalCap: "No statutory cap on pet deposits or fees",
    keyRule:
      "Florida allows landlords to charge either a refundable pet deposit or a non-refundable pet fee — but the lease must explicitly state which one it is. If the lease is ambiguous, courts may lean toward treating it as a refundable deposit. Pet rent (a monthly charge) is always non-refundable.",
  },
  {
    state: "Illinois",
    refundable: "Yes if labeled as a deposit — non-refundable if labeled as a fee",
    totalCap: "No statewide cap (Chicago: 1.5× monthly rent total)",
    keyRule:
      "Illinois follows the same label-based approach as Texas. An amount called a pet deposit must follow the same rules as the security deposit. In Chicago, the combined total of all deposits is capped at 1.5 months' rent. Pet fees or non-refundable charges must be clearly identified as such.",
  },
];

const RED_FLAGS = [
  "Large non-refundable pet fee plus a pet deposit — you may be paying twice for the same risk coverage.",
  "Pet deposit that exceeds your state's overall security deposit cap — any amount above the cap may be unenforceable.",
  "Vague language around refundability — if the lease doesn't clearly say 'non-refundable,' you may have grounds to claim it back.",
  "Pet deposit that grows with each pet, with no stated maximum — know the total upfront cost before signing.",
  "Clauses requiring professional cleaning for all units with pets regardless of actual condition — this may be an unlawful flat fee.",
  "No documented move-in inspection — without a written record of the unit's condition when you moved in, any pet-related deduction becomes hard to dispute.",
];

const PET_CHARGE_TYPES = [
  "Pet Deposit — Held like a security deposit to cover pet-caused damage. Must be returned (minus documented deductions) when you move out.",
  "Pet Fee — A one-time, non-refundable charge paid at move-in. Think of it like an amenity charge — you pay it and it's gone.",
  "Pet Rent — An additional monthly charge on top of your base rent. Always non-refundable, since it's regular income to the landlord.",
  "Non-refundable pet deposit — This label is a contradiction in terms. In many states (especially California), a 'non-refundable deposit' for a residential unit is simply illegal.",
];

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function PetDepositLawsPage() {
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
          Pet Policy
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "var(--retro-cream)", marginBottom: "0.5rem" }}>
          Pet Deposit Laws
        </h1>
        <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "1rem", color: "var(--retro-cream)", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
          Pet deposit, pet fee, pet rent — the names sound similar but the rules are very different. Learn what you can get back and when a clause crosses the line.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Intro: Deposit vs. fee vs. rent */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>Pet Deposit vs. Pet Fee vs. Pet Rent</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", lineHeight: "1.7", color: "var(--retro-ink)", marginBottom: "1rem" }}>
                These three terms mean very different things, and your lease may use them interchangeably even when the law treats them differently. Many landlords blur the line, charging non-refundable fees under names that sound like deposits. Knowing the difference protects your money:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {PET_CHARGE_TYPES.map((item) => (
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
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Refundable?</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.refundable}</p>
                      </div>
                      <div style={{ background: "rgba(0,40,104,0.05)", border: "1.5px solid rgba(0,40,104,0.15)", borderRadius: "2px", padding: "0.6rem 0.8rem" }}>
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Total Deposit Cap</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.totalCap}</p>
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
              Have a pet policy clause in your lease?
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
