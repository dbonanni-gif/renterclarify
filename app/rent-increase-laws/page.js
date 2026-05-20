import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Rent Increase Laws — What Renters Need to Know",
  description:
    "Learn your rights when your landlord raises the rent: how much notice is required, which states have rent control or stabilization, what limits apply, and how to respond to an illegal rent increase.",
};

const STATE_RULES = [
  {
    state: "California",
    noticeRequired: "30 days (increases ≤10%); 90 days (increases >10%)",
    rentControl: "Yes — AB 1482 caps at 5% + local CPI (max 10%) for covered units",
    keyRule:
      "California's AB 1482 (effective 2020) limits rent increases to 5% plus local inflation (up to 10% total) per year for most residential units built before 2005, excluding single-family homes and condos with proper notice. Many cities have stricter local rent control ordinances — Los Angeles, San Francisco, and Oakland, among others. Landlords must provide 90 days' written notice for any increase exceeding 10% of the lowest rent charged in the prior 12 months.",
  },
  {
    state: "New York",
    noticeRequired: "30–90 days depending on tenancy length",
    rentControl: "Yes — Rent Guidelines Board sets annual limits for stabilized units",
    keyRule:
      "New York's Rent Guidelines Board sets allowable annual increases for rent-stabilized units in NYC each year. Market-rate tenants must receive written notice of rent increases: 30 days for tenancies under 1 year, 60 days for 1–2 year tenancies, and 90 days for tenancies over 2 years. The Good Cause Eviction Law (2024) also limits how increases can be used to effectively evict long-term tenants.",
  },
  {
    state: "Texas",
    noticeRequired: "No statutory minimum — one rental period is standard practice",
    rentControl: "No — rent control is prohibited statewide",
    keyRule:
      "Texas prohibits local rent control ordinances. During a fixed-term lease, rent cannot be increased unless the lease allows it. For month-to-month tenancies, landlords must give notice at least one rental period in advance (typically 30 days), though the lease may specify a different period. There are no caps on the amount of any rent increase in Texas.",
  },
  {
    state: "Florida",
    noticeRequired: "15 days (week-to-week); 30 days (month-to-month)",
    rentControl: "No — rent control is prohibited statewide by law",
    keyRule:
      "Florida prohibits local rent control ordinances under a 2023 Florida Supreme Court ruling. Rent can be increased by any amount upon lease renewal or on a new lease. For month-to-month tenancies, 30 days' written notice is required before an increase takes effect. During a fixed-term lease, rent generally cannot be increased unless the lease specifically permits it.",
  },
  {
    state: "Washington",
    noticeRequired: "20 days for month-to-month; typically 20–60 days depending on notice type",
    rentControl: "No statewide cap — Seattle has local protections",
    keyRule:
      "Washington requires landlords to give at least 20 days' written notice before increasing rent for month-to-month tenancies. Seattle has local protections that require 180 days' notice for rent increases greater than 10% — among the longest notice requirements in the country. Washington has no statewide rent cap, but some cities are exploring local stabilization measures.",
  },
  {
    state: "Colorado",
    noticeRequired: "21 days",
    rentControl: "No — state law preempts local rent control",
    keyRule:
      "Colorado requires at least 21 days' written notice before a rent increase takes effect for month-to-month tenancies (C.R.S. §38-12-701). There is no statewide cap on the amount of an increase. Colorado state law preempts local rent control ordinances, though some cities have explored local stabilization measures.",
  },
];

const NOTICE_REQUIREMENTS = [
  { state: "California", notice: "90 days if increase >10%; 30 days otherwise" },
  { state: "New York", notice: "30–90 days depending on tenancy length" },
  { state: "Washington (Seattle)", notice: "180 days for increases >10%" },
  { state: "Oregon", notice: "90 days for any increase above 10%" },
  { state: "Illinois (Chicago)", notice: "60 days for increases >5%" },
  { state: "Colorado", notice: "21 days" },
  { state: "Florida", notice: "30 days (month-to-month)" },
  { state: "Texas", notice: "One rental period (typically 30 days)" },
  { state: "Georgia", notice: "60 days (standard practice)" },
  { state: "Ohio", notice: "30 days" },
];

const RED_FLAGS = [
  "A rent increase during a fixed-term lease with no lease provision allowing mid-term increases — this is generally not permitted.",
  "An increase with less notice than required by your state or local ordinance — count the days carefully; some landlords provide notice that technically falls short.",
  "A rent increase that exceeds the annual cap in a rent-controlled or rent-stabilized unit — verify the applicable guideline each year.",
  "An increase immediately after you complained about habitability or exercised a legal right — this may be retaliatory and unenforceable.",
  "A notice of rent increase that arrives by email or text if your lease requires written postal notice — the method of delivery matters.",
  "An increase packaged inside a lease renewal offer with a very short acceptance window — you typically have a right to a reasonable period to evaluate.",
  "No mention of the basis for the increase if you live in a covered unit under local rent control — landlords in controlled jurisdictions must follow specific procedures.",
];

export default function RentIncreaseLawsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Rent Increases
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Rent Increase Laws — What Renters Need to Know
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Your landlord can raise the rent — but only under certain conditions, with the right amount of notice, and within any applicable limits. Whether you&apos;re protected by rent control, rent stabilization, or just a notice requirement, knowing the rules in your state gives you the power to push back on increases that aren&apos;t properly delivered, exceed legal limits, or arrive during a lease term that doesn&apos;t allow them.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-14">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">The Basic Rules That Apply Everywhere</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Regardless of your state, a few foundational rules govern rent increases:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "During a fixed-term lease (e.g., a 12-month lease), your rent generally cannot be raised unless the lease specifically allows mid-term increases",
              "For month-to-month tenancies, landlords must give written advance notice — the required period varies by state from 15 to 180 days",
              "In states or cities with rent control, the increase amount is capped — exceeding the cap is illegal even with proper notice",
              "A rent increase that is retaliatory — timed to punish you for a complaint or exercising a legal right — may be unenforceable",
              "You have the right to receive any increase in writing; verbal notice of a rent increase is generally insufficient",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Notice Requirements by State</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            How much advance notice your landlord must give before raising your rent — for month-to-month tenancies:
          </p>
          <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-5 py-3 font-bold text-slate-700">State / City</th>
                  <th className="text-left px-5 py-3 font-bold text-slate-700">Required Notice</th>
                </tr>
              </thead>
              <tbody>
                {NOTICE_REQUIREMENTS.map((row, i) => (
                  <tr key={row.state} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-3 font-medium text-slate-800">{row.state}</td>
                    <td className="px-5 py-3 text-slate-600">{row.notice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">State-by-State Rent Increase Rules</h2>
          <div className="flex flex-col gap-4">
            {STATE_RULES.map((s) => (
              <div key={s.state} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-indigo-700 mb-3">{s.state}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Notice Required</p>
                    <p className="text-sm font-medium text-slate-800">{s.noticeRequired}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Rent Control</p>
                    <p className="text-sm font-medium text-slate-800">{s.rentControl}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.keyRule}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Rent Increase Notices</h2>
          <ul className="flex flex-col gap-3">
            {RED_FLAGS.map((flag) => (
              <li key={flag} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">!</span>
                {flag}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a rent increase clause to review?</h2>
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
