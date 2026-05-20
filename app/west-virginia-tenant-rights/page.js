import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "West Virginia Tenant Rights — Complete Guide for Renters in WV",
  description:
    "A complete guide to West Virginia tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the West Virginia Residential Rental Property Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 45 days (no deductions) or 60 days (with deductions)",
    detail:
      "West Virginia Code §37-6A-2 sets no maximum on security deposits. If no deductions are made, the landlord must return the deposit within 45 days of move-out. If deductions are made, the landlord must provide a written itemized statement of deductions and return any balance within 60 days. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit and reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice required",
    detail:
      "West Virginia has no statewide rent control law. Under W. Va. Code §37-6-5, landlords must provide at least 30 days' written notice before a rent increase takes effect for month-to-month tenancies. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required (24 hours is standard)",
    detail:
      "West Virginia law does not specify an exact statutory notice period for landlord entry, but courts and landlord-tenant practice treat 24 hours as the standard for reasonable advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Emergency entry to address an immediate threat to health or safety may occur without prior notice. Repeated unannounced entries may constitute lease breach and harassment.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability — W. Va. Code §37-6-16",
    detail:
      "West Virginia recognizes an implied warranty of habitability under §37-6-16 and the Residential Rental Property Act, requiring landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order. If the landlord fails to make necessary repairs after written notice, tenants may pursue rent withholding, repair-and-deduct, or lease termination through the courts.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment — §55-3A-1",
    detail:
      "For non-payment of rent, West Virginia landlords must serve a written 3-day pay-or-quit notice before filing an unlawful detainer action in circuit or magistrate court (W. Va. Code §55-3A-1). For other lease violations, a notice to cure or vacate is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in West Virginia and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected under W. Va. Code §37-6-30",
    detail:
      "West Virginia Code §37-6-30 prohibits landlords from retaliating against tenants who report housing code violations to government authorities, complain about habitability conditions, or exercise any legal right under the lease or state law. Prohibited retaliatory acts include eviction, rent increases, and reduction of services. Courts recognize retaliatory motive as a defense to eviction proceedings. Tenants who prove retaliation may recover actual damages and attorney fees.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving fewer than the statutory 45 or 60 days — know which deadline applies: 45 days for no deductions, 60 days when deductions are made.",
  "Entry clauses allowing access with no advance notice — 24 hours is the accepted standard for non-emergency entry in West Virginia.",
  "Lease clauses attempting to waive the implied warranty of habitability — unenforceable under W. Va. Code §37-6-16.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's habitability duty.",
  "Eviction notice with fewer than 3 days to pay for non-payment — defective notice will be dismissed in court.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in West Virginia.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function WestVirginiaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="WV"
      stateName="West Virginia"
      introParagraph="West Virginia landlord-tenant law (W. Va. Code Chapter 37 and the Residential Rental Property Act) governs the rights and responsibilities of renters and landlords throughout the state. West Virginia provides a judicially recognized implied warranty of habitability, tiered deposit return deadlines of 45 or 60 days, court-required eviction procedures, and retaliation protections for tenants who exercise their legal rights. Whether you rent in Charleston, Huntington, Morgantown, or a smaller West Virginia community, understanding your rights is essential."
      whoIsProtectedIntro="West Virginia landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the implied warranty cannot be waived by any lease provision",
        "Security deposits must be returned within 45 days (no deductions) or 60 days (with itemized deductions)",
        "Landlords must provide reasonable advance notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ago.wv.gov/consumer-protection/file-complaint-consumer-protection-division"
      agLabel="West Virginia Attorney General — Consumer Protection Division"
    />
  );
}
