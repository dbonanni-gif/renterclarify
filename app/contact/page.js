import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "Contact Us — RenterClarify",
  description:
    "Get in touch with RenterClarify — send us feedback, report a bug, or ask a question. We typically respond within 48 hours.",
};

const TOPICS = [
  {
    stamp: "Feedback",
    stampClass: "retro-stamp-gold",
    title: "Feedback on the Lease Analyzer",
    description: "Tell us what works, what doesn't, or how we can make the analysis more useful.",
  },
  {
    stamp: "Bug",
    stampClass: "retro-stamp-red",
    title: "Bug Reports",
    description: "Found something broken or a result that looks wrong? Let us know and we'll look into it.",
  },
  {
    stamp: "Press",
    stampClass: "",
    title: "Partnership or Press Inquiries",
    description: "Interested in working with us or covering RenterClarify? We'd love to connect.",
  },
  {
    stamp: "Help",
    stampClass: "",
    title: "General Questions",
    description: "Questions about tenant rights, how the site works, or anything else — we're happy to help.",
  },
];

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

export default function ContactPage() {
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
          Contact
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--retro-cream)", marginBottom: "0.5rem" }}>
          Get in Touch
        </h1>
        <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "1rem", color: "var(--retro-cream)", opacity: 0.8, maxWidth: "540px", margin: "0 auto" }}>
          Have a question, feedback, or found a bug? Send us an email and we&apos;ll get back to you within 48 hours.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          {/* Email CTA */}
          <div style={{ background: "var(--retro-navy)", borderRadius: "2px", padding: "2rem 1.75rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1.25rem", boxShadow: "var(--retro-shadow)" }}>
            <div>
              <span className="retro-stamp retro-stamp-gold" style={{ fontSize: "0.65rem", marginBottom: "0.6rem", display: "inline-block" }}>
                Send us an email
              </span>
              <p style={{ fontFamily: "Georgia, serif", color: "var(--retro-cream)", fontSize: "0.9rem", lineHeight: "1.65", maxWidth: "340px", margin: 0, opacity: 0.85 }}>
                We read every message and typically respond within 48 hours on business days.
              </p>
            </div>
            <a
              href="mailto:contact@renterclarify.com"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.5rem",
                background:     "var(--retro-gold)",
                color:          "var(--retro-ink)",
                fontFamily:     "var(--font-oswald), Impact, sans-serif",
                fontWeight:     "700",
                fontSize:       "0.88rem",
                letterSpacing:  "0.07em",
                textTransform:  "uppercase",
                padding:        "0.65rem 1.4rem",
                borderRadius:   "2px",
                textDecoration: "none",
                boxShadow:      "3px 3px 0px rgba(255,255,255,0.15)",
                flexShrink:     0,
              }}
            >
              <svg style={{ width: "1rem", height: "1rem" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              contact@renterclarify.com
            </a>
          </div>

          {/* What to reach out about */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1.1rem" }}>What to Reach Out About</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.9rem" }}>
                {TOPICS.map((topic) => (
                  <div key={topic.title} style={{ border: "2px solid var(--retro-navy)", borderRadius: "2px", padding: "1rem 1.1rem" }}>
                    <span className={`retro-stamp ${topic.stampClass}`} style={{ fontSize: "0.62rem", marginBottom: "0.5rem", display: "inline-block" }}>
                      {topic.stamp}
                    </span>
                    <h3 style={{ ...headingStyle, fontSize: "0.82rem", color: "var(--retro-navy)", marginBottom: "0.4rem" }}>
                      {topic.title}
                    </h3>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: "0.83rem", color: "var(--retro-ink)", lineHeight: "1.6", margin: 0, opacity: 0.8 }}>
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RetroCard>

          {/* Response time — pull quote style */}
          <div style={{ borderLeft: "6px solid var(--retro-gold)", background: "var(--retro-cream)", padding: "0.9rem 1.1rem", borderRadius: "2px" }}>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", lineHeight: "1.7", color: "var(--retro-ink)", margin: 0 }}>
              <span style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.03em", fontSize: "0.85rem" }}>
                Typical response time: within 48 hours
              </span>
              {" "}on business days. For urgent tenant rights situations, we recommend also contacting your local legal aid organization or tenant union — they can provide real-time guidance specific to your jurisdiction.
            </p>
          </div>

          {/* Legal notice */}
          <div style={{ border: "2.5px solid var(--retro-red)", borderLeft: "6px solid var(--retro-red)", borderRadius: "2px", padding: "1rem 1.25rem" }}>
            <span className="retro-stamp retro-stamp-red" style={{ fontSize: "0.62rem", marginBottom: "0.5rem", display: "inline-block" }}>Legal Notice</span>
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", lineHeight: "1.7", color: "var(--retro-ink)", margin: 0 }}>
              RenterClarify is not a law firm and cannot provide legal advice specific to your situation. For legal guidance, please consult a licensed attorney or contact a tenant rights organization in your area. Our{" "}
              <Link href="/guide" style={{ color: "var(--retro-navy)", fontWeight: "700" }}>Clause Guide</Link>
              {" "}and{" "}
              <Link href="/states" style={{ color: "var(--retro-navy)", fontWeight: "700" }}>State Guides</Link>
              {" "}are great starting points for general information.
            </p>
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
