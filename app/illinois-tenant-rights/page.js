import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Illinois Tenant Rights — Complete Guide for Renters in IL",
  description:
    "A complete guide to Illinois tenant rights: security deposit rules, Chicago RLTO protections, eviction timelines, landlord entry requirements, and what renters need to know statewide and in Chicago.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No statewide cap; Chicago cap is no limit but strict rules apply",
    detail:
      "Illinois has no statewide security deposit cap for private landlords. However, the Chicago Residential Landlord and Tenant Ordinance (RLTO) imposes strict handling requirements: deposits must be held in a federally insured interest-bearing account, and tenants must receive written notice of the bank name and account details within 14 days. In Chicago, if the landlord fails to pay interest annually or violates handling requirements, tenants may deduct twice the deposit amount from rent. Statewide, deposits must be returned with an itemized statement within 30 days (45 days if the tenant disputes deductions).",
  },
  {
    topic: "Rent Increases",
    value: "No statewide limit; Chicago requires 60 days' notice for increases over 5%",
    detail:
      "Illinois has no statewide rent control. During a fixed-term lease, rent cannot be increased unless the lease permits it. For month-to-month tenancies outside Chicago, landlords must give at least 30 days' written notice. In Chicago, landlords must give 60 days' written notice if the increase exceeds 5% — and a 5-day notice for any increase. Non-renewal also requires 60 days' written notice in Chicago.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; Chicago sets 2 days minimum",
    detail:
      "Statewide, Illinois requires landlords to give 'reasonable' advance notice before non-emergency entry — courts typically interpret this as 24 hours. The Chicago RLTO sets a more explicit standard: at least 2 days' notice for inspections and repairs, with entry only between 8 a.m. and 8 p.m. unless otherwise agreed. Emergency entry — fire, flooding, or imminent danger — may occur without notice anywhere in Illinois.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain; Chicago tenants may withhold rent",
    detail:
      "Illinois recognizes an implied warranty of habitability in residential leases. Landlords must maintain the unit in a condition fit for human habitation, including functional heating, plumbing, and electrical systems. In Chicago, the RLTO provides additional remedies: if the landlord fails to repair after written notice (typically 14 days for major issues), tenants may withhold a portion of rent proportional to the impairment, make repairs and deduct costs up to $500 or half a month's rent, or terminate the lease.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for non-payment; 10-day for lease violations",
    detail:
      "Illinois requires a 5-day written notice to pay rent or vacate before an eviction lawsuit can be filed for non-payment. For other lease violations, a 10-day notice to comply or vacate is required. After the notice period, the landlord files an eviction complaint in Circuit Court. Illinois evictions typically take 4–8 weeks from filing to judgment. Self-help evictions — changing locks, removing belongings, or shutting off utilities — are illegal and expose landlords to significant liability.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — Chicago RLTO and Illinois statutes both prohibit retaliation",
    detail:
      "Illinois law (765 ILCS 720) and the Chicago RLTO both prohibit landlords from retaliating against tenants who report housing code violations, organize with other tenants, or exercise legal rights. In Chicago, if a landlord raises rent, reduces services, or seeks to evict within one year of protected tenant activity, courts may presume retaliation. Remedies include the right to terminate the lease, recover two months' rent in damages, and attorney fees.",
  },
];

const RED_FLAGS = [
  "In Chicago: no mention of the interest-bearing account or the bank holding your deposit — this disclosure is legally required within 14 days.",
  "Deposit clauses allowing deductions for 'any damage' without excluding normal wear and tear — Illinois law prohibits charging tenants for ordinary wear.",
  "Entry clauses allowing access with no notice or less than 48 hours' notice (in Chicago) outside of emergencies.",
  "Lease provisions waiving the implied warranty of habitability — these are void under Illinois law.",
  "In Chicago: rent increase with less than 60 days' notice when the increase exceeds 5% — the RLTO notice requirement is mandatory.",
  "Non-renewal in Chicago with less than 60 days' advance written notice — required by the RLTO regardless of lease term.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full year.",
];

export default function IllinoisTenantRightsPage() {
  return (
    <StatePageShell
      abbr="IL"
      stateName="Illinois"
      introParagraph="Illinois tenant protections operate on two levels: a statewide baseline under the Illinois Landlord-Tenant Act, and significantly stronger local protections in Chicago under the Residential Landlord and Tenant Ordinance (RLTO). If you live in Chicago, you have additional rights around deposit handling, rent increase notice, entry rules, and remedies for habitability failures. Wherever you rent in Illinois, understanding both layers of law is essential to protecting yourself."
      whoIsProtectedIntro="Illinois landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply statewide regardless of what the lease says:"
      whoIsProtected={[
        "Landlords must maintain rental units in a habitable condition — this duty cannot be waived by lease",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
        "Security deposit deductions require an itemized written statement within 30 days of move-out",
        "Chicago tenants have additional rights to deposit interest, stricter entry notice, and proportional rent withholding",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://illinoisattorneygeneral.gov/Consumer-Protection/"
      agLabel="Illinois Attorney General — Tenant Rights"
    />
  );
}
