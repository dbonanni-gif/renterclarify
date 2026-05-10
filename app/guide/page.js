"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { clauses } from "../data/clauses";

const RISK_CONFIG = {
  low:    { badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500", label: "Low Risk" },
  medium: { badge: "bg-amber-100 text-amber-700",     dot: "bg-amber-500",   label: "Moderate Risk" },
  high:   { badge: "bg-red-100 text-red-700",         dot: "bg-red-500",     label: "High Risk" },
};

const CATEGORIES = ["All", ...Array.from(new Set(clauses.map((c) => c.category))).sort()];

function RiskBadge({ level }) {
  const cfg = RISK_CONFIG[level] ?? RISK_CONFIG.medium;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${cfg.badge}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {cfg.label}
    </span>
  );
}

function ClauseCard({ clause }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-indigo-200 hover:shadow-md transition overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
      >
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-slate-800 text-base leading-snug">{clause.name}</h3>
            <RiskBadge level={clause.riskLevel} />
          </div>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{clause.summary}</p>
        </div>
        <svg
          className={`flex-shrink-0 h-5 w-5 text-slate-400 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="border-t border-slate-100 px-5 pb-5 pt-4 flex flex-col gap-4">
          <p className="text-sm text-slate-700 leading-relaxed">{clause.summary}</p>

          {clause.commonRedFlags?.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Common Red Flags</h4>
              <ul className="flex flex-col gap-1.5">
                {clause.commonRedFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">!</span>
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {clause.whatToLookFor && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What to Look For</h4>
              <p className="text-sm text-slate-700 leading-relaxed">{clause.whatToLookFor}</p>
            </div>
          )}

          <div className="pt-1">
            <Link
              href={`/?clause=${encodeURIComponent(clause.name)}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
      const matchQ = !q || c.name.toLowerCase().includes(q) || c.summary.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [activeCategory, query]);

  const countsByCategory = useMemo(() => {
    const map = {};
    clauses.forEach((c) => { map[c.category] = (map[c.category] ?? 0) + 1; });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-indigo-600">
            Renter<span className="text-slate-800">Clarify</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-800 transition-colors">Analyzer</Link>
            <Link href="/guide" className="text-slate-800 font-semibold">Clause Guide</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Renter Reference
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Lease Clause Guide
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Browse {clauses.length} common lease clauses across {CATEGORIES.length - 1} categories. Learn what each clause means, what red flags to watch for, and what a fair version looks like.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-20">
        {/* Search */}
        <div className="relative mb-6">
          <svg className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="search"
            placeholder="Search clauses…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
          />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => {
            const count = cat === "All" ? clauses.length : (countsByCategory[cat] ?? 0);
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700"
                }`}
              >
                {cat}
                <span className={`rounded-full px-1.5 py-0.5 text-xs font-bold ${active ? "bg-indigo-500 text-white" : "bg-slate-200 text-slate-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-400 mb-4">
          {filtered.length} clause{filtered.length !== 1 ? "s" : ""}
          {activeCategory !== "All" ? ` in ${activeCategory}` : ""}
          {query ? ` matching "${query}"` : ""}
        </p>

        {/* Clause grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <svg className="mx-auto h-12 w-12 mb-4 opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <p className="font-medium">No clauses found</p>
            <p className="text-sm mt-1">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((clause) => (
              <ClauseCard key={clause.slug} clause={clause} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-bold text-white">
            Renter<span className="text-indigo-400">Clarify</span>
          </Link>
          <p className="text-center text-slate-500">
            RenterClarify provides educational explanations only — not legal advice.
          </p>
          <span>&copy; {new Date().getFullYear()} RenterClarify</span>
        </div>
      </footer>
    </div>
  );
}
