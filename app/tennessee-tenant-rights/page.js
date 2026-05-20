import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Tennessee Tenant Rights — Complete Guide for Renters in TN",
  description:
    "A complete guide to Tennessee tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Tennessee Uniform Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; must return within 30 days",
    detail:
      "Tennessee law (T.C.A. §66-28-301) sets no maximum on security deposits. Landlords must return the deposit with an itemized written statement of deductions within 30 days of move-out. If the landlord fails to return the deposit or provide the required statement on time, the tenant may sue for the full deposit amount plus court costs. Note: Tennessee's Uniform Residential Landlord and Tenant Act (URLTA) applies only in counties with a population over 68,000 — renters in smaller counties may have fewer statutory protections.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in Tennessee",
    detail:
      "Tennessee has no statewide rent control law, and local rent control is not permitted. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies in counties covered by the URLTA, landlords must give at least 30 days' written notice before a rent increase takes effect. In counties not covered by the URLTA, notice requirements may be governed only by the lease terms.",
  },
  {
    topic: "Landlord Entry",
    value: "24 hours' notice required (URLTA counties)",
    detail:
      "In counties covered by Tennessee's URLTA, T.C.A. §66-28-403 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes including repairs, inspections, and showings. Entry must occur at reasonable times. Emergency entry may occur without notice. In counties not covered by the URLTA, lease terms and common-law principles govern entry rights.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain fit and habitable premises (URLTA counties)",
    detail:
      "Under T.C.A. §66-28-304, landlords in URLTA-covered counties must maintain rental units in a habitable condition: structurally safe, with functional plumbing, heating, and electrical systems, and compliant with applicable housing and health codes. Tenants must give written notice of repair needs; the landlord then has a reasonable time to make repairs. If the landlord fails to act within 14 days, tenants may terminate the lease, withhold a portion of rent, or repair-and-deduct (up to $500 or one month's rent).",
  },
  {
    topic: "Eviction Process",
    value: "14-day notice for non-payment; 30-day for lease violations",
    detail:
      "Tennessee requires a 14-day written notice to pay or vacate for non-payment of rent in URLTA counties, and a 30-day notice for other lease violations. After the notice period, the landlord files a detainer warrant in General Sessions Court. Tenants have the right to appear and contest the eviction. Self-help evictions — lockouts, utility shutoffs, and removal of belongings — are illegal in Tennessee and entitle tenants to recover possession plus actual damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected under T.C.A. §66-28-514 (URLTA counties)",
    detail:
      "Tennessee's URLTA prohibits landlords in covered counties from retaliating against tenants who report habitability issues to government authorities, organize with other tenants, or exercise any legal right under the Act. Retaliation is a recognized defense in eviction proceedings. Tenants who successfully prove retaliation may be entitled to terminate the lease, recover actual damages, and obtain attorney fees. The URLTA's protections do not apply in counties with populations under 68,000.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving the landlord more than 30 days — the legal deadline is strict in URLTA counties.",
  "Lease waiving the landlord's habitability duties in URLTA counties — these protections cannot be contracted away.",
  "Entry clauses with less than 24 hours' notice outside emergencies (URLTA counties) — violates T.C.A. §66-28-403.",
  "No distinction between URLTA and non-URLTA coverage — if you're unsure whether your county is covered, verify with a local tenant resource.",
  "Eviction notice with fewer than 14 days to pay for non-payment — defective notice will be dismissed in court.",
  "Lease clauses making tenants responsible for all repairs regardless of cause — contradicts the landlord's habitability duty.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full term.",
];

export default function TennesseeTenantRightsPage() {
  return (
    <StatePageShell
      abbr="TN"
      stateName="Tennessee"
      introParagraph="Tennessee's Uniform Residential Landlord and Tenant Act (URLTA) provides a framework of rights for renters — but with an important caveat: it applies only in counties with a population over 68,000. This covers most major Tennessee cities including Memphis, Nashville, Knoxville, and Chattanooga, but renters in smaller counties may have significantly fewer statutory protections. Tennessee has no rent control and eviction timelines move relatively quickly through General Sessions Court."
      whoIsProtectedIntro="Key baseline rights in Tennessee — note that most apply only in counties covered by the URLTA (population over 68,000):"
      whoIsProtected={[
        "Landlords must maintain the unit in a habitable condition in URLTA counties — this duty cannot be waived by lease",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry (URLTA counties)",
        "Security deposit deductions require an itemized written statement within 30 days of move-out",
        "Evictions require court action — lockouts and utility shutoffs are illegal self-help evictions",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.tn.gov/content/tn/attorneygeneral/working-for-tennessee/protecting-consumers.html"
      agLabel="Tennessee Attorney General — Consumer Protection"
    />
  );
}
