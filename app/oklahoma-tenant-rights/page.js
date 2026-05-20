import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Oklahoma Tenant Rights — Complete Guide for Renters in OK",
  description:
    "A complete guide to Oklahoma tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Oklahoma Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 30–45 days",
    detail:
      "Oklahoma's Residential Landlord and Tenant Act (41 O.S. §115) sets no maximum on security deposits. If the landlord makes no deductions, the deposit must be returned within 30 days of the tenant vacating. If deductions are made, the landlord must provide a written itemized statement and return any balance within 45 days. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus a penalty of up to twice the deposit amount, along with reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Oklahoma has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be raised unless the lease expressly permits it. There is no statutory limit on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — 41 O.S. §128",
    detail:
      "Oklahoma Statute 41 O.S. §128 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to protect the property or address immediate safety concerns may occur without prior notice. Repeated unauthorized entry may constitute a violation of the tenant's right to quiet enjoyment and may support a claim for damages.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability — 41 O.S. §118",
    detail:
      "Oklahoma Statute 41 O.S. §118 imposes a statutory duty on landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all structural, mechanical, electrical, and plumbing systems in working order. Tenants must provide written notice of needed repairs and give the landlord a reasonable time to respond. If repairs are not made, tenants may pursue remedies including rent reduction, repair-and-deduct (up to $100 or one month's rent), or lease termination for material noncompliance.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for nonpayment; 10-day notice for lease violations",
    detail:
      "For nonpayment of rent, Oklahoma landlords must provide a written 5-day notice to pay or vacate before filing a forcible entry and detainer action in district court (41 O.S. §131). For other material lease violations, a 10-day cure notice is required; if uncured, an additional 20-day termination notice follows. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal under Oklahoma law and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption of retaliation — 41 O.S. §123",
    detail:
      "Oklahoma Statute 41 O.S. §123 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed. Tenants may use retaliation as an affirmative defense in eviction proceedings and may recover actual damages including relocation costs.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 30 days (without deductions) or 45 days (with deductions) — Oklahoma's deadlines run from the move-out date.",
  "Entry clauses with no notice requirement or notice shorter than 24 hours — Oklahoma statute requires at least 24 hours' advance notice for non-emergency entry.",
  "Lease clauses waiving the implied warranty of habitability — unenforceable under 41 O.S. §118.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 5-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities instead of going to court — self-help eviction is illegal in Oklahoma.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function OklahomaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="OK"
      stateName="Oklahoma"
      introParagraph="Oklahoma landlord-tenant law (the Oklahoma Residential Landlord and Tenant Act, 41 O.S. §§101–136) establishes the rights and responsibilities of renters and landlords throughout the state. Oklahoma provides a statutory warranty of habitability, a 24-hour entry notice requirement, a 90-day retaliation presumption, and court-required eviction procedures. Whether you rent in Oklahoma City, Tulsa, Norman, or a smaller Oklahoma community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Oklahoma landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the implied warranty under 41 O.S. §118 cannot be waived",
        "Security deposits must be returned within 30 days (no deductions) or 45 days (with itemized deductions)",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per 41 O.S. §128",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://oklahoma.gov/oag/complaints-tiplines/complaints/consumer.html"
      agLabel="Oklahoma Attorney General — Consumer Protection"
    />
  );
}
