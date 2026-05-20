import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Vermont Tenant Rights — Complete Guide for Renters in VT",
  description:
    "A complete guide to Vermont tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Vermont Statutes Annotated Title 9, Chapter 137.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; return within 14 days (with deductions)",
    detail:
      "Vermont Statutes Annotated §9 V.S.A. §4461 sets no maximum on security deposits. If the landlord makes deductions, they must provide a written itemized statement and return any balance within 14 days of the tenant vacating. If no deductions are made, the deposit should be returned promptly. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to twice the deposit, plus reasonable attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "60-day written notice required",
    detail:
      "Vermont law (9 V.S.A. §4455) requires landlords to provide at least 60 days' written notice before a rent increase takes effect for month-to-month tenancies — one of the longest notice requirements in the country. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statewide rent control or cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "48-hour notice required — 9 V.S.A. §4460",
    detail:
      "Vermont Statute 9 V.S.A. §4460 requires landlords to give at least 48 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to address an immediate threat to health or safety may occur without notice. Unauthorized entry may entitle the tenant to damages and may constitute a breach of the rental agreement.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — 9 V.S.A. §4457",
    detail:
      "Vermont Statute 9 V.S.A. §4457 imposes a statutory duty on landlords to maintain rental premises in a safe and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all electrical, plumbing, heating, and structural systems in working order. Tenants must provide written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may pursue rent withholding (deposited with the court), repair-and-deduct, or lease termination under Vermont's landlord-tenant remedies.",
  },
  {
    topic: "Eviction Process",
    value: "14-day notice for nonpayment; 30-day notice for other violations",
    detail:
      "For nonpayment of rent, Vermont landlords must serve a written 14-day notice to pay or vacate before filing an eviction action in superior court (9 V.S.A. §4467). For other material lease violations, a 30-day cure notice is required. Terminating a month-to-month tenancy without cause requires 60 days' written notice. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Vermont and expose landlords to significant liability.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption of retaliation — 9 V.S.A. §4465",
    detail:
      "Vermont Statute 9 V.S.A. §4465 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages and attorney fees, and use retaliation as a complete defense to eviction.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 14 days (when deductions are made) — Vermont's deadline is strict; missing it triggers double-damage liability.",
  "Rent increase notice shorter than 60 days — Vermont requires one of the longest notice periods in the country for month-to-month rent increases.",
  "Entry clauses with no notice or less than 48 hours' notice — 9 V.S.A. §4460 requires at least two days' advance notice for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under 9 V.S.A. §4457.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 14-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Vermont.",
];

export default function VermontTenantRightsPage() {
  return (
    <StatePageShell
      abbr="VT"
      stateName="Vermont"
      introParagraph="Vermont landlord-tenant law (9 V.S.A. Chapter 137 — Residential Rental Agreements) establishes the rights and responsibilities of renters and landlords throughout the state. Vermont provides strong tenant protections including a statutory warranty of habitability, a 48-hour entry notice requirement, a 60-day rent increase notice requirement (one of the longest in the country), and a 90-day retaliation presumption. Whether you rent in Burlington, Montpelier, Rutland, or a smaller Vermont community, understanding your rights is essential."
      whoIsProtectedIntro="Vermont landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the statutory warranty under 9 V.S.A. §4457 cannot be waived",
        "Security deposits must be returned within 14 days with a written itemized statement when deductions are made",
        "Landlords must give at least 48 hours' advance notice before non-emergency entry per 9 V.S.A. §4460",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ago.vermont.gov/attorney-generals-office-divisions-and-unit/consumer-protection"
      agLabel="Vermont Attorney General — Consumer Protection"
    />
  );
}
