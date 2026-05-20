"use client";

import { useState, useRef, useCallback } from "react";
import { usePostHog } from "posthog-js/react";
import { RetroBadge } from "./RetroBadge";
import { RetroButton } from "./RetroButton";

async function loadPdfJs() {
  if (typeof window === "undefined") return null;
  if (window.pdfjsLib) return window.pdfjsLib;

  return new Promise((resolve, reject) => {
    const script    = document.createElement("script");
    script.src      = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.onload   = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      resolve(window.pdfjsLib);
    };
    script.onerror  = () => reject(new Error("Could not load PDF reader. Check your internet connection and try again."));
    document.head.appendChild(script);
  });
}

async function extractTextFromPDF(file) {
  const pdfjsLib  = await loadPdfJs();
  const arrayBuffer = await file.arrayBuffer();
  const pdf       = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let fullText    = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page        = await pdf.getPage(i);
    const textContent = await page.getTextContent();
    fullText += textContent.items.map((item) => item.str).join(" ") + "\n";
  }
  return fullText.trim();
}

const RISK_BORDER = { High: "var(--retro-red)", Medium: "var(--retro-gold)", Low: "var(--retro-green)" };
const RISK_LEVEL  = { High: "high", Medium: "medium", Low: "low" };

function RiskBadge({ risk }) {
  return <RetroBadge level={RISK_LEVEL[risk] ?? "info"}>{risk} Risk</RetroBadge>;
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
  const [expanded, setExpanded] = useState(false);
  const border = RISK_BORDER[clause.risk] ?? "var(--retro-green)";
  const level  = RISK_LEVEL[clause.risk] ?? "low";

  return (
    <div style={{ border: "2px solid var(--retro-navy)", borderTop: `6px solid ${border}`, borderRadius: "2px", overflow: "hidden" }}>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        style={{
          width:          "100%",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "space-between",
          gap:            "0.75rem",
          padding:        "0.85rem 1rem",
          textAlign:      "left",
          background:     "var(--retro-cream)",
          border:         "none",
          cursor:         "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", minWidth: 0 }}>
          <RetroBadge level={level}>{clause.risk} Risk</RetroBadge>
          <span style={{
            fontFamily:    "var(--font-oswald), Impact, sans-serif",
            fontSize:      "0.85rem",
            fontWeight:    "700",
            textTransform: "uppercase",
            letterSpacing: "0.03em",
            color:         "var(--retro-navy)",
            overflow:      "hidden",
            textOverflow:  "ellipsis",
            whiteSpace:    "nowrap",
          }}>
            {clause.title}
          </span>
        </div>
        <svg
          style={{ flexShrink: 0, width: "1rem", height: "1rem", color: "var(--retro-navy)", transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {expanded && (
        <div style={{ padding: "0.9rem 1rem 1rem", borderTop: "1.5px solid var(--retro-navy)", background: "rgba(0,0,0,0.02)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.875rem", color: "var(--retro-ink)", lineHeight: "1.65", margin: 0 }}>
            {clause.explanation}
          </p>
          {clause.whyRisky && (
            <p style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.75, lineHeight: "1.6", margin: 0 }}>
              <span style={{ fontWeight: "700" }}>Why it matters: </span>{clause.whyRisky}
            </p>
          )}
          {clause.suggestedAction && (
            <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontSize: "0.72rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--retro-gold)", margin: 0 }}>
              → {clause.suggestedAction}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function LeaseResults({ result, fileName, onReset }) {
  const posthog = usePostHog();
  const [pdfLoading, setPdfLoading] = useState(false);

  async function handleDownloadPDF() {
    setPdfLoading(true);
    posthog?.capture("report_downloaded", {
      overall_score: result.overallScore,
      clauses_count: result.clauses?.length ?? 0,
    });
    try {
      const { generateLeaseReportPDF } = await import("../utils/generateLeaseReportPDF");
      await generateLeaseReportPDF(result, fileName);
    } finally {
      setPdfLoading(false);
    }
  }

  const tierCounts = ["High", "Medium", "Low"].map((tier) => ({
    tier,
    count: result.clauses.filter((c) => c.risk === tier).length,
  }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

      {/* Summary scorecard */}
      <div style={{ border: "2.5px solid var(--retro-navy)", borderTop: "6px solid var(--retro-navy)", borderRadius: "2px", padding: "1.5rem", background: "var(--retro-cream)", boxShadow: "var(--retro-shadow)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
          <h3 style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--retro-navy)", margin: 0 }}>
            Lease Analysis Summary
          </h3>
          {fileName && (
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "var(--retro-ink)", opacity: 0.5, maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={fileName}>
              {fileName}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontSize: "0.68rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--retro-ink)", opacity: 0.5, marginBottom: "0.5rem" }}>
            Overall Risk Score
          </p>
          <ScoreBadge score={result.overallScore} />
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontSize: "0.68rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--retro-ink)", opacity: 0.5, marginBottom: "0.4rem" }}>
            Summary
          </p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "var(--retro-ink)", lineHeight: "1.65", margin: 0 }}>
            {result.summary}
          </p>
        </div>

        {/* Risk scorecard tiles */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {tierCounts.map(({ tier, count }) => {
            if (!count) return null;
            const level = RISK_LEVEL[tier];
            const borderC = RISK_BORDER[tier];
            return (
              <div key={tier} style={{ background: "var(--retro-cream)", border: "2px solid var(--retro-navy)", borderTop: `4px solid ${borderC}`, borderRadius: "2px", padding: "0.75rem 1.1rem", textAlign: "center", minWidth: "100px" }}>
                <div style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "2rem", color: "var(--retro-navy)", lineHeight: 1, marginBottom: "0.3rem" }}>
                  {count}
                </div>
                <RetroBadge level={level}>{tier} Risk</RetroBadge>
              </div>
            );
          })}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.5 }}>
              {result.clauses.length} clauses identified
            </span>
          </div>
        </div>
      </div>

      {/* Clause breakdown */}
      <div>
        <h3 style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--retro-navy)", borderBottom: "3px solid var(--retro-gold)", paddingBottom: "0.25rem", display: "inline-block", marginBottom: "0.75rem" }}>
          Clause Breakdown
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
          {["High", "Medium", "Low"].flatMap((tier) =>
            result.clauses
              .filter((c) => c.risk === tier)
              .map((c) => <ClauseCard key={`${tier}-${c.title}`} clause={c} />)
          )}
        </div>
      </div>

      {/* PDF download */}
      <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
        <RetroButton
          variant="gold"
          onClick={handleDownloadPDF}
          disabled={pdfLoading}
          style={{ opacity: pdfLoading ? 0.55 : 1, cursor: pdfLoading ? "not-allowed" : "pointer" }}
        >
          {pdfLoading ? "Generating…" : "Download PDF Report"}
        </RetroButton>
        {!pdfLoading && (
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.78rem", color: "var(--retro-ink)", opacity: 0.55, marginTop: "0.4rem" }}>
            Full risk report with all clauses and suggested rewrites
          </p>
        )}
      </div>

      {/* Reset */}
      <div style={{ textAlign: "center" }}>
        <RetroButton variant="ghost" onClick={onReset}>
          Analyze Another Lease
        </RetroButton>
      </div>
    </div>
  );
}

export default function LeaseUpload() {
  const posthog            = usePostHog();
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus]         = useState("idle"); // idle | extracting | analyzing | done | error
  const [error, setError]           = useState(null);
  const [result, setResult]         = useState(null);
  const [fileName, setFileName]     = useState(null);
  const fileInputRef                = useRef(null);
  const dragLeaveTimeout            = useRef(null);

  const processFile = useCallback(async (file) => {
    if (!file || file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setError("File is too large. Please upload a PDF under 20 MB.");
      return;
    }

    setFileName(file.name);
    setError(null);
    setResult(null);

    posthog?.capture("lease_uploaded", {
      file_size_kb: Math.round(file.size / 1024),
    });

    try {
      setStatus("extracting");
      const text = await extractTextFromPDF(file);

      if (!text || text.length < 100) {
        const errorMsg = "Could not extract readable text from this PDF. It may be a scanned image. Please try a text-based PDF.";
        setError(errorMsg);
        setStatus("error");
        posthog?.capture("lease_analysis_failed", { error: errorMsg, reason: "pdf_extraction_failed" });
        return;
      }

      setStatus("analyzing");
      const res  = await fetch("/api/analyze-lease", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ leaseText: text.slice(0, 95000) }),
      });
      const data = await res.json();

      if (!res.ok) {
        const errorMsg = data.error ?? "Something went wrong. Please try again.";
        setError(errorMsg);
        setStatus("error");
        posthog?.capture("lease_analysis_failed", { error: errorMsg, status_code: res.status });
        return;
      }

      setResult(data);
      setStatus("done");
      posthog?.capture("analysis_complete", {
        high_risk_count:   data.clauses?.filter((c) => c.risk === "High").length ?? 0,
        medium_risk_count: data.clauses?.filter((c) => c.risk === "Medium").length ?? 0,
        low_risk_count:    data.clauses?.filter((c) => c.risk === "Low").length ?? 0,
      });
    } catch (err) {
      const errorMsg = err.message || "An unexpected error occurred. Please try again.";
      setError(errorMsg);
      setStatus("error");
      posthog?.captureException(err);
      posthog?.capture("lease_analysis_failed", { error: errorMsg, reason: "unexpected_error" });
    }
  }, [posthog]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    clearTimeout(dragLeaveTimeout.current);
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  }, [processFile]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    clearTimeout(dragLeaveTimeout.current);
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    dragLeaveTimeout.current = setTimeout(() => setIsDragging(false), 50);
  }, []);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
    e.target.value = "";
  }, [processFile]);

  function handleReset() {
    setStatus("idle");
    setResult(null);
    setError(null);
    setFileName(null);
  }

  if (status === "done" && result) {
    return <LeaseResults result={result} fileName={fileName} onReset={handleReset} />;
  }

  const isLoading = status === "extracting" || status === "analyzing";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !isLoading && fileInputRef.current?.click()}
        className={isDragging ? "retro-upload-active" : ""}
        style={{
          border:       "3px dashed var(--retro-navy)",
          borderRadius: "2px",
          background:   "var(--retro-cream)",
          padding:      "clamp(2rem, 5vw, 3rem) 1.5rem",
          textAlign:    "center",
          cursor:       isLoading ? "default" : "pointer",
          transition:   "background 0.15s, border-color 0.15s",
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,application/pdf"
          style={{ display: "none" }}
          onChange={handleFileChange}
          disabled={isLoading}
        />

        {isLoading ? (
          <>
            <span className="retro-stamp retro-pulse" style={{ fontSize: "0.8rem", marginBottom: "0.75rem", display: "inline-block" }}>
              {status === "extracting" ? "Reading PDF…" : "Analyzing Lease…"}
            </span>
            <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--retro-navy)", margin: "0.5rem 0 0.25rem" }}>
              {status === "extracting" ? "Extracting text from your document" : "This may take 15–30 seconds"}
            </p>
            {fileName && (
              <p style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.5, margin: 0 }}>
                {fileName}
              </p>
            )}
          </>
        ) : (
          <>
            <span className="retro-stamp" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Upload PDF
            </span>
            <p style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontWeight: "700", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--retro-navy)", margin: "0.5rem 0" }}>
              {isDragging ? "Drop your lease here" : "Drop your lease PDF here"}
            </p>
            <p style={{ fontFamily: "Georgia, Cambria, serif", fontSize: "0.85rem", color: "var(--retro-ink)", opacity: 0.6, margin: 0 }}>
              or click to browse — PDF only, up to 20 MB
            </p>
          </>
        )}
      </div>

      {/* Error state */}
      {error && (
        <div style={{ border: "2.5px solid var(--retro-red)", borderLeft: "6px solid var(--retro-red)", borderRadius: "2px", padding: "0.9rem 1.1rem", display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
          <span className="retro-stamp retro-stamp-red" style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", marginTop: "0.1rem", flexShrink: 0 }}>!</span>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.9rem", color: "var(--retro-red)", lineHeight: "1.6", margin: 0 }}>
            {error}
          </p>
        </div>
      )}
    </div>
  );
}
