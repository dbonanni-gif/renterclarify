import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Indiana Tenant Rights — Complete Guide for Renters in IN",
  description:
    "A complete guide to Indiana tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Indiana Code Title 32, Article 31.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 45 days",
    detail:
      "Indiana Code §32-31-3-12 sets no statutory maximum on security deposits. Landlords must return the deposit — along with an itemized written statement of any deductions — within 45 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the amount wrongfully withheld, plus reasonable attorney fees. The tenant must provide a forwarding address in writing to trigger the 45-day clock.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Indiana has no statewide rent control law and preempts local rent control ordinances. For month-to-month tenancies, landlords must give at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory limit on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "No statutory minimum; 24 hours is standard",
    detail:
      "Indiana law does not specify a minimum notice period for landlord entry into a rental unit. However, courts and standard practice recognize that 'reasonable notice' is required for non-emergency entry such as repairs, inspections, or showings, and 24 hours is generally treated as the minimum reasonable notice. Emergency entry may occur without advance notice. Entry without adequate notice may support a claim for breach of quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability — landlord must maintain",
    detail:
      "Indiana recognizes an implied warranty of habitability in residential leases (IC §32-31-8-5). Landlords must keep rental units in a safe and habitable condition that complies with applicable housing codes affecting health and safety. Tenants have a duty to notify the landlord of needed repairs. If the landlord fails to make repairs within a reasonable time after notice, tenants may have remedies including rent reduction, lease termination, or damages — though Indiana's statutory remedies are more limited than in some states.",
  },
  {
    topic: "Eviction Process",
    value: "10-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Indiana landlords must provide a written 10-day notice to pay or vacate before filing an eviction (small claims) action (IC §32-31-1-6). For other lease violations, the notice period and cure opportunity depend on the type of violation. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Indiana and expose landlords to liability for actual damages and court costs. All evictions must go through the court process.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory acts prohibited by statute",
    detail:
      "Indiana Code §32-31-8-6 prohibits landlords from retaliating against tenants who report code violations to government authorities, complain about habitability conditions, or exercise other legal rights. Prohibited retaliatory acts include rent increases, reduction of services, and eviction. Tenants who prove retaliation may recover actual damages and, in some cases, attorney fees. Indiana's retaliation protections are recognized but generally less expansive than those in states with explicit presumption periods.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 45 days — Indiana's legal deadline runs from the move-out date once the landlord receives your forwarding address.",
  "Lease clauses waiving the tenant's right to a habitable unit — unenforceable under Indiana's implied warranty of habitability.",
  "Entry clauses that allow entry with no notice — courts expect reasonable advance notice (generally 24 hours) for non-emergency visits.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — conflicts with the landlord's statutory maintenance duty (IC §32-31-8-5).",
  "Eviction procedures that skip the required 10-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to terminate utilities or change locks instead of going to court — self-help eviction is illegal in Indiana.",
  "Automatic lease renewal clauses requiring long advance written notice to opt out — easy to miss and can bind you to another full lease term.",
];

export default function IndianaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="IN"
      stateName="Indiana"
      introParagraph="Indiana landlord-tenant law (IC Title 32, Article 31) governs the rights and responsibilities of renters and landlords throughout the state. Indiana provides an implied warranty of habitability, court-required eviction procedures, and retaliation protections for tenants who report code violations. Whether you rent in Indianapolis, Fort Wayne, Evansville, or a smaller Indiana community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Indiana landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the implied warranty of habitability cannot be waived by any lease provision",
        "Security deposits must be returned within 45 days with an itemized written statement of deductions",
        "Landlords must provide reasonable notice before non-emergency entry — 24 hours is the standard expectation",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.in.gov/attorneygeneral/consumer-protection-division/"
      agLabel="Indiana Attorney General — Consumer Protection"
    />
  );
}
