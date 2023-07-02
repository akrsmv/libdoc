 
import { AirplaneManifacturer } from './AirplaneManifacturer'
import { AirplaneModelDto } from './dtos/AirplaneModelDto'
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


export class AirplaneModel implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "AirplaneModel"
  static __parent_typename = "AirplaneManifacturer"
  static keys: Map<string, string> = new Map<string, string>([
    ['capacity','number'], 
    
    ['country','string'], 
    
    ['name','string'], 
    
    ['code','string'], 
    
    ['manifacturers','string[]'], 
    
    ['baseAirplaneModel','string'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
    ['country','Location'], 
          
        
          
        
          
        
          
    ['manifacturers','AirplaneManifacturer'], 
          
        
          
    ['baseAirplaneModel','AirplaneModel'], 
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = ['name', 
        'code'
        ]
  static requiredKeys: string[] = []
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['capacity',['nGSI1']], 
            ['code',['sGSI1','sGSI2']], 
            ['baseAirplaneModel',['sGSI3']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof AirplaneModel, DomainPropertyMetadata<AirplaneModel>> = new Map<keyof IDdbItemBaseProps | keyof AirplaneModel, DomainPropertyMetadata<AirplaneModel>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['capacity', {
      key: 'capacity',
      type: 'number',
                  
      gsiKeys: ['nGSI1'],
                  
                  
                  
                  
    }], 
                
    ['country', {
      key: 'country',
      type: 'string',
                  
                  
      peer: 'Location',
                  
                  
                  
    }], 
                
    ['name', {
      key: 'name',
      type: 'string',
                  
                  
                  
                  
                  
      unique: true,
    }], 
                
    ['code', {
      key: 'code',
      type: 'string',
                  
      gsiKeys: ['sGSI1','sGSI2'],
                  
                  
                  
                  
      unique: true,
    }], 
                
    ['manifacturers', {
      key: 'manifacturers',
      type: 'string[]',
                  
                  
      peer: 'AirplaneManifacturer',
                  
                  
                  
    }], 
                
    ['baseAirplaneModel', {
      key: 'baseAirplaneModel',
      type: 'string',
                  
      gsiKeys: ['sGSI3'],
                  
      peer: 'AirplaneModel',
                  
                  
                  
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
  constructor({ args, identity }: { args?: AirplaneModelDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (AirplaneModel.metadataPerKey.has(arg as keyof AirplaneModel)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && AirplaneModel.metadataPerKey.get(arg as keyof AirplaneModel)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(AirplaneModel.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(AirplaneManifacturer.__typename, AirplaneModel.__typename)
    }
    this.__typename = AirplaneModel.__typename
    this.HASH = withPrefix(pk.HASH, AirplaneModel.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, AirplaneModel.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public capacity?: number
  public country?: string
  public name?: string
  public code?: string
  public manifacturers?: string[]
  public baseAirplaneModel?: string
                    }