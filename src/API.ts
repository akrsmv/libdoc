/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AllItemsKeysInput = {
  HASH?: string | null,
  RANGE?: string | null,
  rev?: number | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  public_data_ref?: string | null,
  email?: string | null,
  sub?: string | null,
  preferredIamRole?: string | null,
  iamRoles?: Array< string | null > | null,
  cognitoGroups?: Array< string | null > | null,
  userPoolId?: string | null,
  active_agent?: string | null,
  agents?: Array< string | null > | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
  name?: string | null,
  city?: string | null,
  country?: string | null,
  continent?: string | null,
  airpotDetails?: AirportAirpotDetailDtoInput | null,
  invoice_due_date?: string | null,
  invoice_issued_date?: string | null,
  invoice_number?: string | null,
  orders?: Array< string | null > | null,
  total_net?: number | null,
  total_gross?: number | null,
  total_vat?: number | null,
  vat_percent?: number | null,
  class_vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
  cityDetails?: CityCityDetailDtoInput | null,
  person?: string | null,
  status?: string | null,
  items?: Array< OrderItemDtoInput | null > | null,
  countryDetails?: CountryCountryDetailDtoInput | null,
  code?: string | null,
  capacity?: number | null,
  manifacturers?: Array< string | null > | null,
  baseAirplaneModel?: string | null,
  airport?: string | null,
  regionDetails?: RegionRegionDetailDtoInput | null,
  location1?: string | null,
  location2?: string | null,
  location3?: string | null,
  location4?: string | null,
  location5?: string | null,
  child_agents?: Array< string | null > | null,
  parent_agents?: Array< string | null > | null,
  agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
  id_card?: string | null,
  iban?: string | null,
  tourist_season?: string | null,
  ticket_type?: string | null,
  airplane?: string | null,
  flight?: string | null,
  from_airport?: string | null,
  to_airport?: string | null,
  from_country?: string | null,
  to_country?: string | null,
  nr_seats_class_vip?: number | null,
  nr_seats_class1?: number | null,
  nr_seats_class2?: number | null,
  model?: string | null,
  manifacturer?: string | null,
  invoice?: string | null,
  sender_company?: string | null,
  sender_person?: string | null,
  recipient_person?: string | null,
  recipient_company?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  duration_hours?: number | null,
  tickets_price?: FlightTickets_priceDtoInput | null,
  touristSeason?: string | null,
  continentDetails?: ContinentContinentDetailDtoInput | null,
  price_flight_per_hour?: number | null,
  discounts?: TouristSeasonDiscountDtoInput | null,
  phone1?: string | null,
  phone2?: string | null,
  address1?: string | null,
  address2?: string | null,
  type?: LocationTypeEnum | null,
  definition?: string | null,
  forUser?: string | null,
  forAgent?: string | null,
  test_data_date?: string | null,
  prop1?: string | null,
  new_active_agent?: string | null,
  user?: string | null,
};

export type AirportAirpotDetailDtoInput = {
  size_square_km?: number | null,
  nr_of_tracks?: number | null,
};

export type CityCityDetailDtoInput = {
  isNearSea?: boolean | null,
  hasAirport?: boolean | null,
  hasAirtoursOffice?: boolean | null,
  isCapital?: boolean | null,
  population?: number | null,
};

export type OrderItemDtoInput = {
  description?: string | null,
  type?: string | null,
  quantity?: number | null,
  price_no_vat?: number | null,
};

export type CountryCountryDetailDtoInput = {
  hasSeaBorder?: boolean | null,
  currency?: string | null,
  code?: string | null,
  population?: number | null,
};

export type RegionRegionDetailDtoInput = {
  size_square_km?: number | null,
  nr_of_countries?: number | null,
};

export enum AgentAgt_data_visibility_confEnum {
  ALL = "ALL",
  NONE = "NONE",
  ONLY_CHILDREN = "ONLY_CHILDREN",
  ONLY_PRENTS = "ONLY_PRENTS",
  SELECT = "SELECT",
}


export type FlightTickets_priceDtoInput = {
  class_vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
};

export type ContinentContinentDetailDtoInput = {
  population?: number | null,
};

export type TouristSeasonDiscountDtoInput = {
  vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
};

export enum LocationTypeEnum {
  city = "city",
  country = "country",
  continent = "continent",
  region = "region",
  airport = "airport",
}


export type CommandResult = {
  __typename: "CommandResult",
  status?: number | null,
  errors?:  Array<ServerError | null > | null,
};

export type ServerError = {
  __typename: "ServerError",
  errorType?: string | null,
  message?: string | null,
  errorStack?: string | null,
};

export type GenerateAirtoursTestDataInput = {
  forUser?: string | null,
  forAgent?: string | null,
  test_data_date?: string | null,
};

export type GenerateAirtoursPublicTestDataInput = {
  prop1?: string | null,
};

export type ChangeActiveAgentInput = {
  new_active_agent?: string | null,
};

export type SetUserAgentsInput = {
  user?: string | null,
  agents?: Array< string | null > | null,
};

export type UserInput = {
  id?: string | null,
  public_data_ref?: string | null,
  email?: string | null,
  sub?: string | null,
  preferredIamRole?: string | null,
  iamRoles?: Array< string | null > | null,
  cognitoGroups?: Array< string | null > | null,
  userPoolId?: string | null,
  active_agent?: string | null,
  agents?: Array< string | null > | null,
};

export type PersonInput = {
  id?: string | null,
  fname?: string | null,
  lname?: string | null,
};

export type CompanyInput = {
  id?: string | null,
  name?: string | null,
};

export type AirportInput = {
  id?: string | null,
  name?: string | null,
  city?: string | null,
  country?: string | null,
  continent?: string | null,
  airpotDetails?: AirportAirpotDetailDtoInput | null,
};

export type InvoiceInput = {
  id?: string | null,
  invoice_due_date?: string | null,
  invoice_issued_date?: string | null,
  invoice_number?: string | null,
  orders?: Array< string | null > | null,
  total_net?: number | null,
  total_gross?: number | null,
  total_vat?: number | null,
  vat_percent?: number | null,
};

export type AirtoursTicketPriceConfigInput = {
  id?: string | null,
  class_vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
};

export type CityInput = {
  id?: string | null,
  name?: string | null,
  country?: string | null,
  continent?: string | null,
  cityDetails?: CityCityDetailDtoInput | null,
};

export type OrderInput = {
  id?: string | null,
  public_data_ref?: string | null,
  person?: string | null,
  status?: string | null,
  items?: Array< OrderItemDtoInput | null > | null,
};

export type CountryInput = {
  id?: string | null,
  name?: string | null,
  continent?: string | null,
  countryDetails?: CountryCountryDetailDtoInput | null,
};

export type AirplaneManifacturerInput = {
  id?: string | null,
  code?: string | null,
  name?: string | null,
  country?: string | null,
};

export type AirplaneModelInput = {
  id?: string | null,
  capacity?: number | null,
  country?: string | null,
  name?: string | null,
  code?: string | null,
  manifacturers?: Array< string | null > | null,
  baseAirplaneModel?: string | null,
};

export type RegionInput = {
  id?: string | null,
  name?: string | null,
  airport?: string | null,
  city?: string | null,
  country?: string | null,
  continent?: string | null,
  regionDetails?: RegionRegionDetailDtoInput | null,
};

export type AgentInput = {
  id?: string | null,
  public_data_ref?: string | null,
  location1?: string | null,
  location2?: string | null,
  location3?: string | null,
  location4?: string | null,
  location5?: string | null,
  code?: string | null,
  name?: string | null,
  child_agents?: Array< string | null > | null,
  parent_agents?: Array< string | null > | null,
  agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
};

export type TouristInput = {
  id?: string | null,
  public_data_ref?: string | null,
  person?: string | null,
  fname?: string | null,
  lname?: string | null,
  id_card?: string | null,
  iban?: string | null,
  tourist_season?: string | null,
  ticket_type?: string | null,
  airplane?: string | null,
  flight?: string | null,
  from_airport?: string | null,
  to_airport?: string | null,
  from_country?: string | null,
  to_country?: string | null,
};

export type AirplaneInput = {
  id?: string | null,
  code?: string | null,
  nr_seats_class_vip?: number | null,
  nr_seats_class1?: number | null,
  nr_seats_class2?: number | null,
  model?: string | null,
  manifacturer?: string | null,
  country?: string | null,
};

export type PaymentInput = {
  id?: string | null,
  invoice_number?: string | null,
  invoice?: string | null,
  sender_company?: string | null,
  sender_person?: string | null,
  recipient_person?: string | null,
  recipient_company?: string | null,
};

export type FlightInput = {
  id?: string | null,
  from_airport?: string | null,
  to_airport?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  duration_hours?: number | null,
  tickets_price?: FlightTickets_priceDtoInput | null,
  touristSeason?: string | null,
  airplane?: string | null,
};

export type ContinentInput = {
  id?: string | null,
  name?: string | null,
  continentDetails?: ContinentContinentDetailDtoInput | null,
};

export type TouristSeasonInput = {
  id?: string | null,
  price_flight_per_hour?: number | null,
  start_date?: string | null,
  end_date?: string | null,
  code?: string | null,
  discounts?: TouristSeasonDiscountDtoInput | null,
};

export type LocationInput = {
  id?: string | null,
  phone1?: string | null,
  phone2?: string | null,
  address1?: string | null,
  address2?: string | null,
  name?: string | null,
  type?: LocationTypeEnum | null,
};

export type queryBeInput = {
  code?: string | null,
  name?: string | null,
};

export type GetGraphqlSchemaInput = {
  definition?: string | null,
};

export type AllItemsUnionResultConnection = {
  __typename: "AllItemsUnionResultConnection",
  items:  Array<AllItemsUnion >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type AllItemsUnion = ItemIdentifier | User | Person | Company | Airport | Invoice | AirtoursTicketPriceConfig | City | Order | Country | AirplaneManifacturer | AirplaneModel | Region | Agent | Tourist | Airplane | Payment | Flight | Continent | TouristSeason | Location | queryBe | GetGraphqlSchema | GenerateAirtoursTestData | GenerateAirtoursPublicTestData | ChangeActiveAgent | SetUserAgents | UserHistory | PersonHistory | CompanyHistory | AirportHistory | InvoiceHistory | AirtoursTicketPriceConfigHistory | CityHistory | OrderHistory | CountryHistory | AirplaneManifacturerHistory | AirplaneModelHistory | RegionHistory | AgentHistory | TouristHistory | AirplaneHistory | PaymentHistory | FlightHistory | ContinentHistory | TouristSeasonHistory | LocationHistory | queryBeHistory | GetGraphqlSchemaHistory | GenerateAirtoursTestDataHistory | GenerateAirtoursPublicTestDataHistory | ChangeActiveAgentHistory | SetUserAgentsHistory


export type ItemIdentifier = {
  __typename: "ItemIdentifier",
  HASH?: string | null,
  RANGE?: string | null,
};

export type User = {
  __typename: "User",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  Public_data_ref?: Person | null,
  email?: string | null,
  sub?: string | null,
  preferredIamRole?: string | null,
  iamRoles?: Array< string | null > | null,
  cognitoGroups?: Array< string | null > | null,
  userPoolId?: string | null,
  active_agent?: string | null,
  Active_agent?: Agent | null,
  agents?: Array< string | null > | null,
  Agents?:  Array<Agent | null > | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Item = {
  __typename: "Item",
  id?: string | null,
  rev?: number | null,
  date_created?: string | null,
  date_updated?: string | null,
  TITEM?: string | null,
  checksum?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
};

export type Person = {
  __typename: "Person",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  fname?: string | null,
  lname?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Agent = {
  __typename: "Agent",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  Public_data_ref?: Company | null,
  location1?: string | null,
  location2?: string | null,
  location3?: string | null,
  location4?: string | null,
  location5?: string | null,
  code?: string | null,
  name?: string | null,
  child_agents?: Array< string | null > | null,
  parent_agents?: Array< string | null > | null,
  agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Company = {
  __typename: "Company",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Airport = {
  __typename: "Airport",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  city?: string | null,
  City?: City | null,
  country?: string | null,
  Country?: Country | null,
  continent?: string | null,
  Continent?: Continent | null,
  airpotDetails?: AirportAirpotDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type City = {
  __typename: "City",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  country?: string | null,
  Country?: Country | null,
  continent?: string | null,
  Continent?: Continent | null,
  cityDetails?: CityCityDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Country = {
  __typename: "Country",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  continent?: string | null,
  Continent?: Continent | null,
  countryDetails?: CountryCountryDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Continent = {
  __typename: "Continent",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  continentDetails?: ContinentContinentDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type ContinentContinentDetailDto = {
  __typename: "ContinentContinentDetailDto",
  population?: number | null,
};

export type CountryCountryDetailDto = {
  __typename: "CountryCountryDetailDto",
  hasSeaBorder?: boolean | null,
  currency?: string | null,
  code?: string | null,
  population?: number | null,
};

export type CityCityDetailDto = {
  __typename: "CityCityDetailDto",
  isNearSea?: boolean | null,
  hasAirport?: boolean | null,
  hasAirtoursOffice?: boolean | null,
  isCapital?: boolean | null,
  population?: number | null,
};

export type AirportAirpotDetailDto = {
  __typename: "AirportAirpotDetailDto",
  size_square_km?: number | null,
  nr_of_tracks?: number | null,
};

export type Invoice = {
  __typename: "Invoice",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  invoice_due_date?: string | null,
  invoice_issued_date?: string | null,
  invoice_number?: string | null,
  orders?: Array< string | null > | null,
  Orders?:  Array<Order | null > | null,
  total_net?: number | null,
  total_gross?: number | null,
  total_vat?: number | null,
  vat_percent?: number | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Order = {
  __typename: "Order",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  Public_data_ref?: Person | null,
  person?: string | null,
  Person?: Person | null,
  status?: string | null,
  items?:  Array<OrderItemDto | null > | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type OrderItemDto = {
  __typename: "OrderItemDto",
  description?: string | null,
  type?: string | null,
  quantity?: number | null,
  price_no_vat?: number | null,
};

export type AirtoursTicketPriceConfig = {
  __typename: "AirtoursTicketPriceConfig",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  class_vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AirplaneManifacturer = {
  __typename: "AirplaneManifacturer",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  code?: string | null,
  name?: string | null,
  country?: string | null,
  Country?: Location | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Location = {
  __typename: "Location",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  phone1?: string | null,
  phone2?: string | null,
  address1?: string | null,
  address2?: string | null,
  name?: string | null,
  type?: LocationTypeEnum | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AirplaneModel = {
  __typename: "AirplaneModel",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  capacity?: number | null,
  country?: string | null,
  Country?: Location | null,
  name?: string | null,
  code?: string | null,
  manifacturers?: Array< string | null > | null,
  Manifacturers?:  Array<AirplaneManifacturer | null > | null,
  baseAirplaneModel?: string | null,
  BaseAirplaneModel?: AirplaneModel | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Region = {
  __typename: "Region",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  airport?: string | null,
  Airport?: Airport | null,
  city?: string | null,
  City?: City | null,
  country?: string | null,
  Country?: Country | null,
  continent?: string | null,
  Continent?: Continent | null,
  regionDetails?: RegionRegionDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type RegionRegionDetailDto = {
  __typename: "RegionRegionDetailDto",
  size_square_km?: number | null,
  nr_of_countries?: number | null,
};

export type Tourist = {
  __typename: "Tourist",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  Public_data_ref?: Person | null,
  person?: string | null,
  Person?: Person | null,
  fname?: string | null,
  lname?: string | null,
  id_card?: string | null,
  iban?: string | null,
  tourist_season?: string | null,
  Tourist_season?: TouristSeason | null,
  ticket_type?: string | null,
  airplane?: string | null,
  Airplane?: Airplane | null,
  flight?: string | null,
  Flight?: Flight | null,
  from_airport?: string | null,
  From_airport?: Location | null,
  to_airport?: string | null,
  To_airport?: Location | null,
  from_country?: string | null,
  From_country?: Location | null,
  to_country?: string | null,
  To_country?: Location | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type TouristSeason = {
  __typename: "TouristSeason",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  price_flight_per_hour?: number | null,
  start_date?: string | null,
  end_date?: string | null,
  code?: string | null,
  discounts?: TouristSeasonDiscountDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type TouristSeasonDiscountDto = {
  __typename: "TouristSeasonDiscountDto",
  vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
};

export type Airplane = {
  __typename: "Airplane",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  code?: string | null,
  nr_seats_class_vip?: number | null,
  nr_seats_class1?: number | null,
  nr_seats_class2?: number | null,
  model?: string | null,
  Model?: AirplaneModel | null,
  manifacturer?: string | null,
  Manifacturer?: AirplaneManifacturer | null,
  country?: string | null,
  Country?: Country | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type Flight = {
  __typename: "Flight",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  from_airport?: string | null,
  From_airport?: Location | null,
  to_airport?: string | null,
  To_airport?: Location | null,
  start_date?: string | null,
  end_date?: string | null,
  duration_hours?: number | null,
  tickets_price?: FlightTickets_priceDto | null,
  touristSeason?: string | null,
  TouristSeason?: TouristSeason | null,
  airplane?: string | null,
  Airplane?: Airplane | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type FlightTickets_priceDto = {
  __typename: "FlightTickets_priceDto",
  class_vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
};

export type Payment = {
  __typename: "Payment",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  invoice_number?: string | null,
  invoice?: string | null,
  Invoice?: Invoice | null,
  sender_company?: string | null,
  Sender_company?: Company | null,
  sender_person?: string | null,
  Sender_person?: Person | null,
  recipient_person?: string | null,
  Recipient_person?: Person | null,
  recipient_company?: string | null,
  Recipient_company?: Company | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type queryBe = {
  __typename: "queryBe",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  code?: string | null,
  name?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type GetGraphqlSchema = {
  __typename: "GetGraphqlSchema",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  definition?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type GenerateAirtoursTestData = {
  __typename: "GenerateAirtoursTestData",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  forUser?: string | null,
  forAgent?: string | null,
  test_data_date?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type GenerateAirtoursPublicTestData = {
  __typename: "GenerateAirtoursPublicTestData",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  prop1?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type ChangeActiveAgent = {
  __typename: "ChangeActiveAgent",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  new_active_agent?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type SetUserAgents = {
  __typename: "SetUserAgents",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  user?: string | null,
  agents?: Array< string | null > | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type UserHistory = {
  __typename: "UserHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  email?: string | null,
  sub?: string | null,
  preferredIamRole?: string | null,
  iamRoles?: Array< string | null > | null,
  cognitoGroups?: Array< string | null > | null,
  userPoolId?: string | null,
  active_agent?: string | null,
  agents?: Array< string | null > | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type PersonHistory = {
  __typename: "PersonHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  fname?: string | null,
  lname?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type CompanyHistory = {
  __typename: "CompanyHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AirportHistory = {
  __typename: "AirportHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  city?: string | null,
  country?: string | null,
  continent?: string | null,
  airpotDetails?: AirportAirpotDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type InvoiceHistory = {
  __typename: "InvoiceHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  invoice_due_date?: string | null,
  invoice_issued_date?: string | null,
  invoice_number?: string | null,
  orders?: Array< string | null > | null,
  total_net?: number | null,
  total_gross?: number | null,
  total_vat?: number | null,
  vat_percent?: number | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AirtoursTicketPriceConfigHistory = {
  __typename: "AirtoursTicketPriceConfigHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  class_vip?: number | null,
  class_1?: number | null,
  class_2?: number | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type CityHistory = {
  __typename: "CityHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  country?: string | null,
  continent?: string | null,
  cityDetails?: CityCityDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type OrderHistory = {
  __typename: "OrderHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  person?: string | null,
  status?: string | null,
  items?:  Array<OrderItemDto | null > | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type CountryHistory = {
  __typename: "CountryHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  continent?: string | null,
  countryDetails?: CountryCountryDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AirplaneManifacturerHistory = {
  __typename: "AirplaneManifacturerHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  code?: string | null,
  name?: string | null,
  country?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AirplaneModelHistory = {
  __typename: "AirplaneModelHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  capacity?: number | null,
  country?: string | null,
  name?: string | null,
  code?: string | null,
  manifacturers?: Array< string | null > | null,
  baseAirplaneModel?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type RegionHistory = {
  __typename: "RegionHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  airport?: string | null,
  city?: string | null,
  country?: string | null,
  continent?: string | null,
  regionDetails?: RegionRegionDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AgentHistory = {
  __typename: "AgentHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  location1?: string | null,
  location2?: string | null,
  location3?: string | null,
  location4?: string | null,
  location5?: string | null,
  code?: string | null,
  name?: string | null,
  child_agents?: Array< string | null > | null,
  parent_agents?: Array< string | null > | null,
  agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type TouristHistory = {
  __typename: "TouristHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  public_data_ref?: string | null,
  person?: string | null,
  fname?: string | null,
  lname?: string | null,
  id_card?: string | null,
  iban?: string | null,
  tourist_season?: string | null,
  ticket_type?: string | null,
  airplane?: string | null,
  flight?: string | null,
  from_airport?: string | null,
  to_airport?: string | null,
  from_country?: string | null,
  to_country?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type AirplaneHistory = {
  __typename: "AirplaneHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  code?: string | null,
  nr_seats_class_vip?: number | null,
  nr_seats_class1?: number | null,
  nr_seats_class2?: number | null,
  model?: string | null,
  manifacturer?: string | null,
  country?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type PaymentHistory = {
  __typename: "PaymentHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  invoice_number?: string | null,
  invoice?: string | null,
  sender_company?: string | null,
  sender_person?: string | null,
  recipient_person?: string | null,
  recipient_company?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type FlightHistory = {
  __typename: "FlightHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  from_airport?: string | null,
  to_airport?: string | null,
  start_date?: string | null,
  end_date?: string | null,
  duration_hours?: number | null,
  tickets_price?: FlightTickets_priceDto | null,
  touristSeason?: string | null,
  airplane?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type ContinentHistory = {
  __typename: "ContinentHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  name?: string | null,
  continentDetails?: ContinentContinentDetailDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type TouristSeasonHistory = {
  __typename: "TouristSeasonHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  price_flight_per_hour?: number | null,
  start_date?: string | null,
  end_date?: string | null,
  code?: string | null,
  discounts?: TouristSeasonDiscountDto | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type LocationHistory = {
  __typename: "LocationHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  phone1?: string | null,
  phone2?: string | null,
  address1?: string | null,
  address2?: string | null,
  name?: string | null,
  type?: LocationTypeEnum | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type queryBeHistory = {
  __typename: "queryBeHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  code?: string | null,
  name?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type GetGraphqlSchemaHistory = {
  __typename: "GetGraphqlSchemaHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  definition?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type GenerateAirtoursTestDataHistory = {
  __typename: "GenerateAirtoursTestDataHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  forUser?: string | null,
  forAgent?: string | null,
  test_data_date?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type GenerateAirtoursPublicTestDataHistory = {
  __typename: "GenerateAirtoursPublicTestDataHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  prop1?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type ChangeActiveAgentHistory = {
  __typename: "ChangeActiveAgentHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  new_active_agent?: string | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type SetUserAgentsHistory = {
  __typename: "SetUserAgentsHistory",
  // interface Item props
  rev?: number | null,
  TITEM?: string | null,
  checksum?: string | null,
  // specific props
  user?: string | null,
  agents?: Array< string | null > | null,
  date_created?: string | null,
  date_updated?: string | null,
  user_created?: string | null,
  user_updated?: string | null,
  id?: string | null,
};

export type QueryInputAllItemsFields = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  rev?: number | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  public_data_ref?: StringQueryInput | null,
  email?: StringQueryInput | null,
  sub?: StringQueryInput | null,
  preferredIamRole?: StringQueryInput | null,
  userPoolId?: StringQueryInput | null,
  active_agent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  fname?: StringQueryInput | null,
  lname?: StringQueryInput | null,
  name?: StringQueryInput | null,
  city?: StringQueryInput | null,
  country?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  invoice_due_date?: StringQueryInput | null,
  invoice_issued_date?: StringQueryInput | null,
  invoice_number?: StringQueryInput | null,
  total_net?: FloatQueryInput | null,
  total_gross?: FloatQueryInput | null,
  total_vat?: FloatQueryInput | null,
  vat_percent?: FloatQueryInput | null,
  class_vip?: FloatQueryInput | null,
  class_1?: FloatQueryInput | null,
  class_2?: FloatQueryInput | null,
  person?: StringQueryInput | null,
  status?: StringQueryInput | null,
  code?: StringQueryInput | null,
  capacity?: FloatQueryInput | null,
  baseAirplaneModel?: StringQueryInput | null,
  airport?: StringQueryInput | null,
  location1?: StringQueryInput | null,
  location2?: StringQueryInput | null,
  location3?: StringQueryInput | null,
  location4?: StringQueryInput | null,
  location5?: StringQueryInput | null,
  agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
  id_card?: StringQueryInput | null,
  iban?: StringQueryInput | null,
  tourist_season?: StringQueryInput | null,
  ticket_type?: StringQueryInput | null,
  airplane?: StringQueryInput | null,
  flight?: StringQueryInput | null,
  from_airport?: StringQueryInput | null,
  to_airport?: StringQueryInput | null,
  from_country?: StringQueryInput | null,
  to_country?: StringQueryInput | null,
  nr_seats_class_vip?: FloatQueryInput | null,
  nr_seats_class1?: FloatQueryInput | null,
  nr_seats_class2?: FloatQueryInput | null,
  model?: StringQueryInput | null,
  manifacturer?: StringQueryInput | null,
  invoice?: StringQueryInput | null,
  sender_company?: StringQueryInput | null,
  sender_person?: StringQueryInput | null,
  recipient_person?: StringQueryInput | null,
  recipient_company?: StringQueryInput | null,
  start_date?: StringQueryInput | null,
  end_date?: StringQueryInput | null,
  duration_hours?: FloatQueryInput | null,
  touristSeason?: StringQueryInput | null,
  price_flight_per_hour?: FloatQueryInput | null,
  phone1?: StringQueryInput | null,
  phone2?: StringQueryInput | null,
  address1?: StringQueryInput | null,
  address2?: StringQueryInput | null,
  type?: LocationTypeEnum | null,
  definition?: StringQueryInput | null,
  forUser?: StringQueryInput | null,
  forAgent?: StringQueryInput | null,
  test_data_date?: StringQueryInput | null,
  prop1?: StringQueryInput | null,
  new_active_agent?: StringQueryInput | null,
  user?: StringQueryInput | null,
  _and?: Array< QueryInputAllItemsFields | null > | null,
  _or?: Array< QueryInputAllItemsFields | null > | null,
};

export type StringQueryInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  not_contains?: string | null,
  between?: Array< string | null > | null,
  begins_with?: string | null,
  attribute_exists?: boolean | null,
  attribute_not_exists?: boolean | null,
};

export type FloatQueryInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attribute_exists?: boolean | null,
  attribute_not_exists?: boolean | null,
};

export type SearchUsersInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryUsersFilterInput | null,
};

export type QueryUsersFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  email?: StringQueryInput | null,
  sub?: StringQueryInput | null,
  preferredIamRole?: StringQueryInput | null,
  userPoolId?: StringQueryInput | null,
  active_agent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryUsersFilterInput | null > | null,
  _or?: Array< QueryUsersFilterInput | null > | null,
};

export type UsersResultConnection = {
  __typename: "UsersResultConnection",
  items:  Array<User >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryUsersInput = {
  hashKey?: QueryUsersOnlyFieldsInput | null,
  rangeKey?: QueryUsersOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryUsersFilterInput | null,
};

export type QueryUsersOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  email?: StringQueryInput | null,
  sub?: StringQueryInput | null,
  preferredIamRole?: StringQueryInput | null,
  userPoolId?: StringQueryInput | null,
  active_agent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchPeopleInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryPeopleFilterInput | null,
};

export type QueryPeopleFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  fname?: StringQueryInput | null,
  lname?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryPeopleFilterInput | null > | null,
  _or?: Array< QueryPeopleFilterInput | null > | null,
};

export type PeopleResultConnection = {
  __typename: "PeopleResultConnection",
  items:  Array<Person >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryPeopleInput = {
  hashKey?: QueryPeopleOnlyFieldsInput | null,
  rangeKey?: QueryPeopleOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryPeopleFilterInput | null,
};

export type QueryPeopleOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  fname?: StringQueryInput | null,
  lname?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchCompaniesInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryCompaniesFilterInput | null,
};

export type QueryCompaniesFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryCompaniesFilterInput | null > | null,
  _or?: Array< QueryCompaniesFilterInput | null > | null,
};

export type CompaniesResultConnection = {
  __typename: "CompaniesResultConnection",
  items:  Array<Company >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryCompaniesInput = {
  hashKey?: QueryCompaniesOnlyFieldsInput | null,
  rangeKey?: QueryCompaniesOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryCompaniesFilterInput | null,
};

export type QueryCompaniesOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchAirportsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirportsFilterInput | null,
};

export type QueryAirportsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  city?: StringQueryInput | null,
  country?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryAirportsFilterInput | null > | null,
  _or?: Array< QueryAirportsFilterInput | null > | null,
};

export type AirportsResultConnection = {
  __typename: "AirportsResultConnection",
  items:  Array<Airport >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryAirportsInput = {
  hashKey?: QueryAirportsOnlyFieldsInput | null,
  rangeKey?: QueryAirportsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirportsFilterInput | null,
};

export type QueryAirportsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  city?: StringQueryInput | null,
  country?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchInvoicesInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryInvoicesFilterInput | null,
};

export type QueryInvoicesFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  invoice_due_date?: StringQueryInput | null,
  invoice_issued_date?: StringQueryInput | null,
  invoice_number?: StringQueryInput | null,
  total_net?: FloatQueryInput | null,
  total_gross?: FloatQueryInput | null,
  total_vat?: FloatQueryInput | null,
  vat_percent?: FloatQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryInvoicesFilterInput | null > | null,
  _or?: Array< QueryInvoicesFilterInput | null > | null,
};

export type InvoicesResultConnection = {
  __typename: "InvoicesResultConnection",
  items:  Array<Invoice >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryInvoicesInput = {
  hashKey?: QueryInvoicesOnlyFieldsInput | null,
  rangeKey?: QueryInvoicesOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryInvoicesFilterInput | null,
};

export type QueryInvoicesOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  invoice_due_date?: StringQueryInput | null,
  invoice_issued_date?: StringQueryInput | null,
  invoice_number?: StringQueryInput | null,
  total_net?: FloatQueryInput | null,
  total_gross?: FloatQueryInput | null,
  total_vat?: FloatQueryInput | null,
  vat_percent?: FloatQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchAirtoursTicketPriceConfigsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirtoursTicketPriceConfigsFilterInput | null,
};

export type QueryAirtoursTicketPriceConfigsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  class_vip?: FloatQueryInput | null,
  class_1?: FloatQueryInput | null,
  class_2?: FloatQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryAirtoursTicketPriceConfigsFilterInput | null > | null,
  _or?: Array< QueryAirtoursTicketPriceConfigsFilterInput | null > | null,
};

export type AirtoursTicketPriceConfigsResultConnection = {
  __typename: "AirtoursTicketPriceConfigsResultConnection",
  items:  Array<AirtoursTicketPriceConfig >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryAirtoursTicketPriceConfigsInput = {
  hashKey?: QueryAirtoursTicketPriceConfigsOnlyFieldsInput | null,
  rangeKey?: QueryAirtoursTicketPriceConfigsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirtoursTicketPriceConfigsFilterInput | null,
};

export type QueryAirtoursTicketPriceConfigsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  class_vip?: FloatQueryInput | null,
  class_1?: FloatQueryInput | null,
  class_2?: FloatQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchCitiesInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryCitiesFilterInput | null,
};

export type QueryCitiesFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  country?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryCitiesFilterInput | null > | null,
  _or?: Array< QueryCitiesFilterInput | null > | null,
};

export type CitiesResultConnection = {
  __typename: "CitiesResultConnection",
  items:  Array<City >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryCitiesInput = {
  hashKey?: QueryCitiesOnlyFieldsInput | null,
  rangeKey?: QueryCitiesOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryCitiesFilterInput | null,
};

export type QueryCitiesOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  country?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchOrdersInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryOrdersFilterInput | null,
};

export type QueryOrdersFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  person?: StringQueryInput | null,
  status?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryOrdersFilterInput | null > | null,
  _or?: Array< QueryOrdersFilterInput | null > | null,
};

export type OrdersResultConnection = {
  __typename: "OrdersResultConnection",
  items:  Array<Order >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryOrdersInput = {
  hashKey?: QueryOrdersOnlyFieldsInput | null,
  rangeKey?: QueryOrdersOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryOrdersFilterInput | null,
};

export type QueryOrdersOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  person?: StringQueryInput | null,
  status?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchCountriesInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryCountriesFilterInput | null,
};

export type QueryCountriesFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryCountriesFilterInput | null > | null,
  _or?: Array< QueryCountriesFilterInput | null > | null,
};

export type CountriesResultConnection = {
  __typename: "CountriesResultConnection",
  items:  Array<Country >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryCountriesInput = {
  hashKey?: QueryCountriesOnlyFieldsInput | null,
  rangeKey?: QueryCountriesOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryCountriesFilterInput | null,
};

export type QueryCountriesOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchAirplaneManifacturersInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirplaneManifacturersFilterInput | null,
};

export type QueryAirplaneManifacturersFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  code?: StringQueryInput | null,
  name?: StringQueryInput | null,
  country?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryAirplaneManifacturersFilterInput | null > | null,
  _or?: Array< QueryAirplaneManifacturersFilterInput | null > | null,
};

export type AirplaneManifacturersResultConnection = {
  __typename: "AirplaneManifacturersResultConnection",
  items:  Array<AirplaneManifacturer >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryAirplaneManifacturersInput = {
  hashKey?: QueryAirplaneManifacturersOnlyFieldsInput | null,
  rangeKey?: QueryAirplaneManifacturersOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirplaneManifacturersFilterInput | null,
};

export type QueryAirplaneManifacturersOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  code?: StringQueryInput | null,
  name?: StringQueryInput | null,
  country?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchAirplaneModelsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirplaneModelsFilterInput | null,
};

export type QueryAirplaneModelsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  capacity?: FloatQueryInput | null,
  country?: StringQueryInput | null,
  name?: StringQueryInput | null,
  code?: StringQueryInput | null,
  baseAirplaneModel?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryAirplaneModelsFilterInput | null > | null,
  _or?: Array< QueryAirplaneModelsFilterInput | null > | null,
};

export type AirplaneModelsResultConnection = {
  __typename: "AirplaneModelsResultConnection",
  items:  Array<AirplaneModel >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryAirplaneModelsInput = {
  hashKey?: QueryAirplaneModelsOnlyFieldsInput | null,
  rangeKey?: QueryAirplaneModelsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirplaneModelsFilterInput | null,
};

export type QueryAirplaneModelsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  capacity?: FloatQueryInput | null,
  country?: StringQueryInput | null,
  name?: StringQueryInput | null,
  code?: StringQueryInput | null,
  baseAirplaneModel?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchRegionsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryRegionsFilterInput | null,
};

export type QueryRegionsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  airport?: StringQueryInput | null,
  city?: StringQueryInput | null,
  country?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryRegionsFilterInput | null > | null,
  _or?: Array< QueryRegionsFilterInput | null > | null,
};

export type RegionsResultConnection = {
  __typename: "RegionsResultConnection",
  items:  Array<Region >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryRegionsInput = {
  hashKey?: QueryRegionsOnlyFieldsInput | null,
  rangeKey?: QueryRegionsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryRegionsFilterInput | null,
};

export type QueryRegionsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  airport?: StringQueryInput | null,
  city?: StringQueryInput | null,
  country?: StringQueryInput | null,
  continent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchAgentsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAgentsFilterInput | null,
};

export type QueryAgentsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  location1?: StringQueryInput | null,
  location2?: StringQueryInput | null,
  location3?: StringQueryInput | null,
  location4?: StringQueryInput | null,
  location5?: StringQueryInput | null,
  code?: StringQueryInput | null,
  name?: StringQueryInput | null,
  agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryAgentsFilterInput | null > | null,
  _or?: Array< QueryAgentsFilterInput | null > | null,
};

export type AgentsResultConnection = {
  __typename: "AgentsResultConnection",
  items:  Array<Agent >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryAgentsInput = {
  hashKey?: QueryAgentsOnlyFieldsInput | null,
  rangeKey?: QueryAgentsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAgentsFilterInput | null,
};

export type QueryAgentsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  location1?: StringQueryInput | null,
  location2?: StringQueryInput | null,
  location3?: StringQueryInput | null,
  location4?: StringQueryInput | null,
  location5?: StringQueryInput | null,
  code?: StringQueryInput | null,
  name?: StringQueryInput | null,
  agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchTouristsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryTouristsFilterInput | null,
};

export type QueryTouristsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  person?: StringQueryInput | null,
  fname?: StringQueryInput | null,
  lname?: StringQueryInput | null,
  id_card?: StringQueryInput | null,
  iban?: StringQueryInput | null,
  tourist_season?: StringQueryInput | null,
  ticket_type?: StringQueryInput | null,
  airplane?: StringQueryInput | null,
  flight?: StringQueryInput | null,
  from_airport?: StringQueryInput | null,
  to_airport?: StringQueryInput | null,
  from_country?: StringQueryInput | null,
  to_country?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryTouristsFilterInput | null > | null,
  _or?: Array< QueryTouristsFilterInput | null > | null,
};

export type TouristsResultConnection = {
  __typename: "TouristsResultConnection",
  items:  Array<Tourist >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryTouristsInput = {
  hashKey?: QueryTouristsOnlyFieldsInput | null,
  rangeKey?: QueryTouristsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryTouristsFilterInput | null,
};

export type QueryTouristsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  public_data_ref?: StringQueryInput | null,
  person?: StringQueryInput | null,
  fname?: StringQueryInput | null,
  lname?: StringQueryInput | null,
  id_card?: StringQueryInput | null,
  iban?: StringQueryInput | null,
  tourist_season?: StringQueryInput | null,
  ticket_type?: StringQueryInput | null,
  airplane?: StringQueryInput | null,
  flight?: StringQueryInput | null,
  from_airport?: StringQueryInput | null,
  to_airport?: StringQueryInput | null,
  from_country?: StringQueryInput | null,
  to_country?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchAirplanesInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirplanesFilterInput | null,
};

export type QueryAirplanesFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  code?: StringQueryInput | null,
  nr_seats_class_vip?: FloatQueryInput | null,
  nr_seats_class1?: FloatQueryInput | null,
  nr_seats_class2?: FloatQueryInput | null,
  model?: StringQueryInput | null,
  manifacturer?: StringQueryInput | null,
  country?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryAirplanesFilterInput | null > | null,
  _or?: Array< QueryAirplanesFilterInput | null > | null,
};

export type AirplanesResultConnection = {
  __typename: "AirplanesResultConnection",
  items:  Array<Airplane >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryAirplanesInput = {
  hashKey?: QueryAirplanesOnlyFieldsInput | null,
  rangeKey?: QueryAirplanesOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryAirplanesFilterInput | null,
};

export type QueryAirplanesOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  code?: StringQueryInput | null,
  nr_seats_class_vip?: FloatQueryInput | null,
  nr_seats_class1?: FloatQueryInput | null,
  nr_seats_class2?: FloatQueryInput | null,
  model?: StringQueryInput | null,
  manifacturer?: StringQueryInput | null,
  country?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchPaymentsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryPaymentsFilterInput | null,
};

export type QueryPaymentsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  invoice_number?: StringQueryInput | null,
  invoice?: StringQueryInput | null,
  sender_company?: StringQueryInput | null,
  sender_person?: StringQueryInput | null,
  recipient_person?: StringQueryInput | null,
  recipient_company?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryPaymentsFilterInput | null > | null,
  _or?: Array< QueryPaymentsFilterInput | null > | null,
};

export type PaymentsResultConnection = {
  __typename: "PaymentsResultConnection",
  items:  Array<Payment >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryPaymentsInput = {
  hashKey?: QueryPaymentsOnlyFieldsInput | null,
  rangeKey?: QueryPaymentsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryPaymentsFilterInput | null,
};

export type QueryPaymentsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  invoice_number?: StringQueryInput | null,
  invoice?: StringQueryInput | null,
  sender_company?: StringQueryInput | null,
  sender_person?: StringQueryInput | null,
  recipient_person?: StringQueryInput | null,
  recipient_company?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchFlightsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryFlightsFilterInput | null,
};

export type QueryFlightsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  from_airport?: StringQueryInput | null,
  to_airport?: StringQueryInput | null,
  start_date?: StringQueryInput | null,
  end_date?: StringQueryInput | null,
  duration_hours?: FloatQueryInput | null,
  touristSeason?: StringQueryInput | null,
  airplane?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryFlightsFilterInput | null > | null,
  _or?: Array< QueryFlightsFilterInput | null > | null,
};

export type FlightsResultConnection = {
  __typename: "FlightsResultConnection",
  items:  Array<Flight >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryFlightsInput = {
  hashKey?: QueryFlightsOnlyFieldsInput | null,
  rangeKey?: QueryFlightsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryFlightsFilterInput | null,
};

export type QueryFlightsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  from_airport?: StringQueryInput | null,
  to_airport?: StringQueryInput | null,
  start_date?: StringQueryInput | null,
  end_date?: StringQueryInput | null,
  duration_hours?: FloatQueryInput | null,
  touristSeason?: StringQueryInput | null,
  airplane?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchContinentsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryContinentsFilterInput | null,
};

export type QueryContinentsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryContinentsFilterInput | null > | null,
  _or?: Array< QueryContinentsFilterInput | null > | null,
};

export type ContinentsResultConnection = {
  __typename: "ContinentsResultConnection",
  items:  Array<Continent >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryContinentsInput = {
  hashKey?: QueryContinentsOnlyFieldsInput | null,
  rangeKey?: QueryContinentsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryContinentsFilterInput | null,
};

export type QueryContinentsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  name?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchTouristSeasonsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryTouristSeasonsFilterInput | null,
};

export type QueryTouristSeasonsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  price_flight_per_hour?: FloatQueryInput | null,
  start_date?: StringQueryInput | null,
  end_date?: StringQueryInput | null,
  code?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryTouristSeasonsFilterInput | null > | null,
  _or?: Array< QueryTouristSeasonsFilterInput | null > | null,
};

export type TouristSeasonsResultConnection = {
  __typename: "TouristSeasonsResultConnection",
  items:  Array<TouristSeason >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryTouristSeasonsInput = {
  hashKey?: QueryTouristSeasonsOnlyFieldsInput | null,
  rangeKey?: QueryTouristSeasonsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryTouristSeasonsFilterInput | null,
};

export type QueryTouristSeasonsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  price_flight_per_hour?: FloatQueryInput | null,
  start_date?: StringQueryInput | null,
  end_date?: StringQueryInput | null,
  code?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchLocationsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryLocationsFilterInput | null,
};

export type QueryLocationsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  phone1?: StringQueryInput | null,
  phone2?: StringQueryInput | null,
  address1?: StringQueryInput | null,
  address2?: StringQueryInput | null,
  name?: StringQueryInput | null,
  type?: LocationTypeEnum | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryLocationsFilterInput | null > | null,
  _or?: Array< QueryLocationsFilterInput | null > | null,
};

export type LocationsResultConnection = {
  __typename: "LocationsResultConnection",
  items:  Array<Location >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryLocationsInput = {
  hashKey?: QueryLocationsOnlyFieldsInput | null,
  rangeKey?: QueryLocationsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryLocationsFilterInput | null,
};

export type QueryLocationsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  phone1?: StringQueryInput | null,
  phone2?: StringQueryInput | null,
  address1?: StringQueryInput | null,
  address2?: StringQueryInput | null,
  name?: StringQueryInput | null,
  type?: LocationTypeEnum | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchqueryBesInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryqueryBesFilterInput | null,
};

export type QueryqueryBesFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  code?: StringQueryInput | null,
  name?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryqueryBesFilterInput | null > | null,
  _or?: Array< QueryqueryBesFilterInput | null > | null,
};

export type queryBesResultConnection = {
  __typename: "queryBesResultConnection",
  items:  Array<queryBe >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryqueryBesInput = {
  hashKey?: QueryqueryBesOnlyFieldsInput | null,
  rangeKey?: QueryqueryBesOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryqueryBesFilterInput | null,
};

export type QueryqueryBesOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  code?: StringQueryInput | null,
  name?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchGetGraphqlSchemasInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryGetGraphqlSchemasFilterInput | null,
};

export type QueryGetGraphqlSchemasFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  definition?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryGetGraphqlSchemasFilterInput | null > | null,
  _or?: Array< QueryGetGraphqlSchemasFilterInput | null > | null,
};

export type GetGraphqlSchemasResultConnection = {
  __typename: "GetGraphqlSchemasResultConnection",
  items:  Array<GetGraphqlSchema >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryGetGraphqlSchemasInput = {
  hashKey?: QueryGetGraphqlSchemasOnlyFieldsInput | null,
  rangeKey?: QueryGetGraphqlSchemasOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryGetGraphqlSchemasFilterInput | null,
};

export type QueryGetGraphqlSchemasOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  definition?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchGenerateAirtoursTestDataInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryGenerateAirtoursTestDataFilterInput | null,
};

export type QueryGenerateAirtoursTestDataFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  forUser?: StringQueryInput | null,
  forAgent?: StringQueryInput | null,
  test_data_date?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryGenerateAirtoursTestDataFilterInput | null > | null,
  _or?: Array< QueryGenerateAirtoursTestDataFilterInput | null > | null,
};

export type GenerateAirtoursTestDataResultConnection = {
  __typename: "GenerateAirtoursTestDataResultConnection",
  items:  Array<GenerateAirtoursTestData >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryGenerateAirtoursTestDataInput = {
  hashKey?: QueryGenerateAirtoursTestDataOnlyFieldsInput | null,
  rangeKey?: QueryGenerateAirtoursTestDataOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryGenerateAirtoursTestDataFilterInput | null,
};

export type QueryGenerateAirtoursTestDataOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  forUser?: StringQueryInput | null,
  forAgent?: StringQueryInput | null,
  test_data_date?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchGenerateAirtoursPublicTestDataInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryGenerateAirtoursPublicTestDataFilterInput | null,
};

export type QueryGenerateAirtoursPublicTestDataFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  prop1?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryGenerateAirtoursPublicTestDataFilterInput | null > | null,
  _or?: Array< QueryGenerateAirtoursPublicTestDataFilterInput | null > | null,
};

export type GenerateAirtoursPublicTestDataResultConnection = {
  __typename: "GenerateAirtoursPublicTestDataResultConnection",
  items:  Array<GenerateAirtoursPublicTestData >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryGenerateAirtoursPublicTestDataInput = {
  hashKey?: QueryGenerateAirtoursPublicTestDataOnlyFieldsInput | null,
  rangeKey?: QueryGenerateAirtoursPublicTestDataOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryGenerateAirtoursPublicTestDataFilterInput | null,
};

export type QueryGenerateAirtoursPublicTestDataOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  prop1?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchChangeActiveAgentsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryChangeActiveAgentsFilterInput | null,
};

export type QueryChangeActiveAgentsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  new_active_agent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QueryChangeActiveAgentsFilterInput | null > | null,
  _or?: Array< QueryChangeActiveAgentsFilterInput | null > | null,
};

export type ChangeActiveAgentsResultConnection = {
  __typename: "ChangeActiveAgentsResultConnection",
  items:  Array<ChangeActiveAgent >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QueryChangeActiveAgentsInput = {
  hashKey?: QueryChangeActiveAgentsOnlyFieldsInput | null,
  rangeKey?: QueryChangeActiveAgentsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QueryChangeActiveAgentsFilterInput | null,
};

export type QueryChangeActiveAgentsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  new_active_agent?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type SearchSetUserAgentsInput = {
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QuerySetUserAgentsFilterInput | null,
};

export type QuerySetUserAgentsFilterInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  user?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
  _and?: Array< QuerySetUserAgentsFilterInput | null > | null,
  _or?: Array< QuerySetUserAgentsFilterInput | null > | null,
};

export type SetUserAgentsResultConnection = {
  __typename: "SetUserAgentsResultConnection",
  items:  Array<SetUserAgents >,
  pageToken?: string | null,
  count?: number | null,
  selectionSetList?: Array< string | null > | null,
  errors?:  Array<ServerError | null > | null,
  excludedFromFilter?: Array< string | null > | null,
  correlation_id?: string | null,
};

export type QuerySetUserAgentsInput = {
  hashKey?: QuerySetUserAgentsOnlyFieldsInput | null,
  rangeKey?: QuerySetUserAgentsOnlyFieldsInput | null,
  dbIndexName?: string | null,
  limit?: number | null,
  pageToken?: string | null,
  keysOnly?: boolean | null,
  searchBackward?: boolean | null,
  filter?: QuerySetUserAgentsFilterInput | null,
};

export type QuerySetUserAgentsOnlyFieldsInput = {
  HASH?: StringQueryInput | null,
  RANGE?: StringQueryInput | null,
  user?: StringQueryInput | null,
  date_created?: StringQueryInput | null,
  date_updated?: StringQueryInput | null,
  user_created?: StringQueryInput | null,
  user_updated?: StringQueryInput | null,
  id?: StringQueryInput | null,
};

export type StartMutationVariables = {
  input: AllItemsKeysInput,
};

export type StartMutation = {
  start?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateMutationVariables = {
  input: AllItemsKeysInput,
};

export type CreateMutation = {
  create?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateMutationVariables = {
  input: AllItemsKeysInput,
  rev?: number | null,
};

export type UpdateMutation = {
  update?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchMutationVariables = {
  input: AllItemsKeysInput,
  rev?: number | null,
};

export type PatchMutation = {
  patch?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DelMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DelMutation = {
  del?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type GenerateAirtoursTestDataMutationVariables = {
  input: GenerateAirtoursTestDataInput,
};

export type GenerateAirtoursTestDataMutation = {
  GenerateAirtoursTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type GenerateAirtoursPublicTestDataMutationVariables = {
  input: GenerateAirtoursPublicTestDataInput,
};

export type GenerateAirtoursPublicTestDataMutation = {
  GenerateAirtoursPublicTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type ChangeActiveAgentMutationVariables = {
  input: ChangeActiveAgentInput,
};

export type ChangeActiveAgentMutation = {
  ChangeActiveAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type SetUserAgentsMutationVariables = {
  input: SetUserAgentsInput,
};

export type SetUserAgentsMutation = {
  SetUserAgents?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: UserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreatePersonMutationVariables = {
  input: PersonInput,
};

export type CreatePersonMutation = {
  createPerson?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CompanyInput,
};

export type CreateCompanyMutation = {
  createCompany?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateAirportMutationVariables = {
  input: AirportInput,
};

export type CreateAirportMutation = {
  createAirport?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateInvoiceMutationVariables = {
  input: InvoiceInput,
};

export type CreateInvoiceMutation = {
  createInvoice?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateAirtoursTicketPriceConfigMutationVariables = {
  input: AirtoursTicketPriceConfigInput,
};

export type CreateAirtoursTicketPriceConfigMutation = {
  createAirtoursTicketPriceConfig?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateCityMutationVariables = {
  input: CityInput,
};

export type CreateCityMutation = {
  createCity?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: OrderInput,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateCountryMutationVariables = {
  input: CountryInput,
};

export type CreateCountryMutation = {
  createCountry?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateAirplaneManifacturerMutationVariables = {
  input: AirplaneManifacturerInput,
};

export type CreateAirplaneManifacturerMutation = {
  createAirplaneManifacturer?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateAirplaneModelMutationVariables = {
  input: AirplaneModelInput,
};

export type CreateAirplaneModelMutation = {
  createAirplaneModel?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateRegionMutationVariables = {
  input: RegionInput,
};

export type CreateRegionMutation = {
  createRegion?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateAgentMutationVariables = {
  input: AgentInput,
};

export type CreateAgentMutation = {
  createAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateTouristMutationVariables = {
  input: TouristInput,
};

export type CreateTouristMutation = {
  createTourist?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateAirplaneMutationVariables = {
  input: AirplaneInput,
};

export type CreateAirplaneMutation = {
  createAirplane?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: PaymentInput,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateFlightMutationVariables = {
  input: FlightInput,
};

export type CreateFlightMutation = {
  createFlight?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateContinentMutationVariables = {
  input: ContinentInput,
};

export type CreateContinentMutation = {
  createContinent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateTouristSeasonMutationVariables = {
  input: TouristSeasonInput,
};

export type CreateTouristSeasonMutation = {
  createTouristSeason?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: LocationInput,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreatequeryBeMutationVariables = {
  input: queryBeInput,
};

export type CreatequeryBeMutation = {
  createqueryBe?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateGetGraphqlSchemaMutationVariables = {
  input: GetGraphqlSchemaInput,
};

export type CreateGetGraphqlSchemaMutation = {
  createGetGraphqlSchema?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateGenerateAirtoursTestDataMutationVariables = {
  input: GenerateAirtoursTestDataInput,
};

export type CreateGenerateAirtoursTestDataMutation = {
  createGenerateAirtoursTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateGenerateAirtoursPublicTestDataMutationVariables = {
  input: GenerateAirtoursPublicTestDataInput,
};

export type CreateGenerateAirtoursPublicTestDataMutation = {
  createGenerateAirtoursPublicTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateChangeActiveAgentMutationVariables = {
  input: ChangeActiveAgentInput,
};

export type CreateChangeActiveAgentMutation = {
  createChangeActiveAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type CreateSetUserAgentsMutationVariables = {
  input: SetUserAgentsInput,
};

export type CreateSetUserAgentsMutation = {
  createSetUserAgents?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UserInput,
  rev?: number | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdatePersonMutationVariables = {
  input: PersonInput,
  rev?: number | null,
};

export type UpdatePersonMutation = {
  updatePerson?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: CompanyInput,
  rev?: number | null,
};

export type UpdateCompanyMutation = {
  updateCompany?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateAirportMutationVariables = {
  input: AirportInput,
  rev?: number | null,
};

export type UpdateAirportMutation = {
  updateAirport?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateInvoiceMutationVariables = {
  input: InvoiceInput,
  rev?: number | null,
};

export type UpdateInvoiceMutation = {
  updateInvoice?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateAirtoursTicketPriceConfigMutationVariables = {
  input: AirtoursTicketPriceConfigInput,
  rev?: number | null,
};

export type UpdateAirtoursTicketPriceConfigMutation = {
  updateAirtoursTicketPriceConfig?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: CityInput,
  rev?: number | null,
};

export type UpdateCityMutation = {
  updateCity?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: OrderInput,
  rev?: number | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateCountryMutationVariables = {
  input: CountryInput,
  rev?: number | null,
};

export type UpdateCountryMutation = {
  updateCountry?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateAirplaneManifacturerMutationVariables = {
  input: AirplaneManifacturerInput,
  rev?: number | null,
};

export type UpdateAirplaneManifacturerMutation = {
  updateAirplaneManifacturer?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateAirplaneModelMutationVariables = {
  input: AirplaneModelInput,
  rev?: number | null,
};

export type UpdateAirplaneModelMutation = {
  updateAirplaneModel?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateRegionMutationVariables = {
  input: RegionInput,
  rev?: number | null,
};

export type UpdateRegionMutation = {
  updateRegion?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateAgentMutationVariables = {
  input: AgentInput,
  rev?: number | null,
};

export type UpdateAgentMutation = {
  updateAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateTouristMutationVariables = {
  input: TouristInput,
  rev?: number | null,
};

export type UpdateTouristMutation = {
  updateTourist?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateAirplaneMutationVariables = {
  input: AirplaneInput,
  rev?: number | null,
};

export type UpdateAirplaneMutation = {
  updateAirplane?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: PaymentInput,
  rev?: number | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateFlightMutationVariables = {
  input: FlightInput,
  rev?: number | null,
};

export type UpdateFlightMutation = {
  updateFlight?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateContinentMutationVariables = {
  input: ContinentInput,
  rev?: number | null,
};

export type UpdateContinentMutation = {
  updateContinent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateTouristSeasonMutationVariables = {
  input: TouristSeasonInput,
  rev?: number | null,
};

export type UpdateTouristSeasonMutation = {
  updateTouristSeason?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: LocationInput,
  rev?: number | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdatequeryBeMutationVariables = {
  input: queryBeInput,
  rev?: number | null,
};

export type UpdatequeryBeMutation = {
  updatequeryBe?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateGetGraphqlSchemaMutationVariables = {
  input: GetGraphqlSchemaInput,
  rev?: number | null,
};

export type UpdateGetGraphqlSchemaMutation = {
  updateGetGraphqlSchema?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateGenerateAirtoursTestDataMutationVariables = {
  input: GenerateAirtoursTestDataInput,
  rev?: number | null,
};

export type UpdateGenerateAirtoursTestDataMutation = {
  updateGenerateAirtoursTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateGenerateAirtoursPublicTestDataMutationVariables = {
  input: GenerateAirtoursPublicTestDataInput,
  rev?: number | null,
};

export type UpdateGenerateAirtoursPublicTestDataMutation = {
  updateGenerateAirtoursPublicTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateChangeActiveAgentMutationVariables = {
  input: ChangeActiveAgentInput,
  rev?: number | null,
};

export type UpdateChangeActiveAgentMutation = {
  updateChangeActiveAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type UpdateSetUserAgentsMutationVariables = {
  input: SetUserAgentsInput,
  rev?: number | null,
};

export type UpdateSetUserAgentsMutation = {
  updateSetUserAgents?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchUserMutationVariables = {
  input: UserInput,
  rev?: number | null,
};

export type PatchUserMutation = {
  patchUser?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchPersonMutationVariables = {
  input: PersonInput,
  rev?: number | null,
};

export type PatchPersonMutation = {
  patchPerson?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchCompanyMutationVariables = {
  input: CompanyInput,
  rev?: number | null,
};

export type PatchCompanyMutation = {
  patchCompany?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchAirportMutationVariables = {
  input: AirportInput,
  rev?: number | null,
};

export type PatchAirportMutation = {
  patchAirport?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchInvoiceMutationVariables = {
  input: InvoiceInput,
  rev?: number | null,
};

export type PatchInvoiceMutation = {
  patchInvoice?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchAirtoursTicketPriceConfigMutationVariables = {
  input: AirtoursTicketPriceConfigInput,
  rev?: number | null,
};

export type PatchAirtoursTicketPriceConfigMutation = {
  patchAirtoursTicketPriceConfig?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchCityMutationVariables = {
  input: CityInput,
  rev?: number | null,
};

export type PatchCityMutation = {
  patchCity?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchOrderMutationVariables = {
  input: OrderInput,
  rev?: number | null,
};

export type PatchOrderMutation = {
  patchOrder?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchCountryMutationVariables = {
  input: CountryInput,
  rev?: number | null,
};

export type PatchCountryMutation = {
  patchCountry?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchAirplaneManifacturerMutationVariables = {
  input: AirplaneManifacturerInput,
  rev?: number | null,
};

export type PatchAirplaneManifacturerMutation = {
  patchAirplaneManifacturer?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchAirplaneModelMutationVariables = {
  input: AirplaneModelInput,
  rev?: number | null,
};

export type PatchAirplaneModelMutation = {
  patchAirplaneModel?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchRegionMutationVariables = {
  input: RegionInput,
  rev?: number | null,
};

export type PatchRegionMutation = {
  patchRegion?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchAgentMutationVariables = {
  input: AgentInput,
  rev?: number | null,
};

export type PatchAgentMutation = {
  patchAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchTouristMutationVariables = {
  input: TouristInput,
  rev?: number | null,
};

export type PatchTouristMutation = {
  patchTourist?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchAirplaneMutationVariables = {
  input: AirplaneInput,
  rev?: number | null,
};

export type PatchAirplaneMutation = {
  patchAirplane?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchPaymentMutationVariables = {
  input: PaymentInput,
  rev?: number | null,
};

export type PatchPaymentMutation = {
  patchPayment?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchFlightMutationVariables = {
  input: FlightInput,
  rev?: number | null,
};

export type PatchFlightMutation = {
  patchFlight?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchContinentMutationVariables = {
  input: ContinentInput,
  rev?: number | null,
};

export type PatchContinentMutation = {
  patchContinent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchTouristSeasonMutationVariables = {
  input: TouristSeasonInput,
  rev?: number | null,
};

export type PatchTouristSeasonMutation = {
  patchTouristSeason?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchLocationMutationVariables = {
  input: LocationInput,
  rev?: number | null,
};

export type PatchLocationMutation = {
  patchLocation?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchqueryBeMutationVariables = {
  input: queryBeInput,
  rev?: number | null,
};

export type PatchqueryBeMutation = {
  patchqueryBe?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchGetGraphqlSchemaMutationVariables = {
  input: GetGraphqlSchemaInput,
  rev?: number | null,
};

export type PatchGetGraphqlSchemaMutation = {
  patchGetGraphqlSchema?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchGenerateAirtoursTestDataMutationVariables = {
  input: GenerateAirtoursTestDataInput,
  rev?: number | null,
};

export type PatchGenerateAirtoursTestDataMutation = {
  patchGenerateAirtoursTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchGenerateAirtoursPublicTestDataMutationVariables = {
  input: GenerateAirtoursPublicTestDataInput,
  rev?: number | null,
};

export type PatchGenerateAirtoursPublicTestDataMutation = {
  patchGenerateAirtoursPublicTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchChangeActiveAgentMutationVariables = {
  input: ChangeActiveAgentInput,
  rev?: number | null,
};

export type PatchChangeActiveAgentMutation = {
  patchChangeActiveAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type PatchSetUserAgentsMutationVariables = {
  input: SetUserAgentsInput,
  rev?: number | null,
};

export type PatchSetUserAgentsMutation = {
  patchSetUserAgents?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeletePersonMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeletePersonMutation = {
  deletePerson?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteCompanyMutation = {
  deleteCompany?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteAirportMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteAirportMutation = {
  deleteAirport?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteInvoiceMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteInvoiceMutation = {
  deleteInvoice?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteAirtoursTicketPriceConfigMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteAirtoursTicketPriceConfigMutation = {
  deleteAirtoursTicketPriceConfig?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteCityMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteCityMutation = {
  deleteCity?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteCountryMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteCountryMutation = {
  deleteCountry?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteAirplaneManifacturerMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteAirplaneManifacturerMutation = {
  deleteAirplaneManifacturer?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteAirplaneModelMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteAirplaneModelMutation = {
  deleteAirplaneModel?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteRegionMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteRegionMutation = {
  deleteRegion?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteAgentMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteAgentMutation = {
  deleteAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteTouristMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteTouristMutation = {
  deleteTourist?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteAirplaneMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteAirplaneMutation = {
  deleteAirplane?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeletePaymentMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteFlightMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteFlightMutation = {
  deleteFlight?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteContinentMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteContinentMutation = {
  deleteContinent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteTouristSeasonMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteTouristSeasonMutation = {
  deleteTouristSeason?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteLocationMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeletequeryBeMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeletequeryBeMutation = {
  deletequeryBe?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteGetGraphqlSchemaMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteGetGraphqlSchemaMutation = {
  deleteGetGraphqlSchema?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteGenerateAirtoursTestDataMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteGenerateAirtoursTestDataMutation = {
  deleteGenerateAirtoursTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteGenerateAirtoursPublicTestDataMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteGenerateAirtoursPublicTestDataMutation = {
  deleteGenerateAirtoursPublicTestData?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteChangeActiveAgentMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteChangeActiveAgentMutation = {
  deleteChangeActiveAgent?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type DeleteSetUserAgentsMutationVariables = {
  id: string,
  rev?: number | null,
};

export type DeleteSetUserAgentsMutation = {
  deleteSetUserAgents?:  {
    __typename: "CommandResult",
    status?: number | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
  } | null,
};

export type GetQueryVariables = {
  id: Array< string >,
};

export type GetQuery = {
  get?:  {
    __typename: "AllItemsUnionResultConnection",
    items:  Array<( {
        __typename: "ItemIdentifier",
        HASH?: string | null,
        RANGE?: string | null,
      } | {
        __typename: "User",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        Active_agent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        agents?: Array< string | null > | null,
        Agents?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airport",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Invoice",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        Orders?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          person?: string | null,
          Person?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          status?: string | null,
          items?:  Array< {
            __typename: string,
            description?: string | null,
            type?: string | null,
            quantity?: number | null,
            price_no_vat?: number | null,
          } | null > | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfig",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Order",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Region",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        Airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          city?: string | null,
          City?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            cityDetails?:  {
              __typename: string,
              isNearSea?: boolean | null,
              hasAirport?: boolean | null,
              hasAirtoursOffice?: boolean | null,
              isCapital?: boolean | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airpotDetails?:  {
            __typename: string,
            size_square_km?: number | null,
            nr_of_tracks?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Tourist",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        Tourist_season?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        ticket_type?: string | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        flight?: string | null,
        Flight?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          from_airport?: string | null,
          From_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          to_airport?: string | null,
          To_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          start_date?: string | null,
          end_date?: string | null,
          duration_hours?: number | null,
          tickets_price?:  {
            __typename: string,
            class_vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          touristSeason?: string | null,
          TouristSeason?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            price_flight_per_hour?: number | null,
            start_date?: string | null,
            end_date?: string | null,
            code?: string | null,
            discounts?:  {
              __typename: string,
              vip?: number | null,
              class_1?: number | null,
              class_2?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airplane?: string | null,
          Airplane?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            nr_seats_class_vip?: number | null,
            nr_seats_class1?: number | null,
            nr_seats_class2?: number | null,
            model?: string | null,
            Model?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            manifacturer?: string | null,
            Manifacturer?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_country?: string | null,
        From_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_country?: string | null,
        To_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Payment",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        Invoice?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          invoice_due_date?: string | null,
          invoice_issued_date?: string | null,
          invoice_number?: string | null,
          orders?: Array< string | null > | null,
          Orders?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            public_data_ref?: string | null,
            Public_data_ref?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            person?: string | null,
            Person?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            status?: string | null,
            items?:  Array< {
              __typename: string,
              description?: string | null,
              type?: string | null,
              quantity?: number | null,
              price_no_vat?: number | null,
            } | null > | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          total_net?: number | null,
          total_gross?: number | null,
          total_vat?: number | null,
          vat_percent?: number | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_company?: string | null,
        Sender_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_person?: string | null,
        Sender_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_person?: string | null,
        Recipient_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_company?: string | null,
        Recipient_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Flight",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        TouristSeason?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBe",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchema",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgents",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "UserHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PersonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CompanyHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirportHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "InvoiceHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfigHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CityHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        continent?: string | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "OrderHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CountryHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturerHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModelHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        baseAirplaneModel?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "RegionHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        ticket_type?: string | null,
        airplane?: string | null,
        flight?: string | null,
        from_airport?: string | null,
        to_airport?: string | null,
        from_country?: string | null,
        to_country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        manifacturer?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PaymentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        sender_company?: string | null,
        sender_person?: string | null,
        recipient_person?: string | null,
        recipient_company?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "FlightHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        to_airport?: string | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        airplane?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ContinentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeasonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "LocationHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBeHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchemaHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgentsHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      }
    ) >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryQueryVariables = {
  input: QueryInputAllItemsFields,
};

export type QueryQuery = {
  query?:  {
    __typename: "AllItemsUnionResultConnection",
    items:  Array<( {
        __typename: "ItemIdentifier",
        HASH?: string | null,
        RANGE?: string | null,
      } | {
        __typename: "User",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        Active_agent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        agents?: Array< string | null > | null,
        Agents?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airport",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Invoice",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        Orders?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          person?: string | null,
          Person?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          status?: string | null,
          items?:  Array< {
            __typename: string,
            description?: string | null,
            type?: string | null,
            quantity?: number | null,
            price_no_vat?: number | null,
          } | null > | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfig",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Order",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Region",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        Airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          city?: string | null,
          City?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            cityDetails?:  {
              __typename: string,
              isNearSea?: boolean | null,
              hasAirport?: boolean | null,
              hasAirtoursOffice?: boolean | null,
              isCapital?: boolean | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airpotDetails?:  {
            __typename: string,
            size_square_km?: number | null,
            nr_of_tracks?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Tourist",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        Tourist_season?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        ticket_type?: string | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        flight?: string | null,
        Flight?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          from_airport?: string | null,
          From_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          to_airport?: string | null,
          To_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          start_date?: string | null,
          end_date?: string | null,
          duration_hours?: number | null,
          tickets_price?:  {
            __typename: string,
            class_vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          touristSeason?: string | null,
          TouristSeason?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            price_flight_per_hour?: number | null,
            start_date?: string | null,
            end_date?: string | null,
            code?: string | null,
            discounts?:  {
              __typename: string,
              vip?: number | null,
              class_1?: number | null,
              class_2?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airplane?: string | null,
          Airplane?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            nr_seats_class_vip?: number | null,
            nr_seats_class1?: number | null,
            nr_seats_class2?: number | null,
            model?: string | null,
            Model?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            manifacturer?: string | null,
            Manifacturer?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_country?: string | null,
        From_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_country?: string | null,
        To_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Payment",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        Invoice?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          invoice_due_date?: string | null,
          invoice_issued_date?: string | null,
          invoice_number?: string | null,
          orders?: Array< string | null > | null,
          Orders?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            public_data_ref?: string | null,
            Public_data_ref?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            person?: string | null,
            Person?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            status?: string | null,
            items?:  Array< {
              __typename: string,
              description?: string | null,
              type?: string | null,
              quantity?: number | null,
              price_no_vat?: number | null,
            } | null > | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          total_net?: number | null,
          total_gross?: number | null,
          total_vat?: number | null,
          vat_percent?: number | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_company?: string | null,
        Sender_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_person?: string | null,
        Sender_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_person?: string | null,
        Recipient_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_company?: string | null,
        Recipient_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Flight",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        TouristSeason?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBe",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchema",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgents",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "UserHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PersonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CompanyHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirportHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "InvoiceHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfigHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CityHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        continent?: string | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "OrderHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CountryHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturerHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModelHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        baseAirplaneModel?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "RegionHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        ticket_type?: string | null,
        airplane?: string | null,
        flight?: string | null,
        from_airport?: string | null,
        to_airport?: string | null,
        from_country?: string | null,
        to_country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        manifacturer?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PaymentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        sender_company?: string | null,
        sender_person?: string | null,
        recipient_person?: string | null,
        recipient_company?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "FlightHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        to_airport?: string | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        airplane?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ContinentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeasonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "LocationHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBeHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchemaHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgentsHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      }
    ) >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchUsersQueryVariables = {
  input: SearchUsersInput,
};

export type SearchUsersQuery = {
  searchUsers?:  {
    __typename: "UsersResultConnection",
    items:  Array< {
      __typename: "User",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      email?: string | null,
      sub?: string | null,
      preferredIamRole?: string | null,
      iamRoles?: Array< string | null > | null,
      cognitoGroups?: Array< string | null > | null,
      userPoolId?: string | null,
      active_agent?: string | null,
      Active_agent?:  {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Company",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      agents?: Array< string | null > | null,
      Agents?:  Array< {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Company",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryUsersQueryVariables = {
  input: QueryUsersInput,
};

export type QueryUsersQuery = {
  queryUsers?:  {
    __typename: "UsersResultConnection",
    items:  Array< {
      __typename: "User",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      email?: string | null,
      sub?: string | null,
      preferredIamRole?: string | null,
      iamRoles?: Array< string | null > | null,
      cognitoGroups?: Array< string | null > | null,
      userPoolId?: string | null,
      active_agent?: string | null,
      Active_agent?:  {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Company",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      agents?: Array< string | null > | null,
      Agents?:  Array< {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Company",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: Array< string >,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "UsersResultConnection",
    items:  Array< {
      __typename: "User",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      email?: string | null,
      sub?: string | null,
      preferredIamRole?: string | null,
      iamRoles?: Array< string | null > | null,
      cognitoGroups?: Array< string | null > | null,
      userPoolId?: string | null,
      active_agent?: string | null,
      Active_agent?:  {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Company",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      agents?: Array< string | null > | null,
      Agents?:  Array< {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Company",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchPeopleQueryVariables = {
  input: SearchPeopleInput,
};

export type SearchPeopleQuery = {
  searchPeople?:  {
    __typename: "PeopleResultConnection",
    items:  Array< {
      __typename: "Person",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      fname?: string | null,
      lname?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryPeopleQueryVariables = {
  input: QueryPeopleInput,
};

export type QueryPeopleQuery = {
  queryPeople?:  {
    __typename: "PeopleResultConnection",
    items:  Array< {
      __typename: "Person",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      fname?: string | null,
      lname?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetPeopleQueryVariables = {
  id: Array< string >,
};

export type GetPeopleQuery = {
  getPeople?:  {
    __typename: "PeopleResultConnection",
    items:  Array< {
      __typename: "Person",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      fname?: string | null,
      lname?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchCompaniesQueryVariables = {
  input: SearchCompaniesInput,
};

export type SearchCompaniesQuery = {
  searchCompanies?:  {
    __typename: "CompaniesResultConnection",
    items:  Array< {
      __typename: "Company",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryCompaniesQueryVariables = {
  input: QueryCompaniesInput,
};

export type QueryCompaniesQuery = {
  queryCompanies?:  {
    __typename: "CompaniesResultConnection",
    items:  Array< {
      __typename: "Company",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetCompaniesQueryVariables = {
  id: Array< string >,
};

export type GetCompaniesQuery = {
  getCompanies?:  {
    __typename: "CompaniesResultConnection",
    items:  Array< {
      __typename: "Company",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchAirportsQueryVariables = {
  input: SearchAirportsInput,
};

export type SearchAirportsQuery = {
  searchAirports?:  {
    __typename: "AirportsResultConnection",
    items:  Array< {
      __typename: "Airport",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      city?: string | null,
      City?:  {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: "CityCityDetailDto",
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      airpotDetails?:  {
        __typename: "AirportAirpotDetailDto",
        size_square_km?: number | null,
        nr_of_tracks?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryAirportsQueryVariables = {
  input: QueryAirportsInput,
};

export type QueryAirportsQuery = {
  queryAirports?:  {
    __typename: "AirportsResultConnection",
    items:  Array< {
      __typename: "Airport",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      city?: string | null,
      City?:  {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: "CityCityDetailDto",
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      airpotDetails?:  {
        __typename: "AirportAirpotDetailDto",
        size_square_km?: number | null,
        nr_of_tracks?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetAirportsQueryVariables = {
  id: Array< string >,
};

export type GetAirportsQuery = {
  getAirports?:  {
    __typename: "AirportsResultConnection",
    items:  Array< {
      __typename: "Airport",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      city?: string | null,
      City?:  {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: "CityCityDetailDto",
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      airpotDetails?:  {
        __typename: "AirportAirpotDetailDto",
        size_square_km?: number | null,
        nr_of_tracks?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchInvoicesQueryVariables = {
  input: SearchInvoicesInput,
};

export type SearchInvoicesQuery = {
  searchInvoices?:  {
    __typename: "InvoicesResultConnection",
    items:  Array< {
      __typename: "Invoice",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      invoice_due_date?: string | null,
      invoice_issued_date?: string | null,
      invoice_number?: string | null,
      orders?: Array< string | null > | null,
      Orders?:  Array< {
        __typename: "Order",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Person",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: "Person",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        status?: string | null,
        items?:  Array< {
          __typename: "OrderItemDto",
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      total_net?: number | null,
      total_gross?: number | null,
      total_vat?: number | null,
      vat_percent?: number | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryInvoicesQueryVariables = {
  input: QueryInvoicesInput,
};

export type QueryInvoicesQuery = {
  queryInvoices?:  {
    __typename: "InvoicesResultConnection",
    items:  Array< {
      __typename: "Invoice",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      invoice_due_date?: string | null,
      invoice_issued_date?: string | null,
      invoice_number?: string | null,
      orders?: Array< string | null > | null,
      Orders?:  Array< {
        __typename: "Order",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Person",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: "Person",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        status?: string | null,
        items?:  Array< {
          __typename: "OrderItemDto",
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      total_net?: number | null,
      total_gross?: number | null,
      total_vat?: number | null,
      vat_percent?: number | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetInvoicesQueryVariables = {
  id: Array< string >,
};

export type GetInvoicesQuery = {
  getInvoices?:  {
    __typename: "InvoicesResultConnection",
    items:  Array< {
      __typename: "Invoice",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      invoice_due_date?: string | null,
      invoice_issued_date?: string | null,
      invoice_number?: string | null,
      orders?: Array< string | null > | null,
      Orders?:  Array< {
        __typename: "Order",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: "Person",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: "Person",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        status?: string | null,
        items?:  Array< {
          __typename: "OrderItemDto",
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      total_net?: number | null,
      total_gross?: number | null,
      total_vat?: number | null,
      vat_percent?: number | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchAirtoursTicketPriceConfigsQueryVariables = {
  input: SearchAirtoursTicketPriceConfigsInput,
};

export type SearchAirtoursTicketPriceConfigsQuery = {
  searchAirtoursTicketPriceConfigs?:  {
    __typename: "AirtoursTicketPriceConfigsResultConnection",
    items:  Array< {
      __typename: "AirtoursTicketPriceConfig",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      class_vip?: number | null,
      class_1?: number | null,
      class_2?: number | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryAirtoursTicketPriceConfigsQueryVariables = {
  input: QueryAirtoursTicketPriceConfigsInput,
};

export type QueryAirtoursTicketPriceConfigsQuery = {
  queryAirtoursTicketPriceConfigs?:  {
    __typename: "AirtoursTicketPriceConfigsResultConnection",
    items:  Array< {
      __typename: "AirtoursTicketPriceConfig",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      class_vip?: number | null,
      class_1?: number | null,
      class_2?: number | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetAirtoursTicketPriceConfigsQueryVariables = {
  id: Array< string >,
};

export type GetAirtoursTicketPriceConfigsQuery = {
  getAirtoursTicketPriceConfigs?:  {
    __typename: "AirtoursTicketPriceConfigsResultConnection",
    items:  Array< {
      __typename: "AirtoursTicketPriceConfig",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      class_vip?: number | null,
      class_1?: number | null,
      class_2?: number | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchCitiesQueryVariables = {
  input: SearchCitiesInput,
};

export type SearchCitiesQuery = {
  searchCities?:  {
    __typename: "CitiesResultConnection",
    items:  Array< {
      __typename: "City",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      cityDetails?:  {
        __typename: "CityCityDetailDto",
        isNearSea?: boolean | null,
        hasAirport?: boolean | null,
        hasAirtoursOffice?: boolean | null,
        isCapital?: boolean | null,
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryCitiesQueryVariables = {
  input: QueryCitiesInput,
};

export type QueryCitiesQuery = {
  queryCities?:  {
    __typename: "CitiesResultConnection",
    items:  Array< {
      __typename: "City",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      cityDetails?:  {
        __typename: "CityCityDetailDto",
        isNearSea?: boolean | null,
        hasAirport?: boolean | null,
        hasAirtoursOffice?: boolean | null,
        isCapital?: boolean | null,
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetCitiesQueryVariables = {
  id: Array< string >,
};

export type GetCitiesQuery = {
  getCities?:  {
    __typename: "CitiesResultConnection",
    items:  Array< {
      __typename: "City",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      cityDetails?:  {
        __typename: "CityCityDetailDto",
        isNearSea?: boolean | null,
        hasAirport?: boolean | null,
        hasAirtoursOffice?: boolean | null,
        isCapital?: boolean | null,
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchOrdersQueryVariables = {
  input: SearchOrdersInput,
};

export type SearchOrdersQuery = {
  searchOrders?:  {
    __typename: "OrdersResultConnection",
    items:  Array< {
      __typename: "Order",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      person?: string | null,
      Person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      status?: string | null,
      items?:  Array< {
        __typename: "OrderItemDto",
        description?: string | null,
        type?: string | null,
        quantity?: number | null,
        price_no_vat?: number | null,
      } | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryOrdersQueryVariables = {
  input: QueryOrdersInput,
};

export type QueryOrdersQuery = {
  queryOrders?:  {
    __typename: "OrdersResultConnection",
    items:  Array< {
      __typename: "Order",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      person?: string | null,
      Person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      status?: string | null,
      items?:  Array< {
        __typename: "OrderItemDto",
        description?: string | null,
        type?: string | null,
        quantity?: number | null,
        price_no_vat?: number | null,
      } | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetOrdersQueryVariables = {
  id: Array< string >,
};

export type GetOrdersQuery = {
  getOrders?:  {
    __typename: "OrdersResultConnection",
    items:  Array< {
      __typename: "Order",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      person?: string | null,
      Person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      status?: string | null,
      items?:  Array< {
        __typename: "OrderItemDto",
        description?: string | null,
        type?: string | null,
        quantity?: number | null,
        price_no_vat?: number | null,
      } | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchCountriesQueryVariables = {
  input: SearchCountriesInput,
};

export type SearchCountriesQuery = {
  searchCountries?:  {
    __typename: "CountriesResultConnection",
    items:  Array< {
      __typename: "Country",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      countryDetails?:  {
        __typename: "CountryCountryDetailDto",
        hasSeaBorder?: boolean | null,
        currency?: string | null,
        code?: string | null,
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryCountriesQueryVariables = {
  input: QueryCountriesInput,
};

export type QueryCountriesQuery = {
  queryCountries?:  {
    __typename: "CountriesResultConnection",
    items:  Array< {
      __typename: "Country",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      countryDetails?:  {
        __typename: "CountryCountryDetailDto",
        hasSeaBorder?: boolean | null,
        currency?: string | null,
        code?: string | null,
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetCountriesQueryVariables = {
  id: Array< string >,
};

export type GetCountriesQuery = {
  getCountries?:  {
    __typename: "CountriesResultConnection",
    items:  Array< {
      __typename: "Country",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      countryDetails?:  {
        __typename: "CountryCountryDetailDto",
        hasSeaBorder?: boolean | null,
        currency?: string | null,
        code?: string | null,
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchAirplaneManifacturersQueryVariables = {
  input: SearchAirplaneManifacturersInput,
};

export type SearchAirplaneManifacturersQuery = {
  searchAirplaneManifacturers?:  {
    __typename: "AirplaneManifacturersResultConnection",
    items:  Array< {
      __typename: "AirplaneManifacturer",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      name?: string | null,
      country?: string | null,
      Country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryAirplaneManifacturersQueryVariables = {
  input: QueryAirplaneManifacturersInput,
};

export type QueryAirplaneManifacturersQuery = {
  queryAirplaneManifacturers?:  {
    __typename: "AirplaneManifacturersResultConnection",
    items:  Array< {
      __typename: "AirplaneManifacturer",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      name?: string | null,
      country?: string | null,
      Country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetAirplaneManifacturersQueryVariables = {
  id: Array< string >,
};

export type GetAirplaneManifacturersQuery = {
  getAirplaneManifacturers?:  {
    __typename: "AirplaneManifacturersResultConnection",
    items:  Array< {
      __typename: "AirplaneManifacturer",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      name?: string | null,
      country?: string | null,
      Country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchAirplaneModelsQueryVariables = {
  input: SearchAirplaneModelsInput,
};

export type SearchAirplaneModelsQuery = {
  searchAirplaneModels?:  {
    __typename: "AirplaneModelsResultConnection",
    items:  Array< {
      __typename: "AirplaneModel",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      capacity?: number | null,
      country?: string | null,
      Country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      name?: string | null,
      code?: string | null,
      manifacturers?: Array< string | null > | null,
      Manifacturers?:  Array< {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      baseAirplaneModel?: string | null,
      BaseAirplaneModel?:  {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryAirplaneModelsQueryVariables = {
  input: QueryAirplaneModelsInput,
};

export type QueryAirplaneModelsQuery = {
  queryAirplaneModels?:  {
    __typename: "AirplaneModelsResultConnection",
    items:  Array< {
      __typename: "AirplaneModel",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      capacity?: number | null,
      country?: string | null,
      Country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      name?: string | null,
      code?: string | null,
      manifacturers?: Array< string | null > | null,
      Manifacturers?:  Array< {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      baseAirplaneModel?: string | null,
      BaseAirplaneModel?:  {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetAirplaneModelsQueryVariables = {
  id: Array< string >,
};

export type GetAirplaneModelsQuery = {
  getAirplaneModels?:  {
    __typename: "AirplaneModelsResultConnection",
    items:  Array< {
      __typename: "AirplaneModel",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      capacity?: number | null,
      country?: string | null,
      Country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      name?: string | null,
      code?: string | null,
      manifacturers?: Array< string | null > | null,
      Manifacturers?:  Array< {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null > | null,
      baseAirplaneModel?: string | null,
      BaseAirplaneModel?:  {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchRegionsQueryVariables = {
  input: SearchRegionsInput,
};

export type SearchRegionsQuery = {
  searchRegions?:  {
    __typename: "RegionsResultConnection",
    items:  Array< {
      __typename: "Region",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      airport?: string | null,
      Airport?:  {
        __typename: "Airport",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        City?:  {
          __typename: "City",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Country",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: "CityCityDetailDto",
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airpotDetails?:  {
          __typename: "AirportAirpotDetailDto",
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      city?: string | null,
      City?:  {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: "CityCityDetailDto",
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      regionDetails?:  {
        __typename: "RegionRegionDetailDto",
        size_square_km?: number | null,
        nr_of_countries?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryRegionsQueryVariables = {
  input: QueryRegionsInput,
};

export type QueryRegionsQuery = {
  queryRegions?:  {
    __typename: "RegionsResultConnection",
    items:  Array< {
      __typename: "Region",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      airport?: string | null,
      Airport?:  {
        __typename: "Airport",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        City?:  {
          __typename: "City",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Country",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: "CityCityDetailDto",
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airpotDetails?:  {
          __typename: "AirportAirpotDetailDto",
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      city?: string | null,
      City?:  {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: "CityCityDetailDto",
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      regionDetails?:  {
        __typename: "RegionRegionDetailDto",
        size_square_km?: number | null,
        nr_of_countries?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetRegionsQueryVariables = {
  id: Array< string >,
};

export type GetRegionsQuery = {
  getRegions?:  {
    __typename: "RegionsResultConnection",
    items:  Array< {
      __typename: "Region",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      airport?: string | null,
      Airport?:  {
        __typename: "Airport",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        City?:  {
          __typename: "City",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Country",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: "CityCityDetailDto",
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airpotDetails?:  {
          __typename: "AirportAirpotDetailDto",
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      city?: string | null,
      City?:  {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: "CityCityDetailDto",
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      continent?: string | null,
      Continent?:  {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: "ContinentContinentDetailDto",
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      regionDetails?:  {
        __typename: "RegionRegionDetailDto",
        size_square_km?: number | null,
        nr_of_countries?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchAgentsQueryVariables = {
  input: SearchAgentsInput,
};

export type SearchAgentsQuery = {
  searchAgents?:  {
    __typename: "AgentsResultConnection",
    items:  Array< {
      __typename: "Agent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      location1?: string | null,
      location2?: string | null,
      location3?: string | null,
      location4?: string | null,
      location5?: string | null,
      code?: string | null,
      name?: string | null,
      child_agents?: Array< string | null > | null,
      parent_agents?: Array< string | null > | null,
      agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryAgentsQueryVariables = {
  input: QueryAgentsInput,
};

export type QueryAgentsQuery = {
  queryAgents?:  {
    __typename: "AgentsResultConnection",
    items:  Array< {
      __typename: "Agent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      location1?: string | null,
      location2?: string | null,
      location3?: string | null,
      location4?: string | null,
      location5?: string | null,
      code?: string | null,
      name?: string | null,
      child_agents?: Array< string | null > | null,
      parent_agents?: Array< string | null > | null,
      agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetAgentsQueryVariables = {
  id: Array< string >,
};

export type GetAgentsQuery = {
  getAgents?:  {
    __typename: "AgentsResultConnection",
    items:  Array< {
      __typename: "Agent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      location1?: string | null,
      location2?: string | null,
      location3?: string | null,
      location4?: string | null,
      location5?: string | null,
      code?: string | null,
      name?: string | null,
      child_agents?: Array< string | null > | null,
      parent_agents?: Array< string | null > | null,
      agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchTouristsQueryVariables = {
  input: SearchTouristsInput,
};

export type SearchTouristsQuery = {
  searchTourists?:  {
    __typename: "TouristsResultConnection",
    items:  Array< {
      __typename: "Tourist",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      person?: string | null,
      Person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      fname?: string | null,
      lname?: string | null,
      id_card?: string | null,
      iban?: string | null,
      tourist_season?: string | null,
      Tourist_season?:  {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: "TouristSeasonDiscountDto",
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      ticket_type?: string | null,
      airplane?: string | null,
      Airplane?:  {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      flight?: string | null,
      Flight?:  {
        __typename: "Flight",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        From_airport?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: "FlightTickets_priceDto",
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        TouristSeason?:  {
          __typename: "TouristSeason",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: "TouristSeasonDiscountDto",
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: "Airplane",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: "Country",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      from_airport?: string | null,
      From_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_airport?: string | null,
      To_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      from_country?: string | null,
      From_country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_country?: string | null,
      To_country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryTouristsQueryVariables = {
  input: QueryTouristsInput,
};

export type QueryTouristsQuery = {
  queryTourists?:  {
    __typename: "TouristsResultConnection",
    items:  Array< {
      __typename: "Tourist",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      person?: string | null,
      Person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      fname?: string | null,
      lname?: string | null,
      id_card?: string | null,
      iban?: string | null,
      tourist_season?: string | null,
      Tourist_season?:  {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: "TouristSeasonDiscountDto",
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      ticket_type?: string | null,
      airplane?: string | null,
      Airplane?:  {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      flight?: string | null,
      Flight?:  {
        __typename: "Flight",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        From_airport?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: "FlightTickets_priceDto",
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        TouristSeason?:  {
          __typename: "TouristSeason",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: "TouristSeasonDiscountDto",
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: "Airplane",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: "Country",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      from_airport?: string | null,
      From_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_airport?: string | null,
      To_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      from_country?: string | null,
      From_country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_country?: string | null,
      To_country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetTouristsQueryVariables = {
  id: Array< string >,
};

export type GetTouristsQuery = {
  getTourists?:  {
    __typename: "TouristsResultConnection",
    items:  Array< {
      __typename: "Tourist",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      public_data_ref?: string | null,
      Public_data_ref?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      person?: string | null,
      Person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      fname?: string | null,
      lname?: string | null,
      id_card?: string | null,
      iban?: string | null,
      tourist_season?: string | null,
      Tourist_season?:  {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: "TouristSeasonDiscountDto",
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      ticket_type?: string | null,
      airplane?: string | null,
      Airplane?:  {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      flight?: string | null,
      Flight?:  {
        __typename: "Flight",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        From_airport?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: "FlightTickets_priceDto",
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        TouristSeason?:  {
          __typename: "TouristSeason",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: "TouristSeasonDiscountDto",
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: "Airplane",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: "Country",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      from_airport?: string | null,
      From_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_airport?: string | null,
      To_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      from_country?: string | null,
      From_country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_country?: string | null,
      To_country?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchAirplanesQueryVariables = {
  input: SearchAirplanesInput,
};

export type SearchAirplanesQuery = {
  searchAirplanes?:  {
    __typename: "AirplanesResultConnection",
    items:  Array< {
      __typename: "Airplane",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      nr_seats_class_vip?: number | null,
      nr_seats_class1?: number | null,
      nr_seats_class2?: number | null,
      model?: string | null,
      Model?:  {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      manifacturer?: string | null,
      Manifacturer?:  {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryAirplanesQueryVariables = {
  input: QueryAirplanesInput,
};

export type QueryAirplanesQuery = {
  queryAirplanes?:  {
    __typename: "AirplanesResultConnection",
    items:  Array< {
      __typename: "Airplane",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      nr_seats_class_vip?: number | null,
      nr_seats_class1?: number | null,
      nr_seats_class2?: number | null,
      model?: string | null,
      Model?:  {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      manifacturer?: string | null,
      Manifacturer?:  {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetAirplanesQueryVariables = {
  id: Array< string >,
};

export type GetAirplanesQuery = {
  getAirplanes?:  {
    __typename: "AirplanesResultConnection",
    items:  Array< {
      __typename: "Airplane",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      nr_seats_class_vip?: number | null,
      nr_seats_class1?: number | null,
      nr_seats_class2?: number | null,
      model?: string | null,
      Model?:  {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      manifacturer?: string | null,
      Manifacturer?:  {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: "Location",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      country?: string | null,
      Country?:  {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: "Continent",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: "ContinentContinentDetailDto",
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: "CountryCountryDetailDto",
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchPaymentsQueryVariables = {
  input: SearchPaymentsInput,
};

export type SearchPaymentsQuery = {
  searchPayments?:  {
    __typename: "PaymentsResultConnection",
    items:  Array< {
      __typename: "Payment",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      invoice_number?: string | null,
      invoice?: string | null,
      Invoice?:  {
        __typename: "Invoice",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        Orders?:  Array< {
          __typename: "Order",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: "Person",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          person?: string | null,
          Person?:  {
            __typename: "Person",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          status?: string | null,
          items?:  Array< {
            __typename: "OrderItemDto",
            description?: string | null,
            type?: string | null,
            quantity?: number | null,
            price_no_vat?: number | null,
          } | null > | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      sender_company?: string | null,
      Sender_company?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      sender_person?: string | null,
      Sender_person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      recipient_person?: string | null,
      Recipient_person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      recipient_company?: string | null,
      Recipient_company?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryPaymentsQueryVariables = {
  input: QueryPaymentsInput,
};

export type QueryPaymentsQuery = {
  queryPayments?:  {
    __typename: "PaymentsResultConnection",
    items:  Array< {
      __typename: "Payment",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      invoice_number?: string | null,
      invoice?: string | null,
      Invoice?:  {
        __typename: "Invoice",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        Orders?:  Array< {
          __typename: "Order",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: "Person",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          person?: string | null,
          Person?:  {
            __typename: "Person",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          status?: string | null,
          items?:  Array< {
            __typename: "OrderItemDto",
            description?: string | null,
            type?: string | null,
            quantity?: number | null,
            price_no_vat?: number | null,
          } | null > | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      sender_company?: string | null,
      Sender_company?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      sender_person?: string | null,
      Sender_person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      recipient_person?: string | null,
      Recipient_person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      recipient_company?: string | null,
      Recipient_company?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetPaymentsQueryVariables = {
  id: Array< string >,
};

export type GetPaymentsQuery = {
  getPayments?:  {
    __typename: "PaymentsResultConnection",
    items:  Array< {
      __typename: "Payment",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      invoice_number?: string | null,
      invoice?: string | null,
      Invoice?:  {
        __typename: "Invoice",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        Orders?:  Array< {
          __typename: "Order",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: "Person",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          person?: string | null,
          Person?:  {
            __typename: "Person",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          status?: string | null,
          items?:  Array< {
            __typename: "OrderItemDto",
            description?: string | null,
            type?: string | null,
            quantity?: number | null,
            price_no_vat?: number | null,
          } | null > | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      sender_company?: string | null,
      Sender_company?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      sender_person?: string | null,
      Sender_person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      recipient_person?: string | null,
      Recipient_person?:  {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      recipient_company?: string | null,
      Recipient_company?:  {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchFlightsQueryVariables = {
  input: SearchFlightsInput,
};

export type SearchFlightsQuery = {
  searchFlights?:  {
    __typename: "FlightsResultConnection",
    items:  Array< {
      __typename: "Flight",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      from_airport?: string | null,
      From_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_airport?: string | null,
      To_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      start_date?: string | null,
      end_date?: string | null,
      duration_hours?: number | null,
      tickets_price?:  {
        __typename: "FlightTickets_priceDto",
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
      } | null,
      touristSeason?: string | null,
      TouristSeason?:  {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: "TouristSeasonDiscountDto",
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      airplane?: string | null,
      Airplane?:  {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryFlightsQueryVariables = {
  input: QueryFlightsInput,
};

export type QueryFlightsQuery = {
  queryFlights?:  {
    __typename: "FlightsResultConnection",
    items:  Array< {
      __typename: "Flight",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      from_airport?: string | null,
      From_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_airport?: string | null,
      To_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      start_date?: string | null,
      end_date?: string | null,
      duration_hours?: number | null,
      tickets_price?:  {
        __typename: "FlightTickets_priceDto",
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
      } | null,
      touristSeason?: string | null,
      TouristSeason?:  {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: "TouristSeasonDiscountDto",
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      airplane?: string | null,
      Airplane?:  {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetFlightsQueryVariables = {
  id: Array< string >,
};

export type GetFlightsQuery = {
  getFlights?:  {
    __typename: "FlightsResultConnection",
    items:  Array< {
      __typename: "Flight",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      from_airport?: string | null,
      From_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      to_airport?: string | null,
      To_airport?:  {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      start_date?: string | null,
      end_date?: string | null,
      duration_hours?: number | null,
      tickets_price?:  {
        __typename: "FlightTickets_priceDto",
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
      } | null,
      touristSeason?: string | null,
      TouristSeason?:  {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: "TouristSeasonDiscountDto",
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      airplane?: string | null,
      Airplane?:  {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: "AirplaneModel",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: "AirplaneManifacturer",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: "AirplaneModel",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            baseAirplaneModel?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: "AirplaneManifacturer",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: "Location",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: "Country",
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: "Continent",
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: "CountryCountryDetailDto",
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchContinentsQueryVariables = {
  input: SearchContinentsInput,
};

export type SearchContinentsQuery = {
  searchContinents?:  {
    __typename: "ContinentsResultConnection",
    items:  Array< {
      __typename: "Continent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      continentDetails?:  {
        __typename: "ContinentContinentDetailDto",
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryContinentsQueryVariables = {
  input: QueryContinentsInput,
};

export type QueryContinentsQuery = {
  queryContinents?:  {
    __typename: "ContinentsResultConnection",
    items:  Array< {
      __typename: "Continent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      continentDetails?:  {
        __typename: "ContinentContinentDetailDto",
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetContinentsQueryVariables = {
  id: Array< string >,
};

export type GetContinentsQuery = {
  getContinents?:  {
    __typename: "ContinentsResultConnection",
    items:  Array< {
      __typename: "Continent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      name?: string | null,
      continentDetails?:  {
        __typename: "ContinentContinentDetailDto",
        population?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchTouristSeasonsQueryVariables = {
  input: SearchTouristSeasonsInput,
};

export type SearchTouristSeasonsQuery = {
  searchTouristSeasons?:  {
    __typename: "TouristSeasonsResultConnection",
    items:  Array< {
      __typename: "TouristSeason",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      price_flight_per_hour?: number | null,
      start_date?: string | null,
      end_date?: string | null,
      code?: string | null,
      discounts?:  {
        __typename: "TouristSeasonDiscountDto",
        vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryTouristSeasonsQueryVariables = {
  input: QueryTouristSeasonsInput,
};

export type QueryTouristSeasonsQuery = {
  queryTouristSeasons?:  {
    __typename: "TouristSeasonsResultConnection",
    items:  Array< {
      __typename: "TouristSeason",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      price_flight_per_hour?: number | null,
      start_date?: string | null,
      end_date?: string | null,
      code?: string | null,
      discounts?:  {
        __typename: "TouristSeasonDiscountDto",
        vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetTouristSeasonsQueryVariables = {
  id: Array< string >,
};

export type GetTouristSeasonsQuery = {
  getTouristSeasons?:  {
    __typename: "TouristSeasonsResultConnection",
    items:  Array< {
      __typename: "TouristSeason",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      price_flight_per_hour?: number | null,
      start_date?: string | null,
      end_date?: string | null,
      code?: string | null,
      discounts?:  {
        __typename: "TouristSeasonDiscountDto",
        vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
      } | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchLocationsQueryVariables = {
  input: SearchLocationsInput,
};

export type SearchLocationsQuery = {
  searchLocations?:  {
    __typename: "LocationsResultConnection",
    items:  Array< {
      __typename: "Location",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      phone1?: string | null,
      phone2?: string | null,
      address1?: string | null,
      address2?: string | null,
      name?: string | null,
      type?: LocationTypeEnum | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryLocationsQueryVariables = {
  input: QueryLocationsInput,
};

export type QueryLocationsQuery = {
  queryLocations?:  {
    __typename: "LocationsResultConnection",
    items:  Array< {
      __typename: "Location",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      phone1?: string | null,
      phone2?: string | null,
      address1?: string | null,
      address2?: string | null,
      name?: string | null,
      type?: LocationTypeEnum | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetLocationsQueryVariables = {
  id: Array< string >,
};

export type GetLocationsQuery = {
  getLocations?:  {
    __typename: "LocationsResultConnection",
    items:  Array< {
      __typename: "Location",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      phone1?: string | null,
      phone2?: string | null,
      address1?: string | null,
      address2?: string | null,
      name?: string | null,
      type?: LocationTypeEnum | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchqueryBesQueryVariables = {
  input: SearchqueryBesInput,
};

export type SearchqueryBesQuery = {
  searchqueryBes?:  {
    __typename: "queryBesResultConnection",
    items:  Array< {
      __typename: "queryBe",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      name?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryqueryBesQueryVariables = {
  input: QueryqueryBesInput,
};

export type QueryqueryBesQuery = {
  queryqueryBes?:  {
    __typename: "queryBesResultConnection",
    items:  Array< {
      __typename: "queryBe",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      name?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetqueryBesQueryVariables = {
  id: Array< string >,
};

export type GetqueryBesQuery = {
  getqueryBes?:  {
    __typename: "queryBesResultConnection",
    items:  Array< {
      __typename: "queryBe",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      code?: string | null,
      name?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchGetGraphqlSchemasQueryVariables = {
  input: SearchGetGraphqlSchemasInput,
};

export type SearchGetGraphqlSchemasQuery = {
  searchGetGraphqlSchemas?:  {
    __typename: "GetGraphqlSchemasResultConnection",
    items:  Array< {
      __typename: "GetGraphqlSchema",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      definition?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryGetGraphqlSchemasQueryVariables = {
  input: QueryGetGraphqlSchemasInput,
};

export type QueryGetGraphqlSchemasQuery = {
  queryGetGraphqlSchemas?:  {
    __typename: "GetGraphqlSchemasResultConnection",
    items:  Array< {
      __typename: "GetGraphqlSchema",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      definition?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetGetGraphqlSchemasQueryVariables = {
  id: Array< string >,
};

export type GetGetGraphqlSchemasQuery = {
  getGetGraphqlSchemas?:  {
    __typename: "GetGraphqlSchemasResultConnection",
    items:  Array< {
      __typename: "GetGraphqlSchema",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      definition?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchGenerateAirtoursTestDataQueryVariables = {
  input: SearchGenerateAirtoursTestDataInput,
};

export type SearchGenerateAirtoursTestDataQuery = {
  searchGenerateAirtoursTestData?:  {
    __typename: "GenerateAirtoursTestDataResultConnection",
    items:  Array< {
      __typename: "GenerateAirtoursTestData",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      forUser?: string | null,
      forAgent?: string | null,
      test_data_date?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryGenerateAirtoursTestDataQueryVariables = {
  input: QueryGenerateAirtoursTestDataInput,
};

export type QueryGenerateAirtoursTestDataQuery = {
  queryGenerateAirtoursTestData?:  {
    __typename: "GenerateAirtoursTestDataResultConnection",
    items:  Array< {
      __typename: "GenerateAirtoursTestData",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      forUser?: string | null,
      forAgent?: string | null,
      test_data_date?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetGenerateAirtoursTestDataQueryVariables = {
  id: Array< string >,
};

export type GetGenerateAirtoursTestDataQuery = {
  getGenerateAirtoursTestData?:  {
    __typename: "GenerateAirtoursTestDataResultConnection",
    items:  Array< {
      __typename: "GenerateAirtoursTestData",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      forUser?: string | null,
      forAgent?: string | null,
      test_data_date?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchGenerateAirtoursPublicTestDataQueryVariables = {
  input: SearchGenerateAirtoursPublicTestDataInput,
};

export type SearchGenerateAirtoursPublicTestDataQuery = {
  searchGenerateAirtoursPublicTestData?:  {
    __typename: "GenerateAirtoursPublicTestDataResultConnection",
    items:  Array< {
      __typename: "GenerateAirtoursPublicTestData",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      prop1?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryGenerateAirtoursPublicTestDataQueryVariables = {
  input: QueryGenerateAirtoursPublicTestDataInput,
};

export type QueryGenerateAirtoursPublicTestDataQuery = {
  queryGenerateAirtoursPublicTestData?:  {
    __typename: "GenerateAirtoursPublicTestDataResultConnection",
    items:  Array< {
      __typename: "GenerateAirtoursPublicTestData",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      prop1?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetGenerateAirtoursPublicTestDataQueryVariables = {
  id: Array< string >,
};

export type GetGenerateAirtoursPublicTestDataQuery = {
  getGenerateAirtoursPublicTestData?:  {
    __typename: "GenerateAirtoursPublicTestDataResultConnection",
    items:  Array< {
      __typename: "GenerateAirtoursPublicTestData",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      prop1?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchChangeActiveAgentsQueryVariables = {
  input: SearchChangeActiveAgentsInput,
};

export type SearchChangeActiveAgentsQuery = {
  searchChangeActiveAgents?:  {
    __typename: "ChangeActiveAgentsResultConnection",
    items:  Array< {
      __typename: "ChangeActiveAgent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      new_active_agent?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryChangeActiveAgentsQueryVariables = {
  input: QueryChangeActiveAgentsInput,
};

export type QueryChangeActiveAgentsQuery = {
  queryChangeActiveAgents?:  {
    __typename: "ChangeActiveAgentsResultConnection",
    items:  Array< {
      __typename: "ChangeActiveAgent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      new_active_agent?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetChangeActiveAgentsQueryVariables = {
  id: Array< string >,
};

export type GetChangeActiveAgentsQuery = {
  getChangeActiveAgents?:  {
    __typename: "ChangeActiveAgentsResultConnection",
    items:  Array< {
      __typename: "ChangeActiveAgent",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      new_active_agent?: string | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type SearchSetUserAgentsQueryVariables = {
  input: SearchSetUserAgentsInput,
};

export type SearchSetUserAgentsQuery = {
  searchSetUserAgents?:  {
    __typename: "SetUserAgentsResultConnection",
    items:  Array< {
      __typename: "SetUserAgents",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      user?: string | null,
      agents?: Array< string | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QuerySetUserAgentsQueryVariables = {
  input: QuerySetUserAgentsInput,
};

export type QuerySetUserAgentsQuery = {
  querySetUserAgents?:  {
    __typename: "SetUserAgentsResultConnection",
    items:  Array< {
      __typename: "SetUserAgents",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      user?: string | null,
      agents?: Array< string | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetSetUserAgentsQueryVariables = {
  id: Array< string >,
};

export type GetSetUserAgentsQuery = {
  getSetUserAgents?:  {
    __typename: "SetUserAgentsResultConnection",
    items:  Array< {
      __typename: "SetUserAgents",
      // interface Item props
      rev?: number | null,
      TITEM?: string | null,
      checksum?: string | null,
      // specific props
      user?: string | null,
      agents?: Array< string | null > | null,
      date_created?: string | null,
      date_updated?: string | null,
      user_created?: string | null,
      user_updated?: string | null,
      id?: string | null,
    } >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type QueryBeQueryVariables = {
  input: QueryqueryBesInput,
};

export type QueryBeQuery = {
  queryBe?:  {
    __typename: "AllItemsUnionResultConnection",
    items:  Array<( {
        __typename: "ItemIdentifier",
        HASH?: string | null,
        RANGE?: string | null,
      } | {
        __typename: "User",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        Active_agent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        agents?: Array< string | null > | null,
        Agents?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airport",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Invoice",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        Orders?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          person?: string | null,
          Person?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          status?: string | null,
          items?:  Array< {
            __typename: string,
            description?: string | null,
            type?: string | null,
            quantity?: number | null,
            price_no_vat?: number | null,
          } | null > | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfig",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Order",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Region",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        Airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          city?: string | null,
          City?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            cityDetails?:  {
              __typename: string,
              isNearSea?: boolean | null,
              hasAirport?: boolean | null,
              hasAirtoursOffice?: boolean | null,
              isCapital?: boolean | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airpotDetails?:  {
            __typename: string,
            size_square_km?: number | null,
            nr_of_tracks?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Tourist",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        Tourist_season?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        ticket_type?: string | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        flight?: string | null,
        Flight?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          from_airport?: string | null,
          From_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          to_airport?: string | null,
          To_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          start_date?: string | null,
          end_date?: string | null,
          duration_hours?: number | null,
          tickets_price?:  {
            __typename: string,
            class_vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          touristSeason?: string | null,
          TouristSeason?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            price_flight_per_hour?: number | null,
            start_date?: string | null,
            end_date?: string | null,
            code?: string | null,
            discounts?:  {
              __typename: string,
              vip?: number | null,
              class_1?: number | null,
              class_2?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airplane?: string | null,
          Airplane?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            nr_seats_class_vip?: number | null,
            nr_seats_class1?: number | null,
            nr_seats_class2?: number | null,
            model?: string | null,
            Model?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            manifacturer?: string | null,
            Manifacturer?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_country?: string | null,
        From_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_country?: string | null,
        To_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Payment",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        Invoice?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          invoice_due_date?: string | null,
          invoice_issued_date?: string | null,
          invoice_number?: string | null,
          orders?: Array< string | null > | null,
          Orders?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            public_data_ref?: string | null,
            Public_data_ref?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            person?: string | null,
            Person?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            status?: string | null,
            items?:  Array< {
              __typename: string,
              description?: string | null,
              type?: string | null,
              quantity?: number | null,
              price_no_vat?: number | null,
            } | null > | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          total_net?: number | null,
          total_gross?: number | null,
          total_vat?: number | null,
          vat_percent?: number | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_company?: string | null,
        Sender_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_person?: string | null,
        Sender_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_person?: string | null,
        Recipient_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_company?: string | null,
        Recipient_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Flight",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        TouristSeason?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBe",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchema",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgents",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "UserHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PersonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CompanyHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirportHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "InvoiceHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfigHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CityHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        continent?: string | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "OrderHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CountryHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturerHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModelHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        baseAirplaneModel?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "RegionHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        ticket_type?: string | null,
        airplane?: string | null,
        flight?: string | null,
        from_airport?: string | null,
        to_airport?: string | null,
        from_country?: string | null,
        to_country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        manifacturer?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PaymentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        sender_company?: string | null,
        sender_person?: string | null,
        recipient_person?: string | null,
        recipient_company?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "FlightHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        to_airport?: string | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        airplane?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ContinentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeasonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "LocationHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBeHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchemaHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgentsHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      }
    ) >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};

export type GetGraphqlSchemaQueryVariables = {
  input: QueryGetGraphqlSchemasInput,
};

export type GetGraphqlSchemaQuery = {
  GetGraphqlSchema?:  {
    __typename: "AllItemsUnionResultConnection",
    items:  Array<( {
        __typename: "ItemIdentifier",
        HASH?: string | null,
        RANGE?: string | null,
      } | {
        __typename: "User",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        Active_agent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        agents?: Array< string | null > | null,
        Agents?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          location1?: string | null,
          location2?: string | null,
          location3?: string | null,
          location4?: string | null,
          location5?: string | null,
          code?: string | null,
          name?: string | null,
          child_agents?: Array< string | null > | null,
          parent_agents?: Array< string | null > | null,
          agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Person",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Company",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airport",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Invoice",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        Orders?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          public_data_ref?: string | null,
          Public_data_ref?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          person?: string | null,
          Person?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            fname?: string | null,
            lname?: string | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          status?: string | null,
          items?:  Array< {
            __typename: string,
            description?: string | null,
            type?: string | null,
            quantity?: number | null,
            price_no_vat?: number | null,
          } | null > | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfig",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "City",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Order",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Country",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturer",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModel",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        Manifacturers?:  Array< {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null > | null,
        baseAirplaneModel?: string | null,
        BaseAirplaneModel?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Region",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        Airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          city?: string | null,
          City?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            cityDetails?:  {
              __typename: string,
              isNearSea?: boolean | null,
              hasAirport?: boolean | null,
              hasAirtoursOffice?: boolean | null,
              isCapital?: boolean | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airpotDetails?:  {
            __typename: string,
            size_square_km?: number | null,
            nr_of_tracks?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        city?: string | null,
        City?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          cityDetails?:  {
            __typename: string,
            isNearSea?: boolean | null,
            hasAirport?: boolean | null,
            hasAirtoursOffice?: boolean | null,
            isCapital?: boolean | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        continent?: string | null,
        Continent?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continentDetails?:  {
            __typename: string,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Agent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Tourist",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        Public_data_ref?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        person?: string | null,
        Person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        Tourist_season?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        ticket_type?: string | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        flight?: string | null,
        Flight?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          from_airport?: string | null,
          From_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          to_airport?: string | null,
          To_airport?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          start_date?: string | null,
          end_date?: string | null,
          duration_hours?: number | null,
          tickets_price?:  {
            __typename: string,
            class_vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          touristSeason?: string | null,
          TouristSeason?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            price_flight_per_hour?: number | null,
            start_date?: string | null,
            end_date?: string | null,
            code?: string | null,
            discounts?:  {
              __typename: string,
              vip?: number | null,
              class_1?: number | null,
              class_2?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          airplane?: string | null,
          Airplane?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            nr_seats_class_vip?: number | null,
            nr_seats_class1?: number | null,
            nr_seats_class2?: number | null,
            model?: string | null,
            Model?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            manifacturer?: string | null,
            Manifacturer?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              continent?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        from_country?: string | null,
        From_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_country?: string | null,
        To_country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Airplane",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        Model?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          capacity?: number | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          name?: string | null,
          code?: string | null,
          manifacturers?: Array< string | null > | null,
          Manifacturers?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          baseAirplaneModel?: string | null,
          BaseAirplaneModel?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        manifacturer?: string | null,
        Manifacturer?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          name?: string | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            phone1?: string | null,
            phone2?: string | null,
            address1?: string | null,
            address2?: string | null,
            name?: string | null,
            type?: LocationTypeEnum | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        country?: string | null,
        Country?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          continent?: string | null,
          Continent?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continentDetails?:  {
              __typename: string,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          countryDetails?:  {
            __typename: string,
            hasSeaBorder?: boolean | null,
            currency?: string | null,
            code?: string | null,
            population?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Payment",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        Invoice?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          invoice_due_date?: string | null,
          invoice_issued_date?: string | null,
          invoice_number?: string | null,
          orders?: Array< string | null > | null,
          Orders?:  Array< {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            public_data_ref?: string | null,
            Public_data_ref?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            person?: string | null,
            Person?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              fname?: string | null,
              lname?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            status?: string | null,
            items?:  Array< {
              __typename: string,
              description?: string | null,
              type?: string | null,
              quantity?: number | null,
              price_no_vat?: number | null,
            } | null > | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null > | null,
          total_net?: number | null,
          total_gross?: number | null,
          total_vat?: number | null,
          vat_percent?: number | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_company?: string | null,
        Sender_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        sender_person?: string | null,
        Sender_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_person?: string | null,
        Recipient_person?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          fname?: string | null,
          lname?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        recipient_company?: string | null,
        Recipient_company?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          name?: string | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Flight",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        From_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        to_airport?: string | null,
        To_airport?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          phone1?: string | null,
          phone2?: string | null,
          address1?: string | null,
          address2?: string | null,
          name?: string | null,
          type?: LocationTypeEnum | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        TouristSeason?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          price_flight_per_hour?: number | null,
          start_date?: string | null,
          end_date?: string | null,
          code?: string | null,
          discounts?:  {
            __typename: string,
            vip?: number | null,
            class_1?: number | null,
            class_2?: number | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        airplane?: string | null,
        Airplane?:  {
          __typename: string,
          // interface Item props
          rev?: number | null,
          TITEM?: string | null,
          checksum?: string | null,
          // specific props
          code?: string | null,
          nr_seats_class_vip?: number | null,
          nr_seats_class1?: number | null,
          nr_seats_class2?: number | null,
          model?: string | null,
          Model?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            capacity?: number | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            name?: string | null,
            code?: string | null,
            manifacturers?: Array< string | null > | null,
            Manifacturers?:  Array< {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              code?: string | null,
              name?: string | null,
              country?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null > | null,
            baseAirplaneModel?: string | null,
            BaseAirplaneModel?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              capacity?: number | null,
              country?: string | null,
              name?: string | null,
              code?: string | null,
              manifacturers?: Array< string | null > | null,
              baseAirplaneModel?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          manifacturer?: string | null,
          Manifacturer?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            code?: string | null,
            name?: string | null,
            country?: string | null,
            Country?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              phone1?: string | null,
              phone2?: string | null,
              address1?: string | null,
              address2?: string | null,
              name?: string | null,
              type?: LocationTypeEnum | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          country?: string | null,
          Country?:  {
            __typename: string,
            // interface Item props
            rev?: number | null,
            TITEM?: string | null,
            checksum?: string | null,
            // specific props
            name?: string | null,
            continent?: string | null,
            Continent?:  {
              __typename: string,
              // interface Item props
              rev?: number | null,
              TITEM?: string | null,
              checksum?: string | null,
              // specific props
              name?: string | null,
              date_created?: string | null,
              date_updated?: string | null,
              user_created?: string | null,
              user_updated?: string | null,
              id?: string | null,
            } | null,
            countryDetails?:  {
              __typename: string,
              hasSeaBorder?: boolean | null,
              currency?: string | null,
              code?: string | null,
              population?: number | null,
            } | null,
            date_created?: string | null,
            date_updated?: string | null,
            user_created?: string | null,
            user_updated?: string | null,
            id?: string | null,
          } | null,
          date_created?: string | null,
          date_updated?: string | null,
          user_created?: string | null,
          user_updated?: string | null,
          id?: string | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Continent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeason",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "Location",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBe",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchema",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestData",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgent",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgents",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "UserHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        email?: string | null,
        sub?: string | null,
        preferredIamRole?: string | null,
        iamRoles?: Array< string | null > | null,
        cognitoGroups?: Array< string | null > | null,
        userPoolId?: string | null,
        active_agent?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PersonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        fname?: string | null,
        lname?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CompanyHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirportHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        airpotDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_tracks?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "InvoiceHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_due_date?: string | null,
        invoice_issued_date?: string | null,
        invoice_number?: string | null,
        orders?: Array< string | null > | null,
        total_net?: number | null,
        total_gross?: number | null,
        total_vat?: number | null,
        vat_percent?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirtoursTicketPriceConfigHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        class_vip?: number | null,
        class_1?: number | null,
        class_2?: number | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CityHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        country?: string | null,
        continent?: string | null,
        cityDetails?:  {
          __typename: string,
          isNearSea?: boolean | null,
          hasAirport?: boolean | null,
          hasAirtoursOffice?: boolean | null,
          isCapital?: boolean | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "OrderHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        status?: string | null,
        items?:  Array< {
          __typename: string,
          description?: string | null,
          type?: string | null,
          quantity?: number | null,
          price_no_vat?: number | null,
        } | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "CountryHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continent?: string | null,
        countryDetails?:  {
          __typename: string,
          hasSeaBorder?: boolean | null,
          currency?: string | null,
          code?: string | null,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneManifacturerHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneModelHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        capacity?: number | null,
        country?: string | null,
        name?: string | null,
        code?: string | null,
        manifacturers?: Array< string | null > | null,
        baseAirplaneModel?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "RegionHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        airport?: string | null,
        city?: string | null,
        country?: string | null,
        continent?: string | null,
        regionDetails?:  {
          __typename: string,
          size_square_km?: number | null,
          nr_of_countries?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        location1?: string | null,
        location2?: string | null,
        location3?: string | null,
        location4?: string | null,
        location5?: string | null,
        code?: string | null,
        name?: string | null,
        child_agents?: Array< string | null > | null,
        parent_agents?: Array< string | null > | null,
        agt_data_visibility_conf?: AgentAgt_data_visibility_confEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        public_data_ref?: string | null,
        person?: string | null,
        fname?: string | null,
        lname?: string | null,
        id_card?: string | null,
        iban?: string | null,
        tourist_season?: string | null,
        ticket_type?: string | null,
        airplane?: string | null,
        flight?: string | null,
        from_airport?: string | null,
        to_airport?: string | null,
        from_country?: string | null,
        to_country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "AirplaneHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        nr_seats_class_vip?: number | null,
        nr_seats_class1?: number | null,
        nr_seats_class2?: number | null,
        model?: string | null,
        manifacturer?: string | null,
        country?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "PaymentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        invoice_number?: string | null,
        invoice?: string | null,
        sender_company?: string | null,
        sender_person?: string | null,
        recipient_person?: string | null,
        recipient_company?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "FlightHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        from_airport?: string | null,
        to_airport?: string | null,
        start_date?: string | null,
        end_date?: string | null,
        duration_hours?: number | null,
        tickets_price?:  {
          __typename: string,
          class_vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        touristSeason?: string | null,
        airplane?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ContinentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        name?: string | null,
        continentDetails?:  {
          __typename: string,
          population?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "TouristSeasonHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        price_flight_per_hour?: number | null,
        start_date?: string | null,
        end_date?: string | null,
        code?: string | null,
        discounts?:  {
          __typename: string,
          vip?: number | null,
          class_1?: number | null,
          class_2?: number | null,
        } | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "LocationHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        phone1?: string | null,
        phone2?: string | null,
        address1?: string | null,
        address2?: string | null,
        name?: string | null,
        type?: LocationTypeEnum | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "queryBeHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        code?: string | null,
        name?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GetGraphqlSchemaHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        definition?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        forUser?: string | null,
        forAgent?: string | null,
        test_data_date?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "GenerateAirtoursPublicTestDataHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        prop1?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "ChangeActiveAgentHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        new_active_agent?: string | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      } | {
        __typename: "SetUserAgentsHistory",
        // interface Item props
        rev?: number | null,
        TITEM?: string | null,
        checksum?: string | null,
        // specific props
        user?: string | null,
        agents?: Array< string | null > | null,
        date_created?: string | null,
        date_updated?: string | null,
        user_created?: string | null,
        user_updated?: string | null,
        id?: string | null,
      }
    ) >,
    pageToken?: string | null,
    count?: number | null,
    selectionSetList?: Array< string | null > | null,
    errors?:  Array< {
      __typename: "ServerError",
      errorType?: string | null,
      message?: string | null,
      errorStack?: string | null,
    } | null > | null,
    excludedFromFilter?: Array< string | null > | null,
    correlation_id?: string | null,
  } | null,
};
