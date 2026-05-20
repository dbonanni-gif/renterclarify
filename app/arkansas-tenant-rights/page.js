import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Arkansas Tenant Rights — Complete Guide for Renters in AR",
  description:
    "A complete guide to Arkansas tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Arkansas Code Annotated Title 18.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 60 days",
    detail:
      "Arkansas Code §18-16-305 sets no maximum on security deposits. Landlords must return the deposit — along with a written itemized statement of any deductions — within 60 days of the tenant vacating the unit or the end of the lease, whichever is later. If the landlord fails to return the deposit or provide the required statement within 60 days, the tenant may sue for the wrongfully withheld amount plus damages up to twice the deposit, together with reasonable attorney fees and court costs.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; notice required for month-to-month",
    detail:
      "Arkansas has no statewide rent control law. For month-to-month tenancies, landlords must provide written notice of a rent increase before the end of the current rental period — the notice period should equal at least one full rental period (typically 30 days for month-to-month arrangements). During a fixed-term lease, rent cannot be raised unless the lease expressly allows it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; 24 hours is standard",
    detail:
      "Arkansas statutes do not specify a minimum notice period for non-emergency landlord entry. However, the implied covenant of quiet enjoyment and general landlord-tenant principles require reasonable advance notice before the landlord enters for repairs, inspections, or showings. Courts and standard practice treat 24 hours as the minimum reasonable notice. Emergency entry to prevent serious damage or address safety hazards may occur without prior notice.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability recognized by Arkansas courts",
    detail:
      "Arkansas courts recognize an implied warranty of habitability in residential leases, requiring landlords to maintain rental units in a safe and livable condition. Landlords must ensure the premises comply with applicable housing and health codes. Under the Arkansas Residential Landlord-Tenant Act (Ark. Code Ann. §18-17-601 et seq., applicable in many Arkansas cities), landlords have specific statutory duties to maintain structural elements, plumbing, heating, and electrical systems. Tenants should provide written notice of repair needs before pursuing remedies.",
  },
  {
    topic: "Eviction Process",
    value: "Written demand required; 3-day notice for nonpayment",
    detail:
      "For nonpayment of rent, Arkansas landlords must serve a written 3-day notice to pay or vacate before filing an unlawful detainer action in circuit court (Ark. Code Ann. §18-60-304). For month-to-month tenancies being terminated for other reasons, a 30-day written notice is required. Self-help evictions — including lockouts, utility shutoffs, or removal of tenant property without a court order — are illegal in Arkansas and expose landlords to liability for actual damages and other civil remedies.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliation prohibited under Arkansas law",
    detail:
      "Arkansas law (Ark. Code Ann. §18-17-701, applicable where the Residential Landlord-Tenant Act applies) prohibits landlords from retaliating against tenants who report housing code violations, complain about habitability conditions, or exercise any legal right. Retaliatory rent increases, service reductions, and evictions are prohibited. Tenants who can demonstrate a retaliatory motive may assert it as a defense in eviction proceedings or bring an affirmative claim for damages.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 60 days — Arkansas's legal deadline runs from the later of move-out or lease end; any excess is a red flag.",
  "Entry clauses with no notice requirement — courts expect at least 24 hours' reasonable notice before non-emergency landlord entry.",
  "Lease clauses purporting to waive the implied warranty of habitability — unenforceable under Arkansas common law and the Residential Landlord-Tenant Act.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — conflicts with the landlord's maintenance obligations.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — procedural defects result in dismissal of the eviction case.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Arkansas.",
  "Automatic lease renewal clauses requiring very long advance written notice to opt out — easy to miss and can lock you into another full term.",
];

export default function ArkansasTenantRightsPage() {
  return (
    <StatePageShell
      abbr="AR"
      stateName="Arkansas"
      introParagraph="Arkansas landlord-tenant law (Ark. Code Ann. Title 18) governs the rights and responsibilities of renters and landlords throughout the state. Arkansas provides a judicially recognized implied warranty of habitability, a 60-day security deposit return deadline, court-required eviction procedures, and retaliation protections for tenants who exercise their legal rights. Whether you rent in Little Rock, Fayetteville, Fort Smith, or a smaller Arkansas community, understanding your rights is essential."
      whoIsProtectedIntro="Arkansas landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the implied warranty of habitability cannot be waived by any lease provision",
        "Security deposits must be returned within 60 days with a written itemized statement of deductions",
        "Landlords must provide reasonable advance notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://arkansasag.gov/divisions/public-protection/"
      agLabel="Arkansas Attorney General — Consumer Protection"
    />
  );
}
