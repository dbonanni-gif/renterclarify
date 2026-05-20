import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Kansas Tenant Rights — Complete Guide for Renters in KS",
  description:
    "A complete guide to Kansas tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Kansas Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap (unfurnished); 1.5-month cap (furnished); return within 30 days",
    detail:
      "Kansas Statute §58-2550 caps security deposits at one month's rent for unfurnished units and one and a half months' rent for furnished units. Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to one and a half times the wrongfully withheld amount, plus reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Kansas has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory limit on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — K.S.A. §58-2557",
    detail:
      "Kansas Statute §58-2557 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious damage or address immediate health or safety threats may occur without prior notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment and damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — K.S.A. §58-2553",
    detail:
      "Kansas Statute §58-2553 imposes a statutory duty on landlords to keep rental units in a fit and habitable condition that complies with applicable building and housing codes. Landlords must maintain all plumbing, heating, electrical, and structural systems in working order and keep common areas clean and safe. Tenants must give written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may pursue rent reduction, repair-and-deduct (limited to $100 or one month's rent per repair), or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Kansas landlords must serve a written 3-day notice to pay or vacate before filing a forcible detainer action in district court (K.S.A. §58-2564). For other lease violations, a 30-day cure notice is required for curable violations; for material noncompliance, the landlord must give 30 days' notice of termination. Self-help evictions — lockouts, utility shutoffs, or property removal — are illegal in Kansas and expose landlords to actual damages plus attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption of retaliation — K.S.A. §58-2572",
    detail:
      "Kansas Statute §58-2572 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may recover actual damages, terminate the lease, and obtain attorney fees. Retaliation may also be raised as a defense to an eviction proceeding.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one month's rent (unfurnished) or one and a half months' rent (furnished) — Kansas law caps this and any excess is unenforceable.",
  "Deposit return language giving more than 30 days — Kansas's legal deadline runs from the move-out date; missing it triggers penalty liability.",
  "Entry clauses with no notice or less than 24 hours' notice — K.S.A. §58-2557 requires at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under K.S.A. §58-2553.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Kansas.",
];

export default function KansasTenantRightsPage() {
  return (
    <StatePageShell
      abbr="KS"
      stateName="Kansas"
      introParagraph="Kansas landlord-tenant law (the Kansas Residential Landlord and Tenant Act, K.S.A. Chapter 58, Article 25) establishes the rights and responsibilities of renters and landlords throughout the state. Kansas provides a statutory warranty of habitability, a mandatory 24-hour entry notice, a 90-day retaliation presumption, and deposit caps based on whether the unit is furnished. Whether you rent in Wichita, Kansas City, Overland Park, or a smaller Kansas community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Kansas landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent (unfurnished) or one and a half months' rent (furnished)",
        "Security deposits must be returned within 30 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per K.S.A. §58-2557",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.ag.ks.gov/file-a-complaint/consumer-protection"
      agLabel="Kansas Attorney General — Consumer Protection"
    />
  );
}
