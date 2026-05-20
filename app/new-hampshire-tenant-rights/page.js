import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "New Hampshire Tenant Rights — Complete Guide for Renters in NH",
  description:
    "A complete guide to New Hampshire tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under RSA Chapters 540 and 540-A.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1-month cap; return within 30 days",
    detail:
      "New Hampshire RSA §540-A:6 caps security deposits at one month's rent (or $100, whichever is greater). Landlords must return the deposit — along with a written itemized statement of any deductions — within 30 days of the tenant vacating the unit. Landlords who fail to return the deposit or provide a proper accounting within 30 days may forfeit the right to retain any deduction and may be liable for the withheld amount plus damages, costs, and attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide rent control; 30-day notice for month-to-month",
    detail:
      "New Hampshire has no statewide rent control law. For month-to-month (tenancy-at-will) arrangements, landlords must provide at least 30 days' written notice before a rent increase takes effect. During a fixed-term lease, rent cannot be increased unless the lease expressly permits it. There is no statutory cap on the amount of any rent increase.",
  },
  {
    topic: "Landlord Entry",
    value: "24-hour notice required — RSA §540-A:3",
    detail:
      "New Hampshire RSA §540-A:3 prohibits landlords from entering a rental unit without giving the tenant reasonable notice — defined in practice as at least 24 hours — except in a genuine emergency. The statute broadly prohibits landlord harassment through unauthorized entry or interference with the tenant's quiet enjoyment. Violations of RSA §540-A:3 may be brought before the court as prohibited landlord acts, with remedies including injunctive relief and damages.",
  },
  {
    topic: "Habitability",
    value: "Statutory habitability duty — RSA §48-A:14 and RSA §540-A:2",
    detail:
      "New Hampshire law requires landlords to maintain rental premises in a safe and habitable condition that complies with applicable building and housing codes (RSA §48-A:14). RSA §540-A:2 also prohibits landlords from using prohibited practices that interfere with tenants' health, safety, or quiet enjoyment. If a landlord fails to maintain habitability, tenants may pursue remedies including rent abatement, repair-and-deduct, or termination. Rent escrow through the court is also available in serious habitability disputes.",
  },
  {
    topic: "Eviction Process",
    value: "7-day notice for nonpayment (tenancy-at-will); 30-day notice to terminate",
    detail:
      "For nonpayment of rent, New Hampshire landlords must serve a written 7-day demand for rent before filing an eviction action in circuit court (RSA §540:3). For terminating a month-to-month tenancy (tenancy-at-will) without cause, 30 days' written notice is required. Self-help evictions — lockouts, utility shutoffs, or removal of tenant property — are prohibited landlord acts under RSA §540-A:3 and expose landlords to injunctive relief and damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — retaliation presumed within 6 months — RSA §540:13-a",
    detail:
      "New Hampshire RSA §540:13-a prohibits landlords from retaliating against tenants who report habitability issues to government authorities, complain about conditions, or exercise legal rights. If a landlord begins eviction proceedings within six months of protected tenant activity, retaliation is presumed and the landlord bears the burden of proving a legitimate non-retaliatory reason. Tenants may raise retaliation as a complete defense to eviction and may also pursue affirmative claims for damages.",
  },
];

const RED_FLAGS = [
  "Security deposit exceeding one month's rent — New Hampshire law caps this and any excess is unenforceable.",
  "Deposit return language giving more than 30 days — New Hampshire's legal deadline runs from move-out; missing it may forfeit the right to make any deductions.",
  "Entry clauses with no notice or less than 24 hours' notice — RSA §540-A:3 prohibits unauthorized or unreasonably noticed entry.",
  "Lease clauses purporting to waive habitability protections — unenforceable under RSA §48-A:14 and RSA §540-A:2.",
  "Lease clauses placing all repair responsibility on the tenant regardless of cause — conflicts with the landlord's statutory maintenance duty.",
  "Eviction procedures that skip the required 7-day written demand for nonpayment — defective notice results in dismissal.",
  "Clauses allowing the landlord to lock out or shut off utilities rather than going to court — prohibited landlord acts under RSA §540-A:3.",
];

export default function NewHampshireTenantRightsPage() {
  return (
    <StatePageShell
      abbr="NH"
      stateName="New Hampshire"
      introParagraph="New Hampshire landlord-tenant law (RSA Chapters 540 and 540-A) governs the rights and responsibilities of renters and landlords throughout the state. New Hampshire provides a one-month deposit cap, a 24-hour entry notice requirement, a six-month retaliation presumption, and a broad anti-harassment statute (RSA 540-A) that prohibits landlords from interfering with tenants' quiet enjoyment. Whether you rent in Manchester, Nashua, Concord, or a smaller New Hampshire community, understanding your rights is essential."
      whoIsProtectedIntro="New Hampshire landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Security deposits are capped at one month's rent — any excess is unenforceable",
        "Security deposits must be returned within 30 days with a written itemized statement of deductions",
        "Landlords must give at least 24 hours' advance notice before non-emergency entry per RSA §540-A:3",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are prohibited landlord acts",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.doj.nh.gov/citizens/consumer-protection-antitrust-bureau"
      agLabel="New Hampshire DOJ — Consumer Protection and Antitrust Bureau"
    />
  );
}
