import { DdbItem, IDdbItemStaticMetadata, setDomainContext } from '@incta/ddb-model';
import { User } from './User';
import { Person } from './Person';
import { Company } from './Company';
import { Airport } from './Airport';
import { Invoice } from './Invoice';
import { AirtoursTicketPriceConfig } from './AirtoursTicketPriceConfig';
import { City } from './City';
import { Order } from './Order';
import { Country } from './Country';
import { AirplaneManifacturer } from './AirplaneManifacturer';
import { AirplaneModel } from './AirplaneModel';
import { Region } from './Region';
import { Agent } from './Agent';
import { Tourist } from './Tourist';
import { Airplane } from './Airplane';
import { Payment } from './Payment';
import { Flight } from './Flight';
import { Continent } from './Continent';
import { TouristSeason } from './TouristSeason';
import { Location } from './Location';

export const _injectDataItems = () => setDomainContext({
    jsonDataModel: require('../../data-model.json'),
    jsonTableModel: require('../../aws-ddb-table-definition.json'),
    dataItemsMap: new Map<string, IDdbItemStaticMetadata<DdbItem>>(
        [
            [User.__typename, User],
            [Person.__typename, Person],
            [Company.__typename, Company],
            [Airport.__typename, Airport],
            [Invoice.__typename, Invoice],
            [AirtoursTicketPriceConfig.__typename, AirtoursTicketPriceConfig],
            [City.__typename, City],
            [Order.__typename, Order],
            [Country.__typename, Country],
            [AirplaneManifacturer.__typename, AirplaneManifacturer],
            [AirplaneModel.__typename, AirplaneModel],
            [Region.__typename, Region],
            [Agent.__typename, Agent],
            [Tourist.__typename, Tourist],
            [Airplane.__typename, Airplane],
            [Payment.__typename, Payment],
            [Flight.__typename, Flight],
            [Continent.__typename, Continent],
            [TouristSeason.__typename, TouristSeason],
            [Location.__typename, Location]
        ]
    )
})