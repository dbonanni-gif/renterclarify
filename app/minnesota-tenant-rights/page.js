import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Minnesota Tenant Rights — Complete Guide for Renters in MN",
  description:
    "A complete guide to Minnesota tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Minnesota Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 21 days",
    detail:
      "Minnesota Statute §504B.178 sets no maximum on security deposits. Landlords must return the deposit with an itemized written statement of any deductions within 21 days of the tenant vacating the unit. For deposits held more than one month, landlords must pay simple interest at a rate set by state law. Landlords who wrongfully withhold any portion of the deposit may be sued for the withheld amount plus damages up to twice the amount wrongfully withheld, plus attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; full rental period notice required",
    detail:
      "Minnesota has no statewide rent control law. For month-to-month tenancies, landlords must give at least one full rental period's written notice (typically 30 days) before a rent increase takes effect. During a fixed-term lease, rent may not be increased unless the lease expressly allows it. There are no limits on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required (24 hours is standard)",
    detail:
      "Minnesota Statute §504B.211 requires landlords to give 'reasonable notice' before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. The statute does not define a specific minimum period, but courts and standard practice treat 24 hours as the minimum reasonable notice. Emergency entry may occur without notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment or harassment.",
  },
  {
    topic: "Habitability",
    value: "Implied covenant of habitability — landlord must maintain",
    detail:
      "Minnesota recognizes an implied covenant of habitability in residential leases (Minn. Stat. §504B.131). Landlords must maintain rental units in a safe, sanitary, and habitable condition compliant with applicable housing codes. Tenants must give written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may withhold rent, repair-and-deduct, terminate the lease, or pursue damages. Minnesota's rent escrow remedy (§504B.385) allows tenants to deposit withheld rent with a court pending repairs — a powerful tool when used correctly.",
  },
  {
    topic: "Eviction Process",
    value: "14-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Minnesota landlords must provide a 14-day written notice to pay or vacate before filing an eviction action in district court (Minn. Stat. §504B.135). For lease violations, notice periods depend on the nature of the violation — immediate eviction may apply for serious violations such as drug activity or significant property damage. Minnesota eviction hearings are typically scheduled within a few weeks of filing. Self-help evictions — lockouts, utility shutoffs, or property removal — are illegal and expose landlords to liability for damages including one month's rent or actual damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — adverse action within 90 days presumed retaliatory",
    detail:
      "Minnesota law prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right (Minn. Stat. §504B.285). If a landlord takes adverse action — rent increase, reduction in services, eviction — within 90 days of protected tenant activity, retaliation is presumed. Tenants who prove retaliation may terminate the lease, recover damages, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 21 days — Minnesota's legal deadline is strict and runs from the move-out date.",
  "No mention of deposit interest — Minnesota law requires interest on deposits held more than one month.",
  "Entry clauses with no notice requirement — courts expect at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the implied covenant of habitability — unenforceable under Minnesota law.",
  "Eviction procedures that skip the required 14-day notice for nonpayment — defective notice will be dismissed.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — contradicts the landlord's habitability duty.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you in for another full term.",
];

export default function MinnesotaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="MN"
      stateName="Minnesota"
      introParagraph="Minnesota's landlord-tenant law (Minn. Stat. Chapter 504B) establishes the rights and responsibilities of renters and landlords throughout the state. Minnesota provides strong habitability protections, a court-administered rent escrow remedy for repair disputes, and broad retaliation protections — making it one of the more tenant-protective Midwestern states. Whether you rent in Minneapolis, St. Paul, Duluth, or a smaller Minnesota community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Minnesota landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the implied covenant of habitability cannot be waived by any lease provision",
        "Security deposits must be returned within 21 days with an itemized written statement of deductions",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.ag.state.mn.us/Consumer/Housing/"
      agLabel="Minnesota Attorney General — Landlord and Tenant"
    />
  );
}
