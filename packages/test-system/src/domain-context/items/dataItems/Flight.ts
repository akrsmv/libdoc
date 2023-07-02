 
import { FlightTickets_priceDto } from './dtos/FlightTickets_priceDto'
import { FlightDto } from './dtos/FlightDto'
import {
  IClaims, IIdentity,
  _sep2,
  DomainPropertyMetadata,
  existingPKWithoutPrefix,
  IDdbItemBaseProps,
  IDdbItemKey,
  IDdbItemStaticMetadata,
  newPK, staticImplements, withPrefix, withoutPrefix, _sep1
} from '@incta/ddb-model'


export class Flight implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Flight"
  static __parent_typename = "Flight"
  static keys: Map<string, string> = new Map<string, string>([
    ['from_airport','string'], 
    
    ['to_airport','string'], 
    
    ['start_date','Date'], 
    
    ['end_date','Date'], 
    
    ['duration_hours','number'], 
    
    ['tickets_price','FlightTickets_priceDto'], 
    
    ['touristSeason','string'], 
    
    ['airplane','string'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
    ['from_airport','Location'], 
          
        
          
    ['to_airport','Location'], 
          
        
          
        
          
        
          
        
          
        
          
    ['touristSeason','TouristSeason'], 
          
        
          
    ['airplane','Airplane'], 
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = ['from_airport', 
        'to_airport', 
        'start_date', 
        'end_date', 
        'touristSeason', 
        'airplane', 
        'date_created'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['from_airport',['sGSI1']], 
            ['to_airport',['sGSI2']], 
            ['start_date',['sGSI3']], 
            ['end_date',['sGSI4']], 
            ['touristSeason',['sGSI5']], 
            ['airplane',['sGSI6']], 
            ['date_created',['sGSI7']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Flight, DomainPropertyMetadata<Flight>> = new Map<keyof IDdbItemBaseProps | keyof Flight, DomainPropertyMetadata<Flight>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['from_airport', {
      key: 'from_airport',
      type: 'string',
                  
      gsiKeys: ['sGSI1'],
                  
      peer: 'Location',
                  
                  
      required: true,
                  
    }], 
                
    ['to_airport', {
      key: 'to_airport',
      type: 'string',
                  
      gsiKeys: ['sGSI2'],
                  
      peer: 'Location',
                  
                  
      required: true,
                  
    }], 
                
    ['start_date', {
      key: 'start_date',
      type: 'isodatestring',
                  
      gsiKeys: ['sGSI3'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['end_date', {
      key: 'end_date',
      type: 'isodatestring',
                  
      gsiKeys: ['sGSI4'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['duration_hours', {
      key: 'duration_hours',
      type: 'number',
                  
                  
                  
                  
                  
    }], 
                
    ['tickets_price', {
      key: 'tickets_price',
      type: 'object', objectTypeDtoName: 'FlightTickets_priceDto',
                  
                  
                  
                  
                  
    }], 
                
    ['touristSeason', {
      key: 'touristSeason',
      type: 'string',
                  
      gsiKeys: ['sGSI5'],
                  
      peer: 'TouristSeason',
                  
                  
      required: true,
                  
    }], 
                
    ['airplane', {
      key: 'airplane',
      type: 'string',
                  
      gsiKeys: ['sGSI6'],
                  
      peer: 'Airplane',
                  
                  
      required: true,
                  
    }], 
                
    ['date_created', {
      key: 'date_created',
      type: 'isodatestring',
                  
      gsiKeys: ['sGSI7'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['date_updated', {
      key: 'date_updated',
      type: 'isodatestring',
                  
                  
                  
                  
                  
    }], 
                
    ['user_created', {
      key: 'user_created',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['user_updated', {
      key: 'user_updated',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['id', {
      key: 'id',
      type: 'string',
                  
                  
                  
                  
                  
    }]
                
  ])
  //#region the mandatory keys from IDdbItemBaseProps
  public __typename: string
  public HASH: string
  public RANGE: string
  public id: string
  public date_created: Date
  public date_updated: Date
  //#endregion
  constructor({ args, identity }: { args?: FlightDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Flight.metadataPerKey.has(arg as keyof Flight)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Flight.metadataPerKey.get(arg as keyof Flight)?.type === typeof args[arg]
//           ) {
//           validArgs[arg] = args[arg]
//         }
//         return validArgs
//       }, {})
//     )

    let pk: IDdbItemKey
    const timestamp = new Date()
    if (!!args?.id) {
      const [HASH, RANGE] = withoutPrefix(String(args.id)).split(_sep2)
      args = {...args, HASH, RANGE}
    }
    if (!!args?.HASH && !!args?.RANGE) {
      pk = existingPKWithoutPrefix(Flight.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Flight.__typename, Flight.__typename)
    }
    this.__typename = Flight.__typename
    this.HASH = withPrefix(pk.HASH, Flight.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Flight.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = timestamp
    this.date_updated = timestamp
  }
  
  public from_airport?: string
  public to_airport?: string
  public start_date?: Date
  public end_date?: Date
  public duration_hours?: number
  public tickets_price?: FlightTickets_priceDto
  public touristSeason?: string
  public airplane?: string
                    }