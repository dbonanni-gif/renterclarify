import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Alabama Tenant Rights — Complete Guide for Renters in AL",
  description:
    "A complete guide to Alabama tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Alabama Uniform Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 35 days",
    detail:
      "Alabama Code §35-9A-201 sets no maximum on security deposits. Landlords must return the deposit — along with a written itemized statement of any deductions — within 35 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees. Note: Alabama's Uniform Residential Landlord and Tenant Act (URLTA) applies to counties with a population of 300,000 or more; tenants in smaller counties may have different remedies under common law.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; reasonable notice required",
    detail:
      "Alabama has no statewide rent control law. For month-to-month tenancies, landlords must provide reasonable written notice before a rent increase takes effect — 30 days is the standard recognized by courts and practice. During a fixed-term lease, rent cannot be raised unless the lease expressly allows it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "48-hour notice required — Ala. Code §35-9A-303",
    detail:
      "Alabama Code §35-9A-303 (applying in URLTA counties) requires landlords to give at least two days' (48 hours') advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious property damage or address an immediate safety threat may occur without prior notice. Tenants in counties where URLTA does not apply should still expect reasonable advance notice under common law principles.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — Ala. Code §35-9A-204",
    detail:
      "Alabama Code §35-9A-204 (under URLTA) requires landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order and maintain common areas safely. Tenants must provide written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may pursue rent reduction, repair-and-deduct, or lease termination under URLTA provisions.",
  },
  {
    topic: "Eviction Process",
    value: "7-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Alabama landlords (in URLTA counties) must serve a written 7-day notice to pay or vacate before filing an unlawful detainer action in district court (Ala. Code §35-9A-421). For other material lease violations, a 14-day cure notice is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Alabama and expose landlords to liability for actual damages and attorney fees under Ala. Code §35-9A-407.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory acts prohibited — Ala. Code §35-9A-407",
    detail:
      "Alabama Code §35-9A-407 (under URLTA) prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. Prohibited retaliatory acts include eviction, rent increases, and reduction of services. Tenants who prove retaliation may terminate the lease, recover actual damages, and obtain attorney fees. Retaliation may also be raised as a complete defense in any eviction proceeding.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 35 days — Alabama's legal deadline runs from the move-out date; missing it triggers double-damage liability.",
  "Entry clauses with no notice or less than 48 hours' notice — Ala. Code §35-9A-303 requires at least two days' advance notice for non-emergency entry in URLTA counties.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under Ala. Code §35-9A-204.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 7-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Alabama.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can bind you to another full term.",
];

export default function AlabamaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="AL"
      stateName="Alabama"
      introParagraph="Alabama landlord-tenant law (the Uniform Residential Landlord and Tenant Act, Ala. Code §§35-9A-101 to 35-9A-461) establishes the rights and responsibilities of renters and landlords in counties with populations of 300,000 or more. Alabama's URLTA provides a statutory warranty of habitability, a 48-hour entry notice requirement, a 35-day deposit return deadline, and retaliation protections. Whether you rent in Birmingham, Huntsville, Montgomery, Mobile, or surrounding communities, understanding your rights under state law is essential."
      whoIsProtectedIntro="Alabama's URLTA applies only in counties with a population of 300,000 or more. Tenants in smaller counties may have fewer statutory protections and rely more on common law principles. Key baseline rights in URLTA counties that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory warranty under Ala. Code §35-9A-204 cannot be waived",
        "Security deposits must be returned within 35 days with a written itemized statement of deductions",
        "Landlords must give at least 48 hours' advance notice before non-emergency entry per Ala. Code §35-9A-303",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.alabamaag.gov/consumer-complaint/"
      agLabel="Alabama Attorney General — Consumer Complaint"
    />
  );
}
