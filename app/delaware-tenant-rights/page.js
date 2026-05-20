import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Delaware Tenant Rights — Complete Guide for Renters in DE",
  description:
    "A complete guide to Delaware tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Delaware Residential Landlord-Tenant Code.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap (after first year); return within 20 days",
    detail:
      "Delaware Code 25 Del. C. §5514 caps security deposits at one month's rent — however, during the first year of a new tenancy landlords may collect up to two months' rent as a deposit. After the first year, the deposit must be reduced to one month if it exceeds that amount. Landlords must return the deposit with a written itemized statement of any deductions within 20 days of the tenant vacating. Landlords who wrongfully withhold deposits may be liable for twice the withheld amount plus attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "60-day written notice required",
    detail:
      "Delaware law (25 Del. C. §5107) requires landlords to provide at least 60 days' written notice before a rent increase takes effect — one of the longer notice requirements in the Mid-Atlantic region. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statewide rent control and no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — 25 Del. C. §5509",
    detail:
      "Delaware Code 25 Del. C. §5509 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious property damage or address an immediate safety threat may occur without prior notice. Unauthorized entry may entitle the tenant to seek injunctive relief and to terminate the lease.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — 25 Del. C. §5303",
    detail:
      "Delaware Code 25 Del. C. §5303 imposes a statutory duty on landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all electrical, plumbing, heating, and structural systems in working order and maintain common areas in a clean and safe condition. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue rent escrow, repair-and-deduct, or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for nonpayment; 7-day notice for lease violations",
    detail:
      "For nonpayment of rent, Delaware landlords must serve a written 5-day notice to pay or vacate before filing a summary possession action in justice of the peace court (25 Del. C. §5502). For other material lease violations, a 7-day cure notice is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Delaware and expose landlords to liability for actual damages and attorney fees under 25 Del. C. §5313.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption of retaliation — 25 Del. C. §5516",
    detail:
      "Delaware Code 25 Del. C. §5516 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages including relocation costs, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one month's rent after the first year of tenancy — Delaware law requires landlords to reduce excess deposits after year one.",
  "Deposit return language giving more than 20 days — Delaware's deadline is strict; wrongful withholding can trigger double-damage liability.",
  "Rent increase notice shorter than 60 days — Delaware requires among the longer notice periods in the region for any rent increase.",
  "Entry clauses with no notice or less than 24 hours' notice — 25 Del. C. §5509 requires at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under 25 Del. C. §5303.",
  "Eviction procedures that skip the required 5-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Delaware.",
];

export default function DelawareTenantRightsPage() {
  return (
    <StatePageShell
      abbr="DE"
      stateName="Delaware"
      introParagraph="Delaware landlord-tenant law (the Delaware Residential Landlord-Tenant Code, 25 Del. C. §§5101–5907) establishes the rights and responsibilities of renters and landlords throughout the state. Delaware provides a statutory warranty of habitability, a 24-hour entry notice requirement, a 60-day rent increase notice, a 90-day retaliation presumption, and a 20-day deposit return deadline. Whether you rent in Wilmington, Dover, Newark, or a smaller Delaware community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Delaware landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent after the first lease year — any excess must be returned",
        "Security deposits must be returned within 20 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per 25 Del. C. §5509",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://attorneygeneral.delaware.gov/fraud/cpu/"
      agLabel="Delaware Attorney General — Consumer Protection Unit"
    />
  );
}
