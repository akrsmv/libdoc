
import { AirplaneManifacturerDto } from './dtos/AirplaneManifacturerDto'
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


export class AirplaneManifacturer implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "AirplaneManifacturer"
  static __parent_typename = "AirplaneManifacturer"
  static keys: Map<string, string> = new Map<string, string>([
    ['code','string'], 
    
    ['name','string'], 
    
    ['country','string'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
    ['country','Location'], 
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = ['code'
        ]
  static requiredKeys: string[] = ['code', 
        'name', 
        'country'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['code',['sGSI1']], 
            ['name',['sGSI2']], 
            ['country',['sGSI3']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof AirplaneManifacturer, DomainPropertyMetadata<AirplaneManifacturer>> = new Map<keyof IDdbItemBaseProps | keyof AirplaneManifacturer, DomainPropertyMetadata<AirplaneManifacturer>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['code', {
      key: 'code',
      type: 'string',
                  
      gsiKeys: ['sGSI1'],
                  
                  
                  
      required: true,
                  
      unique: true,
    }], 
                
    ['name', {
      key: 'name',
      type: 'string',
                  
      gsiKeys: ['sGSI2'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['country', {
      key: 'country',
      type: 'string',
                  
      gsiKeys: ['sGSI3'],
                  
      peer: 'Location',
                  
                  
      required: true,
                  
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
  constructor({ args, identity }: { args?: AirplaneManifacturerDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (AirplaneManifacturer.metadataPerKey.has(arg as keyof AirplaneManifacturer)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && AirplaneManifacturer.metadataPerKey.get(arg as keyof AirplaneManifacturer)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(AirplaneManifacturer.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(AirplaneManifacturer.__typename, AirplaneManifacturer.__typename)
    }
    this.__typename = AirplaneManifacturer.__typename
    this.HASH = withPrefix(pk.HASH, AirplaneManifacturer.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, AirplaneManifacturer.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public code?: string
  public name?: string
  public country?: string
                    }