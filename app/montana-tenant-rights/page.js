import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Montana Tenant Rights — Complete Guide for Renters in MT",
  description:
    "A complete guide to Montana tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Montana Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 10 days (no deductions) or 30 days (with deductions)",
    detail:
      "Montana Code §70-25-202 sets no maximum on security deposits. If no deductions are made, the landlord must return the deposit within 10 days of the tenant vacating. If deductions are claimed, the landlord must provide a written itemized statement and return any balance within 30 days. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus court costs and reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 15-day notice for month-to-month",
    detail:
      "Montana has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 15 days' written notice before a rent increase takes effect (Mont. Code Ann. §70-24-441). During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — Mont. Code Ann. §70-24-312",
    detail:
      "Montana Code §70-24-312 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious damage to the property or address an immediate safety threat may occur without prior notice. Repeated unauthorized entry is prohibited and may support a claim for breach of quiet enjoyment and damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — Mont. Code Ann. §70-24-303",
    detail:
      "Montana Code §70-24-303 imposes a statutory duty on landlords to maintain rental units in a fit and habitable condition that complies with applicable building and housing codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order and maintain common areas in a clean and safe condition. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue rent reduction, repair-and-deduct, or lease termination under Montana's landlord-tenant remedies.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; 14-day notice for lease violations",
    detail:
      "For nonpayment of rent, Montana landlords must serve a written 3-day notice to pay or vacate before filing an eviction action in justice or district court (Mont. Code Ann. §70-24-422). For other material lease violations, a 14-day cure notice is required; if the breach is not remedied, the landlord may then proceed with eviction. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Montana and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 6-month presumption of retaliation — Mont. Code Ann. §70-24-431",
    detail:
      "Montana Code §70-24-431 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within six months of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages including relocation costs, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 10 days (no deductions) or 30 days (with deductions) — Montana's tiered deadlines are strict; missing them triggers double-damage liability.",
  "Entry clauses with no notice or less than 24 hours' notice — Mont. Code Ann. §70-24-312 requires at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under Mont. Code Ann. §70-24-303.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Montana.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function MontanaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="MT"
      stateName="Montana"
      introParagraph="Montana landlord-tenant law (the Montana Residential Landlord and Tenant Act, Mont. Code Ann. §§70-24-101 to 70-24-442) establishes the rights and responsibilities of renters and landlords throughout the state. Montana provides a statutory warranty of habitability, a mandatory 24-hour entry notice, a six-month retaliation presumption, and a tiered security deposit return deadline of 10 or 30 days depending on whether deductions are made. Whether you rent in Billings, Missoula, Great Falls, or a smaller Montana community, understanding your rights is essential."
      whoIsProtectedIntro="Montana landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory warranty under Mont. Code Ann. §70-24-303 cannot be waived",
        "Security deposits must be returned within 10 days (no deductions) or 30 days (with itemized deductions)",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per Mont. Code Ann. §70-24-312",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://dojmt.gov/office-of-consumer-protection/consumer-complaints/"
      agLabel="Montana Department of Justice — Consumer Protection"
    />
  );
}
