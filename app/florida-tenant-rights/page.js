import { StatePageShell } from "../components/StatePageShell";

export const metadata = {
  title: "Florida Tenant Rights — Complete Guide for Renters in FL",
  description:
    "A complete guide to Florida tenant rights: security deposit rules, eviction timelines, landlord entry requirements, habitability standards, and what renters need to know under Florida's Residential Landlord and Tenant Act.",
};

const KEY_RULES = [
  {
    topic: "Security Deposit",
    value: "No cap — must return within 15 or 30 days",
    detail:
      "Florida law sets no maximum on security deposits. If the landlord intends to make no deductions, the deposit must be returned within 15 days of move-out. If the landlord intends to make deductions, they must send written notice of the intended claim within 30 days — failure to do so means they forfeit all rights to keep any portion of the deposit. Deposits must be held in a separate account or secured with a surety bond.",
  },
  {
    topic: "Rent Increases",
    value: "No limits — rent control is prohibited statewide",
    detail:
      "Florida prohibits local governments from enacting rent control ordinances (a 2023 Florida Supreme Court ruling reinforced this). There are no caps on rent increases for market-rate units. During a fixed-term lease, rent cannot be increased unless the lease specifically allows it. For month-to-month tenancies, landlords must provide 15 days' written notice before increasing rent.",
  },
  {
    topic: "Landlord Entry",
    value: "12 hours notice required (7:30 a.m.–8:00 p.m.)",
    detail:
      "Florida Statutes §83.53 requires landlords to give at least 12 hours' advance notice before entering a rental unit for non-emergency purposes. Entry must occur between 7:30 a.m. and 8:00 p.m. unless you agree to a different time. Emergency entry — such as a burst pipe — may occur without notice. Unlawful entry gives tenants the right to terminate the lease.",
  },
  {
    topic: "Habitability",
    value: "Landlord must maintain premises and common areas",
    detail:
      "Under Florida Statutes §83.51, landlords must maintain the structure, plumbing, heating, and cooling systems in good working order and keep common areas clean and safe. For issues affecting habitability, tenants must deliver a written 7-day notice to the landlord before taking further action. If the landlord fails to act, tenants may terminate the lease or seek a rent reduction.",
  },
  {
    topic: "Eviction Process",
    value: "3-day notice for non-payment; 7-day for lease violations",
    detail:
      "Florida evictions move on a strict statutory timeline. For non-payment of rent, the landlord must deliver a 3-day written notice to pay or vacate. For curable lease violations, a 7-day notice to cure applies. Non-curable violations require a 7-day unconditional notice to vacate. After the notice period, the landlord may file in county court. Florida evictions are among the fastest in the country.",
  },
  {
    topic: "Retaliation Protections",
    value: "Protected — but burden is on the tenant to prove",
    detail:
      "Florida law prohibits landlords from retaliating against tenants who report habitability issues to government agencies or exercise legal rights. However, unlike California, Florida does not create a legal presumption of retaliation — tenants must prove the landlord's action was retaliatory, which is more difficult in practice. Keep detailed records of all complaints and landlord responses.",
  },
];

const RED_FLAGS = [
  "Lease requires you to waive the 7-day notice period before the landlord can pursue eviction for lease violations — statutory notice periods cannot be waived.",
  "Security deposit clause allows deductions for 'any damage' without specifying that normal wear and tear is excluded — Florida law prohibits charging for ordinary wear.",
  "No written notice of where and how the security deposit is held — Florida law requires landlords to disclose this within 30 days of receiving the deposit.",
  "Entry clauses permitting access with less than 12 hours' notice outside of emergencies — a direct violation of §83.53.",
  "Lease purports to waive your right to a 3-day or 7-day notice before eviction — these statutory rights cannot be contracted away.",
  "No specification that late fees are 'reasonable' — Florida courts can strike down excessive or punitive late fee provisions.",
  "Automatic lease renewal clauses with lengthy advance notice requirements — in Florida, these must be clearly disclosed to be enforceable.",
];

export default function FloridaTenantRightsPage() {
  return (
    <StatePageShell
      abbr="FL"
      stateName="Florida"
      introParagraph="Florida's Residential Landlord and Tenant Act (Chapter 83, Florida Statutes) governs the relationship between landlords and renters statewide. Florida is generally more landlord-friendly than states like California or New York — there is no rent control, no security deposit cap, and evictions move quickly through the courts. But tenants still have meaningful rights around habitability, deposit handling, entry notice, and protection from illegal lockouts."
      whoIsProtectedIntro="Florida law applies to most residential rental agreements, whether written or oral. Key baseline rights that apply regardless of what the lease says:"
      whoIsProtected={[
        "Landlords must maintain the unit in a habitable condition — this duty cannot be waived by the lease",
        "You are entitled to written notice before any eviction proceeding begins — no lockouts, utility shutoffs, or property removal",
        "You have the right to at least 12 hours' notice before non-emergency landlord entry",
        "Security deposit deductions require written notice within 30 days or the landlord loses the right to withhold anything",
      ]}
      keyRules={KEY_RULES}
      redFlags={RED_FLAGS}
      agHref="https://www.myfloridalegal.com/consumer-protection"
      agLabel="Florida Attorney General — Tenant Rights"
    />
  );
}
