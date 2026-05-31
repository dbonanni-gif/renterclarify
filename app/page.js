import Link from "next/link";
import Navbar from "./components/Navbar";
import LeaseForm from "./components/LeaseForm";
import LeaseUpload from "./components/LeaseUpload";
import { RetroCard } from "./components/RetroCard";
import { HomeButtons } from "./components/HomeButtons";
import { BLOG_POSTS_META } from "./lib/blogPostsMeta";

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Paste a Clause",
    description:
      "Copy any paragraph from your lease — liability, pet policy, maintenance, early termination — and paste it in.",
  },
  {
    step: "2",
    title: "We Analyze It",
    description:
      "RenterClarify breaks down the legal language and flags anything that could be risky or unusual for you.",
  },
  {
    step: "3",
    title: "Understand & Decide",
    description:
      "Get a plain-English summary so you can negotiate, ask questions, or sign with confidence.",
  },
];

const FEATURES = [
  {
    accent: "gold",
    stampClass: "retro-stamp-gold",
    stampLabel: "Plain English",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Plain-English Summaries",
    description: "No law degree required. Every explanation is written so anyone can understand it.",
  },
  {
    accent: "red",
    stampClass: "retro-stamp-red",
    stampLabel: "Red Flags",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: "Red Flag Detection",
    description: "Automatically highlights clauses that are one-sided, unusual, or potentially harmful.",
  },
  {
    accent: "navy",
    stampClass: "",
    stampLabel: "Instant",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.628 5.373 12 12 12s12-5.372 12-12c0-2.09-.534-4.054-1.474-5.765L15 9.75" />
      </svg>
    ),
    title: "Instant Results",
    description: "No sign-up, no waiting. Paste your clause and get your explanation in seconds.",
  },
];

const stepNumStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  fontSize:      "2rem",
  lineHeight:    "1",
  color:         "var(--retro-navy)",
  background:    "var(--retro-gold)",
  width:         "60px",
  height:        "60px",
  display:       "flex",
  alignItems:    "center",
  justifyContent:"center",
  borderRadius:  "2px",
  border:        "2.5px solid var(--retro-navy)",
  boxShadow:     "3px 3px 0px var(--retro-navy)",
  flexShrink:    0,
};

const sectionHeadingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  margin:        0,
};

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--retro-cream)" }}>
      <Navbar />

      {/* ── Hero + Analyzer ── */}
      <section style={{
        background:   "var(--retro-cream)",
        borderBottom: "3px solid var(--retro-navy)",
        padding:      "clamp(3rem, 8vw, 5rem) 1.5rem 3rem",
      }}>

        {/* Headline block */}
        <div style={{ maxWidth: "720px", margin: "0 auto 3rem", textAlign: "center" }}>
          <span
            className="retro-stamp retro-stamp-gold"
            style={{ marginBottom: "1.25rem", display: "inline-block" }}
          >
            Free for Renters
          </span>

          <h1 style={{
            ...sectionHeadingStyle,
            fontSize:     "clamp(2.4rem, 6vw, 4rem)",
            color:        "var(--retro-navy)",
            lineHeight:   "1.1",
            marginBottom: "1rem",
          }}>
            Understand Your Lease<br />
            <span style={{ color: "var(--retro-red)" }}>in Plain English</span>
          </h1>

          <p style={{
            fontSize:     "clamp(1rem, 2.5vw, 1.2rem)",
            color:        "var(--retro-ink)",
            maxWidth:     "560px",
            margin:       "0 auto 2rem",
            lineHeight:   "1.6",
            fontFamily:   "Georgia, Cambria, serif",
          }}>
            Confused by legalese in your rental agreement? Analyze a single clause or upload
            your full lease PDF for a complete clause-by-clause breakdown.
          </p>

          <HomeButtons />

          <p style={{
            marginTop:     "1.25rem",
            fontSize:      "0.8rem",
            color:         "var(--retro-ink)",
            opacity:       0.6,
            fontFamily:    "Georgia, serif",
            letterSpacing: "0.03em",
          }}>
            Free · No account required · All 50 states covered
          </p>
        </div>

        {/* Analyzer tools */}
        <div id="analyzer-tools" style={{ maxWidth: "700px", margin: "0 auto" }}>

          {/* Step 1 */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="retro-stamp retro-stamp-gold">Step 1</span>
            <h2 style={{ ...sectionHeadingStyle, fontSize: "0.95rem", color: "var(--retro-navy)" }}>
              Analyze One Clause
            </h2>
            <span
              className="hidden sm:block"
              style={{ fontSize: "0.75rem", fontFamily: "Georgia, serif", color: "var(--retro-ink)", opacity: 0.55 }}
            >
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
            <span style={{
              fontFamily:    "var(--font-oswald), Impact, sans-serif",
              fontWeight:    "700",
              fontSize:      "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color:         "var(--retro-navy)",
              opacity:       0.5,
            }}>
              or
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--retro-navy)", opacity: 0.2 }} />
          </div>

          {/* Step 2 */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
            <span className="retro-stamp retro-stamp-red">Step 2</span>
            <h2 style={{ ...sectionHeadingStyle, fontSize: "0.95rem", color: "var(--retro-navy)" }}>
              Analyze Your Full Lease (PDF)
            </h2>
            <span
              className="hidden sm:block"
              style={{ fontSize: "0.75rem", fontFamily: "Georgia, serif", color: "var(--retro-ink)", opacity: 0.55 }}
            >
              Complete clause-by-clause breakdown
            </span>
          </div>
          <RetroCard accent="red">
            <div style={{ padding: "2rem" }}>
              <LeaseUpload />
            </div>
          </RetroCard>

        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{
        background: "var(--retro-navy)",
        padding:    "clamp(2.5rem, 6vw, 4rem) 1.5rem",
      }}>
        <h2 style={{
          ...sectionHeadingStyle,
          fontSize:     "clamp(1.5rem, 3vw, 2.2rem)",
          color:        "var(--retro-cream)",
          textAlign:    "center",
          marginBottom: "0.75rem",
        }}>
          Built for Renters, Not Lawyers
        </h2>
        <p style={{
          fontFamily:   "Georgia, Cambria, serif",
          color:        "var(--retro-cream)",
          opacity:      0.7,
          textAlign:    "center",
          marginBottom: "2rem",
          fontSize:     "1rem",
        }}>
          Every feature is designed to give you the confidence to sign — or push back.
        </p>

        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap:                 "1.5rem",
          maxWidth:            "1000px",
          margin:              "0 auto",
        }}>
          {FEATURES.map((f) => (
            <RetroCard key={f.title} accent={f.accent}>
              <div style={{ padding: "1.5rem" }}>
                <span
                  className={`retro-stamp ${f.stampClass}`}
                  style={{ marginBottom: "0.75rem", display: "inline-block" }}
                >
                  {f.stampLabel}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    width:          "38px",
                    height:         "38px",
                    background:     "var(--retro-navy)",
                    color:          "var(--retro-cream)",
                    borderRadius:   "2px",
                    flexShrink:     0,
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{ ...sectionHeadingStyle, fontSize: "1rem", color: "var(--retro-navy)", letterSpacing: "0.05em" }}>
                    {f.title}
                  </h3>
                </div>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: "1.6", color: "var(--retro-ink)", margin: 0 }}>
                  {f.description}
                </p>
              </div>
            </RetroCard>
          ))}
        </div>
      </section>

      {/* ── Latest from the blog ── */}
      <section id="blog" style={{
        background: "var(--retro-cream)",
        padding:    "clamp(2.5rem, 6vw, 4rem) 1.5rem",
      }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{
            ...sectionHeadingStyle,
            fontSize:     "clamp(1.5rem, 3vw, 2.2rem)",
            color:        "var(--retro-navy)",
            marginBottom: "0.75rem",
          }}>
            Latest From the Blog
          </h2>
          <p style={{
            fontFamily:   "Georgia, Cambria, serif",
            color:        "var(--retro-ink)",
            opacity:      0.7,
            marginBottom: "2rem",
            fontSize:     "1rem",
          }}>
            Read practical renter rights guidance and housing tips written in plain English.
          </p>

          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap:                 "1.5rem",
          }}>
            {BLOG_POSTS_META.slice(0, 1).map((post) => (
              <article key={post.slug} style={{
                background: "white",
                border:     "3px solid var(--retro-navy)",
                borderRadius: "4px",
                padding:    "1.8rem",
                textAlign:  "left",
                boxShadow:  "var(--retro-shadow)",
              }}>
                <p style={{
                  margin:       0,
                  color:        "var(--retro-red)",
                  fontFamily:   "var(--font-oswald), Impact, sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontSize:      "0.8rem",
                }}>
                  {post.category}
                </p>
                <h3 style={{
                  margin: "0.75rem 0 1rem",
                  color: "var(--retro-navy)",
                  fontSize: "1.5rem",
                  lineHeight: "1.2",
                }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                    {post.title}
                  </Link>
                </h3>
                <p style={{
                  margin: "0 0 1.25rem",
                  color: "var(--retro-ink)",
                  lineHeight: "1.75",
                  fontFamily: "Georgia, serif",
                }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ color: "var(--retro-ink)", opacity: 0.7, fontSize: "0.9rem" }}>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display:       "inline-block",
                      background:    "var(--retro-navy)",
                      color:         "var(--retro-cream)",
                      padding:       "0.7rem 1.2rem",
                      borderRadius:  "2px",
                      textDecoration:"none",
                      fontFamily:    "var(--font-oswald), Impact, sans-serif",
                      fontWeight:    "700",
                      fontSize:      "0.9rem",
                    }}
                  >
                    Read the post
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "2rem" }}>
            <Link
              href="/blog"
              style={{
                display:       "inline-block",
                color:         "var(--retro-navy)",
                textDecoration:"underline",
                fontWeight:    "700",
              }}
            >
              View all blog posts
            </Link>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" style={{
        background:   "var(--retro-cream)",
        borderTop:    "3px solid var(--retro-navy)",
        borderBottom: "3px solid var(--retro-navy)",
        padding:      "clamp(2.5rem, 6vw, 4rem) 1.5rem",
      }}>
        <h2 style={{
          ...sectionHeadingStyle,
          fontSize:     "clamp(1.5rem, 3vw, 2.2rem)",
          color:        "var(--retro-navy)",
          textAlign:    "center",
          marginBottom: "0.75rem",
        }}>
          How it Works
        </h2>
        <p style={{
          fontFamily:   "Georgia, Cambria, serif",
          color:        "var(--retro-ink)",
          opacity:      0.7,
          textAlign:    "center",
          marginBottom: "2.5rem",
          fontSize:     "1rem",
        }}>
          Three steps from legalese to clarity.
        </p>

        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap:                 "2rem",
          maxWidth:            "900px",
          margin:              "0 auto",
        }}>
          {HOW_IT_WORKS.map((item) => (
            <div key={item.step} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1rem" }}>
              <div style={stepNumStyle}>{item.step}</div>
              <h3 style={{ ...sectionHeadingStyle, fontSize: "1.05rem", color: "var(--retro-navy)", letterSpacing: "0.06em" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.95rem", lineHeight: "1.6", color: "var(--retro-ink)", margin: 0 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: "var(--retro-navy)",
        padding:    "clamp(2.5rem, 6vw, 4rem) 1.5rem",
        textAlign:  "center",
      }}>
        <h2 style={{
          ...sectionHeadingStyle,
          fontSize:     "clamp(1.5rem, 3vw, 2.5rem)",
          color:        "var(--retro-cream)",
          marginBottom: "1rem",
        }}>
          Ready to Decode Your Lease?
        </h2>
        <p style={{
          fontFamily:   "Georgia, serif",
          color:        "var(--retro-cream)",
          opacity:      0.75,
          marginBottom: "2rem",
          fontSize:     "1.05rem",
        }}>
          Join thousands of renters who signed with confidence.
        </p>
        <a
          href="#analyzer-tools"
          style={{
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
          }}
        >
          Try It Free — No Sign-Up Needed
        </a>
      </section>

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
    </div>
  );
}
