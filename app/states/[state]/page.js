import { notFound } from "next/navigation";

import AlabamaPage      from "../../alabama-tenant-rights/page";
import AlaskaPage       from "../../alaska-tenant-rights/page";
import ArizonaPage      from "../../arizona-tenant-rights/page";
import ArkansasPage     from "../../arkansas-tenant-rights/page";
import CaliforniaPage   from "../../california-tenant-rights/page";
import ColoradoPage     from "../../colorado-tenant-rights/page";
import ConnecticutPage  from "../../connecticut-tenant-rights/page";
import DelawarePage     from "../../delaware-tenant-rights/page";
import FloridaPage      from "../../florida-tenant-rights/page";
import GeorgiaPage      from "../../georgia-tenant-rights/page";
import HawaiiPage       from "../../hawaii-tenant-rights/page";
import IdahoPage        from "../../idaho-tenant-rights/page";
import IllinoisPage     from "../../illinois-tenant-rights/page";
import IndianaPage      from "../../indiana-tenant-rights/page";
import IowaPage         from "../../iowa-tenant-rights/page";
import KansasPage       from "../../kansas-tenant-rights/page";
import KentuckyPage     from "../../kentucky-tenant-rights/page";
import LouisianaPage    from "../../louisiana-tenant-rights/page";
import MainePage        from "../../maine-tenant-rights/page";
import MarylandPage     from "../../maryland-tenant-rights/page";
import MassachusettsPage from "../../massachusetts-tenant-rights/page";
import MichiganPage     from "../../michigan-tenant-rights/page";
import MinnesotaPage    from "../../minnesota-tenant-rights/page";
import MississippiPage  from "../../mississippi-tenant-rights/page";
import MissouriPage     from "../../missouri-tenant-rights/page";
import MontanaPage      from "../../montana-tenant-rights/page";
import NebraskaPage     from "../../nebraska-tenant-rights/page";
import NevadaPage       from "../../nevada-tenant-rights/page";
import NewHampshirePage from "../../new-hampshire-tenant-rights/page";
import NewJerseyPage    from "../../new-jersey-tenant-rights/page";
import NewMexicoPage    from "../../new-mexico-tenant-rights/page";
import NewYorkPage      from "../../new-york-tenant-rights/page";
import NorthCarolinaPage from "../../north-carolina-tenant-rights/page";
import NorthDakotaPage  from "../../north-dakota-tenant-rights/page";
import OhioPage         from "../../ohio-tenant-rights/page";
import OklahomaPage     from "../../oklahoma-tenant-rights/page";
import OregonPage       from "../../oregon-tenant-rights/page";
import PennsylvaniaPage from "../../pennsylvania-tenant-rights/page";
import RhodeIslandPage  from "../../rhode-island-tenant-rights/page";
import SouthCarolinaPage from "../../south-carolina-tenant-rights/page";
import SouthDakotaPage  from "../../south-dakota-tenant-rights/page";
import TennesseePage    from "../../tennessee-tenant-rights/page";
import TexasPage        from "../../texas-tenant-rights/page";
import UtahPage         from "../../utah-tenant-rights/page";
import VermontPage      from "../../vermont-tenant-rights/page";
import VirginiaPage     from "../../virginia-tenant-rights/page";
import WashingtonPage   from "../../washington-tenant-rights/page";
import WestVirginiaPage from "../../west-virginia-tenant-rights/page";
import WisconsinPage    from "../../wisconsin-tenant-rights/page";
import WyomingPage      from "../../wyoming-tenant-rights/page";

const PAGE_MAP = {
  alabama:          { Component: AlabamaPage,       stateName: "Alabama",        abbr: "AL" },
  alaska:           { Component: AlaskaPage,         stateName: "Alaska",         abbr: "AK" },
  arizona:          { Component: ArizonaPage,        stateName: "Arizona",        abbr: "AZ" },
  arkansas:         { Component: ArkansasPage,       stateName: "Arkansas",       abbr: "AR" },
  california:       { Component: CaliforniaPage,     stateName: "California",     abbr: "CA" },
  colorado:         { Component: ColoradoPage,       stateName: "Colorado",       abbr: "CO" },
  connecticut:      { Component: ConnecticutPage,    stateName: "Connecticut",    abbr: "CT" },
  delaware:         { Component: DelawarePage,       stateName: "Delaware",       abbr: "DE" },
  florida:          { Component: FloridaPage,        stateName: "Florida",        abbr: "FL" },
  georgia:          { Component: GeorgiaPage,        stateName: "Georgia",        abbr: "GA" },
  hawaii:           { Component: HawaiiPage,         stateName: "Hawaii",         abbr: "HI" },
  idaho:            { Component: IdahoPage,          stateName: "Idaho",          abbr: "ID" },
  illinois:         { Component: IllinoisPage,       stateName: "Illinois",       abbr: "IL" },
  indiana:          { Component: IndianaPage,        stateName: "Indiana",        abbr: "IN" },
  iowa:             { Component: IowaPage,            stateName: "Iowa",           abbr: "IA" },
  kansas:           { Component: KansasPage,         stateName: "Kansas",         abbr: "KS" },
  kentucky:         { Component: KentuckyPage,       stateName: "Kentucky",       abbr: "KY" },
  louisiana:        { Component: LouisianaPage,      stateName: "Louisiana",      abbr: "LA" },
  maine:            { Component: MainePage,           stateName: "Maine",          abbr: "ME" },
  maryland:         { Component: MarylandPage,       stateName: "Maryland",       abbr: "MD" },
  massachusetts:    { Component: MassachusettsPage,  stateName: "Massachusetts",  abbr: "MA" },
  michigan:         { Component: MichiganPage,       stateName: "Michigan",       abbr: "MI" },
  minnesota:        { Component: MinnesotaPage,      stateName: "Minnesota",      abbr: "MN" },
  mississippi:      { Component: MississippiPage,    stateName: "Mississippi",    abbr: "MS" },
  missouri:         { Component: MissouriPage,       stateName: "Missouri",       abbr: "MO" },
  montana:          { Component: MontanaPage,        stateName: "Montana",        abbr: "MT" },
  nebraska:         { Component: NebraskaPage,       stateName: "Nebraska",       abbr: "NE" },
  nevada:           { Component: NevadaPage,         stateName: "Nevada",         abbr: "NV" },
  "new-hampshire":  { Component: NewHampshirePage,   stateName: "New Hampshire",  abbr: "NH" },
  "new-jersey":     { Component: NewJerseyPage,      stateName: "New Jersey",     abbr: "NJ" },
  "new-mexico":     { Component: NewMexicoPage,      stateName: "New Mexico",     abbr: "NM" },
  "new-york":       { Component: NewYorkPage,        stateName: "New York",       abbr: "NY" },
  "north-carolina": { Component: NorthCarolinaPage,  stateName: "North Carolina", abbr: "NC" },
  "north-dakota":   { Component: NorthDakotaPage,    stateName: "North Dakota",   abbr: "ND" },
  ohio:             { Component: OhioPage,            stateName: "Ohio",           abbr: "OH" },
  oklahoma:         { Component: OklahomaPage,       stateName: "Oklahoma",       abbr: "OK" },
  oregon:           { Component: OregonPage,         stateName: "Oregon",         abbr: "OR" },
  pennsylvania:     { Component: PennsylvaniaPage,   stateName: "Pennsylvania",   abbr: "PA" },
  "rhode-island":   { Component: RhodeIslandPage,    stateName: "Rhode Island",   abbr: "RI" },
  "south-carolina": { Component: SouthCarolinaPage,  stateName: "South Carolina", abbr: "SC" },
  "south-dakota":   { Component: SouthDakotaPage,    stateName: "South Dakota",   abbr: "SD" },
  tennessee:        { Component: TennesseePage,      stateName: "Tennessee",      abbr: "TN" },
  texas:            { Component: TexasPage,           stateName: "Texas",          abbr: "TX" },
  utah:             { Component: UtahPage,            stateName: "Utah",           abbr: "UT" },
  vermont:          { Component: VermontPage,        stateName: "Vermont",        abbr: "VT" },
  virginia:         { Component: VirginiaPage,       stateName: "Virginia",       abbr: "VA" },
  washington:       { Component: WashingtonPage,     stateName: "Washington",     abbr: "WA" },
  "west-virginia":  { Component: WestVirginiaPage,   stateName: "West Virginia",  abbr: "WV" },
  wisconsin:        { Component: WisconsinPage,      stateName: "Wisconsin",      abbr: "WI" },
  wyoming:          { Component: WyomingPage,        stateName: "Wyoming",        abbr: "WY" },
};

export function generateStaticParams() {
  return Object.keys(PAGE_MAP).map((state) => ({ state }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const entry = PAGE_MAP[state];
  if (!entry) return {};
  const { stateName, abbr } = entry;
  return {
    title: `${stateName} Tenant Rights — Complete Guide for Renters in ${abbr}`,
    description: `A complete guide to ${stateName} tenant rights: security deposit laws, landlord entry rules, late fees, eviction protections, and more.`,
  };
}

export default async function StatePage({ params }) {
  const { state } = await params;
  const entry = PAGE_MAP[state];
  if (!entry) notFound();
  const { Component } = entry;
  return <Component />;
}
