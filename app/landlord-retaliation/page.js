import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Landlord Retaliation — Know Your Rights as a Renter",
  description:
    "Learn what landlord retaliation is, which tenant actions are legally protected, how to recognize retaliatory behavior, and what remedies are available in California, Texas, New York, Florida, and other states.",
};

const PROTECTED_ACTIONS = [
  "Reporting housing code violations or habitability issues to a government agency or code enforcement",
  "Complaining in writing to the landlord about repair needs or unsafe conditions",
  "Joining or organizing a tenant union or participating in collective tenant advocacy",
  "Exercising any right under landlord-tenant law — including withholding rent, repair-and-deduct, or requesting required disclosures",
  "Filing a complaint with a fair housing agency about discrimination",
  "Testifying in a housing court case or governmental proceeding related to the property",
  "Contacting media or public officials about conditions in the rental unit",
];

const STATE_RULES = [
  {
    state: "California",
    presumptionPeriod: "180 days",
    remedies: "Actual damages, punitive damages up to $2,000 per violation, attorney fees",
    keyRule:
      "California Civil Code §1942.5 creates a strong presumption of retaliation if a landlord increases rent, decreases services, or initiates eviction within 180 days of protected tenant activity. The landlord bears the burden of proving a legitimate, non-retaliatory reason for the action. California also prohibits 'economic evictions' — using rent increases as a way to force out tenants who have complained.",
  },
  {
    state: "Texas",
    presumptionPeriod: "6 months",
    remedies: "1 month's rent plus $500, actual damages, attorney fees",
    keyRule:
      "Texas Property Code §92.331 prohibits retaliation against tenants who report habitability issues to a government authority or exercise a legal right. The presumption of retaliation applies if adverse action occurs within 6 months of protected activity — but only if the tenant is current on rent. The tenant must rebut any non-retaliatory reason offered by the landlord.",
  },
  {
    state: "New York",
    presumptionPeriod: "1 year (NYC); statute does not specify statewide",
    remedies: "Actual damages, 3 months' rent, attorney fees (under RPL §223-b)",
    keyRule:
      "New York Real Property Law §223-b prohibits retaliatory eviction, rent increases, or reduction in services against tenants who complain to government authorities, join tenant organizations, or exercise legal rights. NYC courts are particularly attuned to retaliation claims and may award significant penalties. Retaliatory eviction is also a complete defense to a landlord's eviction proceeding.",
  },
  {
    state: "Florida",
    presumptionPeriod: "No fixed presumption period",
    remedies: "Actual damages, attorney fees — but burden is fully on tenant to prove",
    keyRule:
      "Florida Statutes §83.64 prohibits retaliatory conduct by landlords but does not create a presumption of retaliation. The tenant bears the full burden of proving that the landlord's action was motivated by retaliation rather than a legitimate business reason. This makes Florida retaliation claims harder to win in practice — detailed documentation of complaints and the timeline of events is critical.",
  },
  {
    state: "Washington",
    presumptionPeriod: "90 days",
    remedies: "Actual damages, 3 months' rent, attorney fees",
    keyRule:
      "RCW 59.18.240 creates a presumption of retaliation if adverse action occurs within 90 days of protected tenant activity. Washington's remedies are among the more generous in the country — tenants may recover 3 months' rent in addition to actual damages and attorney fees. Courts take retaliation claims seriously, particularly in Seattle and other cities with active tenant protection ordinances.",
  },
];

const WARNING_SIGNS = [
  "Rent increase immediately after you complained about a repair or contacted code enforcement",
  "Eviction notice served shortly after you joined a tenant union or organized with neighbors",
  "Sudden reduction in services — heat, hot water, parking, laundry access — following a habitability complaint",
  "Lease non-renewal offered just after you exercised a legal right, without any stated business reason",
  "Landlord begins unannounced frequent entry or harassment after you filed a complaint",
  "A pretextual lease violation notice (for something never enforced before) following protected tenant activity",
  "Refusal to renew or pressure to vacate shortly after you contacted fair housing authorities about discrimination",
];

export default function LandlordRetaliationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <section className="bg-gradient-to-b from-indigo-50 via-white to-white pt-16 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-700 uppercase tracking-wide">
            Tenant Rights
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Landlord Retaliation — Know Your Rights as a Renter
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Landlord retaliation occurs when a landlord takes adverse action — raising rent, reducing services, or initiating eviction — in response to a tenant exercising a legal right. In most states, retaliation is illegal. If your landlord is punishing you for complaining about a repair, joining a tenant organization, or reporting a code violation, you may have a legal defense, the right to terminate your lease, and the right to sue for damages.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 pb-20 flex flex-col gap-14">

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">What Actions Are Legally Protected?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Anti-retaliation laws protect tenants who exercise their legal rights. The following actions are protected in most states — landlords cannot lawfully retaliate against you for doing any of these:
          </p>
          <ul className="flex flex-col gap-2">
            {PROTECTED_ACTIONS.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Warning Signs of Retaliation</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Retaliation is rarely announced — it often takes the form of &quot;routine&quot; landlord decisions that happen to follow protected tenant activity. Watch for:
          </p>
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">State-by-State Retaliation Protections</h2>
          <div className="flex flex-col gap-4">
            {STATE_RULES.map((s) => (
              <div key={s.state} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-indigo-700 mb-3">{s.state}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Presumption Period</p>
                    <p className="text-sm font-medium text-slate-800">{s.presumptionPeriod}</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Remedies</p>
                    <p className="text-sm font-medium text-slate-800">{s.remedies}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.keyRule}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Protect Yourself</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            If you suspect retaliation — or want to be prepared in case it happens — documentation is everything. Start building a paper trail before you make any complaint:
          </p>
          <ul className="flex flex-col gap-2">
            {[
              "Put all repair requests and complaints in writing — email creates a timestamped record that's hard to dispute",
              "Keep copies of every communication with your landlord, including texts, emails, and written notices",
              "Document the timeline: when did you exercise your right? When did the adverse action occur?",
              "Save any government complaint confirmation numbers, code enforcement visit records, or agency correspondence",
              "Note any witnesses — neighbors, building staff, or anyone who observed landlord behavior after your complaint",
              "If you're served with an eviction notice after protected activity, retaliation may be a complete legal defense — consult a tenant attorney",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl bg-indigo-600 px-8 py-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Think a lease clause is being used against you?</h2>
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
