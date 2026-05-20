import Link from "next/link";
import Navbar from "../components/Navbar";
import { StateCard } from "../components/StateCard";
import { STATE_COLORS, STATE_SHAPES } from "@/lib/stateColors";

const STATES = [
  { name: "Alabama", abbr: "AL", route: "alabama-tenant-rights" },
  { name: "Alaska", abbr: "AK", route: "alaska-tenant-rights" },
  { name: "Arizona", abbr: "AZ", route: "arizona-tenant-rights" },
  { name: "Arkansas", abbr: "AR", route: "arkansas-tenant-rights" },
  { name: "California", abbr: "CA", route: "california-tenant-rights" },
  { name: "Colorado", abbr: "CO", route: "colorado-tenant-rights" },
  { name: "Connecticut", abbr: "CT", route: "connecticut-tenant-rights" },
  { name: "Delaware", abbr: "DE", route: "delaware-tenant-rights" },
  { name: "Florida", abbr: "FL", route: "florida-tenant-rights" },
  { name: "Georgia", abbr: "GA", route: "georgia-tenant-rights" },
  { name: "Hawaii", abbr: "HI", route: "hawaii-tenant-rights" },
  { name: "Idaho", abbr: "ID", route: "idaho-tenant-rights" },
  { name: "Illinois", abbr: "IL", route: "illinois-tenant-rights" },
  { name: "Indiana", abbr: "IN", route: "indiana-tenant-rights" },
  { name: "Iowa", abbr: "IA", route: "iowa-tenant-rights" },
  { name: "Kansas", abbr: "KS", route: "kansas-tenant-rights" },
  { name: "Kentucky", abbr: "KY", route: "kentucky-tenant-rights" },
  { name: "Louisiana", abbr: "LA", route: "louisiana-tenant-rights" },
  { name: "Maine", abbr: "ME", route: "maine-tenant-rights" },
  { name: "Maryland", abbr: "MD", route: "maryland-tenant-rights" },
  { name: "Massachusetts", abbr: "MA", route: "massachusetts-tenant-rights" },
  { name: "Michigan", abbr: "MI", route: "michigan-tenant-rights" },
  { name: "Minnesota", abbr: "MN", route: "minnesota-tenant-rights" },
  { name: "Mississippi", abbr: "MS", route: "mississippi-tenant-rights" },
  { name: "Missouri", abbr: "MO", route: "missouri-tenant-rights" },
  { name: "Montana", abbr: "MT", route: "montana-tenant-rights" },
  { name: "Nebraska", abbr: "NE", route: "nebraska-tenant-rights" },
  { name: "Nevada", abbr: "NV", route: "nevada-tenant-rights" },
  { name: "New Hampshire", abbr: "NH", route: "new-hampshire-tenant-rights" },
  { name: "New Jersey", abbr: "NJ", route: "new-jersey-tenant-rights" },
  { name: "New Mexico", abbr: "NM", route: "new-mexico-tenant-rights" },
  { name: "New York", abbr: "NY", route: "new-york-tenant-rights" },
  { name: "North Carolina", abbr: "NC", route: "north-carolina-tenant-rights" },
  { name: "North Dakota", abbr: "ND", route: "north-dakota-tenant-rights" },
  { name: "Ohio", abbr: "OH", route: "ohio-tenant-rights" },
  { name: "Oklahoma", abbr: "OK", route: "oklahoma-tenant-rights" },
  { name: "Oregon", abbr: "OR", route: "oregon-tenant-rights" },
  { name: "Pennsylvania", abbr: "PA", route: "pennsylvania-tenant-rights" },
  { name: "Rhode Island", abbr: "RI", route: "rhode-island-tenant-rights" },
  { name: "South Carolina", abbr: "SC", route: "south-carolina-tenant-rights" },
  { name: "South Dakota", abbr: "SD", route: "south-dakota-tenant-rights" },
  { name: "Tennessee", abbr: "TN", route: "tennessee-tenant-rights" },
  { name: "Texas", abbr: "TX", route: "texas-tenant-rights" },
  { name: "Utah", abbr: "UT", route: "utah-tenant-rights" },
  { name: "Vermont", abbr: "VT", route: "vermont-tenant-rights" },
  { name: "Virginia", abbr: "VA", route: "virginia-tenant-rights" },
  { name: "Washington", abbr: "WA", route: "washington-tenant-rights" },
  { name: "West Virginia", abbr: "WV", route: "west-virginia-tenant-rights" },
  { name: "Wisconsin", abbr: "WI", route: "wisconsin-tenant-rights" },
  { name: "Wyoming", abbr: "WY", route: "wyoming-tenant-rights" },
];

export default function StatesPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--retro-cream)" }}>
      <Navbar />

      {/* ── Header ── */}
      <section style={{
        background:    "var(--retro-navy)",
        borderBottom:  "3px solid var(--retro-gold)",
        padding:       "clamp(2.5rem, 6vw, 4rem) 1.5rem 3rem",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <span
            className="retro-stamp retro-stamp-gold"
            style={{ marginBottom: "1.25rem", display: "inline-block" }}
          >
            All 50 States
          </span>
          <h1 style={{
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "700",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            fontSize:      "clamp(2rem, 5vw, 3rem)",
            color:         "var(--retro-cream)",
            lineHeight:    "1.1",
            marginBottom:  "1rem",
            margin:        "0 0 1rem",
          }}>
            Tenant Rights by State
          </h1>
          <p style={{
            fontFamily: "Georgia, Cambria, serif",
            fontSize:   "clamp(1rem, 2vw, 1.1rem)",
            color:      "var(--retro-cream)",
            opacity:    0.8,
            maxWidth:   "640px",
            lineHeight: "1.6",
            margin:     0,
          }}>
            Landlord-tenant law varies significantly from state to state. Select your state
            below to find a complete guide to your rights as a renter.
          </p>
        </div>
      </section>

      {/* ── State grid ── */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap:                 "1.25rem",
        }}>
          {STATES.map((state) => (
            <StateCard
              key={state.abbr}
              state={state}
              colors={STATE_COLORS[state.abbr]}
              shape={STATE_SHAPES[state.abbr]}
            />
          ))}
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
    </div>
  );
}
