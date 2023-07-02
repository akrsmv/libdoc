
import { TouristDto } from './dtos/TouristDto'
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


export class Tourist implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Tourist"
  static __parent_typename = "Tourist"
  static keys: Map<string, string> = new Map<string, string>([
    ['public_data_ref','string'], 
    
    ['person','string'], 
    
    ['fname','string'], 
    
    ['lname','string'], 
    
    ['id_card','string'], 
    
    ['iban','string'], 
    
    ['tourist_season','string'], 
    
    ['ticket_type','string'], 
    
    ['airplane','string'], 
    
    ['flight','string'], 
    
    ['from_airport','string'], 
    
    ['to_airport','string'], 
    
    ['from_country','string'], 
    
    ['to_country','string'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
    ['public_data_ref','Person'], 
          
        
          
    ['person','Person'], 
          
        
          
        
          
        
          
        
          
        
          
    ['tourist_season','TouristSeason'], 
          
        
          
        
          
    ['airplane','Airplane'], 
          
        
          
    ['flight','Flight'], 
          
        
          
    ['from_airport','Location'], 
          
        
          
    ['to_airport','Location'], 
          
        
          
    ['from_country','Location'], 
          
        
          
    ['to_country','Location'], 
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = []
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['public_data_ref',['sGSI1']], 
            ['person',['sGSI2']], 
            ['id_card',['sGSI3']], 
            ['iban',['sGSI4']], 
            ['tourist_season',['sGSI5']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Tourist, DomainPropertyMetadata<Tourist>> = new Map<keyof IDdbItemBaseProps | keyof Tourist, DomainPropertyMetadata<Tourist>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['public_data_ref', {
      key: 'public_data_ref',
      type: 'string',
                  
      gsiKeys: ['sGSI1'],
                  
      peer: 'Person',
                  
                  
                  
    }], 
                
    ['person', {
      key: 'person',
      type: 'string',
                  
      gsiKeys: ['sGSI2'],
                  
      peer: 'Person',
                  
                  
                  
    }], 
                
    ['fname', {
      key: 'fname',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['lname', {
      key: 'lname',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['id_card', {
      key: 'id_card',
      type: 'string',
                  
      gsiKeys: ['sGSI3'],
                  
                  
                  
                  
    }], 
                
    ['iban', {
      key: 'iban',
      type: 'string',
                  
      gsiKeys: ['sGSI4'],
                  
                  
                  
                  
    }], 
                
    ['tourist_season', {
      key: 'tourist_season',
      type: 'string',
                  
      gsiKeys: ['sGSI5'],
                  
      peer: 'TouristSeason',
                  
                  
                  
    }], 
                
    ['ticket_type', {
      key: 'ticket_type',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['airplane', {
      key: 'airplane',
      type: 'string',
                  
                  
      peer: 'Airplane',
                  
                  
                  
    }], 
                
    ['flight', {
      key: 'flight',
      type: 'string',
                  
                  
      peer: 'Flight',
                  
                  
                  
    }], 
                
    ['from_airport', {
      key: 'from_airport',
      type: 'string',
                  
                  
      peer: 'Location',
                  
                  
                  
    }], 
                
    ['to_airport', {
      key: 'to_airport',
      type: 'string',
                  
                  
      peer: 'Location',
                  
                  
                  
    }], 
                
    ['from_country', {
      key: 'from_country',
      type: 'string',
                  
                  
      peer: 'Location',
                  
                  
                  
    }], 
                
    ['to_country', {
      key: 'to_country',
      type: 'string',
                  
                  
      peer: 'Location',
                  
                  
                  
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
  constructor({ args, identity }: { args?: TouristDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Tourist.metadataPerKey.has(arg as keyof Tourist)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Tourist.metadataPerKey.get(arg as keyof Tourist)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Tourist.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Tourist.__typename, Tourist.__typename)
    }
    this.__typename = Tourist.__typename
    this.HASH = withPrefix(pk.HASH, Tourist.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Tourist.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public public_data_ref?: string
  public person?: string
  public fname?: string
  public lname?: string
  public id_card?: string
  public iban?: string
  public tourist_season?: string
  public ticket_type?: string
  public airplane?: string
  public flight?: string
  public from_airport?: string
  public to_airport?: string
  public from_country?: string
  public to_country?: string
                    }