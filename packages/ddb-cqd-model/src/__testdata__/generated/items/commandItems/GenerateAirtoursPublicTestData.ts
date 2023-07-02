
import { GenerateAirtoursPublicTestDataDto } from './dtos/GenerateAirtoursPublicTestDataDto'
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


export class GenerateAirtoursPublicTestData implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "GenerateAirtoursPublicTestData"
  static __parent_typename = "GenerateAirtoursPublicTestData"
  static keys: Map<string, string> = new Map<string, string>([
    ['prop1','string'], 
    
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
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof GenerateAirtoursPublicTestData, DomainPropertyMetadata<GenerateAirtoursPublicTestData>> = new Map<keyof IDdbItemBaseProps | keyof GenerateAirtoursPublicTestData, DomainPropertyMetadata<GenerateAirtoursPublicTestData>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['prop1', {
      key: 'prop1',
      type: 'string',
                  
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: GenerateAirtoursPublicTestDataDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (GenerateAirtoursPublicTestData.metadataPerKey.has(arg as keyof GenerateAirtoursPublicTestData)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && GenerateAirtoursPublicTestData.metadataPerKey.get(arg as keyof GenerateAirtoursPublicTestData)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(GenerateAirtoursPublicTestData.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(GenerateAirtoursPublicTestData.__typename, GenerateAirtoursPublicTestData.__typename)
    }
    this.__typename = GenerateAirtoursPublicTestData.__typename
    this.HASH = withPrefix(pk.HASH, GenerateAirtoursPublicTestData.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, GenerateAirtoursPublicTestData.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public prop1?: string
                    }