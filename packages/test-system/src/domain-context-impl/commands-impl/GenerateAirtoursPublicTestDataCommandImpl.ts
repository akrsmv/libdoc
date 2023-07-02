import { IClaims, IIdentity, _sep1, _sep2, removeVersionString, versionString } from "@incta/ddb-model";
import { GenerateAirtoursPublicTestData } from "../../domain-context/items/commandItems/GenerateAirtoursPublicTestData";
import { Continent } from "../../domain-context/items/dataItems/Continent";
import { createItem } from "@incta/ddb-actions";
import { Airport } from "../../domain-context/items/dataItems/Airport";
import { City } from "../../domain-context/items/dataItems/City";
import { Country } from "../../domain-context/items/dataItems/Country";

// Test PUBLIC data - 5 continents
export const europe_continent = new Continent({ args: { HASH: `Continent${_sep1}1`, RANGE: `${versionString(0)}${_sep1}Continent${_sep1}1`, name: "Europe" }, identity: null})
export const asia_continent = new Continent({ args: { HASH: `Continent${_sep1}2`, RANGE: `${versionString(0)}${_sep1}Continent${_sep1}2`, name: "Asia" }, identity: null})
export const northamerica_continent = new Continent({ args: { HASH: `Continent${_sep1}3`, RANGE: `${versionString(0)}${_sep1}Continent${_sep1}3`, name: "North America" }, identity: null})
export const southamerica_continent = new Continent({ args: { HASH: `Continent${_sep1}4`, RANGE: `${versionString(0)}${_sep1}Continent${_sep1}4`, name: "South America" }, identity: null})
export const australia_continent = new Continent({ args: { HASH: `Continent${_sep1}5`, RANGE: `${versionString(0)}${_sep1}Continent${_sep1}5`, name: "Australia" }, identity: null})

// Test PUBLIC data - 7 countries
export const bg_country = new Country({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(europe_continent.RANGE)}${_sep1}Country${_sep1}6`, name: "Bulgaria", countryDetails: { currency: "BGN", code: "BG" } }, identity: null})
export const sr_country = new Country({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(europe_continent.RANGE)}${_sep1}Country${_sep1}7`, name: "Serbia", countryDetails: { currency: "RSD", code: "SR" } }, identity: null})
export const ru_country = new Country({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(europe_continent.RANGE)}${_sep1}Country${_sep1}8`, name: "Russia", countryDetails: { currency: "CNY", code: "RU" } }, identity: null})
export const ch_country = new Country({ args: { HASH: `${asia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(asia_continent.RANGE)}${_sep1}Country${_sep1}9`, name: "China", countryDetails: { currency: "BGN", code: "CH" } }, identity: null})
export const us_country = new Country({ args: { HASH: `${northamerica_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(northamerica_continent.RANGE)}${_sep1}Country${_sep1}10`, name: "United States", countryDetails: { currency: "USD", code: "US" } }, identity: null})
export const uk_country = new Country({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(europe_continent.RANGE)}${_sep1}Country${_sep1}11`, name: "United Kingdom", countryDetails: { currency: "GBP", code: "GB" } }, identity: null})
export const au_country = new Country({ args: { HASH: `${australia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(australia_continent.RANGE)}${_sep1}Country${_sep1}12`, name: "Australia", countryDetails: { currency: "AUD", code: "AUS" } }, identity: null})

// Test PUBLIC data - 21 cities
export const bg_city_sofia = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(bg_country.RANGE)}${_sep1}City${_sep1}13`, country: bg_country.id, continent: europe_continent.id, name: "Sofia", cityDetails: { isCapital: true } }, identity: null})
export const bg_city_plovdiv = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(bg_country.RANGE)}${_sep1}City${_sep1}14`, country: bg_country.id, continent: europe_continent.id, name: "Plovdiv" }, identity: null})
export const bg_city_varna = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(bg_country.RANGE)}${_sep1}City${_sep1}15`, country: bg_country.id, continent: europe_continent.id, name: "Varna", cityDetails: { isNearSea: true } }, identity: null})
export const sr_city_belgrade = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(sr_country.RANGE)}${_sep1}City${_sep1}16`, country: sr_country.id, continent: europe_continent.id, name: "Belgrade" }, identity: null})
export const sr_city_nis = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(sr_country.RANGE)}${_sep1}City${_sep1}17`, country: sr_country.id, continent: europe_continent.id, name: "Nis" }, identity: null})
export const sr_city_subotica = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(sr_country.RANGE)}${_sep1}City${_sep1}18`, country: sr_country.id, continent: europe_continent.id, name: "Subotica" }, identity: null})
export const ru_city_moscow = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ru_country.RANGE)}${_sep1}City${_sep1}19`, country: ru_country.id, continent: europe_continent.id, name: "Moscow" }, identity: null})
export const ru_city_stpetersburg = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ru_country.RANGE)}${_sep1}City${_sep1}20`, country: ru_country.id, continent: europe_continent.id, name: "St. Petersburg" }, identity: null})
export const ru_city_novosibirsk = new City({ args: { HASH: `${asia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ru_country.RANGE)}${_sep1}City${_sep1}21`, country: ru_country.id, continent: asia_continent.id, name: "Novosibirsk" }, identity: null})
export const ch_city_shanghai = new City({ args: { HASH: `${asia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ch_country.RANGE)}${_sep1}City${_sep1}22`, country: ch_country.id, continent: asia_continent.id, name: "Shanghai" }, identity: null})
export const ch_city_beijing = new City({ args: { HASH: `${asia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ch_country.RANGE)}${_sep1}City${_sep1}23`, country: ch_country.id, continent: asia_continent.id, name: "Beijong" }, identity: null})
export const ch_city_chongqing = new City({ args: { HASH: `${asia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ch_country.RANGE)}${_sep1}City${_sep1}24`, country: ch_country.id, continent: asia_continent.id, name: "Chongqing" }, identity: null})
export const us_city_newyork = new City({ args: { HASH: `${northamerica_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(us_country.RANGE)}${_sep1}City${_sep1}25`, country: us_country.id, continent: northamerica_continent.id, name: "New York" }, identity: null})
export const us_city_boston = new City({ args: { HASH: `${northamerica_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(us_country.RANGE)}${_sep1}City${_sep1}26`, country: us_country.id, continent: northamerica_continent.id, name: "Boston" }, identity: null})
export const us_city_seattle = new City({ args: { HASH: `${northamerica_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(us_country.RANGE)}${_sep1}City${_sep1}27`, country: us_country.id, continent: northamerica_continent.id, name: "Seattle" }, identity: null})
export const uk_city_london = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(uk_country.RANGE)}${_sep1}City${_sep1}28`, country: uk_country.id, continent: europe_continent.id, name: "London" }, identity: null})
export const uk_city_manchester = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(uk_country.RANGE)}${_sep1}City${_sep1}29`, country: uk_country.id, continent: europe_continent.id, name: "Manchester" }, identity: null})
export const uk_city_birmingham = new City({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(uk_country.RANGE)}${_sep1}City${_sep1}30`, country: uk_country.id, continent: europe_continent.id, name: "Bimingham" }, identity: null})
export const au_city_sydney = new City({ args: { HASH: `${australia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(au_country.RANGE)}${_sep1}City${_sep1}31`, country: au_country.id, continent: australia_continent.id, name: "Sydney" }, identity: null})
export const au_city_melbourne = new City({ args: { HASH: `${australia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(au_country.RANGE)}${_sep1}City${_sep1}32`, country: au_country.id, continent: australia_continent.id, name: "Melbourne" }, identity: null})
export const au_city_brisbane = new City({ args: { HASH: `${australia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(au_country.RANGE)}${_sep1}City${_sep1}33`, country: au_country.id, continent: australia_continent.id, name: "Brisbane" }, identity: null})

export const moscow_airport_addrress = new Airport({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ru_city_moscow.RANGE)}${_sep1}Airport${_sep1}34`, city: ru_city_moscow.id, country: ru_country.id, name: "Moscow Airport" }, identity: null})
export const stpetersberg_airport_addrress = new Airport({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ru_city_stpetersburg.RANGE)}${_sep1}Airport${_sep1}35`, city: ru_city_stpetersburg.id, country: ru_country.id, name: "St. Petersberg Airport" }, identity: null})
export const sofia_airport_addrress = new Airport({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(bg_city_sofia.RANGE)}${_sep1}Airport${_sep1}36`, city: bg_city_sofia.id, country: `${bg_country.HASH}${_sep2}${bg_country.RANGE}`, name: "Sofia Airport" }, identity: null})
export const plovdiv_airport_addrress = new Airport({ args: { HASH: `${europe_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(bg_city_plovdiv.RANGE)}${_sep1}Airport${_sep1}37`, city: bg_city_plovdiv.id, country: `${bg_country.HASH}${_sep2}${bg_country.RANGE}`, name: "Plovdiv Airport" }, identity: null})
export const newyourk_airport_addrress = new Airport({ args: { HASH: `${northamerica_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(us_city_newyork.RANGE)}${_sep1}Airport${_sep1}38`, city: us_city_newyork.id, country: us_country.id, name: "New York Airport" }, identity: null})
export const boston_airport_addrress = new Airport({ args: { HASH: `${northamerica_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(us_city_boston.RANGE)}${_sep1}Airport${_sep1}39`, city: us_city_boston.id, country: us_country.id, name: "Boston Airport" }, identity: null})
export const shanghai_airport_addrress = new Airport({ args: { HASH: `${asia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ch_city_shanghai.RANGE)}${_sep1}Airport${_sep1}40`, city: ch_city_shanghai.id, country: ch_country.id, name: "Shanghai Airport" }, identity: null})
export const beijing_airport_addrress = new Airport({ args: { HASH: `${asia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(ch_city_beijing.RANGE)}${_sep1}Airport${_sep1}41`, city: ch_city_beijing.id, country: ch_country.id, name: "Beijing Airport" }, identity: null})
export const melbourne_airport_addrress = new Airport({ args: { HASH: `${australia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(au_city_melbourne.RANGE)}${_sep1}Airport${_sep1}42`, city: au_city_melbourne.id, country: au_country.id, name: "Melbourne Airport" }, identity: null})
export const brisbane_airport_addrress = new Airport({ args: { HASH: `${australia_continent.HASH}`, RANGE: `${versionString(0)}${_sep1}${removeVersionString(au_city_brisbane.RANGE)}${_sep1}Airport${_sep1}43`, city: au_city_brisbane.id, country: au_country.id, name: "Brisbane Airport" }, identity: null})

export const start = async (generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: IIdentity): Promise<void> => {
    // conttinents
    await createItem(europe_continent, identity)
    await createItem(asia_continent, identity)
    await createItem(northamerica_continent, identity)
    await createItem(southamerica_continent, identity)
    await createItem(australia_continent, identity)
    
    // countries
    await createItem(bg_country, identity)
    await createItem(sr_country, identity)
    await createItem(ru_country, identity)
    await createItem(ch_country, identity)
    await createItem(us_country, identity)
    await createItem(uk_country, identity)
    await createItem(au_country, identity)

    // cities
    await createItem(bg_city_sofia, identity)
    await createItem(bg_city_plovdiv, identity)
    await createItem(bg_city_varna, identity)
    await createItem(sr_city_belgrade, identity)
    await createItem(sr_city_nis, identity)
    await createItem(sr_city_subotica, identity)
    await createItem(ru_city_moscow, identity)
    await createItem(ru_city_stpetersburg, identity)
    await createItem(ru_city_novosibirsk, identity)
    await createItem(ch_city_beijing, identity)
    await createItem(ch_city_chongqing, identity)
    await createItem(ch_city_shanghai, identity)
    await createItem(us_city_boston, identity)
    await createItem(us_city_newyork, identity)
    await createItem(us_city_seattle, identity)
    await createItem(uk_city_birmingham, identity)
    await createItem(uk_city_london, identity)
    await createItem(uk_city_manchester, identity)
    await createItem(au_city_brisbane, identity)
    await createItem(au_city_melbourne, identity)
    await createItem(au_city_sydney, identity)

    // airport locaions (addresses)
    await createItem(moscow_airport_addrress, identity)
    await createItem(stpetersberg_airport_addrress, identity)
    await createItem(sofia_airport_addrress, identity)
    await createItem(plovdiv_airport_addrress, identity)
    await createItem(newyourk_airport_addrress, identity)
    await createItem(boston_airport_addrress, identity)
    await createItem(shanghai_airport_addrress, identity)
    await createItem(beijing_airport_addrress, identity)
    await createItem(melbourne_airport_addrress, identity)
    await createItem(brisbane_airport_addrress, identity)

    // AGENTS TREE WARNING for now parent_agents is used as "visible_agents" TODO what was the idea of this parent/child, is it necessary?
    const system_public_agent = { HASH: `Agent${_sep1}1`, RANGE: `${versionString(0)}${_sep1}Agent${_sep1}1`, __typename: 'Agent', code: 'AGT_0', name: "SYSTEM PUBLIC_AGENT", parent_agents: [`Agent${_sep1}1`] }
    const bs_area_1 = { HASH: `Agent${_sep1}2`, RANGE: `${versionString(0)}${_sep1}Agent${_sep1}2`, __typename: 'Agent', code: 'AGT_1', name: "Business Area 1", parent_agents: [`Agent${_sep1}4`, `Agent${_sep1}5`] }
    const bs_area_2 = { HASH: `Agent${_sep1}3`, RANGE: `${versionString(0)}${_sep1}Agent${_sep1}3`, __typename: 'Agent', code: 'AGT_2', name: "Business Area 2", parent_agents: [`Agent${_sep1}6`, `Agent${_sep1}7`] }
    const bs_area_1_1 = { HASH: `Agent${_sep1}4`, RANGE: `${versionString(0)}${_sep1}Agent${_sep1}4`, __typename: 'Agent', code: 'AGT_1_1', name: "Business Area 1.1", parent_agents: [`Agent${_sep1}5`] }
    const bs_area_1_2 = { HASH: `Agent${_sep1}5`, RANGE: `${versionString(0)}${_sep1}Agent${_sep1}5`, __typename: 'Agent', code: 'AGT_1_2', name: "Business Area 1.2", parent_agents: [] }
    const bs_area_2_1 = { HASH: `Agent${_sep1}6`, RANGE: `${versionString(0)}${_sep1}Agent${_sep1}6`, __typename: 'Agent', code: 'AGT_2_1', name: "Business Area 2.1", parent_agents: [`Agent${_sep1}5`] }
    const bs_area_2_2 = { HASH: `Agent${_sep1}7`, RANGE: `${versionString(0)}${_sep1}Agent${_sep1}7`, __typename: 'Agent', code: 'AGT_2_2', name: "Business Area 2.2", parent_agents: ['asd'] }
    await createItem(system_public_agent, identity)
    await createItem(bs_area_1, identity)
    await createItem(bs_area_2, identity)
    await createItem(bs_area_1_1, identity)
    await createItem(bs_area_1_2, identity)
    await createItem(bs_area_2_1, identity)
    await createItem(bs_area_2_2, identity)

}

export const validateStart = async (generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

}

export const onCommandCompleted = async (generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

}

export const onCommandErrored = async (generateAirtoursPublicTestData: GenerateAirtoursPublicTestData, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

}
