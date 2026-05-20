import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Lease Renewal Rights — What Renters Need to Know",
  description:
    "Learn your rights when your lease is up for renewal: notice requirements, rent increase limits, auto-renewal traps, and how the rules work in California, Texas, New York, Florida, and Illinois.",
};

const STATE_RULES = [
  {
    state: "California",
    noticeToNonRenew: "Varies by tenancy length: 30 days (<1 year), 60 days (≥1 year)",
    rentIncreaseLimit: "5% + local CPI (max 10%) for AB 1482 covered units",
    keyRule:
      "Covered tenants under AB 1482 have just-cause eviction protections that effectively create a right to renewal unless the landlord has a recognized legal reason not to renew. Even for uncovered units, landlords must give adequate written notice before a tenancy ends. Local rent control cities may impose stricter renewal requirements.",
  },
  {
    state: "Texas",
    noticeToNonRenew: "Typically one rental period (30 days for month-to-month)",
    rentIncreaseLimit: "No limit — no rent control in Texas",
    keyRule:
      "Texas has no general right to lease renewal. When a fixed-term lease ends, landlords may choose not to renew for any reason. For month-to-month tenancies, one rental period's written notice to terminate is required. Rent can be increased to any amount upon renewal with proper notice.",
  },
  {
    state: "New York",
    noticeToNonRenew: "30–90 days depending on tenancy length (statewide); stabilized tenants have renewal rights",
    rentIncreaseLimit: "Annual RGB guidelines for stabilized units; no limit for market-rate",
    keyRule:
      "Rent-stabilized tenants in New York have a statutory right to lease renewal and can only be denied renewal for recognized legal reasons. Market-rate tenants must receive notice of non-renewal: 30 days for tenancies under 1 year, 60 days for 1–2 years, and 90 days for tenancies over 2 years. New York's Good Cause Eviction Law (2024) extends similar protections to many previously unprotected tenants.",
  },
  {
    state: "Florida",
    noticeToNonRenew: "15 days before end of term for week-to-week; 30 days for month-to-month",
    rentIncreaseLimit: "No limit — rent control is prohibited statewide",
    keyRule:
      "Florida tenants have no general right to lease renewal. When a fixed-term lease ends, it converts to a month-to-month tenancy only if both parties continue to act accordingly. Either party may terminate a month-to-month tenancy with 30 days' written notice. Rent may be increased to any amount upon renewal or on a new lease with proper notice.",
  },
  {
    state: "Illinois",
    noticeToNonRenew: "30 days for month-to-month; lease terms for fixed leases (Chicago requires written notice)",
    rentIncreaseLimit: "No statewide limit; Chicago requires 60 days' notice for increases over 5%",
    keyRule:
      "Illinois has no statewide right to lease renewal for market-rate tenants. Chicago's RLTO requires landlords to notify tenants 60 days in advance if they intend not to renew — and 60 days' notice for any rent increase exceeding 5%. Statewide, month-to-month tenancies can be terminated with 30 days' written notice.",
  },
];

const RED_FLAGS = [
  "Auto-renewal clauses requiring 60–90 days' advance notice to opt out — missing this window can lock you into another full lease term.",
  "Rent increase on renewal with no advance notice — any increase should be communicated before you're obligated to sign.",
  "Non-renewal without legally required notice — depending on your state and tenancy length, landlords must give you written advance notice.",
  "Lease renewal that significantly changes terms (adds new fees, removes amenities) without clearly marking what changed — always compare to your original lease.",
  "Renewal offers that include a waiver of rights you had under the original lease — some rights cannot be waived regardless of what you sign.",
  "Month-to-month conversion language that changes key terms — when a fixed-term lease ends and you stay, you typically carry forward the same conditions.",
  "No option to renew at all, even after years of on-time payments — while usually legal, this creates significant housing instability and is worth negotiating.",
];

export default function LeaseRenewalRightsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Lease Renewal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Lease Renewal Rights — What Renters Need to Know
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            When your lease is about to expire, your rights depend heavily on your state, your city, and whether you&apos;re covered by rent control or just-cause eviction laws. In some places — like New York&apos;s rent-stabilized housing — you have a legal right to renew your lease. In others, landlords can simply decline to renew for any reason. Understanding what happens at the end of your lease term helps you plan ahead and spot unfair terms before you sign.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-14">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What Happens When a Lease Expires?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            At the end of a fixed-term lease, one of three things typically happens — and your lease should spell out which applies to you:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "The lease auto-renews for another fixed term (often one year) if neither party provides advance notice — this is the most common auto-renewal trap",
              "The lease converts to a month-to-month tenancy, giving both parties more flexibility but also less stability",
              "The tenancy ends and you must vacate — requires proper advance notice from the landlord",
              "A new lease is offered, potentially with different terms, a higher rent, or new conditions",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">State-by-State Renewal Rules</h2>
          <div className="flex flex-col gap-4">
            {STATE_RULES.map((s) => (
              <div key={s.state} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-indigo-700 mb-3">{s.state}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Non-Renewal Notice</p>
                    <p className="text-sm font-medium text-slate-800">{s.noticeToNonRenew}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Rent Increase Limit</p>
                    <p className="text-sm font-medium text-slate-800">{s.rentIncreaseLimit}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.keyRule}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Red Flags to Watch For</h2>
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
          <h2 className="text-2xl font-bold text-white mb-3">Have a lease renewal clause to review?</h2>
          <p className="text-indigo-200 mb-6 max-w-xl mx-auto">
            Paste your lease clause into our free analyzer at renterclarify.com — get a plain-English explanation, a risk score, and a fairer rewrite in seconds.
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
