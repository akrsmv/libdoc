
import { LocationDto } from './dtos/LocationDto'
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


export class Location implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Location"
  static __parent_typename = "Location"
  static keys: Map<string, string> = new Map<string, string>([
    ['phone1','string'], 
    
    ['phone2','string'], 
    
    ['address1','string'], 
    
    ['address2','string'], 
    
    ['name','string'], 
    
    ['type','"city"|"country"|"continent"|"region"|"airport"'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = []
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['name',['sGSI2']], 
            ['type',['sGSI1']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Location, DomainPropertyMetadata<Location>> = new Map<keyof IDdbItemBaseProps | keyof Location, DomainPropertyMetadata<Location>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['phone1', {
      key: 'phone1',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['phone2', {
      key: 'phone2',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['address1', {
      key: 'address1',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['address2', {
      key: 'address2',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['name', {
      key: 'name',
      type: 'string',
                  
      gsiKeys: ['sGSI2'],
                  
                  
                  
                  
    }], 
                
    ['type', {
      key: 'type',
      type: 'enum', enumValues: ["city","country","continent","region","airport"],
                  
      gsiKeys: ['sGSI1'],
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: LocationDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Location.metadataPerKey.has(arg as keyof Location)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Location.metadataPerKey.get(arg as keyof Location)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Location.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Location.__typename, Location.__typename)
    }
    this.__typename = Location.__typename
    this.HASH = withPrefix(pk.HASH, Location.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Location.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public phone1?: string
  public phone2?: string
  public address1?: string
  public address2?: string
  public name?: string
  public type?: "city"|"country"|"continent"|"region"|"airport"
                    }