import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "New York Tenant Rights — Complete Guide for Renters in NY",
  description:
    "A complete guide to New York tenant rights: rent stabilization, security deposit limits, eviction protections, the Housing Stability and Tenant Protection Act, and what renters in NYC and across NY need to know.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1 month's rent maximum",
    detail:
      "The Housing Stability and Tenant Protection Act of 2019 (HSTPA) capped security deposits at one month's rent for all residential tenants in New York. Landlords must return the deposit within 14 days of move-out with an itemized statement of any deductions. Failure to return the deposit within 14 days means the landlord forfeits the right to keep any portion of it — even if there are legitimate deductions.",
  },
  {
    topic: "Rent Stabilization",
    value: "Covers ~1 million NYC units and some cities",
    detail:
      "Rent stabilization limits how much a landlord can increase rent each year in covered units. The NYC Rent Guidelines Board sets allowable increases annually. Outside NYC, rent stabilization applies in certain cities including Nassau, Westchester, and Rockland counties. Rent-stabilized tenants also have the right to lease renewal. Landlords must register stabilized units and provide tenants with a copy of the registration.",
  },
  {
    topic: "Eviction Protections",
    value: "Good cause required in many situations",
    detail:
      "New York's Good Cause Eviction Law (2024) extends just-cause eviction protections to many tenants who were previously unprotected, particularly in larger buildings or where local laws apply. Landlords must cite a recognized legal reason to evict and, in many cases, must give 30–90 days' notice depending on tenancy length. Self-help evictions are illegal and expose landlords to significant liability.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required (typically 24 hours)",
    detail:
      "New York law requires landlords to give reasonable advance notice before entering for non-emergency purposes — courts interpret this as at least 24 hours. Emergency entry is permitted without notice. Repeated unannounced entries or other intrusive behavior can constitute harassment under New York's tenant harassment statutes, which carry civil and criminal penalties.",
  },
  {
    topic: "Habitability",
    value: "Warranty of habitability — landlord must maintain",
    detail:
      "New York Real Property Law §235-b imposes a warranty of habitability on all residential leases. Landlords must keep units safe, clean, and fit for human habitation. If they fail to do so, tenants may withhold rent, seek a rent reduction through housing court, or terminate the lease. Retaliating against a tenant for complaining about housing conditions is illegal under RPL §223-b.",
  },
  {
    topic: "Late Fees",
    value: "$50 or 5% of monthly rent (whichever is less); 5-day grace period",
    detail:
      "New York imposes strict statutory caps on late fees. Landlords cannot charge more than $50 or 5% of the monthly rent — whichever is lower. No late fee can be charged until at least 5 days after the rent due date. Any amount above the cap is unenforceable, and landlords who attempt to collect excess late fees may be liable to tenants.",
  },
];

const RED_FLAGS = [
  "Security deposit above one month's rent — the HSTPA cap is absolute and non-waivable by contract.",
  "Non-refundable fees labeled as deposits — New York law does not allow non-refundable security deposits for residential rentals.",
  "Late fees exceeding $50 or 5% of monthly rent — any amount above the statutory cap cannot be enforced.",
  "Clauses requiring you to waive the warranty of habitability — this is void under New York law regardless of what you sign.",
  "No mention of rent stabilization status — if your unit is stabilized, the landlord is required to disclose this and provide the legal regulated rent.",
  "Entry clauses with no notice requirement or less than 24 hours' notice — inconsistent with New York standards.",
  "Automatic lease renewal provisions requiring very long advance notice to opt out — easy to miss and often one-sided.",
];

export default function NewYorkTenantRightsPage() {
  return (
    <StatePageShell
      abbr="NY"
      stateName="New York"
      introParagraph="New York — particularly New York City — has some of the most comprehensive tenant protections in the United States. The Housing Stability and Tenant Protection Act of 2019 dramatically strengthened renter rights statewide, capping security deposits, strengthening eviction protections, and limiting late fees. Add rent stabilization, the Good Cause Eviction Law, and the warranty of habitability, and New York tenants have significant legal standing when disputes arise."
      whoIsProtectedIntro="The Housing Stability and Tenant Protection Act of 2019 was the most significant overhaul of New York tenant law in decades. Key changes that apply statewide include:"
      whoIsProtected={[
        "Security deposits capped at one month's rent for all residential tenants",
        "Return deadline tightened to 14 days (previously 30 days) with itemized accounting",
        "Late fees capped at $50 or 5% of monthly rent with a mandatory 5-day grace period",
        "Application fees capped at $20 for background and credit checks",
        "Rent overcharges subject to a 6-year lookback period for rent-stabilized units",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://ag.ny.gov/resources/individuals/tenants-homeowners"
      agLabel="New York Attorney General — Tenant Rights"
    />
  );
}
