import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Utah Tenant Rights — Complete Guide for Renters in UT",
  description:
    "A complete guide to Utah tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Utah Fit Premises Act and Title 57.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No statutory cap; return within 30 days",
    detail:
      "Utah Code §57-17-3 sets no maximum on security deposits. Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit (or as specified in the lease, if shorter). If the landlord wrongfully withholds any portion of the deposit, the tenant may be entitled to three times the amount wrongfully withheld plus court costs. Tenants should document the unit's condition at move-in and move-out.",
  },
  {
    topic: "Rent Increases",
    value: "No rent control; 15-day notice for month-to-month",
    detail:
      "Utah has no statewide rent control law. For month-to-month tenancies, landlords must provide at least 15 days' written notice before a rent increase takes effect — one of the shorter notice periods among states. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — Utah Code §57-22-4",
    detail:
      "Utah Code §57-22-4 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to address an immediate threat to health or safety may occur without prior notice. Repeated unauthorized entry may give the tenant grounds to terminate the lease and seek damages.",
  },
  {
    topic: "Habitability",
    value: "Fit Premises Act warranty — Utah Code §57-22-3",
    detail:
      "Utah's Fit Premises Act (Utah Code §57-22-3) requires landlords to maintain rental units in a fit and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order. Tenants must provide written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may pursue rent reduction, repair-and-deduct, or lease termination through the courts.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment — Utah Code §78B-6-802",
    detail:
      "For non-payment of rent, Utah landlords must serve a written 3-day pay-or-quit notice before filing an unlawful detainer action in district court (Utah Code §78B-6-802). For other lease violations, a 3-day cure notice is generally required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Utah and expose landlords to liability for actual damages and attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected under Utah Code §57-22-6",
    detail:
      "Utah Code §57-22-6 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs in writing, or exercise any legal right under the Fit Premises Act. Prohibited retaliatory acts include eviction, rent increases, and reduction of services. Tenants who prove retaliation may terminate the lease and recover actual damages. While Utah does not codify a specific presumption period, courts recognize retaliatory motive as a defense to eviction.",
  },
];

const RED_FLAGS = [
  "Deposit return language giving more than 30 days — Utah's statutory deadline runs from move-out; missing it triggers triple-damage liability.",
  "Rent increase notice shorter than 15 days for month-to-month tenants — Utah's minimum notice requirement applies.",
  "Entry clauses with no advance notice or fewer than 24 hours — Utah Code §57-22-4 requires at least 24 hours before non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under Utah's Fit Premises Act.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction notice with fewer than 3 days to pay for non-payment — defective notice will result in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Utah.",
];

export default function UtahTenantRightsPage() {
  return (
    <StatePageShell
      abbr="UT"
      stateName="Utah"
      introParagraph="Utah landlord-tenant law (Utah Code Title 57, including the Fit Premises Act at §§57-22-1 to 57-22-7) establishes the rights and responsibilities of renters and landlords throughout the state. Utah provides a statutory warranty of habitability under the Fit Premises Act, a mandatory 24-hour entry notice, a 30-day deposit return deadline, and retaliation protections for tenants who exercise their legal rights. Whether you rent in Salt Lake City, Provo, Ogden, or a smaller Utah community, understanding your rights is essential."
      whoIsProtectedIntro="Utah landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain habitable conditions — the Fit Premises Act warranty under Utah Code §57-22-3 cannot be waived",
        "Security deposits must be returned within 30 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per Utah Code §57-22-4",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://attorneygeneral.utah.gov/faq/"
      agLabel="Utah Attorney General — FAQ"
    />
  );
}
