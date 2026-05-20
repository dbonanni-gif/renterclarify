import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Nebraska Tenant Rights — Complete Guide for Renters in NE",
  description:
    "A complete guide to Nebraska tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Nebraska Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1.25-month cap; return within 14 days",
    detail:
      "Nebraska Revised Statute §76-1416 caps security deposits at one and a quarter months' rent. Landlords must return the deposit — along with a written itemized statement of any deductions — within 14 days of the tenant vacating the unit. Nebraska's 14-day deadline is one of the shortest in the country. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Nebraska has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory limit on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — Neb. Rev. Stat. §76-1423",
    detail:
      "Nebraska Revised Statute §76-1423 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to address an immediate threat to life or property may occur without notice. Repeated unauthorized entry may constitute a breach of quiet enjoyment and support a claim for damages or lease termination.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — Neb. Rev. Stat. §76-1419",
    detail:
      "Nebraska Revised Statute §76-1419 imposes a statutory duty on landlords to maintain rental units in a fit and habitable condition that complies with applicable building and housing codes. Landlords must keep all electrical, plumbing, heating, and structural systems in working order and maintain common areas in a clean and safe condition. Tenants must give written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue rent reduction, repair-and-deduct (subject to statutory limits), or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; 30-day notice for other violations",
    detail:
      "For nonpayment of rent, Nebraska landlords must serve a written 3-day notice to pay or vacate before filing an eviction action in county court (Neb. Rev. Stat. §76-1431). For other material lease violations, a 30-day cure notice is required; if the breach is not remedied, an additional 30-day termination notice follows. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Nebraska and expose landlords to liability for actual damages plus attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory acts prohibited by Neb. Rev. Stat. §76-1439",
    detail:
      "Nebraska Revised Statute §76-1439 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. Prohibited retaliatory acts include rent increases, reduction in services, and eviction. If a landlord takes adverse action within a reasonable period after protected tenant activity, retaliation may be presumed. Tenants who prove retaliation may recover actual damages, terminate the lease, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one and a quarter months' rent — Nebraska law caps this and any excess is unenforceable.",
  "Deposit return language giving more than 14 days — Nebraska has one of the shortest deposit return deadlines in the country; missing it triggers double-damage liability.",
  "Entry clauses with no notice or less than 24 hours' notice — Neb. Rev. Stat. §76-1423 requires at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under Neb. Rev. Stat. §76-1419.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Nebraska.",
];

export default function NebraskaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="NE"
      stateName="Nebraska"
      introParagraph="Nebraska landlord-tenant law (the Nebraska Residential Landlord and Tenant Act, Neb. Rev. Stat. §§76-1401 to 76-1449) establishes the rights and responsibilities of renters and landlords throughout the state. Nebraska provides a statutory warranty of habitability, a mandatory 24-hour entry notice, a deposit cap of one and a quarter months, and one of the country's shortest deposit return deadlines at just 14 days. Whether you rent in Omaha, Lincoln, Bellevue, or a smaller Nebraska community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Nebraska landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one and a quarter months' rent — any excess is unenforceable",
        "Security deposits must be returned within 14 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per Neb. Rev. Stat. §76-1423",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ago.nebraska.gov/consumer-protection"
      agLabel="Nebraska Attorney General — Consumer Protection"
    />
  );
}
