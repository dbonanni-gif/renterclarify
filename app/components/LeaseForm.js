"use client";

import { useState, useRef, useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { RetroBadge } from "./RetroBadge";
import { RetroButton } from "./RetroButton";
import { RetroCard } from "./RetroCard";

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

const RISK_BORDER = { High: "var(--retro-red)", Medium: "var(--retro-gold)", Low: "var(--retro-green)" };
const RISK_LEVEL  = { High: "high", Medium: "medium", Low: "low" };

function CopyButton({ text, onCopy }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopy?.();
    } catch {
      // clipboard API unavailable
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      style={{
        fontFamily:    "var(--font-oswald), Impact, sans-serif",
        fontSize:      "0.65rem",
        fontWeight:    "700",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        padding:       "0.2rem 0.55rem",
        background:    copied ? "var(--retro-green)" : "var(--retro-cream)",
        color:         copied ? "var(--retro-cream)" : "var(--retro-navy)",
        border:        `1.5px solid ${copied ? "var(--retro-green)" : "var(--retro-navy)"}`,
        borderRadius:  "2px",
        cursor:        "pointer",
        transition:    "background 0.15s, color 0.15s",
        flexShrink:    0,
      }}
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function ScoreBadge({ score }) {
  const level  = score <= 3 ? "low" : score <= 6 ? "medium" : "high";
  const colors = { low: "var(--retro-green)", medium: "var(--retro-gold)", high: "var(--retro-red)" };
  const labels = { low: "Low Risk", medium: "Moderate Risk", high: "High Risk" };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <RetroBadge level={level}>{score}/10</RetroBadge>
      <div style={{ flex: 1, height: "6px", background: "rgba(0,40,104,0.12)", borderRadius: "1px", overflow: "hidden", border: "1px solid rgba(0,40,104,0.2)" }}>
        <div style={{ height: "100%", width: `${score * 10}%`, background: colors[level], transition: "width 0.5s ease" }} />
      </div>
      <span style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", color: colors[level] }}>
        {labels[level]}
      </span>
    </div>
  );
}

function ClauseCard({ clause }) {
  const level  = RISK_LEVEL[clause.risk] ?? "low";
  const border = RISK_BORDER[clause.risk] ?? "var(--retro-green)";

  return (
    <div style={{
      background:   "var(--retro-cream)",
      border:       "2px solid var(--retro-navy)",
      borderTop:    `6px solid ${border}`,
      borderRadius: "2px",
      padding:      "1rem 1.1rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
        <RetroBadge level={level}>{clause.risk} Risk</RetroBadge>
        <h4 style={{
          fontFamily:    "var(--font-oswald), Impact, sans-serif",
          fontSize:      "0.88rem",
          fontWeight:    "700",
          textTransform: "uppercase",
          letterSpacing: "0.03em",
          color:         "var(--retro-navy)",
          margin:        0,
        }}>
          {clause.title}
        </h4>
      </div>
      <p style={{ fontFamily: "Georgia, serif", fontSize: "0.875rem", color: "var(--retro-ink)", lineHeight: "1.65", margin: 0 }}>
        {clause.explanation}
      </p>
      {clause.whyRisky && (
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.75, lineHeight: "1.6", marginTop: "0.4rem", marginBottom: 0 }}>
          <span style={{ fontWeight: "700" }}>Why it matters: </span>{clause.whyRisky}
        </p>
      )}
      {clause.suggestedAction && (
        <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--retro-gold)", marginTop: "0.5rem", marginBottom: 0 }}>
          → {clause.suggestedAction}
        </p>
      )}
    </div>
  );
}

function ResultCard({ result, clause, onAnalyzeAnother }) {
  const posthog = usePostHog();
  const [pdfLoading, setPdfLoading] = useState(false);

  async function handleDownloadPDF() {
    setPdfLoading(true);
    posthog?.capture("report_downloaded", {
      clause_type: result.clauseType,
      risk_score:  result.redFlagScore,
    });
    try {
      const { generatePDF } = await import("../utils/generatePDF");
      await generatePDF(result, clause);
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <div style={{ marginTop: "1.5rem", borderTop: "2px solid var(--retro-navy)", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

      {/* Clause type */}
      <div>
        <span className="retro-stamp" style={{ fontSize: "0.7rem" }}>
          {result.clauseType}
        </span>
      </div>

      {/* Plain English */}
      <section>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
          <h3 className="retro-section-heading">Plain English</h3>
          <CopyButton text={result.plainEnglish} />
        </div>
        <div style={{ borderLeft: "6px solid var(--retro-gold)", padding: "0.75rem 1rem", background: "rgba(200,169,81,0.06)" }}>
          <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "0.95rem", lineHeight: "1.75", color: "var(--retro-ink)", margin: 0 }}>
            {result.plainEnglish}
          </p>
        </div>
      </section>

      {/* Risk Score */}
      <section>
        <h3 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>Risk Score</h3>
        <ScoreBadge score={result.redFlagScore} />
      </section>

      {/* Clause Breakdown */}
      {result.clauses?.length > 0 && (
        <section>
          <h3 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>Clause Breakdown</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {["High", "Medium", "Low"].flatMap((tier) =>
              result.clauses
                .filter((c) => c.risk === tier)
                .map((c) => <ClauseCard key={c.title} clause={c} />)
            )}
          </div>
        </section>
      )}

      {/* Red Flags */}
      {result.redFlags.length > 0 && (
        <section>
          <h3 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>Red Flags</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {result.redFlags.map((flag, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "var(--retro-ink)", lineHeight: "1.65" }}>
                <span className="retro-stamp retro-stamp-red" style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", marginTop: "0.15rem", flexShrink: 0 }}>!</span>
                {flag}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Fair Rewrite */}
      <section>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
          <h3 className="retro-section-heading">Fairer Rewrite</h3>
          <CopyButton text={result.fairRewrite} onCopy={() => posthog?.capture("rewrite_requested")} />
        </div>
        <div style={{ borderLeft: "6px solid var(--retro-green)", paddingLeft: "0.9rem" }}>
          <span className="retro-stamp" style={{ background: "var(--retro-green)", fontSize: "0.62rem", marginBottom: "0.5rem", display: "inline-block" }}>
            Fairer Version
          </span>
          <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "0.92rem", lineHeight: "1.75", fontStyle: "italic", color: "var(--retro-ink)", margin: 0 }}>
            {result.fairRewrite}
          </p>
        </div>
      </section>

      {/* Actions */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
        <div>
          <RetroButton
            variant="gold"
            onClick={handleDownloadPDF}
            disabled={pdfLoading}
            style={{ opacity: pdfLoading ? 0.55 : 1, cursor: pdfLoading ? "not-allowed" : "pointer" }}
          >
            {pdfLoading ? "Generating…" : "Download PDF Report"}
          </RetroButton>
          {!pdfLoading && (
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem", color: "var(--retro-ink)", opacity: 0.55, marginTop: "0.35rem", margin: "0.35rem 0 0" }}>
              Full risk report with explanation and rewrite
            </p>
          )}
        </div>
        <RetroButton variant="ghost" onClick={onAnalyzeAnother}>
          Analyze Another Clause
        </RetroButton>
      </div>
    </div>
  );
}

export default function LeaseForm() {
  const posthog = usePostHog();
  const [clause, setClause] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const formTopRef = useRef(null);
  const resultRef  = useRef(null);

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [result]);

  const remaining   = MAX_CHARS - clause.length;
  const isNearLimit = remaining < WARN_THRESHOLD;

  function loadSample(text, label) {
    setClause(text);
    setResult(null);
    setError(null);
    posthog?.capture("sample_clause_loaded", { sample_label: label });
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

    posthog?.capture("clause_analysis_submitted", {
      clause_length:  clause.trim().length,
      state_selected: state || null,
    });

    try {
      const res  = await fetch("/api/explain", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ clause, ...(state && { state }) }),
      });
      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data.error ?? "Something went wrong. Please try again.";
        setError(errorMsg);
        posthog?.capture("clause_analysis_failed", {
          error:          errorMsg,
          status_code:    res.status,
          state_selected: state || null,
        });
      } else {
        setResult(data);
        posthog?.capture("clause_analysis_completed", {
          clause_type:    data.clauseType,
          risk_score:     data.redFlagScore,
          red_flags_count:data.redFlags?.length ?? 0,
          clauses_count:  data.clauses?.length ?? 0,
          state_selected: state || null,
        });
      }
    } catch (err) {
      const errorMsg = "Network error. Check your connection and try again.";
      setError(errorMsg);
      posthog?.captureException(err);
      posthog?.capture("clause_analysis_failed", {
        error:          errorMsg,
        state_selected: state || null,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div ref={formTopRef} style={{ width: "100%" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

        {/* Sample clause buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {SAMPLE_CLAUSES.map((s) => (
            <button
              key={s.label}
              type="button"
              onClick={() => loadSample(s.text, s.label)}
              style={{
                fontFamily:    "var(--font-oswald), Impact, sans-serif",
                fontSize:      "0.68rem",
                fontWeight:    "700",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                padding:       "0.28rem 0.65rem",
                background:    "var(--retro-cream)",
                color:         "var(--retro-navy)",
                border:        "1.5px solid var(--retro-navy)",
                borderRadius:  "2px",
                cursor:        "pointer",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          value={clause}
          onChange={(e) => {
            setClause(e.target.value);
            if (result || error) { setResult(null); setError(null); }
          }}
          placeholder='Paste a lease clause here, e.g. "Tenant shall indemnify and hold harmless Landlord from any and all claims..."'
          rows={7}
          maxLength={MAX_CHARS}
          style={{
            width:        "100%",
            boxSizing:    "border-box",
            background:   "#FFFEF5",
            border:       "2px solid var(--retro-navy)",
            borderRadius: "2px",
            padding:      "0.75rem 1rem",
            fontFamily:   "Georgia, Cambria, serif",
            fontSize:     "0.95rem",
            lineHeight:   "1.7",
            color:        "var(--retro-ink)",
            resize:       "vertical",
            outline:      "none",
          }}
          onFocus={(e) => { e.target.style.borderColor = "var(--retro-gold)"; }}
          onBlur={(e)  => { e.target.style.borderColor = "var(--retro-navy)"; }}
        />

        {/* Character counter */}
        {clause.length > 0 && (
          <div style={{ textAlign: "right", marginTop: "-0.5rem" }}>
            <span style={{
              fontFamily: "Georgia, serif",
              fontSize:   "0.75rem",
              color:      isNearLimit ? "var(--retro-red)" : "var(--retro-ink)",
              opacity:    isNearLimit ? 1 : 0.5,
            }}>
              {remaining.toLocaleString()} character{remaining === 1 ? "" : "s"} remaining
            </span>
          </div>
        )}

        {/* State selector + Submit */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          <div style={{ position: "relative" }}>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{
                width:        "100%",
                appearance:   "none",
                background:   "var(--retro-cream)",
                border:       "2px solid var(--retro-navy)",
                borderRadius: "2px",
                padding:      "0.6rem 2.5rem 0.6rem 0.9rem",
                fontFamily:   "Georgia, Cambria, serif",
                fontSize:     "0.88rem",
                color:        "var(--retro-ink)",
                outline:      "none",
                cursor:       "pointer",
              }}
            >
              <option value="">All states (select yours for local context)</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <svg
              style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", width: "1rem", height: "1rem", color: "var(--retro-navy)", pointerEvents: "none" }}
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <RetroButton
              type="submit"
              variant="primary"
              disabled={loading || !clause.trim()}
              style={{ opacity: (loading || !clause.trim()) ? 0.5 : 1, cursor: (loading || !clause.trim()) ? "not-allowed" : "pointer" }}
            >
              {loading ? "Analyzing…" : "Explain This Clause"}
            </RetroButton>
          </div>
        </div>
      </form>

      {/* Loading state */}
      {loading && (
        <div style={{ marginTop: "1.5rem", textAlign: "center", padding: "2.5rem 1.5rem", border: "2px solid var(--retro-navy)", borderRadius: "2px", background: "rgba(0,40,104,0.04)" }}>
          <span className="retro-stamp retro-pulse" style={{ fontSize: "0.8rem", marginBottom: "0.75rem", display: "inline-block" }}>
            Analyzing…
          </span>
          <p style={{ fontFamily: "Georgia, serif", color: "var(--retro-ink)", opacity: 0.6, margin: 0, fontSize: "0.9rem" }}>
            Reading your lease clause…
          </p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div style={{ marginTop: "1.5rem", border: "2.5px solid var(--retro-red)", borderLeft: "6px solid var(--retro-red)", borderRadius: "2px", padding: "0.9rem 1.1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
          <span className="retro-stamp retro-stamp-red" style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", marginTop: "0.1rem", flexShrink: 0 }}>!</span>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "var(--retro-red)", lineHeight: "1.6", margin: 0 }}>
            {error}
          </p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div ref={resultRef}>
          <ResultCard result={result} clause={clause} onAnalyzeAnother={handleAnalyzeAnother} />
        </div>
      )}
    </div>
  );
}
