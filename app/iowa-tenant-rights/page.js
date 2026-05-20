import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Iowa Tenant Rights — Complete Guide for Renters in IA",
  description:
    "A complete guide to Iowa tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Iowa Code Chapter 562A.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "2-month cap; return within 30 days",
    detail:
      "Iowa Code §562A.12 caps security deposits at two months' rent. Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit. If the landlord fails to return the deposit or provide the required itemization within 30 days, they may be liable for the wrongfully withheld amount plus damages up to twice the deposit, plus reasonable attorney fees and court costs.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Iowa has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — Iowa Code §562A.19",
    detail:
      "Iowa Code §562A.19 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious damage or address an immediate health or safety threat may occur without prior notice. Tenants may deny entry if proper notice was not given, and repeated unauthorized entry may support a claim for damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — Iowa Code §562A.15",
    detail:
      "Iowa Code §562A.15 imposes a statutory duty on landlords to keep rental units in a fit and habitable condition that complies with applicable building and housing codes. Landlords must maintain all electrical, plumbing, heating, and structural systems in good working order and keep common areas clean and safe. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue rent escrow through the court, repair-and-deduct (subject to limits), or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; 7-day notice for lease violations",
    detail:
      "For nonpayment of rent, Iowa landlords must serve a written 3-day notice to pay or vacate before filing a forcible entry and detainer action in district court (Iowa Code §562A.27). For other material lease violations, a 7-day notice to cure is required; if the breach is not remedied, the landlord may then proceed with eviction. Self-help evictions — lockouts, utility shutoffs, or removal of tenant belongings — are illegal under Iowa law and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption of retaliation — Iowa Code §562A.36",
    detail:
      "Iowa Code §562A.36 prohibits landlords from retaliating against tenants who report habitability conditions to housing authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages, and obtain attorney fees. Retaliation may also be raised as a defense to an eviction proceeding.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding two months' rent — Iowa law sets a hard cap and any excess is unenforceable.",
  "Deposit return language giving more than 30 days — Iowa's legal deadline runs from the move-out date; missing it triggers liability for double damages.",
  "Entry clauses with no notice or less than 24 hours' notice — Iowa Code §562A.19 requires at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under Iowa Code §562A.15.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 3-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Iowa.",
];

export default function IowaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="IA"
      stateName="Iowa"
      introParagraph="Iowa landlord-tenant law (Iowa Code Chapter 562A — the Uniform Residential Landlord and Tenant Law) establishes the rights and responsibilities of renters and landlords throughout the state. Iowa provides a two-month deposit cap, a statutory warranty of habitability, a 24-hour entry notice requirement, a 90-day retaliation presumption, and court-required eviction procedures. Whether you rent in Des Moines, Cedar Rapids, Iowa City, or a smaller Iowa community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Iowa landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at two months' rent — any amount in excess is unenforceable",
        "Security deposits must be returned within 30 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per Iowa Code §562A.19",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.iowaattorneygeneral.gov/for-consumers"
      agLabel="Iowa Attorney General — For Consumers"
    />
  );
}
