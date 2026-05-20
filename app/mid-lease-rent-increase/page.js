import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Can a Landlord Raise Rent Mid-Lease? — What Renters Need to Know",
  description:
    "Learn when a landlord can and cannot raise rent during an active lease, what your rights are if they try, and how mid-lease rent increase clauses work — with state-by-state context.",
};

const SCENARIOS = [
  {
    scenario: "Fixed-Term Lease (e.g., 12 months)",
    canIncrease: "Generally No",
    detail:
      "During an active fixed-term lease, your rent is locked in for the duration of the term — unless your lease contains a specific clause explicitly allowing mid-term increases. Courts across the country consistently hold that a fixed-term lease is a contract: the landlord agreed to a rent amount, and cannot unilaterally change it while the lease is in effect. If your lease has no such clause, any notice of a mid-lease rent increase can be ignored — you continue paying the contractual rent.",
  },
  {
    scenario: "Lease Contains a Mid-Term Increase Clause",
    canIncrease: "Yes — if clause is valid and notice is proper",
    detail:
      "Some leases — particularly in states without strong tenant protections — include clauses that allow landlords to increase rent during the term, often tied to CPI increases, operating costs, or with a specified cap. These clauses are generally enforceable if the lease is clear and the landlord follows the required notice period. Before accepting a mid-lease increase based on such a clause, read it carefully — the notice requirements, amount limits, and trigger conditions must all be met.",
  },
  {
    scenario: "Month-to-Month Tenancy",
    canIncrease: "Yes — with required notice",
    detail:
      "Month-to-month tenants don't have the same fixed-term protection. Landlords can raise rent at any time with the required advance written notice — which ranges from 15 days (some states) to 90 days depending on your state and the size of the increase. Once proper notice is given, the new rent takes effect at the start of the next rental period. If you don't accept the increase, the landlord may choose not to renew the tenancy.",
  },
  {
    scenario: "Rent-Controlled or Rent-Stabilized Unit",
    canIncrease: "Limited — annual caps apply",
    detail:
      "If you live in a rent-controlled or rent-stabilized unit, increases during or between lease terms are capped by local ordinance or state law. In New York City, the Rent Guidelines Board sets annual caps. In California, AB 1482 limits increases to 5% + CPI (max 10%). Oregon's statewide law caps at 7% + CPI. Even if your lease contains a mid-term increase clause, it cannot override applicable rent control limits.",
  },
];

const STATE_EXAMPLES = [
  { state: "California", rule: "Fixed-term: no mid-lease increase without lease clause. AB 1482 caps all increases at 5% + CPI (max 10%)." },
  { state: "New York", rule: "Fixed-term: rent locked in. Rent-stabilized tenants: annual RGB guidelines apply at renewal." },
  { state: "Texas", rule: "Fixed-term: no increase without lease clause. Month-to-month: one rental period's notice required." },
  { state: "Florida", rule: "Fixed-term: no mid-lease increase. Month-to-month: 15–30 days' notice depending on tenancy type." },
  { state: "Oregon", rule: "No mid-lease increase without lease clause. All increases capped at 7% + CPI; 90 days' notice required." },
  { state: "Washington", rule: "Fixed-term: rent locked in. Month-to-month: 20 days' notice; Seattle requires 180 days for increases over 10%." },
  { state: "Illinois", rule: "Fixed-term: no mid-lease increase. Chicago: 60 days' notice for increases over 5%." },
  { state: "Colorado", rule: "Fixed-term: no mid-lease increase. Month-to-month: 21 days' notice required statewide." },
];

const RED_FLAGS = [
  "A lease clause allowing the landlord to increase rent at any time with minimal notice — this undermines the security of a fixed-term lease.",
  "A mid-lease increase clause with no cap on the amount — leaves you exposed to unlimited increases during the term.",
  "A CPI-escalation clause with no ceiling — CPI can spike significantly in high-inflation periods.",
  "An increase notice that does not cite the specific lease clause authorizing a mid-term increase — without a valid contractual basis, the increase may not be enforceable.",
  "A mid-lease increase in a rent-controlled unit exceeding the local cap — illegal regardless of what the lease says.",
  "Verbal notice of a rent increase — increases must be in writing in most states; verbal notice is generally insufficient.",
];

export default function MidLeaseRentIncreasePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Rent Increases
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Can a Landlord Raise Rent Mid-Lease?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The short answer: almost never during a fixed-term lease — unless your lease contains a specific clause that allows it. A lease is a contract, and both parties are bound by the rent amount agreed to at signing. Understanding when a mid-lease rent increase is legal, when it isn&apos;t, and what you can do about it puts you in control of the situation rather than scrambling to respond.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-14">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">The General Rule — and Its Exceptions</h2>
          <div className="flex flex-col gap-4">
            {SCENARIOS.map((s) => (
              <div key={s.scenario} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-lg text-slate-900">{s.scenario}</h3>
                  <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${s.canIncrease === "Generally No" ? "bg-green-50 text-green-700" : s.canIncrease === "Limited — annual caps apply" ? "bg-amber-50 text-amber-700" : "bg-indigo-50 text-indigo-600"}`}>
                    {s.canIncrease}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What to Do If Your Landlord Tries to Raise Rent Mid-Lease</h2>
          <ul className="flex flex-col gap-2">
            {[
              "Read your lease carefully — search for any clause mentioning rent adjustments, increases, CPI escalations, or operating cost pass-throughs",
              "If there is no such clause, you are not obligated to pay the increase — send a written response citing your lease term and the locked rent amount",
              "If there is a clause, verify that the landlord followed it exactly — notice period, amount limits, and trigger conditions must all be met",
              "Check whether your unit is in a rent-controlled jurisdiction — even valid lease clauses cannot override applicable rent control caps",
              "Document everything in writing — respond to any increase notice in writing so you have a record of your position",
              "Contact a local tenant rights organization or legal aid if the landlord retaliates or threatens eviction for refusing an illegal increase",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">State-by-State Snapshot</h2>
          <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left px-5 py-3 font-bold text-slate-700">State</th>
                  <th className="text-left px-5 py-3 font-bold text-slate-700">Mid-Lease Increase Rule</th>
                </tr>
              </thead>
              <tbody>
                {STATE_EXAMPLES.map((row, i) => (
                  <tr key={row.state} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-5 py-3 font-medium text-slate-800 whitespace-nowrap">{row.state}</td>
                    <td className="px-5 py-3 text-slate-600">{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Rent Increase Clauses</h2>
          <ul className="flex flex-col gap-3">
            {RED_FLAGS.map((flag) => (
              <li key={flag} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">!</span>
                {flag}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
            <p className="font-semibold mb-2">⚠️ Disclaimer</p>
            <p>This information is for general educational purposes only and is not legal advice. Rent increase rules vary significantly by state and municipality, and rent control exemptions are complex. Consult a qualified tenant attorney or legal aid organization in your area for guidance on your specific situation.</p>
          </div>
        </section>

        <section className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a rent increase clause in your lease?</h2>
          <p className="text-indigo-200 mb-6 max-w-xl mx-auto">
            Paste your lease clause into our free analyzer — get a plain-English explanation, a risk score, and a fairer rewrite in seconds.
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
