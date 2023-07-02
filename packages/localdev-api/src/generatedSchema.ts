export const generatedSchema = `schema {
    query: Query
    mutation: Mutation
}


union AllItemsUnion = ItemIdentifier | User | Person | Company | Invoice | Order | AirplaneManifacturer | AirplaneModel | Agent | Tourist | Airplane | Payment | Flight | TouristSeason | Location | queryBe | GetGraphqlSchema | Kur | GenerateAirtoursTestData | ChangeActiveAgent | SetUserAgents | UserHistory | PersonHistory | CompanyHistory | InvoiceHistory | OrderHistory | AirplaneManifacturerHistory | AirplaneModelHistory | AgentHistory | TouristHistory | AirplaneHistory | PaymentHistory | FlightHistory | TouristSeasonHistory | LocationHistory | queryBeHistory | GetGraphqlSchemaHistory | KurHistory | GenerateAirtoursTestDataHistory | ChangeActiveAgentHistory | SetUserAgentsHistory


enum AllActionsEnum {
    start
    stop
    create
    update
    patch
    delete
    query
    get
}



enum AllItemTypesEnum {
User
Person
Company
Invoice
Order
AirplaneManifacturer
AirplaneModel
Agent
Tourist
Airplane
Payment
Flight
TouristSeason
Location
queryBe
GetGraphqlSchema
Kur
GenerateAirtoursTestData
ChangeActiveAgent
SetUserAgents

UserHistory
PersonHistory
CompanyHistory
InvoiceHistory
OrderHistory
AirplaneManifacturerHistory
AirplaneModelHistory
AgentHistory
TouristHistory
AirplaneHistory
PaymentHistory
FlightHistory
TouristSeasonHistory
LocationHistory
queryBeHistory
GetGraphqlSchemaHistory
KurHistory
GenerateAirtoursTestDataHistory
ChangeActiveAgentHistory
SetUserAgentsHistory

}



input BooleanQueryInput {
    ne: Boolean
    eq: Boolean
    attribute_exists: Boolean
    attribute_not_exists: Boolean
}
input FloatQueryInput {
    ne: Float
    eq: Float
    le: Float
    lt: Float
    ge: Float
    gt: Float
    between: [Float]
    attribute_exists: Boolean
    attribute_not_exists: Boolean
}
input StringQueryInput {
    ne: String
    eq: String
    le: String
    lt: String
    ge: String
    gt: String
    contains: String
    not_contains: String
    between: [String]
    begins_with: String
    attribute_exists: Boolean
    attribute_not_exists: Boolean
}



interface Item {
    HASH: String
    RANGE: String
    
    rev: Int
    date_created: String
    date_updated: String

    TITEM: String
    checksum: String

    user_created: String
    user_updated: String
    
    

    ringToken: String
    item_state: String

}
type ItemIdentifier  {
    HASH: String
    RANGE: String
}
input UserInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    email: String
    sub: String
    preferredIamRole: String
    iamRoles: [String]
    cognitoGroups: [String]
    userPoolId: String
    active_agent: String
    agents: [String]
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type User implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    
    Public_data_ref: Person
    
    email: String
    
    sub: String
    
    preferredIamRole: String
    
    iamRoles: [String]
    
    cognitoGroups: [String]
    
    userPoolId: String
    
    active_agent: String
    
    Active_agent: Agent
    
    agents: [String]
    
    Agents: Agent
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type UserHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    email: String
    sub: String
    preferredIamRole: String
    iamRoles: [String]
    cognitoGroups: [String]
    userPoolId: String
    active_agent: String
    agents: [String]
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input PersonInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    fname: String
    lname: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Person implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    fname: String
    
    lname: String
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type PersonHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    fname: String
    lname: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input CompanyInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    name: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Company implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    name: String
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type CompanyHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    name: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input InvoiceInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    invoice_due_date: String
    invoice_issued_date: String
    invoice_number: String
    orders: [String]
    total_net: Float
    total_gross: Float
    total_vat: Float
    vat_percent: Float
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Invoice implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    invoice_due_date: String
    
    invoice_issued_date: String
    
    invoice_number: String
    
    orders: [String]
    
    Orders: Order
    
    total_net: Float
    
    total_gross: Float
    
    total_vat: Float
    
    vat_percent: Float
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type InvoiceHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    invoice_due_date: String
    invoice_issued_date: String
    invoice_number: String
    orders: [String]
    total_net: Float
    total_gross: Float
    total_vat: Float
    vat_percent: Float
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input OrderInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    person: String
    status: String
    items: [OrderItemDtoInput]
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Order implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    
    Public_data_ref: Person
    
    person: String
    
    Person: Person
    
    status: String
    
    items: [OrderItemDto]
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type OrderHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    person: String
    status: String
    items: [OrderItemDto]
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type OrderItemDto {
    description: String
    type: String
    quantity: Float
    price_no_vat: Float
}
input OrderItemDtoInput {
        description: String
    
        type: String
    
        quantity: Float
    
        price_no_vat: Float
    
}
    
input AirplaneManifacturerInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    name: String
    country: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type AirplaneManifacturer implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    
    name: String
    
    country: String
    
    Country: Location
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type AirplaneManifacturerHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    name: String
    country: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input AirplaneModelInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    capacity: Float
    country: String
    code: String
    manifacturers: [String]
    baseAirplaneModel: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type AirplaneModel implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    capacity: Float
    
    country: String
    
    Country: Location
    
    code: String
    
    manifacturers: [String]
    
    Manifacturers: AirplaneManifacturer
    
    baseAirplaneModel: String
    
    BaseAirplaneModel: AirplaneModel
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type AirplaneModelHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    capacity: Float
    country: String
    code: String
    manifacturers: [String]
    baseAirplaneModel: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input AgentInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    location1: String
    location2: String
    location3: String
    location4: String
    location5: String
    code: String
    name: String
    child_agents: [String]
    parent_agents: [String]
    agt_data_visibility_conf: AgentAgt_data_visibility_confEnum
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Agent implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    
    Public_data_ref: Company
    
    location1: String
    
    location2: String
    
    location3: String
    
    location4: String
    
    location5: String
    
    code: String
    
    name: String
    
    child_agents: [String]
    
    parent_agents: [String]
    
    agt_data_visibility_conf: AgentAgt_data_visibility_confEnum
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type AgentHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    location1: String
    location2: String
    location3: String
    location4: String
    location5: String
    code: String
    name: String
    child_agents: [String]
    parent_agents: [String]
    agt_data_visibility_conf: AgentAgt_data_visibility_confEnum
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
enum AgentAgt_data_visibility_confEnum {
    ALL
    NONE
    ONLY_CHILDREN
    ONLY_PRENTS
    SELECT
} 
    
input TouristInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    person: String
    fname: String
    lname: String
    id_card: String
    iban: String
    tourist_season: String
    ticket_type: String
    airplane: String
    flight: String
    from_airport: String
    to_airport: String
    from_country: String
    to_country: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Tourist implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    
    Public_data_ref: Person
    
    person: String
    
    Person: Person
    
    fname: String
    
    lname: String
    
    id_card: String
    
    iban: String
    
    tourist_season: String
    
    Tourist_season: TouristSeason
    
    ticket_type: String
    
    airplane: String
    
    Airplane: Airplane
    
    flight: String
    
    Flight: Flight
    
    from_airport: String
    
    From_airport: Location
    
    to_airport: String
    
    To_airport: Location
    
    from_country: String
    
    From_country: Location
    
    to_country: String
    
    To_country: Location
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type TouristHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    public_data_ref: String
    person: String
    fname: String
    lname: String
    id_card: String
    iban: String
    tourist_season: String
    ticket_type: String
    airplane: String
    flight: String
    from_airport: String
    to_airport: String
    from_country: String
    to_country: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input AirplaneInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    nr_seats_class_vip: Float
    nr_seats_class1: Float
    nr_seats_class2: Float
    model: String
    manifacturer: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Airplane implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    
    nr_seats_class_vip: Float
    
    nr_seats_class1: Float
    
    nr_seats_class2: Float
    
    model: String
    
    Model: AirplaneModel
    
    manifacturer: String
    
    Manifacturer: AirplaneManifacturer
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type AirplaneHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    nr_seats_class_vip: Float
    nr_seats_class1: Float
    nr_seats_class2: Float
    model: String
    manifacturer: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input PaymentInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    invoice_number: String
    invoice: String
    sender_company: String
    sender_person: String
    recipient_person: String
    recipient_company: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Payment implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    invoice_number: String
    
    invoice: String
    
    Invoice: Invoice
    
    sender_company: String
    
    Sender_company: Company
    
    sender_person: String
    
    Sender_person: Person
    
    recipient_person: String
    
    Recipient_person: Person
    
    recipient_company: String
    
    Recipient_company: Company
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type PaymentHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    invoice_number: String
    invoice: String
    sender_company: String
    sender_person: String
    recipient_person: String
    recipient_company: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input FlightInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    from_airport: String
    to_airport: String
    start_date: String
    end_date: String
    duration_hours: Float
    tickets_price: FlightTickets_priceDtoInput
    airplane: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Flight implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    from_airport: String
    
    From_airport: Location
    
    to_airport: String
    
    To_airport: Location
    
    start_date: String
    
    end_date: String
    
    duration_hours: Float
    
    tickets_price: FlightTickets_priceDto
    
    airplane: String
    
    Airplane: Airplane
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type FlightHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    from_airport: String
    to_airport: String
    start_date: String
    end_date: String
    duration_hours: Float
    tickets_price: FlightTickets_priceDto
    airplane: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type FlightTickets_priceDto {
    class_vip: Float
    class_1: Float
    class_2: Float
}
input FlightTickets_priceDtoInput {
        class_vip: Float
    
        class_1: Float
    
        class_2: Float
    
}
    
input TouristSeasonInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    price_flight_per_hour: Float
    start_date: String
    end_date: String
    discounts: TouristSeasonDiscountDtoInput
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type TouristSeason implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    price_flight_per_hour: Float
    
    start_date: String
    
    end_date: String
    
    discounts: TouristSeasonDiscountDto
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type TouristSeasonHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    price_flight_per_hour: Float
    start_date: String
    end_date: String
    discounts: TouristSeasonDiscountDto
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type TouristSeasonDiscountDto {
    vip: Float
    class_1: Float
    class_2: Float
}
input TouristSeasonDiscountDtoInput {
        vip: Float
    
        class_1: Float
    
        class_2: Float
    
}
    
input LocationInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    phone1: String
    phone2: String
    address1: String
    address2: String
    name: String
    type: LocationTypeEnum
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Location implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    phone1: String
    
    phone2: String
    
    address1: String
    
    address2: String
    
    name: String
    
    type: LocationTypeEnum
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type LocationHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    phone1: String
    phone2: String
    address1: String
    address2: String
    name: String
    type: LocationTypeEnum
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
enum LocationTypeEnum {
    city
    country
    continent
    region
    airport
} 
    
input queryBeInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    name: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type queryBe implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    
    name: String
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type queryBeHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    name: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input GetGraphqlSchemaInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type GetGraphqlSchema implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type GetGraphqlSchemaHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input KurInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    nr_seats_class_vip: Float
    nr_seats_class1: Float
    nr_seats_class2: Float
    model: String
    manifacturer: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type Kur implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    
    nr_seats_class_vip: Float
    
    nr_seats_class1: Float
    
    nr_seats_class2: Float
    
    model: String
    
    Model: AirplaneModel
    
    manifacturer: String
    
    Manifacturer: AirplaneManifacturer
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type KurHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    code: String
    nr_seats_class_vip: Float
    nr_seats_class1: Float
    nr_seats_class2: Float
    model: String
    manifacturer: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input GenerateAirtoursTestDataInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    forUser: String
    forAgent: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type GenerateAirtoursTestData implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    forUser: String
    
    forAgent: String
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type GenerateAirtoursTestDataHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    forUser: String
    forAgent: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input ChangeActiveAgentInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    new_active_agent: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type ChangeActiveAgent implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    new_active_agent: String
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type ChangeActiveAgentHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    new_active_agent: String
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
input SetUserAgentsInput {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    user: String
    agents: [String]
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}
type SetUserAgents implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    user: String
    
    agents: [String]
    
    date_created: String
    
    date_updated: String
    
    user_created: String
    
    user_updated: String
    
}
type SetUserAgentsHistory implements Item {
    # interface Item props
    HASH: String
    RANGE: String
    
    rev: Int

    TITEM: String
    checksum: String

    
    
    

    ringToken: String
    item_state: String

    #specific props
    user: String
    agents: [String]
    date_created: String
    date_updated: String
    user_created: String
    user_updated: String
}


type Mutation {
    start(input: StartInput!): CommandResult 
    create(input: CreateInput!): CommandResult 
    update(input: UpdateInput!): CommandResult 
    patch(input: UpdateInput!): CommandResult 
    del(input: DeleteInput!): CommandResult 
    Kur(input: KurInput!): CommandResult 
    GenerateAirtoursTestData(input: GenerateAirtoursTestDataInput!): CommandResult 
    ChangeActiveAgent(input: ChangeActiveAgentInput!): CommandResult 
    SetUserAgents(input: SetUserAgentsInput!): CommandResult 
    createUser(input: UserInput!): CommandResult 
    createPerson(input: PersonInput!): CommandResult 
    createCompany(input: CompanyInput!): CommandResult 
    createInvoice(input: InvoiceInput!): CommandResult 
    createOrder(input: OrderInput!): CommandResult 
    createAirplaneManifacturer(input: AirplaneManifacturerInput!): CommandResult 
    createAirplaneModel(input: AirplaneModelInput!): CommandResult 
    createAgent(input: AgentInput!): CommandResult 
    createTourist(input: TouristInput!): CommandResult 
    createAirplane(input: AirplaneInput!): CommandResult 
    createPayment(input: PaymentInput!): CommandResult 
    createFlight(input: FlightInput!): CommandResult 
    createTouristSeason(input: TouristSeasonInput!): CommandResult 
    createLocation(input: LocationInput!): CommandResult 
    createqueryBe(input: queryBeInput!): CommandResult 
    createGetGraphqlSchema(input: GetGraphqlSchemaInput!): CommandResult 
    createKur(input: KurInput!): CommandResult 
    createGenerateAirtoursTestData(input: GenerateAirtoursTestDataInput!): CommandResult 
    createChangeActiveAgent(input: ChangeActiveAgentInput!): CommandResult 
    createSetUserAgents(input: SetUserAgentsInput!): CommandResult 
    updateUser(input: UserInput!): CommandResult 
    updatePerson(input: PersonInput!): CommandResult 
    updateCompany(input: CompanyInput!): CommandResult 
    updateInvoice(input: InvoiceInput!): CommandResult 
    updateOrder(input: OrderInput!): CommandResult 
    updateAirplaneManifacturer(input: AirplaneManifacturerInput!): CommandResult 
    updateAirplaneModel(input: AirplaneModelInput!): CommandResult 
    updateAgent(input: AgentInput!): CommandResult 
    updateTourist(input: TouristInput!): CommandResult 
    updateAirplane(input: AirplaneInput!): CommandResult 
    updatePayment(input: PaymentInput!): CommandResult 
    updateFlight(input: FlightInput!): CommandResult 
    updateTouristSeason(input: TouristSeasonInput!): CommandResult 
    updateLocation(input: LocationInput!): CommandResult 
    updatequeryBe(input: queryBeInput!): CommandResult 
    updateGetGraphqlSchema(input: GetGraphqlSchemaInput!): CommandResult 
    updateKur(input: KurInput!): CommandResult 
    updateGenerateAirtoursTestData(input: GenerateAirtoursTestDataInput!): CommandResult 
    updateChangeActiveAgent(input: ChangeActiveAgentInput!): CommandResult 
    updateSetUserAgents(input: SetUserAgentsInput!): CommandResult 
    patchUser(input: UserInput!): CommandResult 
    patchPerson(input: PersonInput!): CommandResult 
    patchCompany(input: CompanyInput!): CommandResult 
    patchInvoice(input: InvoiceInput!): CommandResult 
    patchOrder(input: OrderInput!): CommandResult 
    patchAirplaneManifacturer(input: AirplaneManifacturerInput!): CommandResult 
    patchAirplaneModel(input: AirplaneModelInput!): CommandResult 
    patchAgent(input: AgentInput!): CommandResult 
    patchTourist(input: TouristInput!): CommandResult 
    patchAirplane(input: AirplaneInput!): CommandResult 
    patchPayment(input: PaymentInput!): CommandResult 
    patchFlight(input: FlightInput!): CommandResult 
    patchTouristSeason(input: TouristSeasonInput!): CommandResult 
    patchLocation(input: LocationInput!): CommandResult 
    patchqueryBe(input: queryBeInput!): CommandResult 
    patchGetGraphqlSchema(input: GetGraphqlSchemaInput!): CommandResult 
    patchKur(input: KurInput!): CommandResult 
    patchGenerateAirtoursTestData(input: GenerateAirtoursTestDataInput!): CommandResult 
    patchChangeActiveAgent(input: ChangeActiveAgentInput!): CommandResult 
    patchSetUserAgents(input: SetUserAgentsInput!): CommandResult 
    deleteUser(input: UserInput!): CommandResult 
    deletePerson(input: PersonInput!): CommandResult 
    deleteCompany(input: CompanyInput!): CommandResult 
    deleteInvoice(input: InvoiceInput!): CommandResult 
    deleteOrder(input: OrderInput!): CommandResult 
    deleteAirplaneManifacturer(input: AirplaneManifacturerInput!): CommandResult 
    deleteAirplaneModel(input: AirplaneModelInput!): CommandResult 
    deleteAgent(input: AgentInput!): CommandResult 
    deleteTourist(input: TouristInput!): CommandResult 
    deleteAirplane(input: AirplaneInput!): CommandResult 
    deletePayment(input: PaymentInput!): CommandResult 
    deleteFlight(input: FlightInput!): CommandResult 
    deleteTouristSeason(input: TouristSeasonInput!): CommandResult 
    deleteLocation(input: LocationInput!): CommandResult 
    deletequeryBe(input: queryBeInput!): CommandResult 
    deleteGetGraphqlSchema(input: GetGraphqlSchemaInput!): CommandResult 
    deleteKur(input: KurInput!): CommandResult 
    deleteGenerateAirtoursTestData(input: GenerateAirtoursTestDataInput!): CommandResult 
    deleteChangeActiveAgent(input: ChangeActiveAgentInput!): CommandResult 
    deleteSetUserAgents(input: SetUserAgentsInput!): CommandResult 
}
type CommandResult {
    status: Int
    errorMessage: String
    errorStack: String
}



input UpdateInput {
    input: AllItemsKeysInput
}
input CreateInput {
    input: AllItemsKeysInput
}
input DeleteInput {
    input: ItemIdentifierInput
}
input StartInput {
    input: AllItemsKeysInput
}



type Query {
    get(input: GetQueryInput!): AllItemsUnionResultConnection 
    query(input: QueryInputAllItemsFields!): AllItemsUnionResultConnection 
    queryUsers(input: QueryUsersInput!): UsersResultConnection 
    queryPeople(input: QueryPeopleInput!): PeopleResultConnection 
    queryCompanies(input: QueryCompaniesInput!): CompaniesResultConnection 
    queryInvoices(input: QueryInvoicesInput!): InvoicesResultConnection 
    queryOrders(input: QueryOrdersInput!): OrdersResultConnection 
    queryAirplaneManifacturers(input: QueryAirplaneManifacturersInput!): AirplaneManifacturersResultConnection 
    queryAirplaneModels(input: QueryAirplaneModelsInput!): AirplaneModelsResultConnection 
    queryAgents(input: QueryAgentsInput!): AgentsResultConnection 
    queryTourists(input: QueryTouristsInput!): TouristsResultConnection 
    queryAirplanes(input: QueryAirplanesInput!): AirplanesResultConnection 
    queryPayments(input: QueryPaymentsInput!): PaymentsResultConnection 
    queryFlights(input: QueryFlightsInput!): FlightsResultConnection 
    queryTouristSeasons(input: QueryTouristSeasonsInput!): TouristSeasonsResultConnection 
    queryLocations(input: QueryLocationsInput!): LocationsResultConnection 
    queryqueryBes(input: QueryqueryBesInput!): queryBesResultConnection 
    queryGetGraphqlSchemas(input: QueryGetGraphqlSchemasInput!): GetGraphqlSchemasResultConnection 
    queryKurs(input: QueryKursInput!): KursResultConnection 
    queryGenerateAirtoursTestData(input: QueryGenerateAirtoursTestDataInput!): GenerateAirtoursTestDataResultConnection 
    queryChangeActiveAgents(input: QueryChangeActiveAgentsInput!): ChangeActiveAgentsResultConnection 
    querySetUserAgents(input: QuerySetUserAgentsInput!): SetUserAgentsResultConnection 
    getUsers(input: GetQueryInput!): UsersResultConnection 
    getPeople(input: GetQueryInput!): PeopleResultConnection 
    getCompanies(input: GetQueryInput!): CompaniesResultConnection 
    getInvoices(input: GetQueryInput!): InvoicesResultConnection 
    getOrders(input: GetQueryInput!): OrdersResultConnection 
    getAirplaneManifacturers(input: GetQueryInput!): AirplaneManifacturersResultConnection 
    getAirplaneModels(input: GetQueryInput!): AirplaneModelsResultConnection 
    getAgents(input: GetQueryInput!): AgentsResultConnection 
    getTourists(input: GetQueryInput!): TouristsResultConnection 
    getAirplanes(input: GetQueryInput!): AirplanesResultConnection 
    getPayments(input: GetQueryInput!): PaymentsResultConnection 
    getFlights(input: GetQueryInput!): FlightsResultConnection 
    getTouristSeasons(input: GetQueryInput!): TouristSeasonsResultConnection 
    getLocations(input: GetQueryInput!): LocationsResultConnection 
    getqueryBes(input: GetQueryInput!): queryBesResultConnection 
    getGetGraphqlSchemas(input: GetQueryInput!): GetGraphqlSchemasResultConnection 
    getKurs(input: GetQueryInput!): KursResultConnection 
    getGenerateAirtoursTestData(input: GetQueryInput!): GenerateAirtoursTestDataResultConnection 
    getChangeActiveAgents(input: GetQueryInput!): ChangeActiveAgentsResultConnection 
    getSetUserAgents(input: GetQueryInput!): SetUserAgentsResultConnection 
    
    queryBe(input: QueryqueryBesInput!): AllItemsUnionResultConnection 
    
    GetGraphqlSchema(input: QueryGetGraphqlSchemasInput!): AllItemsUnionResultConnection 
}




type AllItemsUnionResultConnection  {
    items: [AllItemsUnion!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
scalar Json
type UsersResultConnection  {
    items: [User!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type PeopleResultConnection  {
    items: [Person!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type CompaniesResultConnection  {
    items: [Company!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type InvoicesResultConnection  {
    items: [Invoice!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type OrdersResultConnection  {
    items: [Order!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type AirplaneManifacturersResultConnection  {
    items: [AirplaneManifacturer!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type AirplaneModelsResultConnection  {
    items: [AirplaneModel!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type AgentsResultConnection  {
    items: [Agent!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type TouristsResultConnection  {
    items: [Tourist!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type AirplanesResultConnection  {
    items: [Airplane!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type PaymentsResultConnection  {
    items: [Payment!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type FlightsResultConnection  {
    items: [Flight!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type TouristSeasonsResultConnection  {
    items: [TouristSeason!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type LocationsResultConnection  {
    items: [Location!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type queryBesResultConnection  {
    items: [queryBe!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type GetGraphqlSchemasResultConnection  {
    items: [GetGraphqlSchema!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type KursResultConnection  {
    items: [Kur!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type GenerateAirtoursTestDataResultConnection  {
    items: [GenerateAirtoursTestData!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type ChangeActiveAgentsResultConnection  {
    items: [ChangeActiveAgent!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}
type SetUserAgentsResultConnection  {
    items: [SetUserAgents!]!
    pageToken: Json
    count: Int
    selectionSetList: [String]
    errors: [String]
    excludedFromFilter: [String]
    correlation_id: String
}






input ItemIdentifierInput {
    HASH: String
    RANGE: String
    rev: String
}
input QueryInputAllItemsFields {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    public_data_ref: StringQueryInput
email: StringQueryInput
sub: StringQueryInput
preferredIamRole: StringQueryInput

userPoolId: StringQueryInput
active_agent: StringQueryInput
date_created: StringQueryInput
date_updated: StringQueryInput
user_created: StringQueryInput
user_updated: StringQueryInput
fname: StringQueryInput
lname: StringQueryInput
name: StringQueryInput
invoice_due_date: StringQueryInput
invoice_issued_date: StringQueryInput
invoice_number: StringQueryInput
total_net: FloatQueryInput
total_gross: FloatQueryInput
total_vat: FloatQueryInput
vat_percent: FloatQueryInput
person: StringQueryInput
status: StringQueryInput
code: StringQueryInput
country: StringQueryInput
capacity: FloatQueryInput
baseAirplaneModel: StringQueryInput
location1: StringQueryInput
location2: StringQueryInput
location3: StringQueryInput
location4: StringQueryInput
location5: StringQueryInput
agt_data_visibility_conf: AgentAgt_data_visibility_confEnum
id_card: StringQueryInput
iban: StringQueryInput
tourist_season: StringQueryInput
ticket_type: StringQueryInput
airplane: StringQueryInput
flight: StringQueryInput
from_airport: StringQueryInput
to_airport: StringQueryInput
from_country: StringQueryInput
to_country: StringQueryInput
nr_seats_class_vip: FloatQueryInput
nr_seats_class1: FloatQueryInput
nr_seats_class2: FloatQueryInput
model: StringQueryInput
manifacturer: StringQueryInput
invoice: StringQueryInput
sender_company: StringQueryInput
sender_person: StringQueryInput
recipient_person: StringQueryInput
recipient_company: StringQueryInput
start_date: StringQueryInput
end_date: StringQueryInput
duration_hours: FloatQueryInput
price_flight_per_hour: FloatQueryInput
phone1: StringQueryInput
phone2: StringQueryInput
address1: StringQueryInput
address2: StringQueryInput
type: LocationTypeEnum
forUser: StringQueryInput
forAgent: StringQueryInput
new_active_agent: StringQueryInput
user: StringQueryInput
    _and: [QueryInputAllItemsFields]
    _or: [QueryInputAllItemsFields]
}
input AllItemsKeysInput {
    HASH: String
    RANGE: String
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    public_data_ref: String
email: String
sub: String
preferredIamRole: String
iamRoles: [String]
cognitoGroups: [String]
userPoolId: String
active_agent: String
agents: [String]
date_created: String
date_updated: String
user_created: String
user_updated: String
fname: String
lname: String
name: String
invoice_due_date: String
invoice_issued_date: String
invoice_number: String
orders: [String]
total_net: Float
total_gross: Float
total_vat: Float
vat_percent: Float
person: String
status: String
items: [OrderItemDtoInput]
code: String
country: String
capacity: Float
manifacturers: [String]
baseAirplaneModel: String
location1: String
location2: String
location3: String
location4: String
location5: String
child_agents: [String]
parent_agents: [String]
agt_data_visibility_conf: AgentAgt_data_visibility_confEnum
id_card: String
iban: String
tourist_season: String
ticket_type: String
airplane: String
flight: String
from_airport: String
to_airport: String
from_country: String
to_country: String
nr_seats_class_vip: Float
nr_seats_class1: Float
nr_seats_class2: Float
model: String
manifacturer: String
invoice: String
sender_company: String
sender_person: String
recipient_person: String
recipient_company: String
start_date: String
end_date: String
duration_hours: Float
tickets_price: FlightTickets_priceDtoInput
price_flight_per_hour: Float
discounts: TouristSeasonDiscountDtoInput
phone1: String
phone2: String
address1: String
address2: String
type: LocationTypeEnum
forUser: String
forAgent: String
new_active_agent: String
user: String
}
input QueryUsersInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    public_data_ref: StringQueryInput
    email: StringQueryInput
    sub: StringQueryInput
    preferredIamRole: StringQueryInput
    
    
    userPoolId: StringQueryInput
    active_agent: StringQueryInput
    
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryUsersInput]
    _or: [QueryUsersInput]
}
input QueryPeopleInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    fname: StringQueryInput
    lname: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryPeopleInput]
    _or: [QueryPeopleInput]
}
input QueryCompaniesInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    name: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryCompaniesInput]
    _or: [QueryCompaniesInput]
}
input QueryInvoicesInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    invoice_due_date: StringQueryInput
    invoice_issued_date: StringQueryInput
    invoice_number: StringQueryInput
    
    total_net: FloatQueryInput
    total_gross: FloatQueryInput
    total_vat: FloatQueryInput
    vat_percent: FloatQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryInvoicesInput]
    _or: [QueryInvoicesInput]
}
input QueryOrdersInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    public_data_ref: StringQueryInput
    person: StringQueryInput
    status: StringQueryInput
    
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryOrdersInput]
    _or: [QueryOrdersInput]
}
input QueryAirplaneManifacturersInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    code: StringQueryInput
    name: StringQueryInput
    country: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryAirplaneManifacturersInput]
    _or: [QueryAirplaneManifacturersInput]
}
input QueryAirplaneModelsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    capacity: FloatQueryInput
    country: StringQueryInput
    code: StringQueryInput
    
    baseAirplaneModel: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryAirplaneModelsInput]
    _or: [QueryAirplaneModelsInput]
}
input QueryAgentsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    public_data_ref: StringQueryInput
    location1: StringQueryInput
    location2: StringQueryInput
    location3: StringQueryInput
    location4: StringQueryInput
    location5: StringQueryInput
    code: StringQueryInput
    name: StringQueryInput
    
    
    agt_data_visibility_conf: AgentAgt_data_visibility_confEnum
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryAgentsInput]
    _or: [QueryAgentsInput]
}
input QueryTouristsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    public_data_ref: StringQueryInput
    person: StringQueryInput
    fname: StringQueryInput
    lname: StringQueryInput
    id_card: StringQueryInput
    iban: StringQueryInput
    tourist_season: StringQueryInput
    ticket_type: StringQueryInput
    airplane: StringQueryInput
    flight: StringQueryInput
    from_airport: StringQueryInput
    to_airport: StringQueryInput
    from_country: StringQueryInput
    to_country: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryTouristsInput]
    _or: [QueryTouristsInput]
}
input QueryAirplanesInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    code: StringQueryInput
    nr_seats_class_vip: FloatQueryInput
    nr_seats_class1: FloatQueryInput
    nr_seats_class2: FloatQueryInput
    model: StringQueryInput
    manifacturer: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryAirplanesInput]
    _or: [QueryAirplanesInput]
}
input QueryPaymentsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    invoice_number: StringQueryInput
    invoice: StringQueryInput
    sender_company: StringQueryInput
    sender_person: StringQueryInput
    recipient_person: StringQueryInput
    recipient_company: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryPaymentsInput]
    _or: [QueryPaymentsInput]
}
input QueryFlightsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    from_airport: StringQueryInput
    to_airport: StringQueryInput
    start_date: StringQueryInput
    end_date: StringQueryInput
    duration_hours: FloatQueryInput
    
    airplane: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryFlightsInput]
    _or: [QueryFlightsInput]
}
input QueryTouristSeasonsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    price_flight_per_hour: FloatQueryInput
    start_date: StringQueryInput
    end_date: StringQueryInput
    
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryTouristSeasonsInput]
    _or: [QueryTouristSeasonsInput]
}
input QueryLocationsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    phone1: StringQueryInput
    phone2: StringQueryInput
    address1: StringQueryInput
    address2: StringQueryInput
    name: StringQueryInput
    type: LocationTypeEnum
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryLocationsInput]
    _or: [QueryLocationsInput]
}
input QueryqueryBesInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    code: StringQueryInput
    name: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryqueryBesInput]
    _or: [QueryqueryBesInput]
}
input QueryGetGraphqlSchemasInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryGetGraphqlSchemasInput]
    _or: [QueryGetGraphqlSchemasInput]
}
input QueryKursInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    code: StringQueryInput
    nr_seats_class_vip: FloatQueryInput
    nr_seats_class1: FloatQueryInput
    nr_seats_class2: FloatQueryInput
    model: StringQueryInput
    manifacturer: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryKursInput]
    _or: [QueryKursInput]
}
input QueryGenerateAirtoursTestDataInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    forUser: StringQueryInput
    forAgent: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryGenerateAirtoursTestDataInput]
    _or: [QueryGenerateAirtoursTestDataInput]
}
input QueryChangeActiveAgentsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    new_active_agent: StringQueryInput
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QueryChangeActiveAgentsInput]
    _or: [QueryChangeActiveAgentsInput]
}
input QuerySetUserAgentsInput {
    HASH: StringQueryInput
    RANGE: StringQueryInput
    rev: Int
    limit: Int
    pageToken: Json
    keysOnly: Boolean
    searchBackward: Boolean
    
    user: StringQueryInput
    
    date_created: StringQueryInput
    date_updated: StringQueryInput
    user_created: StringQueryInput
    user_updated: StringQueryInput
    _and: [QuerySetUserAgentsInput]
    _or: [QuerySetUserAgentsInput]
}

input GetQueryInput {
    pks: [ItemIdentifierInput!]!
    pageToken: Json
    correlation_id: String
}


`