import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "Breaking a Lease Early — How to Get Out Without Penalty",
  description:
    "Learn your legal options for breaking a lease early, when landlords must let you out penalty-free, and the rules in California, Texas, New York, Florida, and Illinois.",
};

const STATE_RULES = [
  {
    state: "California",
    earlyTermFee: "Capped at 2 months' rent if specified in lease",
    mitigation: "Required — landlord must actively try to re-rent",
    keyRule:
      "California landlords must take reasonable steps to find a replacement tenant once you vacate. You stop owing rent as soon as a new tenant moves in, regardless of your original lease end date. Special protections apply for active military members, domestic violence survivors, and tenants who experience uninhabitable conditions.",
  },
  {
    state: "Texas",
    earlyTermFee: "Typically 1–2 months' rent if lease includes early termination clause",
    mitigation: "Required — landlord must make reasonable efforts",
    keyRule:
      "Texas requires landlords to mitigate damages. You remain liable for rent only until the landlord finds a replacement tenant or the lease ends. Active military members can break a lease with 30 days' notice. Victims of family violence may terminate with 30 days' notice and documentation.",
  },
  {
    state: "New York",
    earlyTermFee: "No statutory cap — must be a reasonable pre-estimate of damages",
    mitigation: "Required — landlord must make good-faith efforts",
    keyRule:
      "New York courts treat lease break penalties as liquidated damages, which must reflect actual expected losses. Landlords who don't mitigate may be limited in what they can recover. Domestic violence survivors, seniors moving to care facilities, and active military may terminate early without penalty.",
  },
  {
    state: "Florida",
    earlyTermFee: "Typically 1–2 months' rent if stated in lease",
    mitigation: "Required — landlord must make reasonable efforts",
    keyRule:
      "Florida requires landlords to actively seek replacement tenants. Once re-rented, your rent liability ends. Lease break fees must be reasonable. Uninhabitable conditions can give you grounds to terminate without penalty after providing written notice and a 7-day cure period.",
  },
  {
    state: "Illinois",
    earlyTermFee: "No statutory cap statewide (Chicago limits to 2 months' rent)",
    mitigation: "Required — landlord must make good-faith efforts",
    keyRule:
      "In Chicago, the RLTO limits early termination fees to 2 months' rent. Statewide, landlords must make good-faith efforts to re-rent. Active military, domestic violence survivors, and tenants facing uninhabitable conditions have additional legal grounds to terminate early.",
  },
];

const RED_FLAGS = [
  "Waiver of landlord's duty to mitigate — a clause stating you owe rent for the full remaining term regardless of re-renting is potentially unenforceable in most states.",
  "Early termination fee plus full remaining rent — you should owe one or the other, not both.",
  "No definition of what triggers the early termination fee — fees should be clearly tied to specific conditions.",
  "Automatic lease extension clauses — some leases auto-renew for another full term if you don't give 60–90 days' notice, making it harder to leave.",
  "No military or domestic violence carve-out — federal and state law provides these rights regardless of what the lease says.",
  "Forfeiture of the full security deposit as part of early termination — this stacks penalties in a way that may be challenged.",
];

const PENALTY_FREE_REASONS = [
  "Active military deployment or permanent change of station (protected by the Servicemembers Civil Relief Act nationwide)",
  "Uninhabitable conditions your landlord refuses to fix after proper written notice",
  "Domestic violence, sexual assault, or stalking (most states have specific protections)",
  "The landlord violated your privacy rights or harassed you",
  "The landlord failed to disclose known health hazards (mold, lead paint, etc.)",
  "Job relocation or layoff (some states and some lease clauses allow this)",
];

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function BreakingALeasePage() {
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
          Early Termination
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "var(--retro-cream)", marginBottom: "0.5rem" }}>
          Breaking a Lease Early
        </h1>
        <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "1rem", color: "var(--retro-cream)", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
          Life happens. In many situations your liability is far lower than the lease suggests — and sometimes you can walk away penalty-free.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Intro: When can you break penalty-free? */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>When You Can Break a Lease Penalty-Free</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", lineHeight: "1.7", color: "var(--retro-ink)", marginBottom: "1rem" }}>
                Certain circumstances give you the legal right to walk away from a lease without penalty, regardless of what the lease itself says. Most states also require landlords to actively look for a new tenant once you leave, which significantly limits how much you actually owe. These situations typically allow penalty-free exit:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {PENALTY_FREE_REASONS.map((item) => (
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
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Early Termination Fee</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.earlyTermFee}</p>
                      </div>
                      <div style={{ background: "rgba(0,40,104,0.05)", border: "1.5px solid rgba(0,40,104,0.15)", borderRadius: "2px", padding: "0.6rem 0.8rem" }}>
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Landlord Must Mitigate</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.mitigation}</p>
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
              Have an early termination clause in your lease?
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
