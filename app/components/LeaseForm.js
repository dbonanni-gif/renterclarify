"use client";

import { useState, useRef, useEffect } from "react";

const MAX_CHARS = 6000;
const WARN_THRESHOLD = 200;

const SAMPLE_CLAUSES = [
  {
    label: "Security Deposit Example",
    text: `Tenant agrees to deposit with Landlord the sum equal to two (2) months' rent as a security deposit prior to taking possession of the premises. Said deposit shall be held by Landlord, without interest, as security for the faithful performance by Tenant of all terms, covenants, and conditions of this Lease. Landlord may apply the whole or any part of the security deposit to remedy any default by Tenant, and Tenant shall not be entitled to any accounting of such application. Landlord shall not be required to keep the security deposit separate from its general funds. In the event of any deductions, Landlord shall have thirty (30) days after Tenant vacates to return the remaining deposit.`,
  },
  {
    label: "Pet Policy Example",
    text: `No animals, birds, reptiles, or pets of any kind shall be permitted on the premises at any time without the prior written consent of Landlord, which consent may be withheld in Landlord's sole and absolute discretion. If Landlord consents to a pet, Tenant shall pay a non-refundable pet fee of $500.00 per pet and an additional monthly pet rent of $100.00 per pet. Tenant shall be solely responsible for any and all damages caused by any pet. Landlord reserves the right to revoke permission for any pet at any time upon 24 hours' written notice, for any reason or no reason.`,
  },
  {
    label: "Early Termination Example",
    text: `Should Tenant desire to terminate this Lease prior to the expiration of the Lease Term, Tenant shall provide Landlord with at least sixty (60) days' prior written notice and shall forfeit the entire security deposit. In addition, Tenant shall pay to Landlord, as liquidated damages, an amount equal to three (3) months' rent. Tenant shall continue to be responsible for all rent and other charges through the end of the notice period regardless of whether a replacement tenant has been found. Landlord's acceptance of any such payment shall not relieve Tenant of any obligations under this Lease that arose prior to the date of termination.`,
  },
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia",
  "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable (e.g. non-HTTPS in dev)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
    >
      {copied ? (
        <>
          <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

function ClauseTypeBadge({ type }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
      {type}
    </span>
  );
}

const SCORE_TIERS = {
  low:  { badge: "bg-emerald-100 text-emerald-700", bar: "bg-emerald-500", label: "text-emerald-600", text: "Low Risk" },
  mid:  { badge: "bg-amber-100  text-amber-700",   bar: "bg-amber-500",   label: "text-amber-600",  text: "Moderate Risk" },
  high: { badge: "bg-red-100    text-red-700",      bar: "bg-red-500",     label: "text-red-600",    text: "High Risk" },
};

function ScoreBadge({ score }) {
  const tier = score <= 3 ? SCORE_TIERS.low : score <= 6 ? SCORE_TIERS.mid : SCORE_TIERS.high;

  return (
    <div className="flex items-center gap-3">
      <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-bold ${tier.badge}`}>
        {score}/10
      </span>
      <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
        <div
          className={`h-2 rounded-full ${tier.bar} transition-all duration-500`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className={`text-sm font-medium ${tier.label}`}>
        {tier.text}
      </span>
    </div>
  );
}

function ResultCard({ result, onAnalyzeAnother }) {
  return (
    <div className="mt-6 flex flex-col gap-5 border-t border-slate-100 pt-6">
      {/* Clause type badge */}
      <div>
        <ClauseTypeBadge type={result.clauseType} />
      </div>

      {/* Plain English */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Plain English
          </h3>
          <CopyButton text={result.plainEnglish} />
        </div>
        <p className="text-slate-700 leading-relaxed">{result.plainEnglish}</p>
      </section>

      {/* Risk Score */}
      <section>
        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          Risk Score
        </h3>
        <ScoreBadge score={result.redFlagScore} />
      </section>

      {/* Red Flags */}
      {result.redFlags.length > 0 && (
        <section>
          <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
            <svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 011.743-1.342 48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664L19.5 19.5" />
            </svg>
            Red Flags
          </h3>
          <ul className="flex flex-col gap-2">
            {result.redFlags.map((flag, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">!</span>
                {flag}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Fair Rewrite */}
      <section>
        <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
          <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Fairer Rewrite
        </h3>
        <blockquote className="rounded-xl border-l-4 border-emerald-400 bg-emerald-50 px-5 py-4 text-sm text-slate-700 leading-relaxed italic">
          {result.fairRewrite}
        </blockquote>
      </section>

      {/* Analyze another */}
      <div>
        <button
          type="button"
          onClick={onAnalyzeAnother}
          className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-2.5 text-sm font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          Analyze Another Clause
        </button>
      </div>
    </div>
  );
}

export default function LeaseForm() {
  const [clause, setClause] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const formTopRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [result]);

  const remaining = MAX_CHARS - clause.length;
  const isNearLimit = remaining < WARN_THRESHOLD;

  function loadSample(text) {
    setClause(text);
    setResult(null);
    setError(null);
  }

  function handleAnalyzeAnother() {
    setClause("");
    setResult(null);
    setError(null);
    formTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!clause.trim()) return;

    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clause, ...(state && { state }) }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
      } else {
        setResult(data);
      }
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div ref={formTopRef} className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Sample clause buttons */}
        <div className="flex flex-wrap gap-2">
          {SAMPLE_CLAUSES.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => loadSample(s.text)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
            >
              <svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              {s.label}
            </button>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          value={clause}
          onChange={(e) => {
            setClause(e.target.value);
            if (result || error) {
              setResult(null);
              setError(null);
            }
          }}
          placeholder='Paste a lease clause here, e.g. "Tenant shall indemnify and hold harmless Landlord from any and all claims..."'
          rows={7}
          maxLength={MAX_CHARS}
          className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-slate-800 placeholder:text-slate-400 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent resize-none transition"
        />

        {/* Character counter */}
        <div className="flex justify-end -mt-2">
          {clause.length > 0 && (
            <span className={`text-xs font-medium tabular-nums ${isNearLimit ? "text-red-500" : "text-slate-400"}`}>
              {remaining.toLocaleString()} character{remaining === 1 ? "" : "s"} remaining
            </span>
          )}
        </div>

        {/* State selector + Submit */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            >
              <option value="">All states (select yours for local context)</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          <button
            type="submit"
            disabled={loading || !clause.trim()}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3 text-white font-semibold text-base shadow-md hover:bg-indigo-700 active:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Analyzing&hellip;
              </>
            ) : (
              "Explain This Clause"
            )}
          </button>
        </div>
      </form>

      {loading && (
        <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-indigo-100 bg-indigo-50 py-10">
          <svg className="animate-spin h-7 w-7 text-indigo-500" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          <p className="text-sm font-medium text-indigo-600">Analyzing your clause&hellip;</p>
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700 flex items-start gap-3">
          <svg className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          {error}
        </div>
      )}

      {result && (
        <div ref={resultRef}>
          <ResultCard result={result} onAnalyzeAnother={handleAnalyzeAnother} />
        </div>
      )}
    </div>
  );
}
