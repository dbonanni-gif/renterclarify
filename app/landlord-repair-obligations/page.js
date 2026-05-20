import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "What If Your Landlord Won't Make Repairs? — Renter Rights Explained",
  description:
    "Learn what to do when your landlord refuses to make repairs: how to formally notify them, what remedies you have, how rent withholding works, and what the warranty of habitability means for renters.",
};

const REMEDIES = [
  {
    title: "Repair-and-Deduct",
    value: "Available in most states — limits vary",
    detail:
      "Most states allow tenants to hire a contractor to make the repair and deduct the cost from the next month's rent — but only after following the correct process. You must give the landlord written notice and a reasonable time to respond. The repair-and-deduct remedy is typically capped (often at $300–$500 or one month's rent) and cannot be used repeatedly for the same issue. Always document the repair and keep all receipts.",
  },
  {
    title: "Rent Withholding",
    value: "Allowed in many states — process matters",
    detail:
      "Some states allow tenants to withhold rent when a landlord fails to maintain habitable conditions — but doing this incorrectly can result in eviction. Most states require: written notice to the landlord, a waiting period (typically 7–30 days), and in some states, depositing withheld rent into an escrow account with the court. Never withhold rent without first researching your state's specific process.",
  },
  {
    title: "Rent Escrow",
    value: "Court-supervised in many states",
    detail:
      "In states like Maryland and Pennsylvania, tenants can pay rent into a court-supervised escrow account while a habitability dispute is pending. The rent is held until the court determines whether the landlord has made required repairs. This protects tenants from eviction for non-payment while also ensuring they have paid rent — just not directly to the landlord.",
  },
  {
    title: "Lease Termination",
    value: "For serious or unresolved habitability failures",
    detail:
      "In cases of serious habitability failures — no heat in winter, sewage backup, pest infestation — most states allow tenants to terminate the lease and vacate without further rent obligation. This is sometimes called 'constructive eviction': the landlord's failure to maintain the unit has effectively made it uninhabitable. You must typically give written notice and a final opportunity to cure before exercising this right.",
  },
  {
    title: "Court Action",
    value: "Seek court-ordered repairs or damages",
    detail:
      "Tenants may file in Small Claims Court or Housing Court for court-ordered repairs, a rent reduction, or damages resulting from the landlord's failure to maintain the unit. Some states allow tenants to recover their full rent paid during the period of uninhabitability, attorney fees, and in egregious cases, punitive damages. Court action creates a legal record of the dispute.",
  },
  {
    title: "Code Enforcement Complaint",
    value: "Report violations to government authorities",
    detail:
      "Filing a complaint with your local housing code enforcement office or board of health is often the fastest way to force action. An inspector will visit the property, document violations, and issue orders to correct them within a specified timeframe. This creates a government record of the problem and may also trigger anti-retaliation protections, since landlords are legally prohibited from evicting tenants who file good-faith complaints.",
  },
];

const NOTICE_TIPS = [
  "Put every repair request in writing — email creates a timestamped record that is harder to dispute than verbal requests",
  "Be specific about the defect: describe what is broken, where it is, when you first noticed it, and how it affects habitability",
  "Request a specific response deadline — '14 days' is reasonable for non-emergency issues; 24–48 hours for no heat, no water, or safety hazards",
  "Take photos and videos of the problem before, during, and after any repair attempts",
  "Keep copies of all correspondence, including texts and emails, even if the landlord is unresponsive",
  "Follow up in writing if the landlord acknowledges verbally but does not act — create a paper trail at every step",
];

const WARNING_SIGNS = [
  "Landlord asks you to call or text but never follows up with written confirmation — keep your own written record of all communication",
  "Repeated promises to fix the problem without a scheduled date or contractor — document each unfulfilled promise",
  "Repair 'completed' but problem recurs within days or weeks — document the recurrence and notify again in writing",
  "Landlord offers to reduce rent in exchange for waiving your right to demand repairs — this may not be enforceable and leaves you in a substandard unit",
  "Landlord retaliates after you complain — rent increase, eviction notice, or reduced services after a repair complaint may be illegal retaliation",
];

export default function LandlordRepairObligationsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Repairs & Habitability
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            What If Your Landlord Won&apos;t Make Repairs?
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            In every state, landlords are legally required to maintain rental units in a habitable condition — this duty is called the warranty of habitability, and it cannot be waived by any lease clause. When a landlord refuses to make repairs, you have real legal remedies: from deducting repair costs from rent, to withholding rent entirely, to terminating your lease and moving out. The key is knowing which remedy applies in your state and following the correct process.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-14">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">The Warranty of Habitability — What It Covers</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            The warranty of habitability is an implied promise in every residential lease that the unit is fit for human habitation. Conditions that typically violate this warranty include:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "No heat or hot water — especially critical in winter months",
              "Severe plumbing failures — sewage backup, no running water, major leaks",
              "Structural hazards — roof collapse risk, broken stairs, holes in floors or walls",
              "Pest infestations — rodents, cockroaches, or bedbugs not caused by the tenant",
              "Mold growth affecting air quality or structural integrity",
              "Broken locks or security features that leave the unit unsafe",
              "Non-functional electrical systems creating fire or shock hazards",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Step 1 — How to Properly Notify Your Landlord</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Before you can use any legal remedy, you must give the landlord written notice and a reasonable opportunity to make the repair. Here&apos;s how to do it right:
          </p>
          <ul className="flex flex-col gap-3">
            {NOTICE_TIPS.map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Step 2 — Your Legal Remedies If the Landlord Doesn&apos;t Act</h2>
          <div className="flex flex-col gap-4">
            {REMEDIES.map((r) => (
              <div key={r.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-lg text-indigo-700">{r.title}</h3>
                  <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-xs font-semibold text-indigo-600">{r.value}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Warning Signs to Watch For</h2>
          <ul className="flex flex-col gap-3">
            {WARNING_SIGNS.map((sign) => (
              <li key={sign} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">!</span>
                {sign}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600">
            <p className="font-semibold mb-2">⚠️ Disclaimer</p>
            <p>This information is for general educational purposes only and is not legal advice. Repair remedies — including rent withholding, repair-and-deduct, and lease termination — vary significantly by state and require following specific legal procedures. Using the wrong process can expose you to eviction. Consult a qualified tenant attorney or legal aid organization in your state before taking action.</p>
          </div>
        </section>

        <section className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a repair or maintenance clause in your lease?</h2>
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
