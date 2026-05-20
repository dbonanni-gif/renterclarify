import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Idaho Tenant Rights — Complete Guide for Renters in ID",
  description:
    "A complete guide to Idaho tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Idaho Code Title 6.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 21 days",
    detail:
      "Idaho Code §6-321 sets no maximum on security deposits. Landlords must return the deposit — along with a written itemized statement of any deductions — within 21 days of the tenant vacating the unit and providing a forwarding address. Landlords who fail to return the deposit or provide a proper accounting within 21 days forfeit the right to retain any portion of the deposit and may be liable to the tenant for the full deposit amount plus damages.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; notice required for month-to-month",
    detail:
      "Idaho has no statewide rent control law. For month-to-month tenancies, landlords must provide at least one full rental period's written notice before a rent increase takes effect — typically 30 days for monthly tenancies. During a fixed-term lease, rent cannot be raised unless the lease expressly allows it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; 24 hours is standard",
    detail:
      "Idaho Code does not specify a minimum notice period for non-emergency landlord entry. However, the implied covenant of quiet enjoyment requires landlords to give reasonable advance notice before entering for repairs, inspections, or showings. Courts and standard practice treat 24 hours as the minimum reasonable notice. Emergency entry to prevent serious damage or address an immediate safety threat may occur without prior notice. Repeated unauthorized entry may support a claim for damages.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability recognized by Idaho courts",
    detail:
      "Idaho courts recognize an implied warranty of habitability in residential leases, requiring landlords to maintain rental units in a safe and livable condition that complies with applicable housing and health codes. Landlords must ensure all major systems — plumbing, heating, electrical — remain in working order. Tenants should provide written notice of repair needs before pursuing remedies. Idaho's statutory habitability framework is less codified than in some states, so documentation is especially important when asserting habitability claims.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Idaho landlords must serve a written 3-day notice to pay or vacate before filing an eviction action in district or magistrate court (Idaho Code §6-303). For other lease violations, landlords must provide appropriate written notice before proceeding. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property without a court order — are illegal in Idaho and expose landlords to liability for actual damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory evictions prohibited under Idaho law",
    detail:
      "Idaho Code §6-321 and common law principles prohibit landlords from retaliating against tenants who report habitability issues to government authorities or exercise their legal rights under the lease. Retaliatory eviction is recognized as an affirmative defense in eviction proceedings. Tenants who can show a retaliatory motive behind an eviction filing may assert it as a defense and, in appropriate cases, pursue damages for wrongful eviction.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 21 days — Idaho's legal deadline runs from move-out plus receipt of forwarding address; missing it forfeits the right to any deduction.",
  "Entry clauses with no notice requirement — Idaho courts expect at least 24 hours' reasonable advance notice before non-emergency landlord entry.",
  "Lease clauses purporting to waive the implied warranty of habitability — unenforceable under Idaho common law.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's habitability duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal of the eviction case.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Idaho.",
  "Automatic lease renewal clauses requiring very long advance written notice to opt out — easy to overlook and can bind you to another full term.",
];

export default function IdahoTenantRightsPage() {
  return (
    <StatePageShell
      abbr="ID"
      stateName="Idaho"
      introParagraph="Idaho landlord-tenant law (Idaho Code Title 6) governs the rights and responsibilities of renters and landlords throughout the state. Idaho provides a judicially recognized implied warranty of habitability, a 21-day security deposit return deadline, court-required eviction procedures, and retaliation protections for tenants who exercise their legal rights. Whether you rent in Boise, Nampa, Meridian, or a smaller Idaho community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Idaho landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the implied warranty of habitability cannot be waived by any lease provision",
        "Security deposits must be returned within 21 days with a written itemized statement of deductions",
        "Landlords must provide reasonable advance notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.ag.idaho.gov/consumer-protection/"
      agLabel="Idaho Attorney General — Consumer Protection"
    />
  );
}
