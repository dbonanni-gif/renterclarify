import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "Landlord Entry Rights — Can Your Landlord Enter Without Notice?",
  description:
    "Find out when your landlord can legally enter your rental unit, how much notice they must give, and what protections you have in California, Texas, New York, Florida, and Illinois.",
};

const STATE_RULES = [
  {
    state: "California",
    noticeRequired: "24 hours (written or oral)",
    emergencyEntry: "Yes — no notice required",
    keyRule:
      "California has some of the strongest tenant protections. Entry is only permitted for specific reasons: repairs, inspections, showing the unit, emergencies, or with a court order. Entry must occur during normal business hours unless you agree otherwise.",
  },
  {
    state: "Texas",
    noticeRequired: "Reasonable notice (typically 24 hours)",
    emergencyEntry: "Yes — no notice required",
    keyRule:
      "Texas law does not define a specific notice period but requires 'reasonable' advance notice. Most courts interpret this as 24 hours. The landlord must have a legitimate reason for entry and cannot use entry as a form of harassment.",
  },
  {
    state: "New York",
    noticeRequired: "Reasonable notice (typically 24 hours)",
    emergencyEntry: "Yes — no notice required",
    keyRule:
      "New York law requires reasonable notice, generally understood as 24 hours. Landlords may enter only for specific purposes such as repairs, inspections, or showing the unit to prospective tenants. Repeated unannounced entry can constitute harassment.",
  },
  {
    state: "Florida",
    noticeRequired: "12 hours",
    emergencyEntry: "Yes — no notice required",
    keyRule:
      "Florida sets one of the shorter notice windows at 12 hours. Entry must be at a reasonable time — between 7:30 a.m. and 8:00 p.m. — for permitted purposes only. Landlords who violate this may be liable for damages.",
  },
  {
    state: "Illinois",
    noticeRequired: "2 days (Chicago); reasonable notice elsewhere",
    emergencyEntry: "Yes — no notice required",
    keyRule:
      "Chicago's Residential Landlord and Tenant Ordinance requires 2 days' written notice before entry. Outside Chicago, 'reasonable notice' applies statewide. Entry must be for a legitimate purpose and at a reasonable time.",
  },
];

const RED_FLAGS = [
  "No notice requirement — any lease clause waiving your right to advance notice before non-emergency entry is likely unenforceable.",
  "Entry at unreasonable hours — landlords cannot enter at midnight or early morning for routine matters, even with notice.",
  "Vague 'at any time' language — a clause allowing the landlord to enter 'at any time for any reason' is a significant overstep.",
  "Frequent unannounced visits — even if individual entries are technically legal, repeated surprise visits can constitute harassment.",
  "Entry to show the unit with no reasonable time frame — some leases allow showing with minimal notice; this can disrupt your daily life.",
  "Retaliatory entry — landlords who suddenly increase inspection frequency after you complain about repairs may be acting unlawfully.",
];

const PERMITTED_REASONS = [
  "Emergency repairs or situations that threaten safety or property",
  "Scheduled maintenance or repairs (with proper notice)",
  "Inspections — move-in, move-out, or periodic",
  "Showing the unit to prospective tenants or buyers",
  "Court-ordered entry",
];

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function LandlordEntryRightsPage() {
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
          Entry &amp; Inspection
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(1.8rem, 4.5vw, 3rem)", color: "var(--retro-cream)", marginBottom: "0.5rem" }}>
          Landlord Entry Rights
        </h1>
        <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "1rem", color: "var(--retro-cream)", opacity: 0.8, maxWidth: "600px", margin: "0 auto" }}>
          Your home is yours. Learn when landlords can legally enter, how much notice they must give, and what counts as a violation of your privacy rights.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Intro: When can a landlord legally enter? */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>When Can a Landlord Legally Enter?</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", lineHeight: "1.7", color: "var(--retro-ink)", marginBottom: "1rem" }}>
                Permitted reasons for entry are typically limited by law — a landlord cannot simply enter because they want to check on things. Your rental unit is your home, and you have a legal right to quiet enjoyment. Valid reasons across most states include:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {PERMITTED_REASONS.map((item) => (
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
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Notice Required</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.noticeRequired}</p>
                      </div>
                      <div style={{ background: "rgba(0,40,104,0.05)", border: "1.5px solid rgba(0,40,104,0.15)", borderRadius: "2px", padding: "0.6rem 0.8rem" }}>
                        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--retro-navy)", opacity: 0.6, marginBottom: "0.2rem" }}>Emergency Entry</p>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.82rem", color: "var(--retro-ink)", margin: 0 }}>{s.emergencyEntry}</p>
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
              Does your lease have an entry clause?
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
