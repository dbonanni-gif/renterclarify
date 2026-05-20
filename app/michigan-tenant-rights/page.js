import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Michigan Tenant Rights — Complete Guide for Renters in MI",
  description:
    "A complete guide to Michigan tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Michigan Truth in Renting Act and related laws.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1.5 months' rent maximum; return within 30 days",
    detail:
      "Michigan's Security Deposit Act (M.C.L. §554.601 et seq.) caps security deposits at one and one-half months' rent. Landlords must provide a written inventory checklist at move-in detailing the condition of the unit — failure to do so forfeits the right to make damage deductions later. Deposits must be returned within 30 days of move-out along with a written, itemized statement of any deductions. If the landlord fails to return the deposit or provide the itemized statement on time, tenants may sue for twice the amount wrongfully withheld.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in Michigan",
    detail:
      "Michigan has no statewide rent control law. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least one rental period's written notice — typically 30 days — before a rent increase takes effect. There are no caps on the amount of any rent increase in Michigan.",
  },
  {
    topic: "Landlord Entry",
    value: "24 hours' notice required",
    detail:
      "Michigan law (M.C.L. §554.134) requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency inspections, repairs, or showings, and entry must occur at reasonable times. Emergency entry may occur without notice. Tenants may refuse entry if proper notice is not given and may seek damages for repeated unauthorized entry, which can constitute a breach of the covenant of quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability — landlord must maintain",
    detail:
      "Michigan courts recognize an implied warranty of habitability. Landlords must keep rental units in reasonable repair and in a condition fit for the use intended, complying with applicable housing and health codes. Tenants must give written notice of needed repairs. If the landlord fails to act within a reasonable time, tenants may have grounds to terminate the lease, withhold a portion of rent proportional to the deficiency, or pursue legal action. Michigan's Truth in Renting Act also prohibits illegal lease clauses that waive habitability rights.",
  },
  {
    topic: "Eviction Process",
    value: "7-day notice for non-payment; 30-day for lease violations",
    detail:
      "Michigan requires a 7-day written demand for possession for non-payment of rent before filing an eviction lawsuit (summary proceedings). For other lease violations, a 30-day notice to cure or vacate is required. Eviction cases are heard in District Court. Tenants have the right to appear, pay the overdue rent before judgment (for non-payment cases), and present defenses. Self-help evictions — locking out a tenant or removing belongings without a court order — are illegal in Michigan.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — Michigan law prohibits retaliatory conduct",
    detail:
      "Michigan law (M.C.L. §600.5720) prohibits landlords from retaliating against tenants who report housing code violations to government authorities, organize with other tenants, or exercise legal rights. Retaliation is a defense in eviction proceedings. Tenants facing retaliatory action may recover actual damages and may be entitled to remain in the unit. Documenting the timeline of complaints and subsequent landlord actions is essential to a successful retaliation claim.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one and one-half months' rent — Michigan's statutory cap is absolute and cannot be exceeded.",
  "No written move-in inventory checklist — landlords who skip this lose the right to deduct for damages at move-out.",
  "Deposit return language giving the landlord more than 30 days — the legal deadline starts on move-out day.",
  "Entry clauses with less than 24 hours' notice outside emergencies — violates M.C.L. §554.134.",
  "Clauses waiving the implied warranty of habitability — prohibited under Michigan's Truth in Renting Act.",
  "Eviction clauses skipping the required 7-day demand — Michigan courts require prior written demand before any court filing for non-payment.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full lease term.",
];

export default function MichiganTenantRightsPage() {
  return (
    <StatePageShell
      abbr="MI"
      stateName="Michigan"
      introParagraph="Michigan tenant protections are primarily governed by the Security Deposit Act, the Truth in Renting Act, and the summary proceedings statutes in the Revised Judicature Act. Michigan has no rent control, but it does cap security deposits, require move-in inventory checklists, and set a 24-hour entry notice standard. Whether you rent in Detroit, Grand Rapids, Ann Arbor, or elsewhere in Michigan, knowing your rights under state law is essential to protecting yourself."
      whoIsProtectedIntro="Michigan landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at 1.5 months' rent — and landlords must provide a written move-in inventory checklist",
        "Landlords must maintain the unit in a habitable condition — lease clauses waiving this are void under the Truth in Renting Act",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry",
        "Evictions require court action — lockouts and utility shutoffs are illegal in Michigan",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.michigan.gov/ag/consumer-protection"
      agLabel="Michigan Attorney General — Tenant Rights"
    />
  );
}
