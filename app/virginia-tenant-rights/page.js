import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Virginia Tenant Rights — Complete Guide for Renters in VA",
  description:
    "A complete guide to Virginia tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Virginia Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "Capped at 2 months' rent; return within 45 days",
    detail:
      "Virginia law (Va. Code §55.1-1226) caps security deposits at two months' rent — one of the few states with a statutory cap. Landlords must return the deposit with a written itemized statement of deductions within 45 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the amount wrongfully withheld plus penalties and reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — 30-day notice for month-to-month",
    detail:
      "Virginia has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — entry between 8 a.m. and 8 p.m.",
    detail:
      "Virginia Code §55.1-1229 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur between 8 a.m. and 8 p.m. — a specific timing restriction not found in most states. Emergency entry to address an immediate threat to health or safety may occur without notice. Unauthorized entry may entitle the tenant to damages.",
  },
  {
    topic: "Habitability",
    value: "Landlord must repair within 30 days — Va. Code §55.1-1220",
    detail:
      "Virginia Code §55.1-1220 requires landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order. Tenants must provide written notice of repair needs. If the landlord fails to act within 30 days (or sooner for emergencies), tenants may pursue rent escrow, repair-and-deduct, or lease termination through the courts.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for non-payment; 30-day for other violations",
    detail:
      "For non-payment of rent, Virginia landlords must give a written 5-day pay-or-quit notice before filing an unlawful detainer action in general district court (Va. Code §55.1-1245). For other material lease violations, a 30-day cure notice is required. Virginia provides a statutory right of redemption — tenants may pay all rent owed, plus fees, to stop a pending eviction. Self-help evictions are illegal and expose landlords to significant liability.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption — Va. Code §55.1-1234",
    detail:
      "Virginia Code §55.1-1234 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, organize with other tenants, or exercise any legal right under the VRLTA. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of a protected tenant activity, retaliation is presumed. Tenants who prove retaliation may terminate the lease, recover actual damages, and obtain attorney fees.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding two months' rent — Virginia's statutory cap under Va. Code §55.1-1226 is strictly enforced.",
  "Deposit return language giving more than 45 days — Virginia's deadline is firm and failure to comply triggers penalties.",
  "Entry clauses with no advance notice or fewer than 24 hours — Va. Code §55.1-1229 requires at least 24 hours for non-emergency entry.",
  "Entry clauses permitting access outside 8 a.m. to 8 p.m. — Virginia specifies permissible entry hours by statute.",
  "Lease clauses waiving the landlord's habitability duty — unenforceable under Va. Code §55.1-1220.",
  "Eviction notice with fewer than 5 days to pay for non-payment — defective notice will be dismissed in court.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full term.",
];

export default function VirginiaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="VA"
      stateName="Virginia"
      introParagraph="Virginia's Residential Landlord and Tenant Act (Va. Code §55.1-1200 et seq.) governs the relationship between renters and landlords statewide. Virginia has strengthened tenant protections significantly in recent years — extending eviction notice periods, adding a right of redemption, and clarifying habitability repair remedies. While there is no rent control, tenants have meaningful rights around deposit handling, entry notice, habitability, and protection from retaliation. Whether you rent in Northern Virginia, Richmond, Virginia Beach, or elsewhere in the state, understanding your rights is essential."
      whoIsProtectedIntro="Virginia landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at two months' rent and must be returned with an itemized statement within 45 days",
        "Landlords must maintain the unit in a habitable condition — this duty cannot be waived by lease",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry, between 8 a.m. and 8 p.m.",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.oag.state.va.us/consumer-protection/index.php/tips-info2?view=article&id=157:landlord-tenant&catid=15"
      agLabel="Virginia Attorney General — Tenant Rights"
    />
  );
}
