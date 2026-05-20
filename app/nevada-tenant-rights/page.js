import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Nevada Tenant Rights — Complete Guide for Renters in NV",
  description:
    "A complete guide to Nevada tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Nevada's Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "3 months' rent maximum; return within 30 days",
    detail:
      "Nevada Revised Statutes §118A.242 caps security deposits at three months' rent. Landlords must return the deposit with an itemized written statement of deductions within 30 days of move-out. If the landlord wrongfully withholds any portion of the deposit, the tenant may sue for the amount wrongfully withheld plus damages up to the amount of the deposit, plus attorney fees. Nevada also prohibits non-refundable security deposits — any deposit labeled 'non-refundable' is treated as a refundable deposit by law.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 45 days' notice for month-to-month",
    detail:
      "Nevada has no statewide rent control law, and state law preempts local rent control ordinances. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least 45 days' written notice before a rent increase takes effect (NRS 118A.300) — one of the longer notice periods in the country. There are no limits on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24 hours' notice required",
    detail:
      "NRS 118A.330 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes including repairs, inspections, and showings. Entry must occur at reasonable times — between 8 a.m. and 6 p.m. unless the tenant consents to other hours. Emergency entry may occur without advance notice. Tenants may seek an injunction or damages for repeated unauthorized entry, which may also constitute grounds to terminate the lease.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain fit and habitable premises",
    detail:
      "NRS 118A.290 requires landlords to maintain rental units in a habitable condition: structurally safe, with functional plumbing, heating and cooling systems, and free from conditions that endanger health or safety. Tenants must give written notice of repair needs. If the landlord fails to act within 14 days (or a shorter period for urgent issues), tenants may repair-and-deduct (up to one month's rent per occurrence), terminate the lease, or seek court relief. Las Vegas and Clark County have housing code enforcement resources for serious habitability complaints.",
  },
  {
    topic: "Eviction Process",
    value: "7-day notice for non-payment; 5-day for lease violations",
    detail:
      "Nevada eviction law requires different notice periods depending on the reason. For non-payment of rent, the landlord must give a 7-day written notice to pay or quit. For curable lease violations, a 5-day notice to cure applies. For non-curable violations (such as criminal activity), a 3-day unconditional notice is required. After the notice period, the landlord files a summary eviction proceeding in Justice Court. Nevada evictions can move very quickly — hearings may be set within 7 days of filing. Self-help evictions are illegal.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory conduct prohibited under NRS 118A.510",
    detail:
      "Nevada law prohibits landlords from retaliating against tenants who report habitability issues to government authorities, join tenant organizations, or exercise any legal right under Nevada's landlord-tenant act. Retaliatory conduct includes rent increases, reduction in services, and eviction attempts following protected activity. Tenants who successfully prove retaliation may recover actual damages, attorney fees, and may be entitled to terminate the lease without penalty.",
  },
];

const RED_FLAGS = [
  "Security deposit above three months' rent — Nevada's statutory cap is absolute and any excess must be refunded.",
  "Lease labeling any deposit as 'non-refundable' — NRS 118A.242 treats all deposits as refundable regardless of lease language.",
  "Rent increase notice of less than 45 days for a month-to-month tenancy — Nevada requires the longer 45-day period.",
  "Entry clauses permitting access with less than 24 hours' notice outside emergencies — violates NRS 118A.330.",
  "Entry hours beyond 8 a.m.–6 p.m. without tenant consent — Nevada law sets this window for non-emergency landlord entry.",
  "Eviction notices with incorrect periods — Nevada's notice requirements are strictly enforced and defective notices will be dismissed.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full term.",
];

export default function NevadaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="NV"
      stateName="Nevada"
      introParagraph="Nevada's Residential Landlord and Tenant Act (NRS Chapter 118A) establishes the rights and responsibilities of renters and landlords statewide. Nevada has no rent control but provides meaningful protections: a three-month deposit cap, a 45-day notice requirement for rent increases, strict habitability standards, and a prohibition on non-refundable deposits. Whether you rent in Las Vegas, Henderson, Reno, or elsewhere in Nevada, knowing your rights under state law is essential."
      whoIsProtectedIntro="Nevada landlord-tenant law applies to most residential rental agreements. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at three months' rent — any deposit labeled 'non-refundable' is illegal",
        "Landlords must give 45 days' written notice before a rent increase on a month-to-month tenancy",
        "You are entitled to at least 24 hours' advance notice before non-emergency landlord entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help evictions",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ag.nv.gov/Hot_Topics/Hot_Topics/"
      agLabel="Nevada Attorney General — Residents"
    />
  );
}
