import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Subletting Your Apartment — What You Need to Know",
  description:
    "Learn how subletting works, what your lease may say about it, how to get landlord approval, your liability risks as the original tenant, and how subletting rules vary by state.",
};

const KEY_CONCEPTS = [
  {
    title: "What Is Subletting?",
    value: "Renting your unit to someone else while you're the leaseholder",
    detail:
      "Subletting (also called subleasing) means you — the original tenant — temporarily rent your unit to a third party (the subtenant) while your name remains on the master lease. You remain legally responsible to the landlord for rent, damages, and lease compliance. The subtenant pays you, and you pay the landlord. Subletting differs from a lease assignment, where you transfer the entire lease to a new tenant and exit the agreement.",
  },
  {
    title: "What Does Your Lease Say?",
    value: "Most leases restrict or prohibit subletting without consent",
    detail:
      "The first step is reading your lease. Most standard leases have one of three types of subletting clauses: (1) an outright prohibition — subletting is not allowed under any circumstances; (2) landlord consent required — subletting is allowed only with prior written approval; or (3) silent on the issue — no mention of subletting at all. If your lease is silent, state law may determine your rights. In some states (like New York and California), tenants have statutory subletting rights that override restrictive lease clauses in certain situations.",
  },
  {
    title: "Getting Landlord Approval",
    value: "Required in most cases — ask in writing",
    detail:
      "If your lease requires landlord consent, submit a written subletting request that includes: the proposed subtenant's name and contact information, the reason for subletting, the proposed subletting period, and confirmation that you intend to return at the end of the sublet term. Some states require landlords to respond within a set number of days and prohibit unreasonable refusals. In New York, landlords of buildings with 4+ units must approve a sublet request unless there is a legitimate reason to deny it.",
  },
  {
    title: "Your Liability as the Original Tenant",
    value: "You remain responsible — even if the subtenant doesn't pay",
    detail:
      "Subletting does not release you from your obligations under the master lease. If your subtenant fails to pay rent, damages the unit, or violates the lease, your landlord will hold you accountable — not the subtenant. You can include provisions in your sublease agreement that allow you to pursue the subtenant, but your landlord has no obligation to deal with anyone but you. Carefully screen any subtenant before agreeing to sublet.",
  },
  {
    title: "Short-Term Rentals (Airbnb, VRBO)",
    value: "Often prohibited — local regulations apply",
    detail:
      "Short-term rental platforms like Airbnb are treated as subletting in most jurisdictions. Many leases explicitly prohibit short-term rentals. Cities including New York, Los Angeles, San Francisco, and many others have enacted local regulations requiring registration, limiting rental days per year, or outright prohibiting short-term rentals in rental units. Violating these rules can result in lease termination, fines, and in some cities, landlord liability. Always check both your lease and local law before listing your unit.",
  },
  {
    title: "Subletting vs. Lease Assignment",
    value: "Assignment transfers the entire lease — you exit",
    detail:
      "In a lease assignment, you transfer all of your rights and obligations under the lease to a new tenant. You exit the agreement entirely (unless the landlord requires you to remain as a guarantor). Assignments are more permanent than sublets and typically require landlord approval. Some states limit a landlord's ability to unreasonably withhold assignment consent. If you're leaving permanently and don't plan to return, an assignment may be more appropriate than a sublet.",
  },
];

const STATE_RULES = [
  {
    state: "New York",
    rule: "Tenants in buildings with 4+ units have a statutory right to sublet with landlord consent. Landlords cannot unreasonably withhold approval. Landlords must respond within 30 days or consent is deemed granted.",
  },
  {
    state: "California",
    rule: "No statutory subletting right for most tenants. Lease governs. If the lease prohibits subletting but the landlord unreasonably withholds consent after a reasonable request, courts may consider this a breach by the landlord.",
  },
  {
    state: "Illinois (Chicago)",
    rule: "Chicago's RLTO does not create a blanket subletting right, but prohibits landlords from unreasonably withholding consent when the lease allows subletting with approval.",
  },
  {
    state: "Washington",
    rule: "No statutory subletting right. Lease governs. Many Seattle leases allow subletting with landlord approval — landlords must act reasonably in approving or denying.",
  },
  {
    state: "Texas",
    rule: "No statutory subletting right. Lease terms control. If the lease is silent, subletting may be permissible, but landlord consent is best practice to avoid disputes.",
  },
  {
    state: "Florida",
    rule: "No statutory subletting right. Lease governs. Most Florida leases prohibit subletting without landlord consent. Unauthorized subletting can be grounds for eviction.",
  },
];

const RED_FLAGS = [
  "An absolute prohibition on subletting with no exceptions — leaves you with no flexibility for extended travel, job relocation, or family emergencies.",
  "Subletting allowed only with landlord consent but no standard for granting it — gives the landlord unlimited discretion to deny without reason.",
  "No process for how to request subletting approval — you may not know where to start if you need to sublet.",
  "Clause making you automatically liable for any damages caused by a subtenant beyond your security deposit — you should negotiate a sublease agreement that protects you.",
  "Prohibition on 'guests' staying more than a certain number of days — some leases use this to target short-term rental platforms or extended family stays.",
  "No distinction between subletting and lease assignment — these are different legal arrangements and the consequences differ significantly.",
];

export default function SubletRulesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Subletting
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Subletting Your Apartment — What You Need to Know
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Subletting can be a practical solution when you need to travel, relocate temporarily, or reduce housing costs — but doing it wrong can put your tenancy at risk. Before you list your apartment or hand your keys to a friend, you need to know what your lease allows, what your landlord&apos;s approval rights are, and what liability you retain even after a subtenant moves in.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-14">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Subletting Basics</h2>
          <div className="flex flex-col gap-4">
            {KEY_CONCEPTS.map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-bold text-lg text-indigo-700">{c.title}</h3>
                  <span className="rounded-full bg-indigo-50 px-3 py-0.5 text-xs font-semibold text-indigo-600">{c.value}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Subletting Rights by State</h2>
          <div className="flex flex-col gap-4">
            {STATE_RULES.map((s) => (
              <div key={s.state} className="rounded-2xl border border-slate-100 p-5 shadow-sm">
                <h3 className="font-bold text-indigo-700 mb-2">{s.state}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.rule}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags in Subletting Clauses</h2>
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
            <p>This information is for general educational purposes only and is not legal advice. Subletting rules vary significantly by state, city, and lease — and unauthorized subletting can result in lease termination. Always review your lease carefully and consult a qualified tenant attorney or legal aid organization before subletting your unit.</p>
          </div>
        </section>

        <section className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a subletting clause in your lease?</h2>
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
