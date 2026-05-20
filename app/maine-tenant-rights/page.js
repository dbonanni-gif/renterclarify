import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Maine Tenant Rights — Complete Guide for Renters in ME",
  description:
    "A complete guide to Maine tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Maine Revised Statutes Title 14.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "2-month cap; return within 21–30 days",
    detail:
      "Maine Revised Statute 14 M.R.S.A. §6032 caps security deposits at two months' rent. The return deadline depends on the tenancy type: 21 days for tenants with a written lease, and 30 days for month-to-month (at-will) tenants, measured from the date the tenant vacates and returns the keys. Landlords must return the deposit with a written itemized statement of any deductions. Landlords who wrongfully withhold deposits may be liable for twice the amount wrongfully withheld, plus attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "45-day written notice required for month-to-month tenancies",
    detail:
      "Maine law (14 M.R.S.A. §6015) requires landlords to provide at least 45 days' written notice before a rent increase takes effect for month-to-month tenancies. During a fixed-term lease, rent cannot be raised unless the lease expressly allows it. There is no statewide rent control and no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — 14 M.R.S.A. §6025",
    detail:
      "Maine Revised Statute 14 M.R.S.A. §6025 requires landlords to give at least 24 hours' advance notice before entering a rental unit for non-emergency purposes such as repairs, inspections, or showings. Entry must occur at reasonable times. Emergency entry to prevent serious damage or address an immediate health or safety threat may occur without prior notice. Repeated unauthorized entry may support a claim for breach of quiet enjoyment and damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory warranty of habitability — 14 M.R.S.A. §6021",
    detail:
      "Maine Revised Statute 14 M.R.S.A. §6021 imposes a statutory duty on landlords to maintain rental premises in a safe and habitable condition that complies with applicable building, housing, and health codes. Landlords must keep all plumbing, heating, electrical, and structural systems in working order and ensure the premises are fit for human habitation. Tenants must provide written notice of repair needs. If the landlord fails to make repairs within 14 days, tenants may pursue rent reduction, repair-and-deduct, or lease termination.",
  },
  {
    topic: "Eviction Process",
    value: "7-day notice for nonpayment; 30-day notice for other violations",
    detail:
      "For nonpayment of rent, Maine landlords must serve a written 7-day notice to pay or vacate before filing a forcible entry and detainer action in district court (14 M.R.S.A. §6002). For other lease violations, a 30-day cure notice is required. Terminating a month-to-month tenancy without cause requires 30 days' written notice. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are illegal in Maine and expose landlords to liability for actual damages plus attorney fees.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliatory evictions prohibited — 14 M.R.S.A. §6001",
    detail:
      "Maine Revised Statute 14 M.R.S.A. §6001 prohibits landlords from retaliating against tenants who report habitability issues to government authorities, request repairs, or exercise any legal right under the lease or state law. Retaliation is recognized as an affirmative defense in eviction proceedings. If the court finds that an eviction was retaliatory, the landlord's claim will be denied and the tenant may recover damages and attorney fees.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding two months' rent — Maine law sets a hard cap and any excess is unenforceable.",
  "Deposit return language giving more than 21 days (written lease) or 30 days (month-to-month) — Maine's deadlines are strict and wrongful withholding triggers double-damage liability.",
  "Rent increase notice shorter than 45 days — Maine requires 45 days' notice for month-to-month rent increases.",
  "Entry clauses with no notice or less than 24 hours' notice — 14 M.R.S.A. §6025 requires at least 24 hours for non-emergency entry.",
  "Lease clauses waiving the statutory warranty of habitability — unenforceable under 14 M.R.S.A. §6021.",
  "Eviction procedures that skip the required 7-day written notice for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — self-help eviction is illegal in Maine.",
];

export default function MaineTenantRightsPage() {
  return (
    <StatePageShell
      abbr="ME"
      stateName="Maine"
      introParagraph="Maine landlord-tenant law (14 M.R.S.A. §§6000–6046) governs the rights and responsibilities of renters and landlords throughout the state. Maine provides a two-month deposit cap with tiered return deadlines, a statutory warranty of habitability, a 24-hour entry notice requirement, a 45-day rent increase notice for month-to-month tenants, and retaliation protections for tenants who exercise their legal rights. Whether you rent in Portland, Lewiston, Bangor, or a smaller Maine community, understanding your rights is essential."
      whoIsProtectedIntro="Maine landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at two months' rent — any excess is unenforceable",
        "Security deposits must be returned within 21 days (written lease) or 30 days (month-to-month) with an itemized statement",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per 14 M.R.S.A. §6025",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.maine.gov/ag/consumer-protection/consumer-help-topics/housing/tenant-rights"
      agLabel="Maine Attorney General — Tenant Rights"
    />
  );
}
