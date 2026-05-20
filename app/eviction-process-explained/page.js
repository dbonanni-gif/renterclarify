import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "The Eviction Process Explained — Know Your Rights as a Renter",
  description:
    "Understand the full eviction process: what notice landlords must give, how eviction court works, your rights at each stage, what defenses you have, and what happens after a judgment.",
};

const EVICTION_STEPS = [
  {
    step: "1",
    title: "Written Notice",
    detail:
      "Before a landlord can file for eviction in court, they must serve you with a written notice. The type and length of notice depends on the reason: non-payment of rent (typically 3–5 days), curable lease violation (typically 10–30 days), or no-fault termination (typically 30–90 days depending on the state and tenancy length). The notice must be delivered in a legally recognized way — posting it on the door may or may not be sufficient in your state.",
  },
  {
    step: "2",
    title: "Filing the Eviction Lawsuit",
    detail:
      "If you don't pay, cure the violation, or vacate by the deadline, the landlord may file an eviction complaint in the appropriate court (Magistrate, Justice, Municipal, or District Court depending on the state). You will be served with a summons and complaint. Do not ignore this — missing a court date almost always results in a default judgment against you.",
  },
  {
    step: "3",
    title: "The Court Hearing",
    detail:
      "You have the right to appear and present defenses at the eviction hearing. Common legal defenses include: the landlord failed to give proper notice, the landlord is retaliating against you for a protected activity, the unit was uninhabitable and you had a right to withhold rent, you have already paid what was owed, or the landlord has accepted rent after the notice (which can waive their right to proceed). Prepare your documents: the lease, receipts, written communications, and photos.",
  },
  {
    step: "4",
    title: "The Judgment",
    detail:
      "If the court rules for the landlord, a judgment for possession is entered and the landlord receives a writ of possession. If you successfully defend, the case is dismissed. If you reach a settlement, the court will typically record the agreement. After a judgment for possession, you may have additional time — often 3–10 days depending on the state — before law enforcement can enforce the writ.",
  },
  {
    step: "5",
    title: "Physical Removal",
    detail:
      "If you do not vacate after a writ of possession is issued, a sheriff or marshal will post a notice and then physically remove you and your belongings at a scheduled time. At this stage, the landlord cannot remove you themselves — only authorized law enforcement may do so. Your belongings may be placed at the curb or held per your state's abandoned property rules.",
  },
];

const STATE_NOTICE = [
  { state: "California", nonPayment: "3 days", leaseViolation: "3 days (incurable) / 3 days (curable)", noFault: "30–90 days" },
  { state: "New York", nonPayment: "14 days", leaseViolation: "10–30 days", noFault: "30–90 days" },
  { state: "Texas", nonPayment: "3 days", leaseViolation: "3 days", noFault: "1 month" },
  { state: "Florida", nonPayment: "3 days", leaseViolation: "7 days", noFault: "15–30 days" },
  { state: "Illinois", nonPayment: "5 days", leaseViolation: "10 days", noFault: "30 days" },
  { state: "Washington", nonPayment: "3 days", leaseViolation: "10 days", noFault: "20 days" },
  { state: "Colorado", nonPayment: "3 days", leaseViolation: "10 days", noFault: "21 days" },
  { state: "Ohio", nonPayment: "3 days", leaseViolation: "30 days", noFault: "30 days" },
];

const TENANT_DEFENSES = [
  "Improper notice — landlord failed to give the legally required type, length, or delivery method of notice",
  "Acceptance of rent — if the landlord accepted a rent payment after serving notice, they may have waived the right to proceed",
  "Landlord retaliation — eviction filed in response to a habitability complaint or exercise of a legal right",
  "Uninhabitable conditions — tenant withheld rent due to the landlord's failure to maintain the unit",
  "Lease not expired — for a fixed-term lease that is still in effect, landlord cannot terminate without cause in just-cause jurisdictions",
  "Discrimination — eviction based on race, national origin, religion, sex, disability, familial status, or other protected class",
  "Payment in full — tenant paid all owed rent before the eviction judgment was entered",
  "Waiver of lease violation — landlord previously accepted the behavior they are now citing as the basis for eviction",
];

export default function EvictionProcessExplainedPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Eviction
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            The Eviction Process Explained — Know Your Rights as a Renter
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Eviction is a legal process — not something a landlord can do unilaterally overnight. Even if you&apos;ve missed rent, received a notice, or been told to leave, you have legal rights at every stage. Understanding the full eviction process — from the initial notice to the court hearing to physical removal — helps you respond strategically, assert valid defenses, and protect yourself from illegal landlord conduct like lockouts, utility shutoffs, or harassment.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-14">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What Landlords Cannot Do</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Self-help eviction is illegal in every state. Before a landlord can remove you, they must go through the court process. The following actions are illegal regardless of whether you owe rent or have violated the lease:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Changing the locks or removing doors to force you out",
              "Shutting off electricity, gas, water, or heat to make the unit uninhabitable",
              "Removing your personal belongings from the unit without a court order",
              "Threatening or harassing you in an attempt to pressure you to leave",
              "Entering the unit repeatedly without notice as a form of pressure",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">✗</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The 5 Stages of a Legal Eviction</h2>
          <div className="flex flex-col gap-4">
            {EVICTION_STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-bold">{s.step}</span>
                  <h3 className="font-bold text-lg text-slate-900">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Required Notice Periods by State</h2>
          <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-4 py-3 font-bold text-slate-700">State</th>
                  <th className="text-left px-4 py-3 font-bold text-slate-700">Non-Payment</th>
                  <th className="text-left px-4 py-3 font-bold text-slate-700">Lease Violation</th>
                  <th className="text-left px-4 py-3 font-bold text-slate-700">No-Fault</th>
                </tr>
              </thead>
              <tbody>
                {STATE_NOTICE.map((row, i) => (
                  <tr key={row.state} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-medium text-slate-800">{row.state}</td>
                    <td className="px-4 py-3 text-slate-600">{row.nonPayment}</td>
                    <td className="px-4 py-3 text-slate-600">{row.leaseViolation}</td>
                    <td className="px-4 py-3 text-slate-600">{row.noFault}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Common Legal Defenses to Eviction</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you receive an eviction filing, do not assume you have no recourse. Courts consider these defenses — and a successful defense can result in the case being dismissed entirely:
          </p>
          <ul className="flex flex-col gap-3">
            {TENANT_DEFENSES.map((defense) => (
              <li key={defense} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {defense}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have an eviction clause in your lease?</h2>
          <p className="text-indigo-200 mb-6 max-w-xl mx-auto">
            Paste any lease clause into our free analyzer — get a plain-English explanation, a risk score, and a fairer rewrite in seconds.
          </p>
          <Link href="/" className="inline-block rounded-xl bg-white text-indigo-700 font-semibold px-8 py-3 shadow-lg hover:bg-indigo-50 transition-colors">
            Analyze My Lease Clause — Free
          </Link>
        </section>
      </div>

      <footer className="bg-slate-900 text-slate-400 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-bold text-white">Renter<span className="text-indigo-400">Clarify</span></Link>
          <p className="text-center text-slate-500">RenterClarify provides general educational information only — not legal advice. Laws vary by state and change frequently. Always consult a qualified attorney for guidance on your specific situation.</p>
          <div className="flex flex-col items-end gap-1">
            <span>&copy; {new Date().getFullYear()} RenterClarify</span>
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
