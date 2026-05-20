export async function generateLeaseReportPDF(result, fileName) {
  const { jsPDF } = await import("jspdf");

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentW = pageW - margin * 2;
  const footerH = 16;
  const maxY = pageH - footerH - 4;

  let y = 0;

  function newPage() {
    doc.addPage();
    y = 20;
  }

  function ensure(needed) {
    if (y + needed > maxY) newPage();
  }

  function sectionHeading(text) {
    ensure(10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(text.toUpperCase(), margin, y);
    y += 5;
  }

  function wrappedText(text, { indent = 0, fontSize = 10, italic = false, color = [30, 41, 59], lineGap = 5.5 } = {}) {
    doc.setFont("helvetica", italic ? "italic" : "normal");
    doc.setFontSize(fontSize);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, contentW - indent);
    lines.forEach((line) => {
      ensure(lineGap);
      doc.text(line, margin + indent, y);
      y += lineGap;
    });
  }

  function textBlockH(text, opts = {}) {
    const { indent = 0, fontSize = 10, lineGap = 5.5 } = opts;
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentW - indent);
    return lines.length * lineGap;
  }

  // ── Header ────────────────────────────────────────────────────────────────
  doc.setFillColor(79, 70, 229);
  doc.rect(0, 0, pageW, 30, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("RenterClarify", margin, 16);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(199, 210, 254);
  doc.text("Full Lease Analysis Report", margin, 24);
  const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  doc.text(dateStr, pageW - margin, 24, { align: "right" });

  y = 40;

  if (fileName) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`Document: ${fileName}`, margin, y);
    y += 8;
  }

  // ── Overall Score ─────────────────────────────────────────────────────────
  const score = result.overallScore;
  const isLow = score <= 3;
  const isMid = score <= 6;
  const barRgb = isLow ? [16, 185, 129] : isMid ? [245, 158, 11] : [239, 68, 68];
  const riskLabel = isLow ? "Low Risk" : isMid ? "Moderate Risk" : "High Risk";

  ensure(28);
  sectionHeading("Overall Risk Score");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(30, 41, 59);
  doc.text(`${score}/10`, margin, y + 8);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...barRgb);
  doc.text(riskLabel, margin + 22, y + 8);
  y += 14;

  doc.setFillColor(226, 232, 240);
  doc.roundedRect(margin, y, contentW, 4, 2, 2, "F");
  doc.setFillColor(...barRgb);
  doc.roundedRect(margin, y, Math.max(4, contentW * (score / 10)), 4, 2, 2, "F");
  y += 12;

  // ── Summary ───────────────────────────────────────────────────────────────
  sectionHeading("Lease Summary");
  wrappedText(result.summary);
  y += 6;

  // ── Clause counts ─────────────────────────────────────────────────────────
  const counts = {
    High: result.clauses.filter((c) => c.risk === "High").length,
    Medium: result.clauses.filter((c) => c.risk === "Medium").length,
    Low: result.clauses.filter((c) => c.risk === "Low").length,
  };
  sectionHeading(`${result.clauses.length} Clauses Identified`);
  const countParts = [];
  if (counts.High) countParts.push(`${counts.High} High Risk`);
  if (counts.Medium) countParts.push(`${counts.Medium} Medium Risk`);
  if (counts.Low) countParts.push(`${counts.Low} Low Risk / Standard`);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text(countParts.join("   ·   "), margin, y);
  y += 12;

  // ── Clauses by tier ───────────────────────────────────────────────────────
  const tierConfig = {
    High:   { label: "HIGH RISK CLAUSES",   fill: [254, 226, 226], text: [185, 28, 28] },
    Medium: { label: "MEDIUM RISK CLAUSES", fill: [254, 243, 199], text: [146, 64, 14] },
    Low:    { label: "LOW RISK / STANDARD", fill: [209, 250, 229], text: [6, 95, 70]   },
  };

  for (const tier of ["High", "Medium", "Low"]) {
    const tierClauses = result.clauses.filter((c) => c.risk === tier);
    if (!tierClauses.length) continue;

    const tc = tierConfig[tier];
    ensure(14);
    doc.setFillColor(...tc.fill);
    doc.roundedRect(margin, y - 5, contentW, 8, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(...tc.text);
    doc.text(tc.label, margin + 4, y);
    y += 10;

    for (const clause of tierClauses) {
      const expH = textBlockH(clause.explanation, { indent: 4, fontSize: 9.5, lineGap: 5 });
      const whyBlockH = clause.whyRisky
        ? 6 + textBlockH(clause.whyRisky, { indent: 4, fontSize: 9, lineGap: 4.5 })
        : 0;
      const actionBlockH = clause.suggestedAction
        ? 4 + textBlockH(`-> ${clause.suggestedAction}`, { indent: 4, fontSize: 9, lineGap: 5 })
        : 0;
      const cardH = 4 + 6 + expH + whyBlockH + actionBlockH + 6;

      ensure(cardH);

      doc.setFillColor(249, 250, 251);
      doc.setDrawColor(226, 232, 240);
      doc.roundedRect(margin, y - 4, contentW, cardH, 2, 2, "FD");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(30, 41, 59);
      doc.text(clause.title, margin + 4, y);
      y += 6;

      wrappedText(clause.explanation, { indent: 4, fontSize: 9.5, color: [71, 85, 105], lineGap: 5 });

      if (clause.whyRisky) {
        y += 2;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(100, 116, 139);
        doc.text("Why it matters:", margin + 4, y);
        y += 4;
        wrappedText(clause.whyRisky, { indent: 4, fontSize: 9, color: [100, 116, 139], lineGap: 4.5 });
      }

      if (clause.suggestedAction) {
        y += 2;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(79, 70, 229);
        const actionLines = doc.splitTextToSize(`→ ${clause.suggestedAction}`, contentW - 8);
        actionLines.forEach((line) => {
          ensure(5);
          doc.text(line, margin + 4, y);
          y += 5;
        });
      }

      y += 6;
    }

    y += 4;
  }

  // ── Footer on every page ──────────────────────────────────────────────────
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(15, 23, 42);
    doc.rect(0, pageH - footerH, pageW, footerH, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text(
      "RenterClarify provides general educational information only — not legal advice.",
      pageW / 2, pageH - 8, { align: "center" }
    );
    if (totalPages > 1) {
      doc.text(`${i} / ${totalPages}`, pageW - margin, pageH - 8, { align: "right" });
    }
  }

  doc.save("renterclarify-full-lease-analysis.pdf");
}
