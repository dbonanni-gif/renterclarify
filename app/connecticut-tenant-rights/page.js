import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Connecticut Tenant Rights — Complete Guide for Renters in CT",
  description:
    "A complete guide to Connecticut tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Connecticut General Statutes Title 47a.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "2-month cap (1 month if age 62+); return within 30 days; interest required",
    detail:
      "Connecticut General Statute §47a-21 caps security deposits at two months' rent — or one month's rent if the tenant is 62 years of age or older. Landlords must return the deposit with an itemized written statement of deductions within 30 days of the tenant vacating (or 15 days after receiving the forwarding address, whichever is later). Connecticut requires landlords to pay interest on security deposits held for more than one year at a rate set annually by the Banking Commissioner. Wrongful withholding may result in double the withheld amount plus attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 1-month notice for month-to-month",
    detail:
      "Connecticut has no statewide rent control law. For month-to-month tenancies, landlords must provide at least one month's written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase, and Connecticut law does not authorize municipalities to enact rent control.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; 24 hours is standard — CGS §47a-16",
    detail:
      "Connecticut General Statute §47a-16 requires landlords to give 'reasonable notice' before entering a rental unit for non-emergency purposes such as repairs, inspections, or showing the unit to prospective tenants. The statute does not define a specific minimum period, but 24 hours of advance notice is the accepted standard under Connecticut practice. Entry must occur at reasonable times. Emergency entry may occur without notice. Unauthorized entry may constitute a violation of the tenant's right to quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Statutory implied warranty of habitability — CGS §47a-7",
    detail:
      "Connecticut General Statute §47a-7 imposes a statutory duty on landlords to maintain rental premises in a fit and habitable condition, complying with applicable building and housing codes. Landlords must keep all common areas clean and safe, maintain all systems (plumbing, heating, electrical) in working order, and provide adequate receptacles for garbage. If the landlord fails to repair after receiving notice, tenants may pursue rent withholding, repair-and-deduct, or a rent escrow action through the court. Connecticut's Housing Court provides specialized adjudication of landlord-tenant disputes.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for nonpayment; 15-day notice for lease violations; Housing Court",
    detail:
      "For nonpayment of rent, Connecticut landlords must serve a written 3-day notice to quit before filing a summary process (eviction) action in Housing Court (CGS §47a-23). For other lease violations, a 15-day notice to cure or quit is required. Connecticut's Housing Court system handles landlord-tenant cases statewide and is known for providing procedural protections for both parties. Self-help evictions — lockouts, utility shutoffs, or property removal — are illegal and expose landlords to significant liability including actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — explicit 6-month presumption of retaliation",
    detail:
      "Connecticut General Statute §47a-20 explicitly prohibits landlords from retaliating against tenants who report housing code violations, complain about habitability conditions, organize with other tenants, or exercise any legal right. If a landlord takes adverse action — including eviction, rent increase, or service reduction — within six months of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages plus attorney fees, and use retaliation as a defense in eviction proceedings.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding two months' rent (or one month if you are 62 or older) — Connecticut law caps this and any excess is unenforceable.",
  "No mention of deposit interest — Connecticut law requires landlords to pay interest on deposits held for more than one year.",
  "Deposit return language giving more than 30 days — Connecticut's deadline runs from move-out or receipt of your forwarding address, whichever is later.",
  "Entry clauses with no notice requirement — Connecticut law requires reasonable notice (24 hours standard) before non-emergency landlord entry.",
  "Lease clauses waiving the implied warranty of habitability — unenforceable under CGS §47a-7.",
  "Eviction procedures that skip the required 3-day or 15-day notice — defective notice will result in dismissal by Housing Court.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal and carries significant liability in Connecticut.",
];

export default function ConnecticutTenantRightsPage() {
  return (
    <StatePageShell
      abbr="CT"
      stateName="Connecticut"
      introParagraph="Connecticut landlord-tenant law (CGS Title 47a) establishes the rights and responsibilities of renters and landlords throughout the state. Connecticut offers strong tenant protections including a statutory warranty of habitability, a specialized Housing Court system, an explicit six-month retaliation presumption, and a security deposit interest requirement. Whether you rent in Hartford, New Haven, Bridgeport, or a smaller Connecticut community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Connecticut landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at two months' rent (one month if you are age 62 or older) — any excess is unenforceable",
        "Security deposits must be returned within 30 days with an itemized written statement of deductions",
        "Landlords must give reasonable notice (24 hours standard) before non-emergency entry per CGS §47a-16",
        "Evictions must go through Housing Court — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://portal.ct.gov/cid/mission-and-divisions/the-consumer-affairs-unit?language=en_US"
      agLabel="Connecticut Attorney General — Tenant Rights"
    />
  );
}
