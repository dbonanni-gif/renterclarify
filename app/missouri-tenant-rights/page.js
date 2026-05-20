import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Missouri Tenant Rights — Complete Guide for Renters in MO",
  description:
    "A complete guide to Missouri tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Missouri Revised Statutes Chapters 441 and 535.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "2-month cap; return within 30 days",
    detail:
      "Missouri Revised Statute §535.300 caps security deposits at two months' rent. Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit. If the landlord fails to return the deposit or provide the itemization within that period, they forfeit the right to retain any portion and may be liable to the tenant for the full deposit amount plus damages up to twice the deposit, plus court costs and attorney fees in certain circumstances.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "Missouri has no statewide rent control law. For month-to-month tenancies, a landlord must give at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be raised unless the lease specifically allows it. There is no statutory limit on the amount of a rent increase, and Missouri law expressly prohibits local rent control ordinances.",
  },
  {
    topic: "Landlord Entry",
    value: "No statutory minimum; 24 hours is standard",
    detail:
      "Missouri statutes do not set a specific minimum notice period for landlord entry into a residential unit. Courts and standard practice, however, require 'reasonable notice' for non-emergency entry such as repairs, inspections, or showings — and 24 hours is widely treated as the reasonable minimum. Emergency entry for immediate threats may occur without prior notice. Repeated unauthorized entry may support claims for breach of quiet enjoyment or harassment.",
  },
  {
    topic: "Habitability",
    value: "Implied warranty of habitability — recognized by Missouri courts",
    detail:
      "Missouri courts recognize an implied warranty of habitability in residential leases. Landlords must maintain rental units in a safe, sanitary, and livable condition consistent with applicable housing codes. Unlike some states, Missouri does not have a comprehensive statutory habitability framework — protections derive primarily from common law and local housing codes. Tenants who experience serious habitability failures should document conditions thoroughly and provide written notice before pursuing remedies such as rent withholding or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "Written demand required; court required for all evictions",
    detail:
      "Missouri eviction law (RSMo §535.010) requires landlords to provide written notice before filing an unlawful detainer action in circuit court. For nonpayment of rent, the landlord must make a written demand for rent before filing. For month-to-month tenancies, at least one month's notice is required to terminate the tenancy before eviction can proceed. Self-help evictions — lockouts, utility shutoffs, or property removal — are illegal in Missouri and expose landlords to liability for actual damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — common law and public policy based",
    detail:
      "Missouri recognizes retaliation protections for tenants through common law and public policy, though the state lacks a comprehensive anti-retaliation statute like those in some other states. Landlords may not evict, raise rent, or reduce services in response to a tenant's good-faith complaints about habitability conditions or reports to housing authorities. Tenants who can demonstrate retaliatory motive may assert it as a defense in eviction proceedings or as a basis for damages.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding two months' rent — Missouri law sets a hard cap at two months' rent regardless of what the lease says.",
  "Deposit return language giving more than 30 days — Missouri's legal deadline is strict and forfeiture of the right to deduct may result from missing it.",
  "Entry clauses with no notice requirement — courts expect at least 24 hours' reasonable notice before non-emergency landlord entry.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with Missouri's implied warranty of habitability.",
  "Eviction procedures that skip required written demand or notice — procedural defects will result in dismissal of the eviction case.",
  "Clauses allowing the landlord to lock out or shut off utilities instead of going to court — self-help eviction is illegal in Missouri.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to overlook and can bind you to another full lease term.",
];

export default function MissouriTenantRightsPage() {
  return (
    <StatePageShell
      abbr="MO"
      stateName="Missouri"
      introParagraph="Missouri landlord-tenant law (RSMo Chapters 441 and 535) governs the rights and responsibilities of renters and landlords throughout the state. Missouri provides a two-month cap on security deposits, court-required eviction procedures, and a judicially recognized implied warranty of habitability. Whether you rent in Kansas City, St. Louis, Springfield, or a smaller Missouri community, understanding your rights under state law is essential."
      whoIsProtectedIntro="Missouri landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at two months' rent — any excess is unenforceable",
        "Security deposits must be returned within 30 days with an itemized written statement of deductions",
        "Landlords must provide reasonable notice (24 hours is standard) before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ago.mo.gov/consumer-complaints"
      agLabel="Missouri Attorney General — Consumer Complaints"
    />
  );
}
