import Link from "next/link";
import Navbar from "./Navbar";
import { RetroCard } from "./RetroCard";
import { AtAGlance } from "./AtAGlance";
import { STATE_COLORS, STATE_SHAPES } from "@/lib/stateColors";
import { STATE_FACTS } from "@/lib/stateFactsData";

const checkStyle = {
  flexShrink:     0,
  display:        "flex",
  alignItems:     "center",
  justifyContent: "center",
  width:          "20px",
  height:         "20px",
  minWidth:       "20px",
  background:     "var(--retro-navy)",
  color:          "var(--retro-cream)",
  borderRadius:   "2px",
  fontSize:       "0.65rem",
  fontWeight:     "700",
  fontFamily:     "var(--font-oswald), Impact, sans-serif",
  marginTop:      "2px",
};

export function StatePageShell({
  abbr,
  stateName,
  introParagraph,
  whoIsProtectedIntro,
  whoIsProtected,
  keyRules,
  redFlags,
  agHref,
  agLabel,
  ctaHeading,
}) {
  const colors = STATE_COLORS[abbr] ?? { primary: "#002868", secondary: "#FFD700" };
  const shape  = STATE_SHAPES[abbr];
  const slug   = stateName.toLowerCase().replace(/\s+/g, "-");
  const facts  = STATE_FACTS[slug];

  return (
    <main style={{ background: "var(--retro-cream)", minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero header ── */}
      <div style={{
        background:   "var(--retro-navy)",
        borderBottom: `3px solid ${colors.secondary}`,
        padding:      "clamp(2rem, 5vw, 3.5rem) 1.5rem",
        textAlign:    "center",
      }}>
        <div style={{ width: "100px", height: "100px", margin: "0 auto 1rem" }}>
          <svg
            viewBox="0 0 100 100"
            style={{
              width:       "100%",
              height:      "100%",
              stroke:      colors.secondary,
              fill:        colors.secondary + "22",
              strokeWidth: "2",
            }}
            aria-hidden="true"
          >
            <path d={shape} />
          </svg>
        </div>

        <span style={{
          display:       "inline-block",
          background:    colors.secondary,
          color:         colors.primary,
          fontFamily:    "var(--font-oswald), Impact, sans-serif",
          fontWeight:    "700",
          fontSize:      "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding:       "0.2rem 0.75rem",
          borderRadius:  "2px",
          marginBottom:  "0.75rem",
        }}>
          {abbr}
        </span>

        <h1 style={{
          fontFamily:    "var(--font-oswald), Impact, sans-serif",
          fontSize:      "clamp(2rem, 5vw, 3.2rem)",
          fontWeight:    "700",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          color:         "var(--retro-cream)",
          margin:        "0 0 0.5rem",
        }}>
          {stateName} Tenant Rights
        </h1>

        <p style={{
          fontFamily: "Georgia, Cambria, serif",
          fontSize:   "1rem",
          color:      "var(--retro-cream)",
          opacity:    0.8,
          margin:     0,
        }}>
          Know your rights as a renter in {stateName}.
        </p>
      </div>

      <AtAGlance facts={facts} stateName={stateName} />

      {/* ── Content ── */}
      <div style={{
        maxWidth: "800px",
        margin:   "0 auto",
        padding:  "clamp(1.5rem, 4vw, 3rem) 1.5rem",
      }}>

        {/* Intro paragraph */}
        <p style={{
          fontFamily:   "Georgia, Cambria, serif",
          fontSize:     "1.05rem",
          lineHeight:   "1.75",
          color:        "var(--retro-ink)",
          marginBottom: "1.75rem",
        }}>
          {introParagraph}
        </p>

        {/* AG Disclaimer */}
        <div style={{
          background:   "var(--retro-cream)",
          border:       "2.5px solid var(--retro-red)",
          borderLeft:   "6px solid var(--retro-red)",
          borderRadius: "2px",
          padding:      "1rem 1.25rem",
          marginBottom: "2rem",
          display:      "flex",
          gap:          "0.75rem",
          alignItems:   "flex-start",
        }}>
          <span
            className="retro-stamp retro-stamp-red"
            style={{ flexShrink: 0, marginTop: "2px", fontSize: "0.65rem" }}
          >
            Legal Notice
          </span>
          <p style={{
            fontFamily: "Georgia, Cambria, serif",
            fontSize:   "0.85rem",
            lineHeight: "1.6",
            color:      "var(--retro-ink)",
            margin:     0,
          }}>
            This information is for educational purposes only and may not reflect recent
            changes in law. Always verify current rules with your state Attorney General
            or a licensed attorney.{" "}
            <a
              href={agHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--retro-red)", textDecoration: "underline" }}
            >
              {agLabel}
            </a>
          </p>
        </div>

        {/* Who Is Protected — navy */}
        <div style={{ marginBottom: "1.75rem" }}>
          <RetroCard accent="navy">
            <div style={{ padding: "1.5rem 2rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>
                Who Is Protected by {stateName} Law?
              </h2>
              {whoIsProtectedIntro && (
                <p style={{
                  fontFamily:   "Georgia, Cambria, serif",
                  fontSize:     "0.95rem",
                  lineHeight:   "1.7",
                  color:        "var(--retro-ink)",
                  marginBottom: "1rem",
                }}>
                  {whoIsProtectedIntro}
                </p>
              )}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {whoIsProtected.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <span style={checkStyle}>✓</span>
                    <span style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", lineHeight: "1.6", color: "var(--retro-ink)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RetroCard>
        </div>

        {/* Key Rights — gold */}
        <div style={{ marginBottom: "1.75rem" }}>
          <RetroCard accent="gold">
            <div style={{ padding: "1.5rem 2rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1.25rem" }}>
                Key {stateName} Tenant Rights
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {keyRules.map((r) => (
                  <div key={r.topic} style={{
                    border:       "1.5px solid var(--retro-navy)",
                    borderRadius: "2px",
                    padding:      "1rem 1.25rem",
                    background:   "rgba(253,246,227,0.7)",
                  }}>
                    <div style={{
                      display:      "flex",
                      flexWrap:     "wrap",
                      alignItems:   "center",
                      gap:          "0.6rem",
                      marginBottom: "0.5rem",
                    }}>
                      <h3 style={{
                        fontFamily:    "var(--font-oswald), Impact, sans-serif",
                        fontWeight:    "700",
                        fontSize:      "0.95rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        color:         "var(--retro-navy)",
                        margin:        0,
                      }}>
                        {r.topic}
                      </h3>
                      <span
                        className="retro-stamp"
                        style={{ fontSize: "0.68rem", fontFamily: "Georgia, serif", textTransform: "none", letterSpacing: 0 }}
                      >
                        {r.value}
                      </span>
                    </div>
                    <p style={{
                      fontFamily: "Georgia, serif",
                      fontSize:   "0.88rem",
                      lineHeight: "1.7",
                      color:      "var(--retro-ink)",
                      margin:     0,
                    }}>
                      {r.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </RetroCard>
        </div>

        {/* Red Flags — red */}
        <div style={{ marginBottom: "1.75rem" }}>
          <RetroCard accent="red">
            <div style={{ padding: "1.5rem 2rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>
                Red Flags in a {stateName} Lease
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {redFlags.map((flag) => (
                  <li key={flag} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{
                      flexShrink:   0,
                      background:   "var(--retro-red)",
                      color:        "var(--retro-cream)",
                      fontFamily:   "var(--font-oswald), Impact, sans-serif",
                      fontWeight:   "700",
                      fontSize:     "0.75rem",
                      padding:      "0.1rem 0.45rem",
                      borderRadius: "2px",
                      marginTop:    "2px",
                    }}>!</span>
                    <span style={{
                      fontFamily: "Georgia, serif",
                      fontSize:   "0.9rem",
                      lineHeight: "1.6",
                      color:      "var(--retro-ink)",
                    }}>
                      {flag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RetroCard>
        </div>

        {/* CTA */}
        <div style={{
          background:   "var(--retro-navy)",
          border:       "2.5px solid var(--retro-navy)",
          boxShadow:    "4px 4px 0px var(--retro-gold)",
          borderRadius: "2px",
          padding:      "2.5rem 2rem",
          textAlign:    "center",
          marginBottom: "2rem",
        }}>
          <h2 style={{
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "700",
            fontSize:      "clamp(1.3rem, 3vw, 1.8rem)",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color:         "var(--retro-cream)",
            margin:        "0 0 0.75rem",
          }}>
            {ctaHeading ?? `Have a clause in your ${stateName} lease?`}
          </h2>
          <p style={{
            fontFamily:   "Georgia, serif",
            color:        "var(--retro-cream)",
            opacity:      0.75,
            fontSize:     "1rem",
            lineHeight:   "1.6",
            maxWidth:     "500px",
            margin:       "0 auto 1.5rem",
          }}>
            Paste your lease clause into our free analyzer — get a plain-English explanation,
            a risk score, and a fairer rewrite in seconds.
          </p>
          <Link href="/" style={{
            display:       "inline-block",
            background:    "var(--retro-gold)",
            color:         "var(--retro-ink)",
            border:        "2.5px solid var(--retro-gold)",
            boxShadow:     "4px 4px 0px rgba(200,169,81,0.5)",
            padding:       "0.65rem 1.8rem",
            borderRadius:  "2px",
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "700",
            fontSize:      "1rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration:"none",
          }}>
            Analyze My Lease — Free
          </Link>
        </div>

      </div>

      {/* ── Footer ── */}
      <footer style={{
        background:  "var(--retro-cream)",
        borderTop:   "3px solid var(--retro-navy)",
        padding:     "2rem 1.5rem",
        fontFamily:  "Georgia, Cambria, serif",
        fontSize:    "0.85rem",
        color:       "var(--retro-ink)",
      }}>
        <div
          className="flex flex-col sm:flex-row items-center sm:justify-between gap-4"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <span style={{
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "700",
            fontSize:      "1.1rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color:         "var(--retro-navy)",
          }}>
            RenterClarify
          </span>
          <p style={{ textAlign: "center", color: "var(--retro-ink)", opacity: 0.65, maxWidth: "500px", margin: 0 }}>
            RenterClarify provides general educational information only — not legal advice.
            Laws vary by state and change frequently. Always consult a qualified attorney for
            guidance on your specific situation.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            <span>&copy; {new Date().getFullYear()} RenterClarify</span>
            <Link
              href="/privacy-policy"
              style={{ fontSize: "0.8rem", color: "var(--retro-navy)", opacity: 0.6, textDecoration: "underline" }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
