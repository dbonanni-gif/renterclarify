import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Louisiana Tenant Rights — Complete Guide for Renters in LA",
  description:
    "A complete guide to Louisiana tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Louisiana Revised Statutes Title 9 and the Civil Code.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 1 month",
    detail:
      "Louisiana Revised Statute §9:3251 sets no maximum on security deposits. Landlords must return the deposit — along with a written itemized statement of any deductions — within one month of the tenant vacating the unit. If the landlord fails to return the deposit or provide a proper accounting within that period, the tenant may sue for the full deposit amount plus up to twice the amount wrongfully withheld as a penalty, plus reasonable attorney fees and court costs.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 10-day notice for month-to-month",
    detail:
      "Louisiana has no statewide rent control law. For month-to-month tenancies, either party must give at least 10 days' written notice before the end of the rental period to change terms — including a rent increase. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required; no statutory minimum defined",
    detail:
      "Louisiana law does not specify a minimum notice period for landlord entry into a residential unit. Under general principles of the lease obligation and quiet enjoyment (Louisiana Civil Code Art. 2694), landlords must give tenants reasonable advance notice before entering for non-emergency purposes such as repairs or inspections. Courts generally expect at least 24 hours of notice. Emergency entry may occur without prior notice. Entry without reasonable notice may breach the tenant's right to peaceful possession.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain — Louisiana Civil Code Art. 2694",
    detail:
      "Louisiana Civil Code Article 2694 requires landlords to maintain the leased premises in a condition fit for the purpose for which it was leased and to make all necessary repairs throughout the lease term. This obligation cannot be waived by lease clause. If the landlord fails to make required repairs after notice, tenants may pursue a reduction in rent, authorize repairs themselves and deduct costs, or seek termination of the lease and damages through the courts.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for nonpayment; judicial process required",
    detail:
      "For nonpayment of rent, Louisiana landlords must provide a written 5-day notice to vacate before filing a rule for possession (eviction) in district or city court (La. C.C.P. Art. 4701). For lease violations other than nonpayment, a written notice to vacate is also required before filing. Self-help evictions — including lockouts, utility shutoffs, or removal of tenant belongings — are illegal in Louisiana and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory evictions prohibited by La. R.S. §9:3271",
    detail:
      "Louisiana Revised Statute §9:3271 prohibits landlords from retaliating against tenants who exercise their legal rights, including reporting habitability issues to government authorities or complaining about conditions. Retaliatory eviction is an affirmative defense available to tenants in eviction proceedings. Tenants who prove retaliation may recover actual damages and reasonable attorney fees. Louisiana courts have recognized retaliation claims even where the state statute does not create an explicit presumption period.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than one month — Louisiana's legal deadline is strict and runs from the move-out date.",
  "Entry clauses with no notice requirement — courts expect reasonable advance notice (generally 24 hours) before non-emergency landlord entry.",
  "Lease clauses purporting to waive the landlord's repair obligation — unenforceable under Louisiana Civil Code Art. 2694.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 5-day written notice for nonpayment — defective notice leads to dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Louisiana.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can trap you in another full lease term.",
];

export default function LouisianaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="LA"
      stateName="Louisiana"
      introParagraph="Louisiana landlord-tenant law (La. R.S. Title 9 and the Louisiana Civil Code) governs the rights and responsibilities of renters and landlords throughout the state. Louisiana's Civil Code imposes a continuous duty on landlords to maintain rental premises in a livable condition, requires court proceedings for all evictions, and prohibits retaliatory evictions. Whether you rent in New Orleans, Baton Rouge, Shreveport, or a smaller Louisiana community, understanding your rights is essential."
      whoIsProtectedIntro="Louisiana landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain the premises in a livable condition — this duty under Civil Code Art. 2694 cannot be waived",
        "Security deposits must be returned within one month with a written itemized statement of deductions",
        "Landlords must provide reasonable advance notice before non-emergency entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.ag.state.la.us/ConsumerProtection"
      agLabel="Louisiana Attorney General — Consumer Protection"
    />
  );
}
