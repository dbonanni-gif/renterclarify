import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Wisconsin Tenant Rights — Complete Guide for Renters in WI",
  description:
    "A complete guide to Wisconsin tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Wisconsin Statute Chapter 704 and ATCP 134.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 21 days; move-in checklist required",
    detail:
      "Wisconsin sets no statutory maximum on security deposits. Under Wis. Stat. §704.28 and ATCP 134.06, landlords must return the deposit with an itemized written statement of deductions within 21 days of the tenant vacating the unit. Landlords are required to provide a move-in checklist documenting any pre-existing damage — failure to do so limits the landlord's ability to deduct for that damage later. Landlords who wrongfully withhold deposits may be sued for twice the amount wrongfully withheld, plus reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 28-day notice for month-to-month",
    detail:
      "Wisconsin has no statewide rent control law and state law preempts local rent control. For month-to-month tenancies, landlords must give at least 28 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly allows it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Advance notice required; 12 hours is the standard",
    detail:
      "Wisconsin Administrative Code ATCP 134.09(2) requires landlords to give 'advance notice' before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. While ATCP 134 does not specify a minimum number of hours, 12 hours of advance notice is the commonly accepted standard under Wisconsin practice. Emergency entry may occur without notice. Repeated unauthorized entry may constitute an illegal lease term and expose the landlord to liability.",
  },
  {
    topic: "Habitability",
    value: "Statutory duty to maintain — Wis. Stat. §704.07",
    detail:
      "Wisconsin Statute §704.07 imposes a statutory duty on landlords to keep rental premises in a reasonable state of repair and compliance with applicable building and housing codes. The duty extends to all common areas. If the landlord fails to make necessary repairs after receiving written notice, tenants may have remedies including rent abatement, repair-and-deduct (for repairs under $500 or one month's rent), or lease termination for substantial habitability failures. ATCP 134 adds additional administrative protections for residential tenants.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for nonpayment; self-help eviction = 2 months' rent",
    detail:
      "For nonpayment of rent, Wisconsin landlords must serve a written 5-day notice to pay or vacate before filing an eviction action in circuit court (Wis. Stat. §704.17). For other lease violations, a 5-day cure notice (for curable violations) or 14-day termination notice (for incurable violations) applies depending on the breach. Self-help evictions — lockouts, utility shutoffs, or property removal — are illegal and expose landlords to liability equal to two months' rent or actual damages, whichever is greater (Wis. Stat. §704.05).",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 6-month presumption of retaliation",
    detail:
      "Wisconsin Statute §704.45 prohibits landlords from retaliating against tenants who report housing code violations, complain about habitability conditions, or exercise any legal right. If a landlord takes adverse action — rent increase, reduction in services, or eviction — within six months of protected tenant activity, retaliation is presumed. Tenants who prove retaliation may terminate the lease, recover actual damages, and obtain attorney fees. ATCP 134 also prohibits illegal lease terms that attempt to waive these protections.",
  },
];

const RED_FLAGS = [
  "No move-in checklist provided — Wisconsin law requires landlords to give tenants a checklist to document pre-existing damage; missing it limits their future deduction rights.",
  "Deposit return language giving more than 21 days — Wisconsin's legal deadline is strict and runs from the move-out date.",
  "Entry clauses allowing access with no advance notice — Wisconsin practice requires at least 12 hours for non-emergency entry.",
  "Lease clauses waiving the tenant's right to habitable conditions — unenforceable under Wis. Stat. §704.07.",
  "Eviction procedures that skip the required 5-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities instead of going to court — self-help eviction exposes landlords to two months' rent in damages.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you in for another full term.",
];

export default function WisconsinTenantRightsPage() {
  return (
    <StatePageShell
      abbr="WI"
      stateName="Wisconsin"
      introParagraph="Wisconsin landlord-tenant law (Wis. Stat. Chapter 704 and Administrative Code ATCP 134) establishes the rights and responsibilities of renters and landlords throughout the state. Wisconsin provides strong administrative protections through ATCP 134, a statutory habitability duty, a mandatory move-in checklist requirement, and an explicit anti-retaliation presumption period. Whether you rent in Milwaukee, Madison, Green Bay, or a smaller Wisconsin community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Wisconsin landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must provide a move-in checklist documenting pre-existing damage before or at move-in",
        "Security deposits must be returned within 21 days with an itemized written statement of deductions",
        "Landlords must give advance notice (at least 12 hours) before non-emergency entry",
        "Evictions require court action — self-help evictions expose landlords to two months' rent in damages",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.doj.state.wi.us/consumer/consumer-protection"
      agLabel="Wisconsin Department of Justice — Consumer Protection"
    />
  );
}
