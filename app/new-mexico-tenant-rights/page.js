import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "New Mexico Tenant Rights — Complete Guide for Renters in NM",
  description:
    "A complete guide to New Mexico tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the New Mexico Uniform Owner-Resident Relations Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap; return within 30 days",
    detail:
      "New Mexico Code §47-8-18 limits security deposits to one month's rent for leases of less than one year, and allows a higher deposit for year-long or longer leases if agreed in writing. Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "New Mexico has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — N.M. Stat. §47-8-24",
    detail:
      "New Mexico Code §47-8-24 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious property damage or address an immediate health or safety threat may occur without prior notice. Repeated unauthorized entry may give the tenant grounds to terminate the lease and recover damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — N.M. Stat. §47-8-20",
    detail:
      "New Mexico Code §47-8-20 requires landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order and maintain common areas safely. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue remedies including rent reduction, repair-and-deduct (with statutory limits), or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, New Mexico landlords must serve a written 3-day notice to pay or vacate before filing an eviction action in magistrate or district court (N.M. Stat. §47-8-33). For other material lease violations, a 7-day notice to cure or vacate is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in New Mexico and expose landlords to liability for actual damages, attorney fees, and up to two months' rent in additional damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption — N.M. Stat. §47-8-39",
    detail:
      "New Mexico Code §47-8-39 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the Owner-Resident Relations Act. A 90-day rebuttable presumption of retaliation arises if adverse action follows a protected activity within that window. Prohibited acts include eviction, rent increases, and reduction of services. Tenants who prove retaliation may terminate the lease, recover actual damages, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Deposit clauses exceeding one month's rent on short-term leases — New Mexico law caps the deposit at one month's rent for leases under one year.",
  "Deposit return language giving more than 30 days — New Mexico's legal deadline runs from move-out; missing it triggers double-damage liability.",
  "Entry clauses with no notice or less than 24 hours' notice — N.M. Stat. §47-8-24 requires at least 24 hours before non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under N.M. Stat. §47-8-20.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in New Mexico.",
];

export default function NewMexicoTenantRightsPage() {
  return (
    <StatePageShell
      abbr="NM"
      stateName="New Mexico"
      introParagraph="New Mexico landlord-tenant law (the Uniform Owner-Resident Relations Act, N.M. Stat. Ann. §§47-8-1 to 47-8-52) governs the rights and responsibilities of renters and landlords throughout the state. New Mexico provides a statutory warranty of habitability, a mandatory 24-hour entry notice, a one-month deposit cap for short-term leases, a 30-day deposit return deadline, and retaliation protections with a 90-day rebuttable presumption. Whether you rent in Albuquerque, Santa Fe, Las Cruces, or a smaller New Mexico community, understanding your rights is essential."
      whoIsProtectedIntro="New Mexico landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory warranty under N.M. Stat. §47-8-20 cannot be waived",
        "Security deposits are capped at one month's rent for leases under one year and must be returned within 30 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per N.M. Stat. §47-8-24",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://nmdoj.gov/about-the-office/consumer-affairs/"
      agLabel="New Mexico DOJ — Consumer Affairs"
    />
  );
}
