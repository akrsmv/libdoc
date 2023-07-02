 
import { RegionRegionDetailDto } from './dtos/RegionRegionDetailDto'
import { RegionDto } from './dtos/RegionDto'
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


export class Region implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Region"
  static __parent_typename = "Region"
  static keys: Map<string, string> = new Map<string, string>([
    ['name','string'], 
    
    ['airport','string'], 
    
    ['city','string'], 
    
    ['country','string'], 
    
    ['continent','string'], 
    
    ['regionDetails','RegionRegionDetailDto'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
    ['airport','Airport'], 
          
        
          
    ['city','City'], 
          
        
          
    ['country','Country'], 
          
        
          
    ['continent','Continent'], 
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = []
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['name',['sGSI1']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Region, DomainPropertyMetadata<Region>> = new Map<keyof IDdbItemBaseProps | keyof Region, DomainPropertyMetadata<Region>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['name', {
      key: 'name',
      type: 'string',
                  
      gsiKeys: ['sGSI1'],
                  
                  
                  
                  
    }], 
                
    ['airport', {
      key: 'airport',
      type: 'string',
                  
                  
      peer: 'Airport',
                  
                  
                  
    }], 
                
    ['city', {
      key: 'city',
      type: 'string',
                  
                  
      peer: 'City',
                  
                  
                  
    }], 
                
    ['country', {
      key: 'country',
      type: 'string',
                  
                  
      peer: 'Country',
                  
                  
                  
    }], 
                
    ['continent', {
      key: 'continent',
      type: 'string',
                  
                  
      peer: 'Continent',
                  
                  
                  
    }], 
                
    ['regionDetails', {
      key: 'regionDetails',
      type: 'object', objectTypeDtoName: 'RegionRegionDetailDto',
                  
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: RegionDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Region.metadataPerKey.has(arg as keyof Region)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Region.metadataPerKey.get(arg as keyof Region)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Region.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Region.__typename, Region.__typename)
    }
    this.__typename = Region.__typename
    this.HASH = withPrefix(pk.HASH, Region.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Region.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public name?: string
  public airport?: string
  public city?: string
  public country?: string
  public continent?: string
  public regionDetails?: RegionRegionDetailDto
                    }