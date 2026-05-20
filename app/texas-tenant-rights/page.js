import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Texas Tenant Rights — Complete Guide for Renters in TX",
  description:
    "A complete guide to Texas tenant rights: security deposit rules, repair obligations, eviction timelines, entry notice requirements, and what landlords can and can't do under Texas law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No statutory cap — must return in 30 days",
    detail:
      "Texas law sets no maximum on security deposits, but landlords must return the deposit within 30 days of move-out along with a written, itemized list of any deductions. If a landlord acts in bad faith by wrongfully withholding the deposit, the tenant may be entitled to three times the withheld amount plus attorney fees and $100 in statutory damages.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in Texas",
    detail:
      "Texas state law prohibits cities and counties from enacting rent control ordinances, so there are no caps on how much a landlord can raise rent. During a fixed-term lease, rent generally cannot increase unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least one rental period's notice before increasing rent.",
  },
  {
    topic: "Repairs & Habitability",
    value: "Landlord must repair within reasonable time after written notice",
    detail:
      "Texas Property Code §92.056 requires landlords to make repairs that materially affect health or safety within a reasonable time after written notice (typically 7 days for urgent issues). If the landlord fails to repair, tenants may have the right to terminate the lease, repair-and-deduct (up to one month's rent or $500, whichever is greater), or seek court-ordered repairs.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required (typically 24 hours)",
    detail:
      "Texas law does not specify an exact notice period but requires 'reasonable' advance notice before entry for non-emergency purposes. Courts and landlord-tenant practice treat 24 hours as the standard. Emergency entry — such as a gas leak or flooding — requires no advance notice. Repeated unannounced entries may constitute harassment.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment; court filing required",
    detail:
      "To evict for non-payment of rent, a Texas landlord must give a 3-day written notice to vacate before filing in court. Eviction lawsuits are heard in Justice of the Peace courts. Self-help evictions — changing locks, removing doors, or shutting off utilities to force a tenant out — are illegal in Texas and expose the landlord to liability.",
  },
  {
    topic: "Retaliation Protections",
    value: "Retaliatory action within 6 months is presumed unlawful",
    detail:
      "Texas law presumes that a landlord is retaliating if they raise rent, reduce services, or pursue eviction within 6 months of a tenant reporting habitability issues to a government agency or exercising a legal right. The tenant must not be behind on rent to invoke this protection. Successful retaliation claims entitle tenants to one month's rent plus $500 plus attorney fees.",
  },
];

const RED_FLAGS = [
  "Lease waiving the landlord's duty to repair habitability issues — Texas Property Code protections cannot be contracted away.",
  "Security deposit clauses that list deductions so broadly that almost any condition qualifies — always do a written move-in inspection.",
  "Late fee provisions with no grace period and daily compounding fees — Texas law requires fees to be 'reasonable.'",
  "Clauses allowing the landlord to terminate utilities as a remedy for non-payment — this is illegal self-help eviction in Texas.",
  "Automatic lease renewal requiring 60+ days' notice to opt out — easy to miss and can lock you into another full term.",
  "Language that makes you responsible for all pest control regardless of cause — Texas habitability law puts routine pest control on the landlord.",
  "No written itemization process for deposit deductions — required by Texas Property Code §92.109.",
];

export default function TexasTenantRightsPage() {
  return (
    <StatePageShell
      abbr="TX"
      stateName="Texas"
      introParagraph="Texas is generally considered a landlord-friendly state — there is no rent control, no security deposit cap, and eviction timelines move quickly. But Texas law still provides meaningful protections for renters: landlords must make habitability repairs after written notice, cannot use self-help evictions, and must return your deposit with an itemized accounting within 30 days. Knowing your rights under the Texas Property Code is the first step to protecting yourself."
      whoIsProtectedIntro="Texas landlord-tenant law is primarily governed by Chapter 92 of the Texas Property Code. The protections that exist center mainly on habitability, deposit handling, and preventing illegal self-help evictions."
      whoIsProtected={[
        "Landlords must maintain rental units in a condition that meets basic health and safety standards",
        "Tenants must give written notice before exercising repair rights — verbal complaints don't trigger the law",
        "Evictions require court action — no lockouts, utility shutoffs, or property removal is allowed",
        "Security deposit deductions require a written, itemized list sent within 30 days",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://texasattorneygeneral.gov/consumer-protection"
      agLabel="Texas Attorney General — Tenant Rights"
    />
  );
}
