import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Alaska Tenant Rights — Complete Guide for Renters in AK",
  description:
    "A complete guide to Alaska tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Alaska Uniform Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 14 days (no deductions) or 30 days (with deductions)",
    detail:
      "Alaska Statute §34.03.070 sets no maximum on security deposits. If no deductions are made, the landlord must return the deposit within 14 days of the tenant vacating. If deductions are claimed, the landlord must provide a written itemized statement and return any balance within 30 days. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees and court costs.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Alaska has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — AS §34.03.140",
    detail:
      "Alaska Statute §34.03.140 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious property damage or address an immediate safety threat may occur without notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment and damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — AS §34.03.100",
    detail:
      "Alaska Statute §34.03.100 imposes a statutory duty on landlords to maintain rental units in a fit and habitable condition that complies with applicable building and housing codes. Landlords must keep all plumbing, heating, electrical, and structural systems in good working order and maintain common areas in a clean and safe condition. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue rent reduction, repair-and-deduct, or lease termination under AS §34.03.160.",
  },
  {
    topic: "Eviction Process",
    value: "7-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Alaska landlords must serve a written 7-day notice to pay or vacate before filing an eviction action in district or superior court (AS §34.03.220). For other material lease violations, a 10-day cure notice is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Alaska and expose landlords to liability for actual damages plus attorney fees under AS §34.03.210.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption of retaliation — AS §34.03.310",
    detail:
      "Alaska Statute §34.03.310 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages including relocation costs, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 14 days (no deductions) or 30 days (with deductions) — Alaska's tiered deadlines run from the move-out date; missing them triggers double-damage liability.",
  "Entry clauses with no notice or less than 24 hours' notice — AS §34.03.140 requires at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under AS §34.03.100.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 7-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Alaska.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function AlaskaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="AK"
      stateName="Alaska"
      introParagraph="Alaska landlord-tenant law (the Alaska Uniform Residential Landlord and Tenant Act, AS §§34.03.010–34.03.360) establishes the rights and responsibilities of renters and landlords throughout the state. Alaska provides a statutory warranty of habitability, a mandatory 24-hour entry notice, a 90-day retaliation presumption, and tiered deposit return deadlines of 14 or 30 days depending on whether deductions are made. Whether you rent in Anchorage, Fairbanks, Juneau, or a smaller Alaska community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Alaska landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory warranty under AS §34.03.100 cannot be waived",
        "Security deposits must be returned within 14 days (no deductions) or 30 days (with itemized deductions)",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per AS §34.03.140",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://law.alaska.gov/department/civil/consumer/landlord-tenant.html"
      agLabel="Alaska Department of Law — Landlord and Tenant"
    />
  );
}
