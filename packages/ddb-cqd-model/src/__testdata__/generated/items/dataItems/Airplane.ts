
import { AirplaneDto } from './dtos/AirplaneDto'
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


export class Airplane implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Airplane"
  static __parent_typename = "Airplane"
  static keys: Map<string, string> = new Map<string, string>([
    ['code','string'], 
    
    ['nr_seats_class_vip','number'], 
    
    ['nr_seats_class1','number'], 
    
    ['nr_seats_class2','number'], 
    
    ['model','string'], 
    
    ['manifacturer','string'], 
    
    ['country','string'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
        
          
        
          
    ['model','AirplaneModel'], 
          
        
          
    ['manifacturer','AirplaneManifacturer'], 
          
        
          
    ['country','Country'], 
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = ['code'
        ]
  static requiredKeys: string[] = ['code'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['code',['sGSI1']], 
            ['nr_seats_class_vip',['nGSI1']], 
            ['nr_seats_class1',['nGSI2']], 
            ['nr_seats_class2',['nGSI3']], 
            ['model',['sGSI2']], 
            ['manifacturer',['sGSI3']], 
            ['country',['sGSI4']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Airplane, DomainPropertyMetadata<Airplane>> = new Map<keyof IDdbItemBaseProps | keyof Airplane, DomainPropertyMetadata<Airplane>>([
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
                
    ['nr_seats_class_vip', {
      key: 'nr_seats_class_vip',
      type: 'number',
                  
      gsiKeys: ['nGSI1'],
                  
                  
                  
                  
    }], 
                
    ['nr_seats_class1', {
      key: 'nr_seats_class1',
      type: 'number',
                  
      gsiKeys: ['nGSI2'],
                  
                  
                  
                  
    }], 
                
    ['nr_seats_class2', {
      key: 'nr_seats_class2',
      type: 'number',
                  
      gsiKeys: ['nGSI3'],
                  
                  
                  
                  
    }], 
                
    ['model', {
      key: 'model',
      type: 'string',
                  
      gsiKeys: ['sGSI2'],
                  
      peer: 'AirplaneModel',
                  
                  
                  
    }], 
                
    ['manifacturer', {
      key: 'manifacturer',
      type: 'string',
                  
      gsiKeys: ['sGSI3'],
                  
      peer: 'AirplaneManifacturer',
                  
                  
                  
    }], 
                
    ['country', {
      key: 'country',
      type: 'string',
                  
      gsiKeys: ['sGSI4'],
                  
      peer: 'Country',
                  
                  
                  
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
  constructor({ args, identity }: { args?: AirplaneDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Airplane.metadataPerKey.has(arg as keyof Airplane)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Airplane.metadataPerKey.get(arg as keyof Airplane)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Airplane.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Airplane.__typename, Airplane.__typename)
    }
    this.__typename = Airplane.__typename
    this.HASH = withPrefix(pk.HASH, Airplane.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Airplane.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public code?: string
  public nr_seats_class_vip?: number
  public nr_seats_class1?: number
  public nr_seats_class2?: number
  public model?: string
  public manifacturer?: string
  public country?: string
                    }