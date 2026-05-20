import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Hawaii Tenant Rights — Complete Guide for Renters in HI",
  description:
    "A complete guide to Hawaii tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Hawaii Revised Statutes Chapter 521.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap; return within 14 days",
    detail:
      "Hawaii Revised Statute §521-44 caps security deposits at one month's rent. Landlords must return the deposit — along with a written itemized statement of any deductions — within 14 days of the tenant vacating the unit. Landlords who wrongfully withhold any portion of the deposit may be liable for the withheld amount plus damages up to three times the wrongfully withheld amount, plus reasonable attorney fees — one of the most tenant-favorable penalty structures in the country.",
  },
  {
    topic: "Rent Increases",
    value: "45-day written notice required; county rent control may apply",
    detail:
      "Hawaii law requires landlords to provide at least 45 days' written notice before a rent increase takes effect (HRS §521-21). During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. Note that some Hawaii counties — including Maui County — have enacted local rent control or stabilization ordinances that may further restrict increases. Always check your county's rules in addition to state law.",
  },
  {
    topic: "Landlord Entry",
    value: "48-hour notice required — HRS §521-53",
    detail:
      "Hawaii Revised Statute §521-53 requires landlords to give at least two days' (48 hours') advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious property damage or address an immediate safety threat may occur without prior notice. Unauthorized entry may entitle the tenant to terminate the lease and recover damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — HRS §521-42",
    detail:
      "Hawaii Revised Statute §521-42 imposes a statutory duty on landlords to keep rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must maintain all electrical, plumbing, heating, and structural systems in working order and keep common areas clean and safe. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within a reasonable time, tenants may pursue rent reduction, repair-and-deduct, or lease termination under HRS §521-64.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for nonpayment; court required for all evictions",
    detail:
      "For nonpayment of rent, Hawaii landlords must serve a written 5-day notice to pay or vacate before filing a summary possession (eviction) action in district court (HRS §521-68). For other material lease violations, a 10-day cure notice is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Hawaii and expose landlords to liability for actual damages, statutory damages, and attorney fees under HRS §521-63.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — 90-day presumption of retaliation — HRS §521-74",
    detail:
      "Hawaii Revised Statute §521-74 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. If a landlord takes adverse action — rent increase, service reduction, or eviction — within 90 days of protected tenant activity, retaliation is presumed by law. Tenants who prove retaliation may terminate the lease, recover actual damages and attorney fees, and use retaliation as a complete defense to eviction.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one month's rent — Hawaii law caps this strictly; any excess is unenforceable and may itself be a violation.",
  "Deposit return language giving more than 14 days — Hawaii's deadline is strict and runs from move-out; wrongful withholding can trigger triple damages.",
  "Entry clauses with no notice or less than 48 hours' notice — HRS §521-53 requires at least two days' advance notice for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under HRS §521-42.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 5-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Hawaii and carries statutory penalties.",
];

export default function HawaiiTenantRightsPage() {
  return (
    <StatePageShell
      abbr="HI"
      stateName="Hawaii"
      introParagraph="Hawaii landlord-tenant law (Hawaii Revised Statutes Chapter 521 — the Residential Landlord-Tenant Code) establishes the rights and responsibilities of renters and landlords throughout the state. Hawaii provides strong tenant protections including a one-month deposit cap, a 48-hour entry notice requirement, triple-damages for wrongful deposit withholding, a 90-day retaliation presumption, and a 45-day rent increase notice requirement. Whether you rent in Honolulu, Hilo, Kailua, or elsewhere in Hawaii, understanding your rights under state and county law is essential."
      whoIsProtectedIntro="Hawaii landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent — wrongful withholding can trigger triple damages plus attorney fees",
        "Security deposits must be returned within 14 days with a written itemized statement of deductions",
        "Landlords must give at least 48 hours' advance notice before non-emergency entry per HRS §521-53",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://cca.hawaii.gov/ocp/"
      agLabel="Hawaii Office of Consumer Protection"
    />
  );
}
