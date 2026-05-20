import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Arizona Tenant Rights — Complete Guide for Renters in AZ",
  description:
    "A complete guide to Arizona tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under the Arizona Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1.5 months' rent maximum; return within 14 days",
    detail:
      "Arizona law caps security deposits at one and one-half months' rent (A.R.S. §33-1321). Landlords must return the deposit within 14 business days of move-out along with a written, itemized statement of any deductions. If the landlord fails to return the deposit or provide the itemized statement within 14 business days, the tenant may sue for double the amount wrongfully withheld plus attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — no rent control in Arizona",
    detail:
      "Arizona state law preempts local rent control ordinances — cities and counties cannot cap how much landlords raise rent. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must give at least 30 days' written notice before a rent increase takes effect.",
  },
  {
    topic: "Landlord Entry",
    value: "2 days' notice required (48 hours)",
    detail:
      "Arizona Revised Statutes §33-1343 requires landlords to give at least two days' advance notice before entering a rental unit for non-emergency inspections, repairs, or showings. Entry must be at reasonable times. Emergency entry — such as a burst pipe or fire — requires no advance notice. Tenants may deny entry if proper notice is not given and can seek damages for unauthorized entry.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain and repair within 10 days",
    detail:
      "Under A.R.S. §33-1324, landlords must keep rental units in a fit and habitable condition, maintain plumbing, heating, and cooling systems in good working order, and keep common areas safe and clean. Tenants must provide written notice of a repair need. The landlord then has 10 days to begin remediation for non-emergency issues (or 5 days if it's an emergency). If the landlord fails to act, tenants may terminate the lease or repair-and-deduct for amounts up to $300 or half a month's rent.",
  },
  {
    topic: "Eviction Process",
    value: "5-day notice for non-payment; 10-day for lease violations",
    detail:
      "For non-payment of rent, Arizona landlords must give a 5-day written notice to pay or vacate before filing in court. For curable lease violations, a 10-day notice to comply or vacate applies. Non-curable violations (such as criminal activity) require an immediate 5-day unconditional notice. Arizona eviction proceedings (forcible entry and detainer) are heard in Justice Court and can move very quickly — typically within 3–6 weeks.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — presumed retaliatory within 6 months",
    detail:
      "A.R.S. §33-1381 prohibits landlords from retaliating against tenants who report habitability issues to government agencies, organize with other tenants, or exercise any legal right. Arizona law presumes retaliation if a landlord increases rent, reduces services, or files for eviction within 6 months of protected tenant activity. Tenants who successfully prove retaliation may recover up to 2 months' rent plus actual damages and attorney fees.",
  },
];

const RED_FLAGS = [
  "Security deposit above one and one-half months' rent — Arizona's statutory cap cannot be exceeded by any lease provision.",
  "Deposit return language that gives the landlord more than 14 business days — the legal deadline is strict and starts on the move-out date.",
  "Entry clauses permitting access with less than 48 hours' notice outside emergencies — violates A.R.S. §33-1343.",
  "Lease clauses waiving the landlord's duty to repair or maintain habitability — these duties cannot be contracted away under Arizona law.",
  "Eviction procedures that skip required notice periods — Arizona courts are strict about notice; improper notice can invalidate an eviction.",
  "Automatic lease renewal clauses requiring more than 30 days' notice to opt out — easy to miss and can lock you in for another full term.",
  "Late fee provisions without a grace period or with excessive daily penalties — Arizona courts can strike down unreasonable fee structures.",
];

export default function ArizonaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="AZ"
      stateName="Arizona"
      introParagraph="Arizona's Residential Landlord and Tenant Act (A.R.S. Title 33, Chapter 10) governs the relationship between landlords and renters statewide. Arizona has no rent control, but it does provide meaningful protections around security deposits, habitability, landlord entry notice, and eviction procedures. Understanding your rights under the ARLTA is essential to protecting yourself as a renter in Phoenix, Tucson, Scottsdale, or anywhere in the state."
      whoIsProtectedIntro="Arizona landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords must maintain the unit in a habitable condition — this duty cannot be waived by any lease provision",
        "You are entitled to at least 48 hours' advance notice before non-emergency landlord entry",
        "Evictions require court action — lockouts, utility shutoffs, and property removal are illegal self-help remedies",
        "Security deposit deductions require an itemized written statement within 14 business days of move-out",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.azag.gov/consumer"
      agLabel="Arizona Attorney General — Tenant Rights"
    />
  );
}
