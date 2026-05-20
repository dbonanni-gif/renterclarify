import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Maryland Tenant Rights — Complete Guide for Renters in MD",
  description:
    "A complete guide to Maryland tenant rights: security deposit rules, landlord entry requirements, eviction timelines, habitability standards, and what renters need to know under Maryland landlord-tenant law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "2 months' rent maximum; return within 45 days",
    detail:
      "Maryland Real Property Code §8-203 caps security deposits at two months' rent. Landlords must hold deposits in a federally insured interest-bearing account and must pay interest at a rate set annually by the state (currently 1.5% per year, simple interest). The deposit plus accrued interest must be returned with an itemized statement of deductions within 45 days of move-out. Landlords who wrongfully withhold the deposit may be liable for up to three times the withheld amount plus attorney fees.",
  },
  {
    topic: "Rent Increases",
    value: "No statewide cap; local rent stabilization in some jurisdictions",
    detail:
      "Maryland has no statewide rent control law. However, several jurisdictions have enacted local rent stabilization ordinances: Montgomery County, Prince George's County, and Takoma Park all have active rent control programs with annual increase limits. For month-to-month tenancies statewide, landlords must give at least one rental period's written notice (typically 30 days) before increasing rent. Always check local county or municipal rules in addition to state law.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required — no statutory minimum statewide",
    detail:
      "Maryland state law does not specify a minimum notice period for landlord entry, but courts and standard practice require reasonable advance notice for non-emergency purposes — generally 24 hours. Some local ordinances impose specific requirements. Emergency entry may occur without notice. The lease should specify the notice period; tenants should negotiate for at least 24 hours in writing. Repeated unauthorized entries may support a claim for breach of quiet enjoyment.",
  },
  {
    topic: "Habitability",
    value: "Warranty of habitability — landlord must maintain",
    detail:
      "Maryland courts recognize an implied warranty of habitability in residential leases. Landlords must maintain rental units in a safe, sanitary, and habitable condition, complying with applicable housing codes. Tenants must give written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may withhold rent (after filing in court), terminate the lease, or seek court-ordered repairs. Maryland's Rent Escrow law allows tenants to deposit rent with a court pending repairs — a powerful remedy when used correctly.",
  },
  {
    topic: "Eviction Process",
    value: "Pay or quit notice required; court hearing typically within 5 days",
    detail:
      "Maryland evictions move quickly. For non-payment of rent, landlords can file a complaint in District Court without first serving a separate written notice — the court summons serves as the notice. Hearings are typically scheduled within 5 days of filing. For other lease violations, a 30-day written notice is required before filing. Tenants may pay all owed rent before or at the hearing to have the case dismissed (right of redemption). Self-help evictions are illegal and expose landlords to damages.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected under Maryland Real Property §8-208.1",
    detail:
      "Maryland law prohibits landlords from retaliating against tenants who report housing code violations, contact government authorities, or exercise legal rights. Retaliation is a defense in eviction proceedings. If a landlord seeks to evict, increase rent, or reduce services following protected tenant activity, courts may find the action retaliatory and dismiss the eviction or award damages. Montgomery County and other local jurisdictions may provide additional retaliation protections.",
  },
];

const RED_FLAGS = [
  "Security deposit above two months' rent — Maryland's statutory cap is absolute and cannot be exceeded.",
  "No interest-bearing account mentioned — Maryland law requires deposits to earn and pay interest.",
  "Deposit return language giving the landlord more than 45 days — the legal deadline is strict and starts at move-out.",
  "Entry clauses with no notice requirement or very short notice — courts expect reasonable notice (at least 24 hours) even without a statutory minimum.",
  "Lease clauses waiving the implied warranty of habitability — unenforceable under Maryland law.",
  "Automatic lease renewal clauses requiring very long advance notice to opt out — easy to miss and can lock you into another full year.",
  "No mention of rent stabilization if you rent in Montgomery County, Prince George's County, or Takoma Park — always verify local rules.",
];

export default function MarylandTenantRightsPage() {
  return (
    <StatePageShell
      abbr="MD"
      stateName="Maryland"
      introParagraph="Maryland landlord-tenant law provides a baseline of renter protections statewide, with additional layers in jurisdictions like Montgomery County and Prince George's County, which have their own rent stabilization ordinances. Maryland is notable for its Rent Escrow law — a formal court mechanism for tenants to withhold rent pending habitability repairs — and for the speed of its eviction proceedings, which can move to a hearing within days of filing. Whether you rent in Baltimore, Rockville, Annapolis, or a smaller Maryland community, understanding your rights is essential."
      whoIsProtectedIntro="Maryland landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights statewide:"
      whoIsProtected={[
        "Security deposits are capped at two months' rent and must earn and pay annual interest",
        "Landlords must maintain the unit in a habitable condition — enforceable through the Rent Escrow law",
        "Evictions move quickly in Maryland — tenants should appear at any scheduled hearing and know their right of redemption",
        "Montgomery County, Prince George's County, and Takoma Park have local rent stabilization — check local rules if you rent there",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://oag.maryland.gov/i-need-to/Pages/landlord-tenant-disputes.aspx"
      agLabel="Maryland Attorney General — Landlord-Tenant"
    />
  );
}
