import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Washington State Tenant Rights — Complete Guide for Renters in WA",
  description:
    "A complete guide to Washington State tenant rights: security deposit rules, just-cause eviction protections, landlord entry requirements, habitability standards, and what renters need to know under the Washington Residential Landlord-Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 30 days; trust account required",
    detail:
      "Washington law (RCW 59.18.270) sets no maximum on security deposits, but landlords must hold deposits in a trust account and provide written notice of where the deposit is held within 30 days of receiving it. The deposit must be returned — along with a written itemized statement of deductions — within 30 days of the tenant vacating. Landlords who wrongfully withhold any portion of the deposit may be liable for twice the withheld amount plus reasonable attorney fees. A written move-in condition checklist is required; landlords who fail to provide one lose the right to make deductions.",
  },
  {
    topic: "Just-Cause Eviction",
    value: "Just-cause required statewide (2021 law); stronger in Seattle",
    detail:
      "Washington's 2021 just-cause eviction law (RCW 59.18.650) requires landlords to have a legally recognized reason to end a tenancy or refuse lease renewal — prohibiting no-cause evictions statewide. Recognized causes include non-payment of rent, lease violations, and owner move-in with proper notice. Seattle's local just-cause ordinance provides additional protections. Month-to-month terminations without cause are no longer permitted under state law.",
  },
  {
    topic: "Landlord Entry",
    value: "2 days' advance notice required — RCW 59.18.150",
    detail:
      "Washington Statute RCW 59.18.150 requires landlords to give at least two days' (48 hours') advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to address an immediate threat to health or safety may occur without notice. Unauthorized entry may entitle the tenant to damages and may constitute a lease violation.",
  },
  {
    topic: "Habitability",
    value: "Landlord must repair within 10 days — RCW 59.18.060",
    detail:
      "RCW 59.18.060 requires landlords to maintain rental units in a weathertight, habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order. Tenants must give written notice of repair needs. If the landlord fails to act within 10 days (or sooner for emergencies), tenants may pursue rent withholding (deposited with the court), repair-and-deduct (up to one month's rent or $1,500), or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment; 10-day for other violations",
    detail:
      "For non-payment of rent, Washington landlords must serve a written 3-day pay-or-vacate notice before filing an unlawful detainer action in superior court (RCW 59.12.030). For other lease violations, a 10-day cure notice is required. Just-cause is required for all terminations since 2021. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Washington and expose landlords to significant statutory liability.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption — RCW 59.18.240",
    detail:
      "RCW 59.18.240 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, organize with other tenants, or exercise any legal right under the RLTA. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages including lost wages and attorney fees, and use retaliation as a complete defense to eviction.",
  },
];

const RED_FLAGS = [
  "No written move-in condition checklist provided — Washington law requires it; landlords who skip it lose the right to make deposit deductions.",
  "Deposit return language giving more than 30 days — Washington's deadline is strict; missing it triggers double-damage liability.",
  "Entry clauses with fewer than 2 days' notice — RCW 59.18.150 requires at least 48 hours for non-emergency landlord entry.",
  "No-cause termination clauses — Washington's 2021 just-cause eviction law prohibits terminating most tenancies without a legally recognized reason.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under RCW 59.18.060.",
  "Eviction procedures that skip the required 3-day written notice for non-payment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Washington.",
];

export default function WashingtonTenantRightsPage() {
  return (
    <StatePageShell
      abbr="WA"
      stateName="Washington"
      introParagraph="Washington State has significantly strengthened tenant protections in recent years, including a 2021 just-cause eviction law, strong habitability repair rights, and some of the most protective local ordinances in the country — particularly in Seattle. Washington tenants have meaningful legal standing when it comes to eviction procedures, deposit handling, landlord entry, and retaliation. Whether you rent in Seattle, Spokane, Tacoma, or a smaller city, understanding your rights under the Residential Landlord-Tenant Act (RCW 59.18) is essential."
      whoIsProtectedIntro="Washington landlord-tenant law is primarily governed by the Residential Landlord-Tenant Act (RCW 59.18). Key baseline rights that apply statewide regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain rental units in a habitable, weathertight condition — this duty cannot be waived",
        "You are entitled to at least 2 days' advance notice before non-emergency landlord entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
        "A written move-in condition checklist must be provided — landlords who skip it lose the right to make deposit deductions",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.atg.wa.gov/landlord-tenant"
      agLabel="Washington Attorney General — Tenant Rights"
    />
  );
}
