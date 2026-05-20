import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Kentucky Tenant Rights — Complete Guide for Renters in KY",
  description:
    "A complete guide to Kentucky tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Kentucky Revised Statutes Chapter 383.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 30–60 days",
    detail:
      "Kentucky Revised Statute §383.580 sets no maximum on security deposits. Landlords must return the deposit within 30 days of the tenant vacating. If deductions are claimed, the landlord must provide a written itemized statement within 30 days; if the tenant disputes any deduction, the landlord then has an additional 60 days to resolve the dispute. Landlords who fail to return the deposit or provide a proper accounting may forfeit all right to the deposit and may be liable for the withheld amount plus damages and attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; notice required for month-to-month",
    detail:
      "Kentucky has no statewide rent control law. For month-to-month tenancies, landlords must provide reasonable written notice before a rent increase takes effect — 30 days is the standard recognized by courts and practice. During a fixed-term lease, rent cannot be increased unless the lease expressly allows it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; 24 hours is standard",
    detail:
      "Kentucky statutes do not specify a minimum notice period for non-emergency landlord entry, but KRS §383.615 requires that landlords enter only at reasonable times and for legitimate purposes. Courts and standard practice treat 24 hours as the minimum reasonable advance notice for repairs, inspections, or showings. Emergency entry for immediate threats to life or property may occur without notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Statutory duty to maintain — KRS §383.595",
    detail:
      "Kentucky Revised Statute §383.595 requires landlords to keep rental units in a fit and habitable condition that complies with applicable building and housing codes. Landlords must maintain all electrical, plumbing, heating, and structural systems in working order. Tenants must give written notice of repair needs and allow a reasonable time for the landlord to act. If the landlord fails to make necessary repairs, tenants may pursue remedies including rent withholding or termination of the lease under KRS §383.635.",
  },
  {
    topic: "Eviction Process",
    value: "7-day notice for nonpayment; 14-day notice for lease violations",
    detail:
      "For nonpayment of rent, Kentucky landlords must serve a written 7-day notice to pay or vacate before filing an eviction action in district court (KRS §383.660). For other lease violations, a 14-day cure notice is required; if the breach is not cured, the landlord may then terminate with an additional 16-day notice. Self-help evictions — lockouts, utility shutoffs, or property removal — are illegal under Kentucky law and expose landlords to liability for actual damages plus attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory acts prohibited by KRS §383.705",
    detail:
      "Kentucky Revised Statute §383.705 prohibits landlords from retaliating against tenants who complain to authorities about housing code violations, request repairs, or exercise any legal right under the lease or state law. Prohibited retaliatory acts include rent increases, reduction in services, and eviction. Tenants who prove retaliation may recover actual damages including the cost of alternative housing, and may use retaliation as a defense in any eviction proceeding brought by the landlord.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 30 days without a dispute resolution clause — Kentucky's base deadline is 30 days from move-out.",
  "Entry clauses with no notice requirement — Kentucky courts expect at least 24 hours' advance notice before non-emergency landlord entry.",
  "Lease clauses waiving the tenant's right to a habitable unit — unenforceable under KRS §383.595.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 7-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities instead of going to court — self-help eviction is illegal in Kentucky.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function KentuckyTenantRightsPage() {
  return (
    <StatePageShell
      abbr="KY"
      stateName="Kentucky"
      introParagraph="Kentucky landlord-tenant law (KRS Chapter 383) governs the rights and responsibilities of renters and landlords throughout the state. Kentucky provides a statutory warranty of habitability, court-required eviction procedures, and retaliation protections for tenants who report code violations or exercise their legal rights. Whether you rent in Louisville, Lexington, Bowling Green, or a smaller Kentucky community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Kentucky landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory duty under KRS §383.595 cannot be waived by any lease provision",
        "Security deposits must be returned within 30 days with a written itemized statement of any deductions",
        "Landlords must provide reasonable advance notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.ag.ky.gov/Resources/Consumer-Resources/Pages/default.aspx"
      agLabel="Kentucky Attorney General — Consumer Protection"
    />
  );
}
