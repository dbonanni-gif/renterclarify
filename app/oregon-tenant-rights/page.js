import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Oregon Tenant Rights — Complete Guide for Renters in OR",
  description:
    "A complete guide to Oregon tenant rights: statewide rent control, security deposit rules, landlord entry requirements, just-cause eviction protections, and what renters need to know under Oregon landlord-tenant law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap; must return within 31 days",
    detail:
      "Oregon Revised Statutes §90.300 sets no maximum on security deposits. Landlords must return the deposit with an itemized written statement of deductions within 31 days of move-out. Oregon does not allow landlords to label deposits as 'non-refundable' — any deposit collected is legally refundable absent documented deductible damages. Landlords who wrongfully withhold deposits may be liable for up to twice the amount wrongfully withheld plus attorney fees.",
  },
  {
    topic: "Rent Control",
    value: "Statewide cap: 7% + CPI annually; 90 days' notice required",
    detail:
      "Oregon enacted statewide rent stabilization in 2019 (HB 4143), making it the first state with a statewide rent control law. Rent increases for most covered units are capped at 7% plus the Consumer Price Index (CPI) per year, with a maximum cap of 10%. Landlords must give 90 days' written notice before a rent increase takes effect. The law applies to units more than 15 years old. Newly constructed units are exempt for the first 15 years. Local governments cannot enact stricter rent control under state preemption.",
  },
  {
    topic: "Landlord Entry",
    value: "24 hours' notice required",
    detail:
      "ORS 90.322 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes including repairs, inspections, and showings. Entry must occur between 8 a.m. and 6 p.m. unless the tenant agrees to different hours. Emergency entry may occur without notice. Tenants may deny entry if proper notice is not given. Repeated unauthorized entries may support a termination of the tenancy for cause or a harassment claim.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain; tenant may withhold or repair-and-deduct",
    detail:
      "ORS 90.320 requires landlords to maintain rental units in a habitable condition: structurally safe, weather-tight, with functional plumbing, heating, and electrical systems. Tenants must give written notice of repair needs; the landlord then has a reasonable time to act (typically 7 days for urgent issues, 30 days for non-urgent). If the landlord fails to repair, tenants may terminate the lease, withhold rent, or repair-and-deduct (up to $300 or one month's rent per occurrence, whichever is greater).",
  },
  {
    topic: "Just-Cause Eviction",
    value: "Required statewide — Oregon Residential Landlord-Tenant Act",
    detail:
      "Oregon's 2019 just-cause eviction law (SB 608) requires landlords to have a legally recognized reason to terminate a tenancy once the initial lease term has passed. For month-to-month tenants after the first year, recognized causes include non-payment of rent, lease violations, and no-fault terminations (with 90 days' notice and one month's rent in relocation assistance). During the first year of a tenancy, landlords may terminate a month-to-month tenancy with 30 days' notice for any reason. This law significantly limits a landlord's ability to remove long-term tenants without cause.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected under ORS 90.385",
    detail:
      "Oregon law prohibits landlords from retaliating against tenants who report habitability issues to government authorities, organize with other tenants, or exercise any legal right. Retaliation is a recognized defense in eviction proceedings and entitles tenants to recover actual damages, three months' rent, and attorney fees. Oregon's just-cause eviction law further protects long-term tenants from pretextual terminations disguised as no-fault evictions.",
  },
];

const RED_FLAGS = [
  "Lease labeling any deposit as 'non-refundable' — Oregon law treats all deposits as refundable regardless of this language.",
  "Rent increase exceeding 7% + CPI for a covered unit — Oregon's statewide cap is mandatory for units more than 15 years old.",
  "Rent increase notice of less than 90 days — Oregon requires the full 90-day notice period before any increase takes effect.",
  "Entry clauses with less than 24 hours' notice outside emergencies — violates ORS 90.322.",
  "No-fault termination of a month-to-month tenancy after the first year without 90 days' notice and relocation assistance — violates Oregon's just-cause eviction law.",
  "Lease clauses waiving Oregon's habitability requirements — unenforceable under ORS 90.320.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — particularly significant in Oregon given just-cause protections.",
];

export default function OregonTenantRightsPage() {
  return (
    <StatePageShell
      abbr="OR"
      stateName="Oregon"
      introParagraph="Oregon is one of the most tenant-protective states in the country. It enacted the nation's first statewide rent control law in 2019, capping annual increases at 7% plus CPI. The same year, Oregon passed a statewide just-cause eviction law, giving long-term renters the right to remain in their homes unless the landlord has a documented legal reason to remove them. Whether you rent in Portland, Eugene, Salem, or a smaller Oregon community, these protections apply to you."
      whoIsProtectedIntro="Oregon landlord-tenant law applies to most residential rental agreements. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Statewide rent control caps annual increases at 7% + CPI for units more than 15 years old",
        "After the first year, landlords cannot terminate a month-to-month tenancy without just cause",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry",
        "All deposits are legally refundable — 'non-refundable deposit' language is void under Oregon law",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.doj.state.or.us/consumer-protection/"
      agLabel="Oregon Department of Justice — Consumer Protection"
    />
  );
}
