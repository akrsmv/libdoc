import { DdbItem, IDdbDomain, setDomainContext } from '@incta/ddb-model';
import { User } from '../items/dataItems/User';
import { Person } from '../items/dataItems/Person';
import { Company } from '../items/dataItems/Company';
import { Airport } from '../items/dataItems/Airport';
import { Invoice } from '../items/dataItems/Invoice';
import { AirtoursTicketPriceConfig } from '../items/dataItems/AirtoursTicketPriceConfig';
import { City } from '../items/dataItems/City';
import { Order } from '../items/dataItems/Order';
import { Country } from '../items/dataItems/Country';
import { AirplaneManifacturer } from '../items/dataItems/AirplaneManifacturer';
import { AirplaneModel } from '../items/dataItems/AirplaneModel';
import { Region } from '../items/dataItems/Region';
import { Agent } from '../items/dataItems/Agent';
import { Tourist } from '../items/dataItems/Tourist';
import { Airplane } from '../items/dataItems/Airplane';
import { Payment } from '../items/dataItems/Payment';
import { Flight } from '../items/dataItems/Flight';
import { Continent } from '../items/dataItems/Continent';
import { TouristSeason } from '../items/dataItems/TouristSeason';
import { Location } from '../items/dataItems/Location';
import { UserDataDomain } from './UserDataDomain';
import { PersonDataDomain } from './PersonDataDomain';
import { CompanyDataDomain } from './CompanyDataDomain';
import { AirportDataDomain } from './AirportDataDomain';
import { InvoiceDataDomain } from './InvoiceDataDomain';
import { AirtoursTicketPriceConfigDataDomain } from './AirtoursTicketPriceConfigDataDomain';
import { CityDataDomain } from './CityDataDomain';
import { OrderDataDomain } from './OrderDataDomain';
import { CountryDataDomain } from './CountryDataDomain';
import { AirplaneManifacturerDataDomain } from './AirplaneManifacturerDataDomain';
import { AirplaneModelDataDomain } from './AirplaneModelDataDomain';
import { RegionDataDomain } from './RegionDataDomain';
import { AgentDataDomain } from './AgentDataDomain';
import { TouristDataDomain } from './TouristDataDomain';
import { AirplaneDataDomain } from './AirplaneDataDomain';
import { PaymentDataDomain } from './PaymentDataDomain';
import { FlightDataDomain } from './FlightDataDomain';
import { ContinentDataDomain } from './ContinentDataDomain';
import { TouristSeasonDataDomain } from './TouristSeasonDataDomain';
import { LocationDataDomain } from './LocationDataDomain';
import { GenerateAirtoursTestData } from '../items/commandItems/GenerateAirtoursTestData';
import { GenerateAirtoursPublicTestData } from '../items/commandItems/GenerateAirtoursPublicTestData';
import { ChangeActiveAgent } from '../items/commandItems/ChangeActiveAgent';
import { SetUserAgents } from '../items/commandItems/SetUserAgents';
import { GenerateAirtoursTestDataCommand } from '../commands/GenerateAirtoursTestDataCommand';
import { GenerateAirtoursPublicTestDataCommand } from '../commands/GenerateAirtoursPublicTestDataCommand';
import { ChangeActiveAgentCommand } from '../commands/ChangeActiveAgentCommand';
import { SetUserAgentsCommand } from '../commands/SetUserAgentsCommand';
import { queryBe } from '../items/queryItems/queryBe';
import { GetGraphqlSchema } from '../items/queryItems/GetGraphqlSchema';
import { queryBeQuery } from '../queries/queryBeQuery';
import { GetGraphqlSchemaQuery } from '../queries/GetGraphqlSchemaQuery';
export const _injectDomains = () => setDomainContext({
    domainsMap: new Map<string, IDdbDomain<DdbItem>>(
        [
            [User.__typename, UserDataDomain],
            [Person.__typename, PersonDataDomain],
            [Company.__typename, CompanyDataDomain],
            [Airport.__typename, AirportDataDomain],
            [Invoice.__typename, InvoiceDataDomain],
            [AirtoursTicketPriceConfig.__typename, AirtoursTicketPriceConfigDataDomain],
            [City.__typename, CityDataDomain],
            [Order.__typename, OrderDataDomain],
            [Country.__typename, CountryDataDomain],
            [AirplaneManifacturer.__typename, AirplaneManifacturerDataDomain],
            [AirplaneModel.__typename, AirplaneModelDataDomain],
            [Region.__typename, RegionDataDomain],
            [Agent.__typename, AgentDataDomain],
            [Tourist.__typename, TouristDataDomain],
            [Airplane.__typename, AirplaneDataDomain],
            [Payment.__typename, PaymentDataDomain],
            [Flight.__typename, FlightDataDomain],
            [Continent.__typename, ContinentDataDomain],
            [TouristSeason.__typename, TouristSeasonDataDomain],
            [Location.__typename, LocationDataDomain],
            [GenerateAirtoursTestData.__typename, GenerateAirtoursTestDataCommand],
            [GenerateAirtoursPublicTestData.__typename, GenerateAirtoursPublicTestDataCommand],
            [ChangeActiveAgent.__typename, ChangeActiveAgentCommand],
            [SetUserAgents.__typename, SetUserAgentsCommand],
            [queryBe.__typename, queryBeQuery],
            [GetGraphqlSchema.__typename, GetGraphqlSchemaQuery]
        ]
        
    )
})
