import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Ohio Tenant Rights — Complete Guide for Renters in OH",
  description:
    "A complete guide to Ohio tenant rights: security deposit rules, landlord entry requirements, repair and deduct rights, eviction timelines, and what renters need to know under the Ohio Landlord-Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; must return within 30 days",
    detail:
      "Ohio law (R.C. §5321.16) sets no maximum on security deposits. Landlords must return the deposit within 30 days of move-out with a written, itemized list of any deductions and the reasons for them. If a landlord wrongfully withholds a deposit or fails to provide the itemized statement on time, the tenant may sue for double the wrongfully withheld amount plus attorney fees. Landlords who hold deposits of more than $50 or one month's rent must pay interest on the deposit annually if the tenancy lasts more than 6 months.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in Ohio",
    detail:
      "Ohio has no statewide rent control, and state law preempts local rent control ordinances. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least 30 days' written notice before increasing rent. Rent can be increased to any amount with proper notice and upon lease renewal.",
  },
  {
    topic: "Landlord Entry",
    value: "24 hours' notice required",
    detail:
      "Ohio Revised Code §5321.04 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes, including inspections, repairs, or showings. Entry must occur at reasonable times. Emergency entry — flooding, fire, gas leak — may occur without notice. Tenants may deny entry if proper notice is not given and can seek to terminate the lease if the landlord repeatedly violates the notice requirement.",
  },
  {
    topic: "Repairs & Habitability",
    value: "Landlord must repair; tenant may withhold or repair-and-deduct",
    detail:
      "Ohio's Landlord-Tenant Act (R.C. §5321.02) requires landlords to keep rental units in a fit and habitable condition, maintain plumbing and heating systems, and comply with applicable housing codes. Tenants must give written notice of repair needs; the landlord then has a reasonable time to make repairs. If the landlord fails to act, tenants may deposit rent with the Clerk of Courts, repair-and-deduct (up to $500 or one month's rent per instance), or terminate the lease — after following the statutory process precisely.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment; 30-day for lease violations",
    detail:
      "Ohio requires a 3-day written notice to vacate for non-payment of rent before an eviction (forcible entry and detainer) lawsuit can be filed. For other lease violations, a 30-day notice to cure or vacate is required. After the notice period, the landlord files in Municipal or County Court. Ohio evictions typically move faster than the national average — hearings are often scheduled within 2–3 weeks of filing. Self-help evictions are illegal and expose landlords to liability for actual damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — landlord actions presumed retaliatory in certain circumstances",
    detail:
      "R.C. §5321.02 prohibits landlords from retaliating against tenants who report housing code violations, contact government authorities, or join a tenant organization. Ohio courts recognize retaliation as a defense in eviction proceedings. Tenants facing retaliatory action may be entitled to terminate the lease, recover actual damages, and obtain attorney fees. Documenting the timeline between protected activity and adverse landlord action is critical.",
  },
];

const RED_FLAGS = [
  "Deposit clauses that skip the interest requirement for tenancies over 6 months — Ohio law requires landlords to pay interest on deposits above $50 or one month's rent.",
  "No itemized deduction process specified — Ohio law requires a written, itemized statement within 30 days regardless of whether deductions are taken.",
  "Entry clauses with less than 24 hours' notice outside emergencies — violates R.C. §5321.04.",
  "Clauses waiving the tenant's right to use Ohio's repair-and-deduct remedy — these statutory rights cannot be signed away.",
  "Late fees with no grace period or excessive compounding penalties — Ohio courts scrutinize unreasonable fee provisions.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full lease term.",
  "Clauses making tenants responsible for all maintenance regardless of cause — contradicts the landlord's statutory duty to maintain habitability.",
];

export default function OhioTenantRightsPage() {
  return (
    <StatePageShell
      abbr="OH"
      stateName="Ohio"
      introParagraph="Ohio's Landlord-Tenant Act (R.C. Chapter 5321) provides a structured set of rights and responsibilities for renters and landlords statewide. Ohio has no rent control, but it does offer meaningful protections around security deposits — including an interest requirement for longer tenancies — habitability, landlord entry notice, and repair remedies. Whether you rent in Columbus, Cleveland, Cincinnati, or a smaller Ohio city, knowing your rights is the first step to protecting them."
      whoIsProtectedIntro="Ohio landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain the unit in a habitable condition — this duty cannot be waived by lease",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry",
        "Security deposit deductions require an itemized written statement within 30 days of move-out",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help evictions",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ohioattorneygeneral.gov/FAQ"
      agLabel="Ohio Attorney General — Tenant Rights"
    />
  );
}
