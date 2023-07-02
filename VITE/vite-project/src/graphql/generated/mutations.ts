/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const start = /* GraphQL */ `
  mutation Start($input: AllItemsKeysInput!) {
    start(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const create = /* GraphQL */ `
  mutation Create($input: AllItemsKeysInput!) {
    create(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const update = /* GraphQL */ `
  mutation Update($input: AllItemsKeysInput!, $rev: Int) {
    update(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patch = /* GraphQL */ `
  mutation Patch($input: AllItemsKeysInput!, $rev: Int) {
    patch(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const del = /* GraphQL */ `
  mutation Del($id: ID!, $rev: Int) {
    del(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const GenerateAirtoursTestData = /* GraphQL */ `
  mutation GenerateAirtoursTestData($input: GenerateAirtoursTestDataInput!) {
    GenerateAirtoursTestData(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const GenerateAirtoursPublicTestData = /* GraphQL */ `
  mutation GenerateAirtoursPublicTestData(
    $input: GenerateAirtoursPublicTestDataInput!
  ) {
    GenerateAirtoursPublicTestData(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const ChangeActiveAgent = /* GraphQL */ `
  mutation ChangeActiveAgent($input: ChangeActiveAgentInput!) {
    ChangeActiveAgent(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const SetUserAgents = /* GraphQL */ `
  mutation SetUserAgents($input: SetUserAgentsInput!) {
    SetUserAgents(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson($input: PersonInput!) {
    createPerson(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createCompany = /* GraphQL */ `
  mutation CreateCompany($input: CompanyInput!) {
    createCompany(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createAirport = /* GraphQL */ `
  mutation CreateAirport($input: AirportInput!) {
    createAirport(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice($input: InvoiceInput!) {
    createInvoice(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createAirtoursTicketPriceConfig = /* GraphQL */ `
  mutation CreateAirtoursTicketPriceConfig(
    $input: AirtoursTicketPriceConfigInput!
  ) {
    createAirtoursTicketPriceConfig(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createCity = /* GraphQL */ `
  mutation CreateCity($input: CityInput!) {
    createCity(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder($input: OrderInput!) {
    createOrder(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createCountry = /* GraphQL */ `
  mutation CreateCountry($input: CountryInput!) {
    createCountry(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createAirplaneManifacturer = /* GraphQL */ `
  mutation CreateAirplaneManifacturer($input: AirplaneManifacturerInput!) {
    createAirplaneManifacturer(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createAirplaneModel = /* GraphQL */ `
  mutation CreateAirplaneModel($input: AirplaneModelInput!) {
    createAirplaneModel(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createRegion = /* GraphQL */ `
  mutation CreateRegion($input: RegionInput!) {
    createRegion(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createAgent = /* GraphQL */ `
  mutation CreateAgent($input: AgentInput!) {
    createAgent(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createTourist = /* GraphQL */ `
  mutation CreateTourist($input: TouristInput!) {
    createTourist(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createAirplane = /* GraphQL */ `
  mutation CreateAirplane($input: AirplaneInput!) {
    createAirplane(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createPayment = /* GraphQL */ `
  mutation CreatePayment($input: PaymentInput!) {
    createPayment(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createFlight = /* GraphQL */ `
  mutation CreateFlight($input: FlightInput!) {
    createFlight(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createContinent = /* GraphQL */ `
  mutation CreateContinent($input: ContinentInput!) {
    createContinent(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createTouristSeason = /* GraphQL */ `
  mutation CreateTouristSeason($input: TouristSeasonInput!) {
    createTouristSeason(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation($input: LocationInput!) {
    createLocation(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createqueryBe = /* GraphQL */ `
  mutation CreatequeryBe($input: queryBeInput!) {
    createqueryBe(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createGetGraphqlSchema = /* GraphQL */ `
  mutation CreateGetGraphqlSchema($input: GetGraphqlSchemaInput!) {
    createGetGraphqlSchema(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createGenerateAirtoursTestData = /* GraphQL */ `
  mutation CreateGenerateAirtoursTestData(
    $input: GenerateAirtoursTestDataInput!
  ) {
    createGenerateAirtoursTestData(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createGenerateAirtoursPublicTestData = /* GraphQL */ `
  mutation CreateGenerateAirtoursPublicTestData(
    $input: GenerateAirtoursPublicTestDataInput!
  ) {
    createGenerateAirtoursPublicTestData(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createChangeActiveAgent = /* GraphQL */ `
  mutation CreateChangeActiveAgent($input: ChangeActiveAgentInput!) {
    createChangeActiveAgent(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const createSetUserAgents = /* GraphQL */ `
  mutation CreateSetUserAgents($input: SetUserAgentsInput!) {
    createSetUserAgents(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UserInput!, $rev: Int) {
    updateUser(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson($input: PersonInput!, $rev: Int) {
    updatePerson(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany($input: CompanyInput!, $rev: Int) {
    updateCompany(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateAirport = /* GraphQL */ `
  mutation UpdateAirport($input: AirportInput!, $rev: Int) {
    updateAirport(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice($input: InvoiceInput!, $rev: Int) {
    updateInvoice(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateAirtoursTicketPriceConfig = /* GraphQL */ `
  mutation UpdateAirtoursTicketPriceConfig(
    $input: AirtoursTicketPriceConfigInput!
    $rev: Int
  ) {
    updateAirtoursTicketPriceConfig(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateCity = /* GraphQL */ `
  mutation UpdateCity($input: CityInput!, $rev: Int) {
    updateCity(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder($input: OrderInput!, $rev: Int) {
    updateOrder(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateCountry = /* GraphQL */ `
  mutation UpdateCountry($input: CountryInput!, $rev: Int) {
    updateCountry(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateAirplaneManifacturer = /* GraphQL */ `
  mutation UpdateAirplaneManifacturer(
    $input: AirplaneManifacturerInput!
    $rev: Int
  ) {
    updateAirplaneManifacturer(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateAirplaneModel = /* GraphQL */ `
  mutation UpdateAirplaneModel($input: AirplaneModelInput!, $rev: Int) {
    updateAirplaneModel(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateRegion = /* GraphQL */ `
  mutation UpdateRegion($input: RegionInput!, $rev: Int) {
    updateRegion(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent($input: AgentInput!, $rev: Int) {
    updateAgent(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateTourist = /* GraphQL */ `
  mutation UpdateTourist($input: TouristInput!, $rev: Int) {
    updateTourist(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateAirplane = /* GraphQL */ `
  mutation UpdateAirplane($input: AirplaneInput!, $rev: Int) {
    updateAirplane(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updatePayment = /* GraphQL */ `
  mutation UpdatePayment($input: PaymentInput!, $rev: Int) {
    updatePayment(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateFlight = /* GraphQL */ `
  mutation UpdateFlight($input: FlightInput!, $rev: Int) {
    updateFlight(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateContinent = /* GraphQL */ `
  mutation UpdateContinent($input: ContinentInput!, $rev: Int) {
    updateContinent(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateTouristSeason = /* GraphQL */ `
  mutation UpdateTouristSeason($input: TouristSeasonInput!, $rev: Int) {
    updateTouristSeason(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation($input: LocationInput!, $rev: Int) {
    updateLocation(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updatequeryBe = /* GraphQL */ `
  mutation UpdatequeryBe($input: queryBeInput!, $rev: Int) {
    updatequeryBe(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateGetGraphqlSchema = /* GraphQL */ `
  mutation UpdateGetGraphqlSchema($input: GetGraphqlSchemaInput!, $rev: Int) {
    updateGetGraphqlSchema(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateGenerateAirtoursTestData = /* GraphQL */ `
  mutation UpdateGenerateAirtoursTestData(
    $input: GenerateAirtoursTestDataInput!
    $rev: Int
  ) {
    updateGenerateAirtoursTestData(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateGenerateAirtoursPublicTestData = /* GraphQL */ `
  mutation UpdateGenerateAirtoursPublicTestData(
    $input: GenerateAirtoursPublicTestDataInput!
    $rev: Int
  ) {
    updateGenerateAirtoursPublicTestData(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateChangeActiveAgent = /* GraphQL */ `
  mutation UpdateChangeActiveAgent($input: ChangeActiveAgentInput!, $rev: Int) {
    updateChangeActiveAgent(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const updateSetUserAgents = /* GraphQL */ `
  mutation UpdateSetUserAgents($input: SetUserAgentsInput!, $rev: Int) {
    updateSetUserAgents(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchUser = /* GraphQL */ `
  mutation PatchUser($input: UserInput!, $rev: Int) {
    patchUser(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchPerson = /* GraphQL */ `
  mutation PatchPerson($input: PersonInput!, $rev: Int) {
    patchPerson(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchCompany = /* GraphQL */ `
  mutation PatchCompany($input: CompanyInput!, $rev: Int) {
    patchCompany(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchAirport = /* GraphQL */ `
  mutation PatchAirport($input: AirportInput!, $rev: Int) {
    patchAirport(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchInvoice = /* GraphQL */ `
  mutation PatchInvoice($input: InvoiceInput!, $rev: Int) {
    patchInvoice(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchAirtoursTicketPriceConfig = /* GraphQL */ `
  mutation PatchAirtoursTicketPriceConfig(
    $input: AirtoursTicketPriceConfigInput!
    $rev: Int
  ) {
    patchAirtoursTicketPriceConfig(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchCity = /* GraphQL */ `
  mutation PatchCity($input: CityInput!, $rev: Int) {
    patchCity(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchOrder = /* GraphQL */ `
  mutation PatchOrder($input: OrderInput!, $rev: Int) {
    patchOrder(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchCountry = /* GraphQL */ `
  mutation PatchCountry($input: CountryInput!, $rev: Int) {
    patchCountry(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchAirplaneManifacturer = /* GraphQL */ `
  mutation PatchAirplaneManifacturer(
    $input: AirplaneManifacturerInput!
    $rev: Int
  ) {
    patchAirplaneManifacturer(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchAirplaneModel = /* GraphQL */ `
  mutation PatchAirplaneModel($input: AirplaneModelInput!, $rev: Int) {
    patchAirplaneModel(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchRegion = /* GraphQL */ `
  mutation PatchRegion($input: RegionInput!, $rev: Int) {
    patchRegion(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchAgent = /* GraphQL */ `
  mutation PatchAgent($input: AgentInput!, $rev: Int) {
    patchAgent(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchTourist = /* GraphQL */ `
  mutation PatchTourist($input: TouristInput!, $rev: Int) {
    patchTourist(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchAirplane = /* GraphQL */ `
  mutation PatchAirplane($input: AirplaneInput!, $rev: Int) {
    patchAirplane(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchPayment = /* GraphQL */ `
  mutation PatchPayment($input: PaymentInput!, $rev: Int) {
    patchPayment(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchFlight = /* GraphQL */ `
  mutation PatchFlight($input: FlightInput!, $rev: Int) {
    patchFlight(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchContinent = /* GraphQL */ `
  mutation PatchContinent($input: ContinentInput!, $rev: Int) {
    patchContinent(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchTouristSeason = /* GraphQL */ `
  mutation PatchTouristSeason($input: TouristSeasonInput!, $rev: Int) {
    patchTouristSeason(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchLocation = /* GraphQL */ `
  mutation PatchLocation($input: LocationInput!, $rev: Int) {
    patchLocation(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchqueryBe = /* GraphQL */ `
  mutation PatchqueryBe($input: queryBeInput!, $rev: Int) {
    patchqueryBe(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchGetGraphqlSchema = /* GraphQL */ `
  mutation PatchGetGraphqlSchema($input: GetGraphqlSchemaInput!, $rev: Int) {
    patchGetGraphqlSchema(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchGenerateAirtoursTestData = /* GraphQL */ `
  mutation PatchGenerateAirtoursTestData(
    $input: GenerateAirtoursTestDataInput!
    $rev: Int
  ) {
    patchGenerateAirtoursTestData(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchGenerateAirtoursPublicTestData = /* GraphQL */ `
  mutation PatchGenerateAirtoursPublicTestData(
    $input: GenerateAirtoursPublicTestDataInput!
    $rev: Int
  ) {
    patchGenerateAirtoursPublicTestData(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchChangeActiveAgent = /* GraphQL */ `
  mutation PatchChangeActiveAgent($input: ChangeActiveAgentInput!, $rev: Int) {
    patchChangeActiveAgent(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const patchSetUserAgents = /* GraphQL */ `
  mutation PatchSetUserAgents($input: SetUserAgentsInput!, $rev: Int) {
    patchSetUserAgents(input: $input, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($id: ID!, $rev: Int) {
    deleteUser(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson($id: ID!, $rev: Int) {
    deletePerson(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany($id: ID!, $rev: Int) {
    deleteCompany(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteAirport = /* GraphQL */ `
  mutation DeleteAirport($id: ID!, $rev: Int) {
    deleteAirport(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice($id: ID!, $rev: Int) {
    deleteInvoice(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteAirtoursTicketPriceConfig = /* GraphQL */ `
  mutation DeleteAirtoursTicketPriceConfig($id: ID!, $rev: Int) {
    deleteAirtoursTicketPriceConfig(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity($id: ID!, $rev: Int) {
    deleteCity(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder($id: ID!, $rev: Int) {
    deleteOrder(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteCountry = /* GraphQL */ `
  mutation DeleteCountry($id: ID!, $rev: Int) {
    deleteCountry(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteAirplaneManifacturer = /* GraphQL */ `
  mutation DeleteAirplaneManifacturer($id: ID!, $rev: Int) {
    deleteAirplaneManifacturer(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteAirplaneModel = /* GraphQL */ `
  mutation DeleteAirplaneModel($id: ID!, $rev: Int) {
    deleteAirplaneModel(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteRegion = /* GraphQL */ `
  mutation DeleteRegion($id: ID!, $rev: Int) {
    deleteRegion(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent($id: ID!, $rev: Int) {
    deleteAgent(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteTourist = /* GraphQL */ `
  mutation DeleteTourist($id: ID!, $rev: Int) {
    deleteTourist(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteAirplane = /* GraphQL */ `
  mutation DeleteAirplane($id: ID!, $rev: Int) {
    deleteAirplane(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deletePayment = /* GraphQL */ `
  mutation DeletePayment($id: ID!, $rev: Int) {
    deletePayment(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteFlight = /* GraphQL */ `
  mutation DeleteFlight($id: ID!, $rev: Int) {
    deleteFlight(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteContinent = /* GraphQL */ `
  mutation DeleteContinent($id: ID!, $rev: Int) {
    deleteContinent(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteTouristSeason = /* GraphQL */ `
  mutation DeleteTouristSeason($id: ID!, $rev: Int) {
    deleteTouristSeason(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation($id: ID!, $rev: Int) {
    deleteLocation(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deletequeryBe = /* GraphQL */ `
  mutation DeletequeryBe($id: ID!, $rev: Int) {
    deletequeryBe(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteGetGraphqlSchema = /* GraphQL */ `
  mutation DeleteGetGraphqlSchema($id: ID!, $rev: Int) {
    deleteGetGraphqlSchema(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteGenerateAirtoursTestData = /* GraphQL */ `
  mutation DeleteGenerateAirtoursTestData($id: ID!, $rev: Int) {
    deleteGenerateAirtoursTestData(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteGenerateAirtoursPublicTestData = /* GraphQL */ `
  mutation DeleteGenerateAirtoursPublicTestData($id: ID!, $rev: Int) {
    deleteGenerateAirtoursPublicTestData(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteChangeActiveAgent = /* GraphQL */ `
  mutation DeleteChangeActiveAgent($id: ID!, $rev: Int) {
    deleteChangeActiveAgent(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
export const deleteSetUserAgents = /* GraphQL */ `
  mutation DeleteSetUserAgents($id: ID!, $rev: Int) {
    deleteSetUserAgents(id: $id, rev: $rev) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;
