import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "South Carolina Tenant Rights — Complete Guide for Renters in SC",
  description:
    "A complete guide to South Carolina tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the South Carolina Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No statutory cap; return within 30 days",
    detail:
      "South Carolina Code §27-40-410 sets no maximum on security deposits. Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to three times the deposit amount, plus reasonable attorney fees and court costs.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "South Carolina has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — S.C. Code §27-40-530",
    detail:
      "South Carolina Code §27-40-530 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious property damage or address an immediate health or safety threat may occur without prior notice. Unauthorized or excessive entry may give the tenant grounds to terminate the lease and recover damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — S.C. Code §27-40-440",
    detail:
      "South Carolina Code §27-40-440 requires landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order and maintain common areas safely. Tenants must provide written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may pursue rent reduction, repair-and-deduct (subject to statutory limits), or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, South Carolina landlords must serve a written 5-day notice to pay or vacate before filing an ejectment action in magistrate court (S.C. Code §27-40-710). For other material lease violations, a 14-day notice to cure or vacate is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in South Carolina and expose landlords to liability for actual damages and attorney fees under S.C. Code §27-40-660.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption — S.C. Code §27-40-910",
    detail:
      "South Carolina Code §27-40-910 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the Residential Landlord and Tenant Act. A 90-day rebuttable presumption of retaliation applies when adverse action follows a protected activity within that window. Prohibited acts include eviction, rent increases, and reduction of services. Tenants who prove retaliation may terminate the lease and recover actual damages, including attorney fees.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 30 days — South Carolina's deadline runs from move-out; missing it triggers liability for up to three times the deposit amount.",
  "Entry clauses with no notice or less than 24 hours' notice — S.C. Code §27-40-530 requires at least 24 hours before non-emergency landlord entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under S.C. Code §27-40-440.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 5-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in South Carolina.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function SouthCarolinaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="SC"
      stateName="South Carolina"
      introParagraph="South Carolina landlord-tenant law (the Residential Landlord and Tenant Act, S.C. Code Ann. §§27-40-10 to 27-40-940) governs the rights and responsibilities of renters and landlords throughout the state. South Carolina provides a statutory warranty of habitability, a mandatory 24-hour entry notice, a 30-day deposit return deadline, and retaliation protections with a 90-day rebuttable presumption. Whether you rent in Columbia, Charleston, Greenville, Myrtle Beach, or a smaller South Carolina community, understanding your rights is essential."
      whoIsProtectedIntro="South Carolina landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory warranty under S.C. Code §27-40-440 cannot be waived",
        "Security deposits must be returned within 30 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per S.C. Code §27-40-530",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://consumer.sc.gov/"
      agLabel="South Carolina Department of Consumer Affairs"
    />
  );
}
