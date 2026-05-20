import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "North Dakota Tenant Rights — Complete Guide for Renters in ND",
  description:
    "A complete guide to North Dakota tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under North Dakota Century Code Title 47.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap; return within 30 days",
    detail:
      "North Dakota Century Code §47-16-07.1 caps security deposits at one month's rent (or $2,500, whichever is greater, if pets are permitted). Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "North Dakota has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — N.D.C.C. §47-16-07.3",
    detail:
      "North Dakota Century Code §47-16-07.3 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious property damage or address an immediate safety threat may occur without prior notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment and damages.",
  },
  {
    topic: "Habitability",
    value: "Landlord duty to maintain — N.D.C.C. §47-16-13",
    detail:
      "North Dakota Century Code §47-16-13 requires landlords to maintain rental premises in a habitable condition and to comply with applicable housing and health codes. Landlords must keep all essential systems — plumbing, heating, and electrical — in working order. Tenants must notify the landlord in writing of repair needs. If the landlord fails to make necessary repairs within a reasonable time, tenants may have remedies including rent reduction or lease termination, though North Dakota's statutory tenant remedies are more limited than in some other states.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, North Dakota landlords must serve a written 3-day notice to pay or vacate before filing a forcible entry and detainer action in district court (N.D.C.C. §33-06-01). For other lease violations, appropriate written notice is required before filing. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property without a court order — are illegal in North Dakota and expose landlords to liability for actual damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory acts prohibited — N.D.C.C. §47-16-17.1",
    detail:
      "North Dakota Century Code §47-16-17.1 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise their legal rights under the lease or state law. Prohibited retaliatory acts include eviction, rent increases, and reduction of services. Tenants who can prove retaliation may assert it as a defense in eviction proceedings and may recover actual damages in appropriate cases.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one month's rent (without an approved pet clause) — North Dakota law caps deposits and any unauthorized excess is unenforceable.",
  "Deposit return language giving more than 30 days — North Dakota's deadline runs from move-out; missing it triggers double-damage liability.",
  "Entry clauses with no notice or less than 24 hours' notice — N.D.C.C. §47-16-07.3 requires at least 24 hours for non-emergency entry.",
  "Lease clauses purporting to waive the landlord's duty to maintain habitability — unenforceable under N.D.C.C. §47-16-13.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in North Dakota.",
];

export default function NorthDakotaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="ND"
      stateName="North Dakota"
      introParagraph="North Dakota landlord-tenant law (N.D.C.C. Title 47) governs the rights and responsibilities of renters and landlords throughout the state. North Dakota provides a one-month deposit cap, a mandatory 24-hour entry notice, a 30-day deposit return deadline, court-required eviction procedures, and retaliation protections for tenants who report code violations or exercise their legal rights. Whether you rent in Fargo, Bismarck, Grand Forks, or a smaller North Dakota community, understanding your rights is essential."
      whoIsProtectedIntro="North Dakota landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent (higher limits apply only for pet-approved units)",
        "Security deposits must be returned within 30 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per N.D.C.C. §47-16-07.3",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.nd.gov/dfi/education-and-other-resources/consumer-protection"
      agLabel="North Dakota — Consumer Protection Resources"
    />
  );
}
