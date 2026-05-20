import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Georgia Tenant Rights — Complete Guide for Renters in GA",
  description:
    "A complete guide to Georgia tenant rights: security deposit rules, eviction timelines, landlord entry requirements, habitability standards, and what renters need to know under Georgia landlord-tenant law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; must return within 30 days (or 3 business days for termination)",
    detail:
      "Georgia law sets no maximum on security deposits. Landlords must return the deposit within 30 days of move-out along with an itemized written statement of any deductions. If the landlord terminates the tenancy, the deadline is 3 business days. If the landlord fails to return the deposit or provide the itemized statement on time, the tenant may sue for the full deposit amount plus attorney fees. Landlords who hold deposits for more than 5 units must keep them in an escrow account.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in Georgia",
    detail:
      "Georgia state law preempts local rent control ordinances — cities and counties cannot cap rent increases. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least 60 days' written notice before a rent increase, though lease terms may specify different notice periods. There are no caps on how much rent can be raised.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required — no specific statutory period",
    detail:
      "Georgia law does not specify a minimum notice period for landlord entry, but courts and landlord-tenant practice require 'reasonable' advance notice for non-emergency inspections, repairs, or showings — generally interpreted as 24 hours. Emergency entry may occur without notice. The lease should specify the notice requirement, and tenants can negotiate for 24–48 hours in writing. Unauthorized repeated entries may constitute harassment.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain; tenant must give written notice before repair rights apply",
    detail:
      "Georgia recognizes an implied warranty of habitability. Landlords must maintain rental units in a safe and habitable condition, including functional plumbing, heating, electrical systems, and structural integrity. To trigger repair rights, tenants must give the landlord written notice. If the landlord fails to make essential repairs within a reasonable time, tenants may have grounds to terminate the lease or pursue legal remedies — though Georgia's self-help repair-and-deduct rights are limited compared to other states.",
  },
  {
    topic: "Eviction Process",
    value: "Demand to vacate required; court action follows in 7 days",
    detail:
      "Georgia eviction law requires landlords to serve tenants with a written demand to pay rent or vacate before filing an eviction (dispossessory) action. If the tenant does not comply within the demand period, the landlord files in Magistrate Court. Georgia evictions can move very quickly — hearings can be scheduled within 7 days of filing. Tenants have the right to answer and contest the eviction in court. Self-help evictions — lockouts, utility shutoffs, removal of belongings — are illegal.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — but Georgia law is less explicit than other states",
    detail:
      "Georgia does not have a comprehensive statewide anti-retaliation statute comparable to California or New York. However, courts have recognized retaliation as a defense in eviction proceedings, and retaliatory evictions are generally unenforceable. Tenants who face rent increases or eviction attempts shortly after making habitability complaints should document the timeline carefully and consult a tenant attorney. Some local ordinances may provide additional protections.",
  },
];

const RED_FLAGS = [
  "No escrow account mentioned for security deposit — Georgia law requires escrow for landlords with more than 5 units.",
  "Entry clauses with no notice requirement or immediate access language — courts expect reasonable advance notice even without a statutory minimum.",
  "Lease waiving the implied warranty of habitability — unenforceable under Georgia public policy.",
  "Late fees with no grace period or compounding daily penalties — Georgia courts can strike down unreasonable fee structures.",
  "Eviction clauses purporting to skip the mandatory written demand — all Georgia evictions require a prior written demand before court filing.",
  "Automatic lease renewal requiring very long advance notice to opt out — easy to miss and can lock you into another full term.",
  "Clauses making tenants responsible for all repairs regardless of cause — contradicts the landlord's duty to maintain habitability.",
];

export default function GeorgiaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="GA"
      stateName="Georgia"
      introParagraph="Georgia is generally considered a landlord-friendly state — there is no rent control, no statutory minimum notice period for landlord entry, and eviction proceedings move quickly through Magistrate Court. But tenants still have meaningful rights: landlords must maintain habitable conditions, return security deposits on time with an itemized accounting, and follow proper court procedures before removing a tenant. Whether you rent in Atlanta, Savannah, Augusta, or elsewhere in Georgia, here's what you need to know."
      whoIsProtectedIntro="Georgia landlord-tenant law is primarily governed by the Georgia Landlord-Tenant Act (O.C.G.A. §44-7). Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain the unit in a habitable condition — this duty cannot be fully waived by lease",
        "Security deposit deductions require a written, itemized statement within 30 days of move-out",
        "Evictions require a written demand and then court action — lockouts and utility shutoffs are illegal",
        "Tenants have the right to contest an eviction in Magistrate Court before being removed",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://law.georgia.gov/key-issues/consumer-protection"
      agLabel="Georgia Attorney General — Tenant Rights"
    />
  );
}
