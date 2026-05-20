import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "California Tenant Rights — Complete Guide for Renters in CA",
  description:
    "A complete guide to California tenant rights: security deposit limits, rent control under AB 1482, eviction protections, entry notice requirements, and habitability standards.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1 month's rent (most landlords)",
    detail:
      "AB 12 (effective July 1, 2024) caps security deposits at one month's rent for most landlords. Small landlords who own no more than two residential properties with a combined total of no more than four units may still collect up to two months' rent. The deposit must be returned with an itemized accounting within 21 days of move-out.",
  },
  {
    topic: "Rent Increases",
    value: "Max 5% + local CPI (not to exceed 10%)",
    detail:
      "The Tenant Protection Act of 2019 (AB 1482) caps annual rent increases at 5% plus the local Consumer Price Index, with an absolute ceiling of 10%. This applies to most multi-family buildings more than 15 years old. Single-family homes, condos, and newer buildings are generally exempt — but must provide notice of the exemption.",
  },
  {
    topic: "Just Cause Eviction",
    value: "Required for covered tenants",
    detail:
      "Under AB 1482, landlords of covered units must have a legally recognized reason to evict. Just causes include non-payment of rent, lease violations, and owner move-in. No-fault evictions (such as owner move-in) require relocation assistance equal to one month's rent. Tenants in single-family homes or buildings built within the last 15 years are generally not covered.",
  },
  {
    topic: "Landlord Entry",
    value: "24 hours written notice required",
    detail:
      "California Civil Code §1954 requires landlords to give at least 24 hours' advance written notice before entering. Entry must occur during normal business hours (8 a.m.–6 p.m.) unless you agree otherwise. Emergency entry is permitted without notice. Landlords who repeatedly enter without notice may be liable for damages.",
  },
  {
    topic: "Habitability & Repairs",
    value: "Implied warranty — landlord must maintain",
    detail:
      "California landlords must maintain rental units in a habitable condition — working heat, plumbing, weatherproofing, and freedom from pest infestations. If a landlord fails to make repairs after written notice, tenants may withhold rent, repair-and-deduct (up to one month's rent), or terminate the lease. Retaliating against a tenant for complaining about habitability is illegal.",
  },
  {
    topic: "Local Rent Control",
    value: "Applies in many cities beyond AB 1482",
    detail:
      "Many California cities have local rent control ordinances that provide stronger protections than state law. Cities with rent control include Los Angeles, San Francisco, Oakland, San Jose, Santa Monica, and Berkeley, among others. Local rules may cover more unit types and impose stricter caps. Always check your city's specific ordinance.",
  },
];

const RED_FLAGS = [
  "Lease claims the unit is exempt from AB 1482 without specifying the legal reason — always ask for written documentation of any exemption.",
  "Security deposit exceeding one month's rent without qualifying under the small-landlord exception — this may violate AB 12.",
  "Clauses waiving your right to a pre-move-out inspection — California law gives you the right to one before you leave.",
  "Entry provisions allowing access with less than 24 hours' notice outside of emergencies — this is a direct violation of state law.",
  "No-fault eviction terms that don't mention relocation assistance — covered tenants are entitled to one month's rent.",
  "Lease language waiving your right to repair-and-deduct — California Civil Code protections cannot be waived by contract.",
  "Automatic rent increase clauses that exceed 10% or don't reference the CPI calculation — amounts above the statutory cap are unenforceable.",
];

export default function CaliforniaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="CA"
      stateName="California"
      introParagraph="California has some of the strongest tenant protections in the country. Between statewide laws like the Tenant Protection Act (AB 1482) and local rent control ordinances in cities like Los Angeles, San Francisco, and Oakland, many California renters have significant rights around rent increases, eviction, security deposits, and habitability. Here's what you need to know before signing a lease."
      whoIsProtectedIntro="Not every California renter is covered by every protection. AB 1482 applies to most multi-family buildings older than 15 years, but single-family homes, condos, and newer buildings are often exempt. Local rent control in cities like San Francisco and Los Angeles covers additional unit types. Before assuming you're protected, confirm which laws apply to your specific unit."
      whoIsProtected={[
        "Multi-family buildings 15+ years old are generally covered by AB 1482 rent caps and just cause eviction rules",
        "Single-family homes and condos are usually exempt unless the owner has opted in",
        "Government-subsidized housing has separate rules under federal and state law",
        "If your city has local rent control, those rules may apply regardless of AB 1482 exemptions",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://oag.ca.gov/consumers"
      agLabel="California Attorney General — Tenant Rights"
    />
  );
}
