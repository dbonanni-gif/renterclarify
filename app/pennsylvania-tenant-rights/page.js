import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Pennsylvania Tenant Rights — Complete Guide for Renters in PA",
  description:
    "A complete guide to Pennsylvania tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Pennsylvania landlord-tenant law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "2 months' rent (year 1); 1 month thereafter — return within 30 days",
    detail:
      "Pennsylvania's Landlord-Tenant Act (68 P.S. §250.511a) caps security deposits at two months' rent for the first year of tenancy and one month's rent for all subsequent years. Deposits must be held in an escrow account at a financial institution, and tenants must receive written notice of where the deposit is held. Landlords must return the deposit with an itemized written list of deductions within 30 days of move-out. Failure to comply allows tenants to sue for double the amount wrongfully withheld.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in Pennsylvania",
    detail:
      "Pennsylvania has no statewide rent control law and prohibits local rent control ordinances. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least 30 days' written notice before a rent increase takes effect. There are no caps on the amount of any rent increase in Pennsylvania.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required — no specific statutory period statewide",
    detail:
      "Pennsylvania law does not set a specific minimum notice period for landlord entry, but courts and standard practice require reasonable advance notice — generally interpreted as 24 hours — for non-emergency purposes including inspections, repairs, and showings. Emergency entry (fire, flooding, gas leak) requires no advance notice. The lease should specify the notice period; tenants should negotiate for at least 24 hours in writing. Repeated unauthorized entries may support a harassment claim.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability — landlord must maintain",
    detail:
      "Pennsylvania courts recognize an implied warranty of habitability in residential leases. Landlords must maintain the unit in a safe, sanitary, and habitable condition, including functional plumbing, heating, and structural systems. Tenants should put repair requests in writing to create a documented record. If a landlord fails to make essential repairs within a reasonable time after written notice, tenants may have grounds to terminate the lease, withhold rent (after following the legal process carefully), or seek court relief.",
  },
  {
    topic: "Eviction Process",
    value: "Notice to quit required; court filing follows",
    detail:
      "Pennsylvania requires landlords to serve a written notice to quit before filing an eviction lawsuit (unlawful detainer) — 10 days for non-payment of rent, 30 days for lease violations or no-fault termination for month-to-month tenancies. Evictions are heard in Magisterial District Court. Tenants have the right to appear and present defenses. Pennsylvania does not allow self-help evictions — changing locks, removing belongings, or shutting off utilities to force a tenant out is illegal and exposes the landlord to liability.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — courts recognize retaliation as a defense",
    detail:
      "Pennsylvania's Landlord-Tenant Act prohibits landlords from retaliating against tenants who report housing code violations to government authorities or exercise legal rights. Retaliation is a recognized defense in Pennsylvania eviction proceedings. Tenants facing retaliatory rent increases or eviction attempts should document the timeline of their complaint and the landlord's adverse action carefully. Some Pennsylvania municipalities provide additional local retaliation protections.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding two months' rent in year one — Pennsylvania's statutory cap cannot be exceeded.",
  "No escrow account disclosure — Pennsylvania law requires written notice of where the deposit is held.",
  "Deposit return language giving the landlord more than 30 days — the statutory deadline starts on move-out day.",
  "Entry clauses with no notice requirement — courts expect reasonable advance notice even without a state-specified minimum.",
  "Eviction clauses skipping the required notice to quit — Pennsylvania law mandates prior written notice before any court filing.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full term.",
  "Late fee provisions with no grace period or compounding daily penalties — Pennsylvania courts scrutinize unreasonable fee structures.",
];

export default function PennsylvaniaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="PA"
      stateName="Pennsylvania"
      introParagraph="Pennsylvania's Landlord-Tenant Act (68 P.S. §250.101 et seq.) establishes the rights and responsibilities of renters and landlords statewide. Pennsylvania has no rent control and relatively few statutory entry notice requirements, but it does provide meaningful protections around security deposit caps, escrow handling, and eviction procedures. Whether you rent in Philadelphia, Pittsburgh, Allentown, or a smaller Pennsylvania city, understanding your legal rights is the first step to protecting them."
      whoIsProtectedIntro="Pennsylvania landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at 2 months' rent (year 1) and 1 month thereafter — and must be held in escrow",
        "Landlords must maintain the unit in a habitable condition — this duty cannot be fully waived by lease",
        "Evictions require a written notice to quit and then court action — lockouts and utility shutoffs are illegal",
        "Security deposit deductions require an itemized written statement within 30 days of move-out",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.attorneygeneral.gov/protect-yourself/consumer-advisories/"
      agLabel="Pennsylvania Attorney General — Tenant Rights"
    />
  );
}
