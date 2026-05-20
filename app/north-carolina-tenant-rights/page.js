import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "North Carolina Tenant Rights — Complete Guide for Renters in NC",
  description:
    "A complete guide to North Carolina tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the North Carolina Residential Rental Agreements Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "2 months' rent max (month-to-month: 1.5 months); return within 30 days",
    detail:
      "North Carolina's Tenant Security Deposit Act (N.C.G.S. §42-50 et seq.) caps security deposits at two weeks' rent for week-to-week tenancies, one and one-half months' rent for month-to-month tenancies, and two months' rent for fixed-term leases. Landlords must return the deposit within 30 days of move-out with an itemized written statement of any deductions. If additional time is needed to assess damages, landlords may send an interim accounting within 30 days and a final accounting within 60 days. Landlords who wrongfully withhold deposits can be sued for actual damages.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in North Carolina",
    detail:
      "North Carolina prohibits local rent control ordinances under state law. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least 30 days' written notice before increasing rent. There are no caps on the amount of any rent increase in North Carolina.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required — 24 hours is standard",
    detail:
      "North Carolina law (N.C.G.S. §42-42.2) requires landlords to give reasonable advance notice before entering a rental unit for non-emergency purposes including repairs, inspections, and showings — courts generally interpret this as at least 24 hours. Emergency entry may occur without notice. Tenants may deny entry if proper notice is not given. Repeated unauthorized entries may support a claim for breach of the right to quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Fit premises required — landlord must maintain",
    detail:
      "North Carolina's Residential Rental Agreements Act (N.C.G.S. §42-41 et seq.) requires landlords to provide fit and habitable premises: structurally sound, with functional plumbing, heating, and electrical systems, and free from conditions that endanger health or safety. Tenants must give written notice of repair needs. If the landlord fails to repair within a reasonable time, tenants may terminate the lease, seek rent reduction, or in cases of serious code violations, apply for court-ordered repairs.",
  },
  {
    topic: "Eviction Process",
    value: "10-day notice for non-payment; 30-day for lease violations (month-to-month)",
    detail:
      "North Carolina requires landlords to serve a written notice before filing an eviction (summary ejectment) lawsuit: 10 days for non-payment of rent, and 30 days for month-to-month tenancy termination without specific cause. Eviction cases are heard in Small Claims Court (District Court). Tenants have the right to appear and contest the eviction. Self-help evictions — changing locks, removing belongings, or shutting off utilities — are illegal and expose landlords to damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory eviction is unenforceable",
    detail:
      "North Carolina law (N.C.G.S. §42-37.1) prohibits landlords from retaliating against tenants who report housing code violations to government authorities, exercise legal rights, or participate in a tenant organization. Retaliation is a recognized legal defense in eviction proceedings. If a landlord seeks to evict or raise rent within 12 months of protected tenant activity, courts may presume retaliation. Tenants who successfully prove retaliation may recover actual damages and attorney fees.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding two months' rent for a fixed-term lease — North Carolina's statutory cap cannot be exceeded.",
  "Deposit return language giving the landlord more than 30 days without an interim accounting — NC law requires at least an interim statement within 30 days.",
  "Entry clauses with no notice requirement — courts expect reasonable notice (at least 24 hours) even without a specific statutory period.",
  "Lease clauses waiving the landlord's duty to provide fit and habitable premises — unenforceable under the Residential Rental Agreements Act.",
  "Eviction procedures that skip the required written notice — North Carolina courts require prior written notice before any summary ejectment filing.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full lease term.",
  "Late fees that compound daily or lack a grace period — North Carolina courts scrutinize unreasonable fee structures.",
];

export default function NorthCarolinaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="NC"
      stateName="North Carolina"
      introParagraph="North Carolina's Residential Rental Agreements Act and Tenant Security Deposit Act govern the relationship between renters and landlords statewide. North Carolina is generally landlord-friendly — there is no rent control and eviction timelines move quickly — but tenants still have meaningful rights around security deposit handling, habitability, entry notice, and protection from retaliatory eviction. Whether you rent in Charlotte, Raleigh, Durham, or elsewhere in North Carolina, here's what you need to know."
      whoIsProtectedIntro="North Carolina landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must provide fit and habitable premises — this duty cannot be waived by any lease provision",
        "Security deposits are capped by tenancy type and must be returned with an itemized statement within 30 days",
        "Evictions require a written notice and then court action — lockouts and utility shutoffs are illegal",
        "Retaliatory evictions within 12 months of a protected tenant complaint may be presumed unlawful",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ncdoj.gov/protecting-consumers/"
      agLabel="North Carolina Attorney General — Tenant Rights"
    />
  );
}
