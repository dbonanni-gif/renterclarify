import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Colorado Tenant Rights — Complete Guide for Renters in CO",
  description:
    "A complete guide to Colorado tenant rights: security deposit rules, warranty of habitability, eviction timelines, landlord entry requirements, and what renters need to know under Colorado landlord-tenant law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No statutory cap; must return within 30 days (60 if lease allows)",
    detail:
      "Colorado law sets no maximum on security deposits. Landlords must return the deposit within 30 days of lease end along with a written, itemized statement of deductions — or within 60 days if the lease specifically allows the extended period. If a landlord wrongfully withholds a deposit, the tenant may sue for triple the wrongfully withheld amount plus attorney fees under C.R.S. §38-12-103. The itemized statement must be sent even if the full deposit is being returned.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide limit; 21 days' notice required for month-to-month",
    detail:
      "Colorado has no statewide rent control law. During a fixed-term lease, rent cannot be increased unless the lease allows it. For month-to-month tenancies, landlords must provide at least 21 days' written notice before a rent increase takes effect (C.R.S. §38-12-701). Some Colorado cities have explored local rent stabilization, but none had enacted it statewide as of 2026. Rent can be increased to any amount with proper notice.",
  },
  {
    topic: "Landlord Entry",
    value: "24 hours' notice required",
    detail:
      "Colorado law (C.R.S. §38-12-1102) requires landlords to give at least 24 hours' written or verbal notice before entering a rental unit for non-emergency purposes. Entry must be at a reasonable time. Emergency entry — fire, flooding, or gas leaks — requires no advance notice. Tenants may deny entry if proper notice was not given, and repeated unauthorized entry can support a harassment or breach-of-quiet-enjoyment claim.",
  },
  {
    topic: "Habitability",
    value: "Warranty of habitability — landlord must repair within reasonable time",
    detail:
      "Colorado's Warranty of Habitability Act (C.R.S. §38-12-501 et seq.), significantly strengthened in 2019, requires landlords to maintain residential units in a livable condition including functional heating, plumbing, and electrical systems, and protection from weather and pests. Tenants must give written notice of conditions; the landlord then has a reasonable time to repair (typically 24–72 hours for emergencies, longer for non-urgent matters). If the landlord fails to act, tenants may withhold rent, terminate the lease, or seek court relief.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment; 10-day for lease violations",
    detail:
      "Colorado landlords must give a written notice before filing an eviction (unlawful detainer) action: 3 days for non-payment of rent, and 10 days to cure a lease violation. After the notice period expires, the landlord may file in County or District Court. Colorado reformed its eviction procedures in 2021, adding additional tenant protections and access to legal aid. Self-help evictions — changing locks, removing belongings, or shutting off utilities — are illegal and expose landlords to significant liability.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — landlord may not retaliate within 90 days of protected activity",
    detail:
      "C.R.S. §38-12-509 prohibits landlords from retaliating against tenants who report habitability conditions, contact government authorities, or exercise any legal right. Colorado creates a presumption of retaliation if adverse action occurs within 90 days of protected tenant activity. Successful retaliation claims entitle tenants to the greater of actual damages or 3 months' rent, plus attorney fees and court costs.",
  },
];

const RED_FLAGS = [
  "Deposit return language extending beyond 60 days — the maximum allowable under Colorado law even with a lease provision permitting it.",
  "Lease provisions waiving Colorado's Warranty of Habitability — these are void and unenforceable under C.R.S. §38-12-503.",
  "Entry clauses with less than 24 hours' notice outside emergencies — violates C.R.S. §38-12-1102.",
  "Late fees with no grace period — Colorado courts scrutinize unreasonable fee structures.",
  "Clauses making tenants responsible for all pest control regardless of cause — the Warranty of Habitability places basic pest control on the landlord.",
  "Automatic lease renewal clauses requiring more than 21 days' notice to opt out — particularly problematic if the notice period exceeds Colorado's statutory rent increase notice requirement.",
  "No itemized deduction statement requirement in the deposit clause — Colorado law requires itemization regardless of whether deductions are made.",
];

export default function ColoradoTenantRightsPage() {
  return (
    <StatePageShell
      abbr="CO"
      stateName="Colorado"
      introParagraph="Colorado has significantly strengthened tenant protections in recent years, including a major overhaul of the Warranty of Habitability Act in 2019 and eviction procedure reforms in 2021. Colorado tenants now have stronger rights around habitability repairs, retaliation protections, and eviction procedures than they did even a few years ago. Whether you rent in Denver, Boulder, Colorado Springs, or a smaller town, understanding Colorado landlord-tenant law is your first line of defense."
      whoIsProtectedIntro="Colorado landlord-tenant law is primarily governed by C.R.S. Title 38, Article 12. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain the unit under the Warranty of Habitability — this duty cannot be waived by any lease provision",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal",
        "Wrongful deposit withholding can result in triple damages plus attorney fees",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://coag.gov/office-sections/consumer-protection/"
      agLabel="Colorado Attorney General — Tenant Rights"
    />
  );
}
