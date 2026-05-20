export async function generatePDF(result, clauseText) {
  const { jsPDF } = await import("jspdf");

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentW = pageW - margin * 2;
  const footerH = 16;
  const maxY = pageH - footerH - 4;

  let y = 0;

  // ── Helpers ───────────────────────────────────────────────────────────────

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
    doc.setTextColor(148, 163, 184); // slate-400
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

  // Returns pixel height a block of text will need (without drawing it)
  function textBlockH(text, opts = {}) {
    const { indent = 0, fontSize = 10, lineGap = 5.5 } = opts;
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentW - indent);
    return lines.length * lineGap;
  }

  // ── Header ────────────────────────────────────────────────────────────────

  doc.setFillColor(79, 70, 229); // indigo-600
  doc.rect(0, 0, pageW, 30, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("RenterClarify", margin, 16);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(199, 210, 254); // indigo-200
  doc.text("Lease Clause Analysis Report", margin, 24);

  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  doc.text(dateStr, pageW - margin, 24, { align: "right" });

  y = 40;

  // ── Clause type badge ─────────────────────────────────────────────────────

  ensure(14);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  const badgeLabel = result.clauseType;
  const badgeTextW = doc.getTextWidth(badgeLabel);
  const badgePad = 5;
  const badgeW = badgeTextW + badgePad * 2;
  doc.setFillColor(224, 231, 255); // indigo-100
  doc.roundedRect(margin, y - 5, badgeW, 8, 2, 2, "F");
  doc.setTextColor(67, 56, 202); // indigo-700
  doc.text(badgeLabel, margin + badgePad, y);
  y += 12;

  // ── Original clause ───────────────────────────────────────────────────────

  sectionHeading("Original Clause");

  const clauseBlockH = textBlockH(clauseText, { indent: 6, fontSize: 9.5, lineGap: 5 }) + 8;
  ensure(clauseBlockH);
  doc.setFillColor(248, 250, 252); // slate-50
  doc.rect(margin, y - 2, contentW, clauseBlockH, "F");
  doc.setFillColor(203, 213, 225); // slate-300
  doc.rect(margin, y - 2, 2.5, clauseBlockH, "F");
  wrappedText(clauseText, { indent: 6, fontSize: 9.5, italic: true, color: [71, 85, 105], lineGap: 5 });
  y += 6;

  // ── Plain English ─────────────────────────────────────────────────────────

  sectionHeading("Plain English");
  wrappedText(result.plainEnglish);
  y += 6;

  // ── Risk score ────────────────────────────────────────────────────────────

  ensure(28);
  sectionHeading("Risk Score");

  const score = result.redFlagScore;
  const isLow = score <= 3;
  const isMid = score <= 6;
  const barRgb = isLow ? [16, 185, 129] : isMid ? [245, 158, 11] : [239, 68, 68];
  const riskLabel = isLow ? "Low Risk" : isMid ? "Moderate Risk" : "High Risk";

  // Large score number
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(30, 41, 59);
  doc.text(`${score}/10`, margin, y + 8);
  y += 13;

  // Risk label on its own line below
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...barRgb);
  doc.text(riskLabel, margin, y);
  y += 8;

  // progress bar track
  doc.setFillColor(226, 232, 240); // slate-200
  doc.roundedRect(margin, y, contentW, 4, 2, 2, "F");
  // progress bar fill
  doc.setFillColor(...barRgb);
  const fillW = Math.max(4, contentW * (score / 10)); // min 4mm so rounded corners show
  doc.roundedRect(margin, y, fillW, 4, 2, 2, "F");

  y += 12;

  // ── Red flags ─────────────────────────────────────────────────────────────

  if (result.redFlags?.length > 0) {
    sectionHeading("Red Flags");

    result.redFlags.forEach((flag) => {
      const flagH = textBlockH(flag, { indent: 10, fontSize: 10, lineGap: 5.5 }) + 2;
      ensure(flagH);

      // circle bullet
      doc.setFillColor(254, 226, 226); // red-100
      doc.circle(margin + 3, y - 1.5, 3, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(220, 38, 38);
      doc.text("!", margin + 3, y - 0.5, { align: "center" });

      wrappedText(flag, { indent: 10, fontSize: 10, color: [30, 41, 59], lineGap: 5.5 });
      y += 1;
    });

    y += 4;
  }

  // ── Fair rewrite ──────────────────────────────────────────────────────────

  sectionHeading("Fairer Rewrite");

  const rewriteBlockH = textBlockH(result.fairRewrite, { indent: 6, fontSize: 9.5, lineGap: 5 }) + 8;
  ensure(rewriteBlockH);
  doc.setFillColor(240, 253, 244); // emerald-50
  doc.rect(margin, y - 2, contentW, rewriteBlockH, "F");
  doc.setFillColor(52, 211, 153); // emerald-400
  doc.rect(margin, y - 2, 2.5, rewriteBlockH, "F");
  wrappedText(result.fairRewrite, { indent: 6, fontSize: 9.5, italic: true, color: [71, 85, 105], lineGap: 5 });

  // ── Footer on every page ──────────────────────────────────────────────────

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFillColor(15, 23, 42); // slate-900
    doc.rect(0, pageH - footerH, pageW, footerH, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(
      "RenterClarify provides general educational information only — not legal advice.",
      pageW / 2,
      pageH - 8,
      { align: "center" }
    );
    if (totalPages > 1) {
      doc.text(`${i} / ${totalPages}`, pageW - margin, pageH - 8, { align: "right" });
    }
  }

  doc.save("renterclarify-analysis.pdf");
}
