import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Massachusetts Tenant Rights — Complete Guide for Renters in MA",
  description:
    "A complete guide to Massachusetts tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Massachusetts landlord-tenant law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1 month's rent maximum; return within 30 days",
    detail:
      "Massachusetts General Laws Chapter 186 §15B imposes one of the strictest security deposit regimes in the country. Deposits are capped at one month's rent — no more, regardless of what the lease says. Landlords must hold the deposit in a separate interest-bearing account, provide written notice of the bank and account number within 30 days, and pay annual interest at 5% or the actual bank rate (whichever is higher). The deposit must be returned with itemized deductions within 30 days of move-out. Violations entitle tenants to up to three times the deposit amount plus attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30 days' notice for month-to-month",
    detail:
      "Massachusetts repealed statewide rent control in 1994. There is currently no statewide cap on rent increases, though some cities have explored local stabilization measures. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least 30 days' written notice before a rent increase takes effect. Rent can be raised to any amount with proper notice.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required — 24 hours is standard",
    detail:
      "Massachusetts law requires landlords to provide reasonable advance notice before entering a rental unit for non-emergency purposes. While no specific number of hours is mandated statewide, courts and standard practice treat 24 hours as the minimum for inspections, repairs, and showings. Emergency entry — fire, flooding, or gas leak — may occur without notice. Repeated unauthorized entry may constitute a breach of the covenant of quiet enjoyment, which carries statutory damages of up to three months' rent in Massachusetts.",
  },
  {
    topic: "Habitability",
    value: "Strict warranty of habitability — State Sanitary Code applies",
    detail:
      "Massachusetts enforces one of the country's strongest habitability regimes through the State Sanitary Code (105 CMR 410). Landlords must maintain rental units in compliance with the code, including functional heating (minimum 68°F from Sept. 16 – June 14), plumbing, electrical systems, and structural safety. Tenants may report violations to the local board of health, which can order repairs. Tenants may also withhold rent, repair-and-deduct (up to four months' rent after notice), or be placed in a court-supervised escrow account.",
  },
  {
    topic: "Eviction Process",
    value: "14-day notice for non-payment; 30-day for no-fault termination",
    detail:
      "Massachusetts requires a 14-day written notice to pay or quit for non-payment of rent before filing a summary process (eviction) case in Housing Court or District Court. For no-fault termination of a month-to-month tenancy, a 30-day notice is required. Tenants have the right to appear in court, pay all owed rent before a judgment for possession (right to cure), and raise habitability-related defenses. Self-help evictions — lockouts, utility shutoffs, or removal of belongings — are illegal and can result in triple damages for the tenant.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — presumed retaliatory within 6 months",
    detail:
      "Massachusetts General Laws Chapter 186 §18 prohibits landlords from retaliating against tenants who report code violations, contact the board of health, organize with other tenants, or exercise any legal right. The law creates a presumption of retaliation if a landlord increases rent, decreases services, or seeks to evict within 6 months of protected tenant activity. Successful retaliation claims entitle tenants to up to three months' rent plus attorney fees — one of the strongest retaliation remedies in the country.",
  },
];

const RED_FLAGS = [
  "Security deposit above one month's rent — the Massachusetts statutory cap is absolute and any excess must be returned.",
  "No written notice of the deposit bank and account number within 30 days — a required disclosure under M.G.L. c. 186 §15B.",
  "Lease waiving the landlord's duty to comply with the State Sanitary Code — unenforceable under Massachusetts law.",
  "Entry clauses allowing access with no notice or less than 24 hours' notice — inconsistent with the covenant of quiet enjoyment.",
  "Last month's rent collected at move-in with no interest — Massachusetts requires landlords to pay interest on last month's rent held.",
  "Eviction notice with fewer than 14 days to pay for non-payment — courts will dismiss the case if the notice period is defective.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full term.",
];

export default function MassachusettsTenantRightsPage() {
  return (
    <StatePageShell
      abbr="MA"
      stateName="Massachusetts"
      introParagraph="Massachusetts has some of the most protective tenant laws in the United States. The security deposit cap is capped at one month's rent — period. The State Sanitary Code imposes strict habitability standards enforced by local boards of health. And the anti-retaliation statute creates a presumption of retaliation lasting six months, with triple-damages exposure for landlords. Whether you rent in Boston, Cambridge, Springfield, or a smaller Massachusetts city, here's what you need to know."
      whoIsProtectedIntro="Massachusetts landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent — any amount above this must be returned immediately",
        "Landlords must pay annual interest on security deposits and last month's rent held at move-in",
        "The State Sanitary Code requires functional heating, plumbing, and safe living conditions — enforceable by the board of health",
        "Evictions require court action — lockouts, utility shutoffs, and property removal carry triple damages in Massachusetts",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.mass.gov/guides/tenant-rights"
      agLabel="Massachusetts — Tenant Rights Guide"
    />
  );
}
