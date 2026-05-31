"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RESOURCES = [
  { href: "/states", label: "Tenant Rights by State" },
  { href: "/security-deposit-laws", label: "Security Deposit Laws" },
  { href: "/landlord-entry-rights", label: "Landlord Entry Rights" },
  { href: "/breaking-a-lease", label: "Breaking a Lease" },
  { href: "/late-fees-lease", label: "Late Rent Fees" },
  { href: "/pet-deposit-laws", label: "Pet Deposit Laws" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleOutsideClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const isResource = RESOURCES.some((r) => r.href === pathname);

  return (
    <header style={{
      background:   "var(--retro-cream)",
      borderBottom: "3px solid var(--retro-navy)",
      position:     "sticky",
      top:          0,
      zIndex:       50,
    }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" style={{
          fontFamily:    "var(--font-oswald), Impact, sans-serif",
          fontWeight:    "700",
          fontSize:      "1.4rem",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color:         "var(--retro-navy)",
          textDecoration:"none",
        }}>
          RenterClarify
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6">
          <Link href="/" className={`retro-nav-link${pathname === "/" ? " retro-nav-link--active" : ""}`}>
            Analyzer
          </Link>
          <Link href="/guide" className={`retro-nav-link${pathname === "/guide" ? " retro-nav-link--active" : ""}`}>
            Clause Guide
          </Link>
          <Link href="/about" className={`retro-nav-link${pathname === "/about" ? " retro-nav-link--active" : ""}`}>
            About
          </Link>
          <Link href="/contact" className={`retro-nav-link${pathname === "/contact" ? " retro-nav-link--active" : ""}`}>
            Contact
          </Link>

          {/* Resources dropdown */}
          <div className="relative" ref={dropdownRef} style={{ display: "flex", alignItems: "center" }}>
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              className={`retro-nav-link${isResource ? " retro-nav-link--active" : ""}`}
              style={{ background: "none", borderTop: "none", borderLeft: "none", borderRight: "none", cursor: "pointer", padding: "0 0 2px", display: "flex", alignItems: "center", gap: "0.2rem" }}
            >
              Resources
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {resourcesOpen && (
              <div style={{
                position:  "absolute",
                right:     0,
                top:       "calc(100% + 8px)",
                width:     "220px",
                background:"var(--retro-cream)",
                border:    "2.5px solid var(--retro-navy)",
                boxShadow: "var(--retro-shadow)",
                zIndex:    50,
                borderRadius: "2px",
              }}>
                {RESOURCES.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="retro-dropdown-link"
                    style={pathname === r.href ? { color: "var(--retro-red)" } : {}}
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
          className="sm:hidden"
          style={{
            background:     "none",
            border:         "2px solid var(--retro-navy)",
            color:          "var(--retro-navy)",
            padding:        "5px",
            cursor:         "pointer",
            borderRadius:   "2px",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "center",
          }}
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="sm:hidden"
          style={{
            background:    "var(--retro-cream)",
            borderTop:     "2.5px solid var(--retro-navy)",
            padding:       "1rem 1.5rem",
            display:       "flex",
            flexDirection: "column",
            gap:           "0.2rem",
          }}
        >
          <Link href="/" className={`retro-mobile-link${pathname === "/" ? " retro-nav-link--active" : ""}`}>Analyzer</Link>
          <Link href="/guide" className={`retro-mobile-link${pathname === "/guide" ? " retro-nav-link--active" : ""}`}>Clause Guide</Link>
          <Link href="/about" className={`retro-mobile-link${pathname === "/about" ? " retro-nav-link--active" : ""}`}>About</Link>
          <Link href="/contact" className={`retro-mobile-link${pathname === "/contact" ? " retro-nav-link--active" : ""}`}>Contact</Link>
          <Link href="/blog" className={`retro-mobile-link${pathname === "/blog" ? " retro-nav-link--active" : ""}`}>Blog</Link>

          <p style={{
            marginTop:     "0.75rem",
            marginBottom:  "0.25rem",
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontWeight:    "700",
            fontSize:      "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color:         "var(--retro-navy)",
            opacity:       0.5,
          }}>
            Resources
          </p>
          {RESOURCES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className={`retro-mobile-link${pathname === r.href ? " retro-nav-link--active" : ""}`}
            >
              {r.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
