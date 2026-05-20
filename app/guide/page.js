"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";
import { clauses } from "../data/clauses";
import posthog from "posthog-js";

const RISK_CONFIG = {
  low:    { accent: "green", stampClass: "retro-stamp",      label: "Low Risk" },
  medium: { accent: "gold",  stampClass: "retro-stamp-gold", label: "Moderate Risk" },
  high:   { accent: "red",   stampClass: "retro-stamp-red",  label: "High Risk" },
};

const ACCENT_COLORS = {
  navy:  "var(--retro-navy)",
  gold:  "var(--retro-gold)",
  red:   "var(--retro-red)",
  green: "var(--retro-green)",
};

const CATEGORIES = ["All", ...Array.from(new Set(clauses.map((c) => c.category))).sort()];

function RiskBadge({ level }) {
  const cfg = RISK_CONFIG[level] ?? RISK_CONFIG.medium;
  return (
    <span
      className={`retro-stamp ${cfg.stampClass}`}
      style={{ fontSize: "0.62rem", padding: "0.12rem 0.45rem", letterSpacing: "0.08em" }}
    >
      {cfg.label}
    </span>
  );
}

function ClauseCard({ clause }) {
  const [open, setOpen] = useState(false);
  const cfg = RISK_CONFIG[clause.riskLevel] ?? RISK_CONFIG.medium;
  const accentColor = ACCENT_COLORS[cfg.accent] ?? ACCENT_COLORS.navy;

  function handleToggle() {
    const next = !open;
    setOpen(next);
    if (next) {
      posthog.capture("guide_clause_expanded", {
        clause_name:     clause.name,
        clause_category: clause.category,
        risk_level:      clause.riskLevel,
      });
    }
  }

  return (
    <div
      style={{
        background:   "var(--retro-cream)",
        border:       "2px solid var(--retro-navy)",
        borderTop:    `6px solid ${accentColor}`,
        borderRadius: "2px",
        overflow:     "hidden",
      }}
    >
      <button
        type="button"
        onClick={handleToggle}
        style={{
          width:          "100%",
          display:        "flex",
          alignItems:     "flex-start",
          justifyContent: "space-between",
          gap:            "0.75rem",
          padding:        "1.1rem 1.25rem",
          textAlign:      "left",
          background:     "none",
          border:         "none",
          cursor:         "pointer",
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
            <h3
              style={{
                fontFamily:    "var(--font-oswald), Impact, sans-serif",
                fontSize:      "0.95rem",
                fontWeight:    "700",
                textTransform: "uppercase",
                letterSpacing: "0.03em",
                color:         "var(--retro-navy)",
                margin:        0,
              }}
            >
              {clause.name}
            </h3>
            <RiskBadge level={clause.riskLevel} />
          </div>
          <p
            style={{
              fontFamily:          "Georgia, Cambria, serif",
              fontSize:            "0.84rem",
              color:               "var(--retro-ink)",
              opacity:             0.75,
              lineHeight:          "1.55",
              margin:              0,
              display:             "-webkit-box",
              WebkitLineClamp:     2,
              WebkitBoxOrient:     "vertical",
              overflow:            "hidden",
            }}
          >
            {clause.summary}
          </p>
        </div>
        <svg
          style={{
            flexShrink: 0,
            width:      "1rem",
            height:     "1rem",
            color:      "var(--retro-navy)",
            marginTop:  "0.3rem",
            transform:  open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            borderTop:     "1.5px solid var(--retro-navy)",
            padding:       "1rem 1.25rem 1.25rem",
            display:       "flex",
            flexDirection: "column",
            gap:           "1rem",
            background:    "rgba(0,0,0,0.025)",
          }}
        >
          <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "0.88rem", color: "var(--retro-ink)", lineHeight: "1.7", margin: 0 }}>
            {clause.summary}
          </p>

          {clause.commonRedFlags?.length > 0 && (
            <div>
              <h4
                style={{
                  fontFamily:    "var(--font-oswald), Impact, sans-serif",
                  fontSize:      "0.68rem",
                  fontWeight:    "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color:         "var(--retro-red)",
                  marginBottom:  "0.5rem",
                }}
              >
                Common Red Flags
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.45rem" }}>
                {clause.commonRedFlags.map((flag, i) => (
                  <li
                    key={i}
                    style={{
                      display:    "flex",
                      alignItems: "flex-start",
                      gap:        "0.5rem",
                      fontSize:   "0.84rem",
                      fontFamily: "Georgia, serif",
                      color:      "var(--retro-ink)",
                      lineHeight: "1.55",
                    }}
                  >
                    <span
                      className="retro-stamp retro-stamp-red"
                      style={{ fontSize: "0.6rem", padding: "0.08rem 0.32rem", marginTop: "0.15rem", flexShrink: 0 }}
                    >
                      !
                    </span>
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {clause.whatToLookFor && (
            <div>
              <h4
                style={{
                  fontFamily:    "var(--font-oswald), Impact, sans-serif",
                  fontSize:      "0.68rem",
                  fontWeight:    "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color:         "var(--retro-navy)",
                  marginBottom:  "0.4rem",
                }}
              >
                What to Look For
              </h4>
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "var(--retro-ink)", lineHeight: "1.7", margin: 0 }}>
                {clause.whatToLookFor}
              </p>
            </div>
          )}

          <div style={{ paddingTop: "0.25rem" }}>
            <Link
              href={`/?clause=${encodeURIComponent(clause.name)}`}
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "0.35rem",
                fontFamily:     "var(--font-oswald), Impact, sans-serif",
                fontSize:       "0.72rem",
                fontWeight:     "700",
                textTransform:  "uppercase",
                letterSpacing:  "0.07em",
                color:          "var(--retro-gold)",
                textDecoration: "none",
              }}
            >
              <svg style={{ width: "0.8rem", height: "0.8rem" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Analyze a real clause like this
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GuidePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return clauses.filter((c) => {
      const matchCat = activeCategory === "All" || c.category === activeCategory;
      const matchQ   = !q || c.name.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  const countsByCategory = useMemo(() => {
    const map = {};
    clauses.forEach((c) => { map[c.category] = (map[c.category] ?? 0) + 1; });
    return map;
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--retro-cream)", color: "var(--retro-ink)" }}>
      <Navbar />

      {/* Hero */}
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
          Renter Reference
        </span>
        <h1
          style={{
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontSize:      "clamp(2rem, 5vw, 3.2rem)",
            fontWeight:    "700",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color:         "var(--retro-cream)",
            marginBottom:  "0.5rem",
          }}
        >
          Lease Clause Guide
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
          Browse {clauses.length} common lease clauses across {CATEGORIES.length - 1} categories. Learn what each clause means, what red flags to watch for, and what a fair version looks like.
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)", minHeight: "60vh" }}>
        <div
          style={{
            maxWidth: "900px",
            margin:   "0 auto",
            padding:  "clamp(1.5rem, 4vw, 3rem) 1.5rem",
          }}
        >
          {/* Search + filters */}
          <RetroCard accent="navy" className="mb-8">
            {/* Search input */}
            <div style={{ position: "relative", marginBottom: "1.25rem" }}>
              <svg
                style={{
                  position:  "absolute",
                  left:      "0.9rem",
                  top:       "50%",
                  transform: "translateY(-50%)",
                  width:     "1rem",
                  height:    "1rem",
                  color:     "var(--retro-navy)",
                  opacity:   0.5,
                  pointerEvents: "none",
                }}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="search"
                placeholder="Search clauses…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width:         "100%",
                  boxSizing:     "border-box",
                  border:        "2px solid var(--retro-navy)",
                  borderRadius:  "2px",
                  background:    "var(--retro-cream)",
                  padding:       "0.65rem 1rem 0.65rem 2.5rem",
                  fontFamily:    "Georgia, Cambria, serif",
                  fontSize:      "0.9rem",
                  color:         "var(--retro-ink)",
                  outline:       "none",
                }}
              />
            </div>

            {/* Category tabs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {CATEGORIES.map((cat) => {
                const count  = cat === "All" ? clauses.length : (countsByCategory[cat] ?? 0);
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat);
                      if (cat !== "All") {
                        posthog.capture("guide_category_filtered", { category: cat });
                      }
                    }}
                    style={{
                      display:       "inline-flex",
                      alignItems:    "center",
                      gap:           "0.35rem",
                      padding:       "0.3rem 0.75rem",
                      fontFamily:    "var(--font-oswald), Impact, sans-serif",
                      fontSize:      "0.75rem",
                      fontWeight:    "700",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      background:    active ? "var(--retro-navy)" : "var(--retro-cream)",
                      color:         active ? "var(--retro-cream)" : "var(--retro-navy)",
                      border:        `2px solid var(--retro-navy)`,
                      borderRadius:  "2px",
                      cursor:        "pointer",
                      transition:    "background 0.15s ease, color 0.15s ease",
                    }}
                  >
                    {cat}
                    <span
                      style={{
                        background:    active ? "var(--retro-gold)" : "var(--retro-navy)",
                        color:         active ? "var(--retro-ink)" : "var(--retro-cream)",
                        borderRadius:  "2px",
                        padding:       "0.05rem 0.35rem",
                        fontSize:      "0.65rem",
                        fontWeight:    "700",
                      }}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </RetroCard>

          {/* Results count — pull quote style */}
          <div
            style={{
              borderLeft:   "6px solid var(--retro-gold)",
              background:   "var(--retro-cream)",
              padding:      "0.6rem 1rem",
              marginBottom: "1.25rem",
              borderRadius: "2px",
            }}
          >
            <p
              style={{
                fontFamily: "Georgia, Cambria, serif",
                fontSize:   "0.88rem",
                fontStyle:  "italic",
                color:      "var(--retro-ink)",
                opacity:    0.7,
                margin:     0,
              }}
            >
              {filtered.length} clause{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
              {query ? ` matching "${query}"` : ""}
            </p>
          </div>

          {/* Clause grid */}
          {filtered.length === 0 ? (
            <RetroCard accent="gold">
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <p
                  style={{
                    fontFamily:    "var(--font-oswald), Impact, sans-serif",
                    fontSize:      "1.1rem",
                    fontWeight:    "700",
                    textTransform: "uppercase",
                    color:         "var(--retro-navy)",
                    marginBottom:  "0.4rem",
                  }}
                >
                  No Clauses Found
                </p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: "0.88rem", color: "var(--retro-ink)", opacity: 0.65, margin: 0 }}>
                  Try a different search term or category filter.
                </p>
              </div>
            </RetroCard>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1rem" }}>
              {filtered.map((clause) => (
                <ClauseCard key={clause.slug} clause={clause} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Bottom CTA */}
      <div
        style={{
          background:  "var(--retro-navy)",
          borderTop:   "3px solid var(--retro-gold)",
          padding:     "2.5rem 1.5rem",
          textAlign:   "center",
          marginTop:   "3rem",
        }}
      >
        <h3
          style={{
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "700",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color:         "var(--retro-cream)",
            marginBottom:  "0.75rem",
          }}
        >
          Check Your Own Lease
        </h3>
        <p
          style={{
            fontFamily:   "Georgia, serif",
            color:        "var(--retro-cream)",
            opacity:      0.8,
            marginBottom: "1.25rem",
            fontSize:     "0.95rem",
          }}
        >
          Upload your lease and get a clause-by-clause risk analysis in seconds.
        </p>
        <Link
          href="/analyze"
          style={{
            display:        "inline-block",
            background:     "var(--retro-gold)",
            color:          "var(--retro-ink)",
            fontFamily:     "var(--font-oswald), Impact, sans-serif",
            fontWeight:     "700",
            fontSize:       "0.95rem",
            letterSpacing:  "0.08em",
            textTransform:  "uppercase",
            padding:        "0.6rem 1.4rem",
            borderRadius:   "2px",
            textDecoration: "none",
            boxShadow:      "4px 4px 0px rgba(255,255,255,0.15)",
          }}
        >
          Analyze My Lease
        </Link>
      </div>

      {/* Footer */}
      <footer
        style={{
          background:  "var(--retro-cream)",
          borderTop:   "3px solid var(--retro-navy)",
          padding:     "2rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth:       "900px",
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
              fontFamily:    "var(--font-oswald), Impact, sans-serif",
              fontSize:      "1.2rem",
              fontWeight:    "700",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color:         "var(--retro-navy)",
              textDecoration:"none",
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
