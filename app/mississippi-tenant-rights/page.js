import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Mississippi Tenant Rights — Complete Guide for Renters in MS",
  description:
    "A complete guide to Mississippi tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Mississippi Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 45 days",
    detail:
      "Mississippi Code §89-8-21 sets no maximum on security deposits. Landlords must return the deposit — along with a written itemized statement of any deductions — within 45 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees and court costs.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Mississippi has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; 24 hours is standard",
    detail:
      "Mississippi's Residential Landlord and Tenant Act requires landlords to give reasonable notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Courts and standard practice treat 24 hours as the minimum reasonable advance notice. Emergency entry to prevent serious damage or address an immediate safety threat may occur without prior notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Statutory duty to maintain — Miss. Code §89-8-23",
    detail:
      "Mississippi Code §89-8-23 requires landlords to maintain rental units in a fit and habitable condition that complies with applicable building and housing codes affecting health and safety. Landlords must keep all plumbing, heating, electrical, and structural systems in working order and maintain common areas in a clean and safe condition. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue remedies including rent withholding or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Mississippi landlords must serve a written 3-day notice to pay or vacate before filing an eviction action in justice court (Miss. Code §89-8-13). For other material lease violations, a 30-day cure notice is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Mississippi and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory acts prohibited — Miss. Code §89-8-17",
    detail:
      "Mississippi Code §89-8-17 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. Prohibited retaliatory acts include eviction, rent increases, and reduction of services. Tenants who prove retaliation may terminate the lease, recover actual damages including relocation costs, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 45 days — Mississippi's legal deadline runs from the move-out date; missing it triggers double-damage liability.",
  "Entry clauses with no notice requirement — courts expect at least 24 hours' reasonable advance notice before non-emergency landlord entry.",
  "Lease clauses waiving the landlord's duty to maintain habitability — unenforceable under Miss. Code §89-8-23.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Mississippi.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function MississippiTenantRightsPage() {
  return (
    <StatePageShell
      abbr="MS"
      stateName="Mississippi"
      introParagraph="Mississippi landlord-tenant law (the Mississippi Residential Landlord and Tenant Act, Miss. Code Ann. §§89-8-1 to 89-8-29) governs the rights and responsibilities of renters and landlords throughout the state. Mississippi provides a statutory duty on landlords to maintain habitable conditions, a 45-day deposit return deadline, court-required eviction procedures, and retaliation protections for tenants who exercise their legal rights. Whether you rent in Jackson, Gulfport, Hattiesburg, or a smaller Mississippi community, understanding your rights is essential."
      whoIsProtectedIntro="Mississippi landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory duty under Miss. Code §89-8-23 cannot be waived",
        "Security deposits must be returned within 45 days with a written itemized statement of deductions",
        "Landlords must provide reasonable advance notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.ago.state.ms.us/divisions/consumer-protection/"
      agLabel="Mississippi Attorney General — Consumer Protection"
    />
  );
}
