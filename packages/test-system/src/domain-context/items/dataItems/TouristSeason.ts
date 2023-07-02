 
import { TouristSeasonDiscountDto } from './dtos/TouristSeasonDiscountDto'
import { TouristSeasonDto } from './dtos/TouristSeasonDto'
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


export class TouristSeason implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "TouristSeason"
  static __parent_typename = "TouristSeason"
  static keys: Map<string, string> = new Map<string, string>([
    ['price_flight_per_hour','number'], 
    
    ['start_date','Date'], 
    
    ['end_date','Date'], 
    
    ['code','string'], 
    
    ['discounts','TouristSeasonDiscountDto'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = ['start_date', 
        'end_date', 
        'code'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['start_date',['sGSI1']], 
            ['end_date',['sGSI2']], 
            ['code',['sGSI3']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof TouristSeason, DomainPropertyMetadata<TouristSeason>> = new Map<keyof IDdbItemBaseProps | keyof TouristSeason, DomainPropertyMetadata<TouristSeason>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['price_flight_per_hour', {
      key: 'price_flight_per_hour',
      type: 'number',
                  
                  
                  
                  
                  
    }], 
                
    ['start_date', {
      key: 'start_date',
      type: 'isodatestring',
                  
      gsiKeys: ['sGSI1'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['end_date', {
      key: 'end_date',
      type: 'isodatestring',
                  
      gsiKeys: ['sGSI2'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['code', {
      key: 'code',
      type: 'string',
                  
      gsiKeys: ['sGSI3'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['discounts', {
      key: 'discounts',
      type: 'object', objectTypeDtoName: 'TouristSeasonDiscountDto',
                  
                  
                  
                  
                  
    }], 
                
    ['date_created', {
      key: 'date_created',
      type: 'isodatestring',
                  
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: TouristSeasonDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (TouristSeason.metadataPerKey.has(arg as keyof TouristSeason)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && TouristSeason.metadataPerKey.get(arg as keyof TouristSeason)?.type === typeof args[arg]
//           ) {
//           validArgs[arg] = args[arg]
//         }
//         return validArgs
//       }, {})
//     )

    let pk: IDdbItemKey
    if (!!args?.id) {
      const [HASH, RANGE] = withoutPrefix(String(args.id)).split(_sep2)
      args = {...args, HASH, RANGE}
    }
    if (!!args?.HASH && !!args?.RANGE) {
      pk = existingPKWithoutPrefix(TouristSeason.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(TouristSeason.__typename, TouristSeason.__typename)
    }
    this.__typename = TouristSeason.__typename
    this.HASH = withPrefix(pk.HASH, TouristSeason.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, TouristSeason.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public price_flight_per_hour?: number
  public start_date?: Date
  public end_date?: Date
  public code?: string
  public discounts?: TouristSeasonDiscountDto
                    }