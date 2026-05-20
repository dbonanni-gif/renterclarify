import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Rhode Island Tenant Rights — Complete Guide for Renters in RI",
  description:
    "A complete guide to Rhode Island tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Rhode Island Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap; return within 20 days",
    detail:
      "Rhode Island General Laws §34-18-19 caps security deposits at one month's rent. Landlords must return the deposit — along with a written itemized statement of any deductions — within 20 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees. The tenant must provide a forwarding address to start the 20-day clock.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Rhode Island has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "48-hour notice required — R.I. Gen. Laws §34-18-26",
    detail:
      "Rhode Island General Laws §34-18-26 requires landlords to give at least two days' (48 hours') advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times between 8 a.m. and 8 p.m. Emergency entry to prevent serious property damage or address an immediate safety threat may occur without prior notice. Unauthorized entry may entitle the tenant to seek injunctive relief and damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — R.I. Gen. Laws §34-18-22",
    detail:
      "Rhode Island General Laws §34-18-22 imposes a statutory duty on landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all electrical, plumbing, heating, and structural systems in working order and maintain common areas in a clean and safe condition. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within 20 days (or sooner for emergencies), tenants may pursue rent reduction, repair-and-deduct, or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Rhode Island landlords must serve a written 5-day notice to pay or vacate before filing an eviction action in district court (R.I. Gen. Laws §34-18-35). For other material lease violations, a 20-day cure notice is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Rhode Island and expose landlords to liability for actual damages, statutory damages, and attorney fees under R.I. Gen. Laws §34-18-34.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 180-day presumption of retaliation — R.I. Gen. Laws §34-18-46",
    detail:
      "Rhode Island General Laws §34-18-46 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 180 days of protected tenant activity, retaliation is presumed by law — one of the longest presumption periods in the country. Tenants who prove retaliation may terminate the lease, recover actual damages, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one month's rent — Rhode Island law caps this strictly and any excess is unenforceable.",
  "Deposit return language giving more than 20 days — Rhode Island's deadline runs from move-out plus forwarding address; wrongful withholding triggers double damages.",
  "Entry clauses with no notice or less than 48 hours' notice — R.I. Gen. Laws §34-18-26 requires at least two days for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under R.I. Gen. Laws §34-18-22.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 5-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Rhode Island.",
];

export default function RhodeIslandTenantRightsPage() {
  return (
    <StatePageShell
      abbr="RI"
      stateName="Rhode Island"
      introParagraph="Rhode Island landlord-tenant law (the Rhode Island Residential Landlord and Tenant Act, R.I. Gen. Laws §§34-18-1 to 34-18-57) establishes the rights and responsibilities of renters and landlords throughout the state. Rhode Island provides strong tenant protections including a one-month deposit cap, a 48-hour entry notice requirement, and one of the country's longest retaliation presumption periods at 180 days. Whether you rent in Providence, Cranston, Warwick, or a smaller Rhode Island community, understanding your rights is essential."
      whoIsProtectedIntro="Rhode Island landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent — any excess is unenforceable",
        "Security deposits must be returned within 20 days with a written itemized statement of deductions",
        "Landlords must give at least 48 hours' advance notice before non-emergency entry per R.I. Gen. Laws §34-18-26",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://riag.ri.gov/what-we-do"
      agLabel="Rhode Island Attorney General — What We Do"
    />
  );
}
