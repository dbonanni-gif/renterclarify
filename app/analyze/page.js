import Navbar from "../components/Navbar";
import LeaseForm from "../components/LeaseForm";
import LeaseUpload from "../components/LeaseUpload";
import { RetroCard } from "../components/RetroCard";
import Link from "next/link";

export const metadata = {
  title: "Analyze Your Lease — RenterClarify",
  description:
    "Upload your lease PDF or paste a clause for an instant risk breakdown with plain-English explanations, red flag detection, and a fairer rewrite.",
};

const sectionHeadingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  margin:        0,
};

export default function AnalyzePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--retro-cream)" }}>
      <Navbar />

      {/* Navy banner */}
      <div
        style={{
          background:   "var(--retro-navy)",
          borderBottom: "3px solid var(--retro-gold)",
          padding:      "clamp(2rem, 5vw, 3.5rem) 1.5rem",
          textAlign:    "center",
        }}
      >
        <span
          className="retro-stamp retro-stamp-gold"
          style={{ marginBottom: "1rem", display: "inline-block" }}
        >
          Free Lease Analysis
        </span>
        <h1
          style={{
            ...sectionHeadingStyle,
            fontSize:     "clamp(2rem, 5vw, 3.2rem)",
            color:        "var(--retro-cream)",
            marginBottom: "0.5rem",
          }}
        >
          Analyze Your Lease
        </h1>
        <p
          style={{
            fontFamily: "Georgia, Cambria, serif",
            fontSize:   "1rem",
            color:      "var(--retro-cream)",
            opacity:    0.8,
            maxWidth:   "540px",
            margin:     "0 auto",
          }}
        >
          Upload your lease or paste a clause — get an instant risk breakdown
          with plain-English explanations.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div
          style={{
            maxWidth: "700px",
            margin:   "0 auto",
            padding:  "clamp(1.5rem, 4vw, 3rem) 1.5rem",
          }}
        >
          {/* Step 1: single clause */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="retro-stamp retro-stamp-gold">Step 1</span>
            <h2 style={{ ...sectionHeadingStyle, fontSize: "0.95rem", color: "var(--retro-navy)" }}>
              Analyze One Clause
            </h2>
            <span style={{ fontSize: "0.75rem", fontFamily: "Georgia, serif", color: "var(--retro-ink)", opacity: 0.55 }}>
              Paste a single clause for a quick risk breakdown
            </span>
          </div>
          <RetroCard accent="gold">
            <div style={{ padding: "2rem" }}>
              <LeaseForm />
            </div>
          </RetroCard>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2rem 0" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--retro-navy)", opacity: 0.2 }} />
            <span style={{ ...sectionHeadingStyle, fontSize: "0.75rem", letterSpacing: "0.12em", color: "var(--retro-navy)", opacity: 0.5 }}>
              or
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--retro-navy)", opacity: 0.2 }} />
          </div>

          {/* Step 2: full PDF */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="retro-stamp retro-stamp-red">Step 2</span>
            <h2 style={{ ...sectionHeadingStyle, fontSize: "0.95rem", color: "var(--retro-navy)" }}>
              Analyze Your Full Lease (PDF)
            </h2>
            <span style={{ fontSize: "0.75rem", fontFamily: "Georgia, serif", color: "var(--retro-ink)", opacity: 0.55 }}>
              Complete clause-by-clause breakdown
            </span>
          </div>
          <RetroCard accent="red">
            <div style={{ padding: "2rem" }}>
              <LeaseUpload />
            </div>
          </RetroCard>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background:  "var(--retro-cream)",
          borderTop:   "3px solid var(--retro-navy)",
          padding:     "2rem 1.5rem",
          marginTop:   "2rem",
        }}
      >
        <div
          style={{
            maxWidth:       "700px",
            margin:         "0 auto",
            display:        "flex",
            flexWrap:       "wrap",
            alignItems:     "center",
            justifyContent: "space-between",
            gap:            "1rem",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily:     "var(--font-oswald), Impact, sans-serif",
              fontSize:       "1.2rem",
              fontWeight:     "700",
              textTransform:  "uppercase",
              letterSpacing:  "0.06em",
              color:          "var(--retro-navy)",
              textDecoration: "none",
            }}
          >
            Renter<span style={{ color: "var(--retro-gold)" }}>Clarify</span>
          </Link>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize:   "0.8rem",
              color:      "var(--retro-ink)",
              opacity:    0.6,
              textAlign:  "center",
              margin:     0,
            }}
          >
            Educational information only — not legal advice.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} RenterClarify
            </span>
            <Link
              href="/privacy-policy"
              style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem", color: "var(--retro-navy)", opacity: 0.6, textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
