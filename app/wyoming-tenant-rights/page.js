import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Wyoming Tenant Rights — Complete Guide for Renters in WY",
  description:
    "A complete guide to Wyoming tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Wyoming Statutes §§1-21-1201 to 1-21-1211.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No statutory cap; return within 30 days",
    detail:
      "Wyoming Code §1-21-1208 sets no maximum on security deposits. If no deductions are made, the deposit must be returned within 30 days of the tenant vacating. If deductions are made, the landlord must provide a written itemized statement within 30 days. Landlords who wrongfully withhold any portion of the deposit may be liable for the amount withheld plus damages. Tenants should document the unit's condition thoroughly at both move-in and move-out.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; notice equal to rent period",
    detail:
      "Wyoming has no statewide rent control law. For month-to-month tenancies, landlords must give notice equal to the rent payment period (typically one month) before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required (24 hours is standard)",
    detail:
      "Wyoming law does not specify an exact notice period for landlord entry, but courts and landlord-tenant practice treat 24 hours as the standard for reasonable advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Emergency entry to address an immediate health or safety threat may occur without prior notice. Repeated unannounced entries may constitute harassment and lease breach.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability — §1-21-1202",
    detail:
      "Wyoming recognizes an implied warranty of habitability under §1-21-1202 and case law, requiring landlords to maintain rental units in a condition fit for human habitation that complies with applicable building and housing codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order. If the landlord fails to make necessary repairs after written notice, tenants may pursue rent withholding, repair-and-deduct, or lease termination through the courts.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment — §1-21-1003",
    detail:
      "For non-payment of rent, Wyoming landlords must serve a written 3-day pay-or-quit notice before filing an unlawful detainer action in district court (§1-21-1003). For other lease violations, a notice to cure or vacate is required before court proceedings. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Wyoming and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Retaliatory eviction is prohibited",
    detail:
      "Wyoming law prohibits landlords from pursuing retaliatory evictions against tenants who report housing code violations to government authorities, complain about habitability conditions, or exercise any legal right. Courts recognize retaliatory motive as a complete defense to an eviction action. Tenants who prove retaliation may recover actual damages and attorney fees. While Wyoming does not codify a specific statutory presumption period, case law protects tenants from adverse action taken in response to protected activity.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 30 days — Wyoming's deadline runs from move-out and courts take it seriously.",
  "Rent increase notice shorter than one full rental period — Wyoming requires at least one period's notice for month-to-month tenants.",
  "Entry clauses allowing access with no notice whatsoever — 24 hours is the accepted standard for non-emergency entry in Wyoming.",
  "Lease clauses attempting to waive the implied warranty of habitability — unenforceable under Wyoming law.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's habitability duty.",
  "Eviction notice with fewer than 3 days to pay for non-payment — defective notice will result in dismissal in district court.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Wyoming.",
];

export default function WyomingTenantRightsPage() {
  return (
    <StatePageShell
      abbr="WY"
      stateName="Wyoming"
      introParagraph="Wyoming landlord-tenant law (Wyo. Stat. §§1-21-1201 to 1-21-1211) governs the rights and responsibilities of renters and landlords throughout the state. Wyoming provides a judicially recognized implied warranty of habitability, a 30-day security deposit return deadline, court-required eviction procedures, and retaliation protections for tenants who report code violations or exercise their legal rights. Wyoming's statutory framework is relatively lean compared to other states — understanding your baseline rights is especially important here. Whether you rent in Cheyenne, Casper, Laramie, or a smaller Wyoming community, here's what you need to know."
      whoIsProtectedIntro="Wyoming landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the implied warranty of habitability cannot be waived by any lease provision",
        "Security deposits must be returned within 30 days of move-out (if no deductions are made)",
        "Landlords must provide reasonable advance notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ag.wyo.gov/law-office-division/consumer-protection-and-antitrust-unit"
      agLabel="Wyoming Attorney General — Consumer Protection"
    />
  );
}
