import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "South Dakota Tenant Rights — Complete Guide for Renters in SD",
  description:
    "A complete guide to South Dakota tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under South Dakota Codified Laws Title 43.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap; return within 14 days",
    detail:
      "South Dakota Codified Law §43-32-24 caps security deposits at one month's rent for unfurnished units. Landlords must return the deposit — along with a written itemized statement of any deductions — within 14 days of the tenant vacating the unit. South Dakota's 14-day deadline is one of the shorter return windows in the country. Landlords who fail to return the deposit within 14 days may be liable for the wrongfully withheld amount plus damages up to twice the deposit.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "South Dakota has no statewide rent control law. For month-to-month tenancies, landlords must provide at least one rental period's written notice before a rent increase takes effect — typically 30 days for monthly rentals. During a fixed-term lease, rent cannot be raised unless the lease expressly allows it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; 24 hours is standard",
    detail:
      "South Dakota statutes do not specify a minimum notice period for non-emergency landlord entry. However, the implied covenant of quiet enjoyment requires landlords to give reasonable advance notice before entering for repairs, inspections, or showings. Courts and standard practice recognize 24 hours as the minimum reasonable notice. Emergency entry to prevent serious property damage or address an immediate safety threat may occur without prior notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Statutory duty to maintain — SDCL §43-32-8",
    detail:
      "South Dakota Codified Law §43-32-8 requires landlords to keep rental premises in a condition fit for human habitation and to comply with applicable housing and health codes. Landlords must maintain all essential systems — plumbing, heating, and electrical — in working order. Tenants must provide written notice of repair needs. If the landlord fails to make repairs, tenants may have remedies including rent reduction or lease termination, though South Dakota's statutory tenant remedies are more limited than in some other states.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, South Dakota landlords must serve a written 3-day notice to pay or vacate before filing an eviction (forcible entry and detainer) action in magistrate or circuit court (SDCL §21-16-2). For other lease violations, landlords must provide appropriate written notice before proceeding. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property without a court order — are illegal in South Dakota and expose landlords to liability for actual damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory evictions prohibited — SDCL §43-32-27",
    detail:
      "South Dakota Codified Law §43-32-27 prohibits landlords from retaliating against tenants who report habitability issues to government authorities or exercise their legal rights under the lease. Retaliatory eviction is recognized as an affirmative defense in eviction proceedings. Tenants who can demonstrate a retaliatory motive behind an eviction filing may assert it as a defense and pursue damages for wrongful eviction in appropriate cases.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one month's rent — South Dakota law caps this and any excess is unenforceable.",
  "Deposit return language giving more than 14 days — South Dakota has a short return deadline; missing it triggers double-damage liability.",
  "Entry clauses with no notice requirement — courts expect at least 24 hours' reasonable advance notice before non-emergency landlord entry.",
  "Lease clauses purporting to waive the landlord's duty to maintain habitability — unenforceable under SDCL §43-32-8.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in South Dakota.",
];

export default function SouthDakotaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="SD"
      stateName="South Dakota"
      introParagraph="South Dakota landlord-tenant law (SDCL Title 43, Chapter 43-32) governs the rights and responsibilities of renters and landlords throughout the state. South Dakota provides a one-month deposit cap, a 14-day deposit return deadline, a duty on landlords to maintain habitable conditions, court-required eviction procedures, and retaliation protections for tenants who exercise their legal rights. Whether you rent in Sioux Falls, Rapid City, Aberdeen, or a smaller South Dakota community, understanding your rights is essential."
      whoIsProtectedIntro="South Dakota landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent — any excess is unenforceable",
        "Security deposits must be returned within 14 days with a written itemized statement of deductions",
        "Landlords must provide reasonable advance notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://consumer.sd.gov/"
      agLabel="South Dakota Consumer Protection Division"
    />
  );
}
