import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "New Jersey Tenant Rights — Complete Guide for Renters in NJ",
  description:
    "A complete guide to New Jersey tenant rights: security deposit rules, anti-eviction protections, landlord entry requirements, habitability standards, truth in renting requirements, and what renters need to know under New Jersey law.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "1.5 months' rent maximum; return within 30 days",
    detail:
      "New Jersey caps security deposits at one and one-half months' rent for most residential tenants (N.J.S.A. 46:8-21.2). Landlords must place deposits in an interest-bearing account and provide written notice of the account location within 30 days of receiving the deposit. Interest must be paid annually or credited to rent. Landlords must return the deposit with an itemized statement of deductions within 30 days of move-out. Failure to comply can result in forfeiture of all deductions and liability for double damages if the landlord acted in bad faith.",
  },
  {
    topic: "Just-Cause Eviction",
    value: "Required statewide — New Jersey Anti-Eviction Act",
    detail:
      "New Jersey's Anti-Eviction Act (N.J.S.A. 2A:18-61.1) is one of the strongest just-cause eviction laws in the country. Landlords cannot evict tenants — including at the end of a lease term — without a legally recognized cause. Recognized causes include non-payment of rent, lease violations, and disorderly conduct, among others. Tenants have the right to remain in their unit and renew their lease unless the landlord has documented just cause. This applies to virtually all residential rentals in New Jersey.",
  },
  {
    topic: "Rent Increases",
    value: "Varies — many NJ cities have rent control; 30 days' notice statewide",
    detail:
      "New Jersey has no statewide rent cap, but it allows municipalities to enact local rent control ordinances — and many do. Cities including Newark, Jersey City, Hoboken, Trenton, and many others have active rent control laws with annual increase limits. Even in areas without rent control, landlords must provide at least 30 days' written notice before a rent increase takes effect. Check your local municipality for applicable rent control rules.",
  },
  {
    topic: "Landlord Entry",
    value: "Reasonable notice required — typically 24 hours",
    detail:
      "New Jersey law does not specify a statutory minimum notice period for landlord entry, but courts and standard practice require reasonable advance notice — generally 24 hours — for non-emergency purposes including repairs, inspections, and showings. Emergency entry may occur without notice. The Truth in Renting Act requires lease terms to be reasonable, and unreasonably broad entry clauses may be challengeable.",
  },
  {
    topic: "Habitability",
    value: "Warranty of habitability — landlord must maintain",
    detail:
      "New Jersey courts recognize a warranty of habitability in all residential leases. Landlords must maintain the unit in a safe, decent, and sanitary condition, complying with applicable housing codes. Tenants must give written notice of repair needs. If the landlord fails to act within a reasonable time, tenants may withhold rent, make repairs and deduct costs, or terminate the lease — but following the exact legal process is essential. The Truth in Renting Act prohibits lease clauses that waive habitability rights.",
  },
  {
    topic: "Truth in Renting Act",
    value: "Landlords must provide a state-mandated disclosure statement",
    detail:
      "New Jersey's Truth in Renting Act (N.J.S.A. 46:8-43) requires landlords of buildings with more than two units to provide tenants with a state-issued statement of tenant rights at the start of the tenancy. Landlords cannot include lease clauses that waive statutory rights, impose illegal fees, or mislead tenants about their rights. Lease clauses that violate the Act are void and unenforceable even if the tenant signed them.",
  },
];

const RED_FLAGS = [
  "Security deposit above one and one-half months' rent — New Jersey's statutory cap is absolute and non-waivable.",
  "No interest-bearing account disclosure or annual interest payment — required by N.J.S.A. 46:8-19 within 30 days of receiving the deposit.",
  "Lease purporting to allow eviction without just cause — New Jersey's Anti-Eviction Act makes such clauses unenforceable.",
  "No Truth in Renting disclosure provided at lease signing — landlords of buildings with 3+ units are required to provide this.",
  "Clauses waiving the warranty of habitability — void under the Truth in Renting Act regardless of what you signed.",
  "Rent increase language with no advance notice — a minimum of 30 days' written notice is required statewide.",
  "Lease non-renewal without a stated just-cause reason — New Jersey tenants have a right to continued tenancy absent documented legal grounds.",
];

export default function NewJerseyTenantRightsPage() {
  return (
    <StatePageShell
      abbr="NJ"
      stateName="New Jersey"
      introParagraph="New Jersey has some of the strongest tenant protections in the United States. The Anti-Eviction Act gives renters a statewide right to remain in their homes absent documented just cause — a protection that goes far beyond what most states offer. Add security deposit caps, the Truth in Renting Act, and widespread municipal rent control, and New Jersey tenants have substantial legal standing in disputes with landlords. Whether you rent in Newark, Jersey City, Trenton, or a smaller NJ municipality, here's what you need to know."
      whoIsProtectedIntro="New Jersey landlord-tenant law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what your lease says:"
      whoIsProtected={[
        "Landlords cannot evict you without just cause — even at lease end — under the statewide Anti-Eviction Act",
        "Security deposits are capped at 1.5 months' rent and must earn annual interest held in a separate account",
        "Lease clauses that waive your statutory rights are void under the Truth in Renting Act",
        "Many NJ cities have local rent control — check your municipality before signing any lease",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.njoag.gov/resources/ag-guidelines/"
      agLabel="New Jersey Attorney General — Tenant Rights"
    />
  );
}
