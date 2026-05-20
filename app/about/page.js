import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "About RenterClarify — Free AI Lease Analyzer for Renters",
  description:
    "Learn about RenterClarify: a free AI-powered suite of tools that helps renters understand lease agreements, identify risky clauses, and know their rights — no sign-up required.",
};

const SINGLE_CLAUSE_FEATURES = [
  { label: "Plain-English explanation", detail: "A clear 2–4 sentence summary of exactly what the clause means for you — written like a knowledgeable friend, not a lawyer." },
  { label: "Risk score (1–10)", detail: "An integer rating of how landlord-favored or risky the clause is, with specific red flags called out." },
  { label: "Red flags", detail: "A list of specific concerns — unauthorized entry rights, waived protections, excessive fees — written as plain action statements." },
  { label: "Fairer rewrite", detail: "A rewritten version of the clause using balanced legal language you could bring to a negotiation." },
  { label: "Downloadable PDF report", detail: "Export your full analysis as a formatted PDF to save, share, or show to a housing counselor." },
];

const FULL_LEASE_FEATURES = [
  { label: "Automatic clause identification", detail: "Upload your entire lease PDF and the AI identifies and extracts every major clause — no manual copying required." },
  { label: "High / Medium / Low risk tiers", detail: "Every clause is categorized and color-coded so the most dangerous provisions surface immediately." },
  { label: "Overall lease risk score", detail: "A single 1–10 score summarizing the overall tenant-friendliness of the entire lease." },
  { label: "Plain-English summary", detail: "A 3–5 sentence overview of the lease's biggest concerns and any standout terms." },
  { label: "Suggested action for each clause", detail: "Specific, actionable negotiation language for every flagged clause — not just warnings, but what to ask for." },
  { label: "Full downloadable PDF report", detail: "A complete report covering all identified clauses, organized by risk tier, ready to save or share." },
];

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

function FeatureList({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
      {items.map(({ label, detail }) => (
        <li key={label} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
          <span className="retro-stamp" style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", marginTop: "0.2rem", flexShrink: 0 }}>✓</span>
          <div>
            <span style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--retro-navy)" }}>
              {label}
            </span>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: "var(--retro-ink)", lineHeight: "1.6" }}>
              {" — "}{detail}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
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
          About
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--retro-cream)", marginBottom: "0.5rem" }}>
          About RenterClarify
        </h1>
        <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "1rem", color: "var(--retro-cream)", opacity: 0.8, maxWidth: "540px", margin: "0 auto" }}>
          Understanding your lease shouldn&apos;t require a law degree.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* What is RenterClarify */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>What is RenterClarify?</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: "1.75", color: "var(--retro-ink)", marginBottom: "1.25rem" }}>
                RenterClarify is a free, AI-powered platform that helps renters understand and evaluate their lease agreements. It has two main tools — a single-clause analyzer for quick lookups, and a full-lease PDF analyzer for a complete clause-by-clause breakdown — plus 50 state tenant rights guides and topic guides covering common lease issues. No account or sign-up required.
              </p>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", border: "2px solid var(--retro-green)", borderLeft: "6px solid var(--retro-green)", borderRadius: "2px", padding: "0.85rem 1rem" }}>
                <span className="retro-stamp" style={{ background: "var(--retro-green)", fontSize: "0.6rem", padding: "0.1rem 0.4rem", marginTop: "0.1rem", flexShrink: 0 }}>✓</span>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "var(--retro-ink)", lineHeight: "1.6", margin: 0 }}>
                  Everything on RenterClarify is completely free — no account, no sign-up, no paywall.
                </p>
              </div>
            </div>
          </RetroCard>

          {/* Tool 1: Single Clause Analyzer */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span className="retro-stamp retro-stamp-gold" style={{ fontSize: "0.75rem" }}>Tool 1</span>
                <h2 className="retro-section-heading">Single Clause Analyzer</h2>
              </div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: "1.75", color: "var(--retro-ink)", marginBottom: "1.1rem" }}>
                Paste any paragraph from your lease — liability language, pet policy, early termination, maintenance responsibilities — and get a full breakdown in seconds. Optionally select your state for state-specific legal context.
              </p>
              <FeatureList items={SINGLE_CLAUSE_FEATURES} />
              <div style={{ marginTop: "1.25rem" }}>
                <Link href="/" style={{
                  fontFamily:     "var(--font-oswald), Impact, sans-serif",
                  fontWeight:     "700",
                  fontSize:       "0.8rem",
                  textTransform:  "uppercase",
                  letterSpacing:  "0.07em",
                  color:          "var(--retro-gold)",
                  textDecoration: "none",
                }}>
                  Try the Clause Analyzer →
                </Link>
              </div>
            </div>
          </RetroCard>

          {/* Tool 2: Full Lease Analyzer */}
          <RetroCard accent="red">
            <div style={{ padding: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span className="retro-stamp retro-stamp-red" style={{ fontSize: "0.75rem" }}>Tool 2</span>
                <h2 className="retro-section-heading">Full Lease Analyzer (PDF)</h2>
              </div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: "1.75", color: "var(--retro-ink)", marginBottom: "1.1rem" }}>
                Upload your entire lease as a PDF. The AI reads the whole document, identifies every major clause automatically, and produces a complete risk-tiered report — no copying and pasting required. Analyzes up to 3 leases per day per device.
              </p>
              <FeatureList items={FULL_LEASE_FEATURES} />
              <div style={{ marginTop: "1.25rem" }}>
                <Link href="/analyze" style={{
                  fontFamily:     "var(--font-oswald), Impact, sans-serif",
                  fontWeight:     "700",
                  fontSize:       "0.8rem",
                  textTransform:  "uppercase",
                  letterSpacing:  "0.07em",
                  color:          "var(--retro-red)",
                  textDecoration: "none",
                }}>
                  Try the Full Lease Analyzer →
                </Link>
              </div>
            </div>
          </RetroCard>

          {/* State & Topic Guides */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>State &amp; Topic Guides</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: "1.75", color: "var(--retro-ink)", marginBottom: "1.25rem" }}>
                Beyond the analyzers, RenterClarify publishes detailed reference guides so you can understand your rights before you even open a lease.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {[
                  {
                    stamp: "50 States",
                    stampClass: "",
                    title: "State Tenant Rights Guides",
                    body: "State-specific guides covering security deposit limits, landlord entry rules, eviction timelines, rent control, and habitability standards — with red flags and official AG links for every state.",
                    link: "/states",
                    linkText: "Browse state guides →",
                  },
                  {
                    stamp: "Reference",
                    stampClass: "retro-stamp-gold",
                    title: "Topic Guides",
                    body: "Deep-dives on the lease issues renters ask about most: security deposits, late fees, landlord entry rights, breaking a lease, subletting, pet deposits, eviction, and more.",
                    link: "/guide",
                    linkText: "Browse topic guides →",
                  },
                ].map((item) => (
                  <div key={item.title} style={{ border: "2px solid var(--retro-navy)", borderRadius: "2px", padding: "1rem 1.1rem" }}>
                    <span className={`retro-stamp ${item.stampClass}`} style={{ fontSize: "0.65rem", marginBottom: "0.6rem", display: "inline-block" }}>
                      {item.stamp}
                    </span>
                    <h3 style={{ ...headingStyle, fontSize: "0.88rem", color: "var(--retro-navy)", marginBottom: "0.5rem" }}>{item.title}</h3>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "0.83rem", color: "var(--retro-ink)", lineHeight: "1.65", marginBottom: "0.75rem" }}>{item.body}</p>
                    <Link href={item.link} style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--retro-navy)", textDecoration: "none" }}>
                      {item.linkText}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </RetroCard>

          {/* Why we built it */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>Why We Built It</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                {[
                  "Every year, millions of renters sign legally binding contracts they don't fully understand. Lease agreements are written by landlords and their attorneys — people with professional incentives to include clauses that favor the property owner. Renters, often under time pressure to secure housing, sign without knowing what they're agreeing to.",
                  "That imbalance is unfair. A clause that waives your right to withhold rent for uninhabitable conditions, or one that makes you liable for repairs that are legally the landlord's responsibility, can cost you thousands of dollars or your housing stability. Most renters only discover these clauses matter when it's too late.",
                  "RenterClarify exists to close that gap — giving every renter, regardless of their legal background, the same level of clarity that a lawyer could provide.",
                ].map((para, i) => (
                  <p key={i} style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: "1.75", color: "var(--retro-ink)", margin: 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </RetroCard>

          {/* Privacy */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "0.9rem" }}>Your Privacy</h2>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.92rem", lineHeight: "1.75", color: "var(--retro-ink)", margin: 0 }}>
                Lease text you submit is sent to the AI model for analysis and is not stored, logged, or shared by us after the response is returned. We do not collect personal information or require account creation. IP addresses are temporarily recorded only to enforce the daily rate limit on the full lease analyzer. Read our full{" "}
                <Link href="/privacy-policy" style={{ color: "var(--retro-navy)", fontWeight: "700" }}>Privacy Policy</Link>.
              </p>
            </div>
          </RetroCard>

          {/* Legal disclaimer */}
          <div style={{ border: "2.5px solid var(--retro-red)", borderLeft: "6px solid var(--retro-red)", borderRadius: "2px", padding: "1.25rem 1.5rem" }}>
            <span className="retro-stamp retro-stamp-red" style={{ fontSize: "0.65rem", marginBottom: "0.6rem", display: "inline-block" }}>Legal Notice</span>
            <h2 style={{ ...headingStyle, fontSize: "0.9rem", color: "var(--retro-red)", marginBottom: "0.5rem" }}>
              Not a law firm — educational tool only
            </h2>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", lineHeight: "1.7", color: "var(--retro-ink)", margin: 0 }}>
              RenterClarify provides general educational information only — not legal advice. We are not a law firm and no attorney-client relationship is created by using this site. Laws vary by state and change frequently; the information here may not reflect the most current legal developments. Always consult a qualified attorney for guidance on your specific situation.
            </p>
          </div>

          {/* CTA */}
          <div style={{ background: "var(--retro-navy)", borderRadius: "2px", padding: "2.5rem 1.5rem", textAlign: "center", boxShadow: "var(--retro-shadow)" }}>
            <h2 style={{ ...headingStyle, fontSize: "clamp(1.3rem, 3vw, 2rem)", color: "var(--retro-cream)", marginBottom: "0.75rem" }}>
              Ready to Understand Your Lease?
            </h2>
            <p style={{ fontFamily: "Georgia, serif", color: "var(--retro-cream)", opacity: 0.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
              Analyze a single clause in seconds or upload your full lease PDF — free, no sign-up required.
            </p>
            <Link href="/analyze" style={{
              display:        "inline-block",
              background:     "var(--retro-gold)",
              color:          "var(--retro-ink)",
              fontFamily:     "var(--font-oswald), Impact, sans-serif",
              fontWeight:     "700",
              fontSize:       "0.95rem",
              letterSpacing:  "0.08em",
              textTransform:  "uppercase",
              padding:        "0.65rem 1.6rem",
              borderRadius:   "2px",
              textDecoration: "none",
              boxShadow:      "4px 4px 0px rgba(255,255,255,0.15)",
            }}>
              Try the Free Analyzer
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
