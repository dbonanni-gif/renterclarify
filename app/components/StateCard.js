"use client";

import Link from "next/link";
import { useState } from "react";

export function StateCard({ state, colors, shape }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/${state.route}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        textDecoration: "none",
        background: "var(--retro-cream)",
        border: "2.5px solid var(--retro-navy)",
        borderTop: `6px solid ${colors.primary}`,
        boxShadow: hovered
          ? "6px 6px 0px var(--retro-navy)"
          : "4px 4px 0px var(--retro-navy)",
        borderRadius: "2px",
        transform: hovered ? "translate(-2px, -2px)" : "translate(0, 0)",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        overflow: "hidden",
      }}
    >
      <div style={{
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        height:         "80px",
        background:     `${colors.primary}11`,
        padding:        "0.5rem",
      }}>
        <svg
          viewBox="0 0 100 100"
          style={{
            width:       "64px",
            height:      "64px",
            stroke:      colors.primary,
            fill:        colors.secondary,
            strokeWidth: "2",
          }}
          aria-hidden="true"
        >
          <path d={shape} />
        </svg>
      </div>

      <div style={{ padding: "0.75rem 1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
          <span style={{
            background:    colors.primary,
            border:        `1.5px solid ${colors.secondary}`,
            color:         "var(--retro-cream)",
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "700",
            fontSize:      "0.7rem",
            letterSpacing: "0.06em",
            padding:       "0.15rem 0.4rem",
            borderRadius:  "2px",
            flexShrink:    0,
          }}>
            {state.abbr}
          </span>
          <span style={{
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "600",
            fontSize:      "0.85rem",
            letterSpacing: "0.03em",
            color:         "var(--retro-navy)",
            lineHeight:    "1.2",
          }}>
            {state.name}
          </span>
        </div>
        <p style={{
          fontFamily:    "var(--font-oswald), Impact, sans-serif",
          fontWeight:    "700",
          fontSize:      "0.75rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color:         "var(--retro-navy)",
          margin:        0,
        }}>
          View Guide →
        </p>
      </div>
    </Link>
  );
}
