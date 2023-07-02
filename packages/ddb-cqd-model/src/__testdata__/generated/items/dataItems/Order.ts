 
import { OrderItemDto } from './dtos/OrderItemDto'
import { OrderDto } from './dtos/OrderDto'
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


export class Order implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Order"
  static __parent_typename = "Order"
  static keys: Map<string, string> = new Map<string, string>([
    ['public_data_ref','string'], 
    
    ['person','string'], 
    
    ['status','string'], 
    
    ['items','OrderItemDto []'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
    ['public_data_ref','Person'], 
          
        
          
    ['person','Person'], 
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = []
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['public_data_ref',['sGSI1']], 
            ['person',['sGSI2']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Order, DomainPropertyMetadata<Order>> = new Map<keyof IDdbItemBaseProps | keyof Order, DomainPropertyMetadata<Order>>([
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
                
    ['status', {
      key: 'status',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['items', {
      key: 'items',
      type: 'object[]', objectTypeDtoName: 'OrderItemDto',
                  
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: OrderDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Order.metadataPerKey.has(arg as keyof Order)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Order.metadataPerKey.get(arg as keyof Order)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Order.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Order.__typename, Order.__typename)
    }
    this.__typename = Order.__typename
    this.HASH = withPrefix(pk.HASH, Order.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Order.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public public_data_ref?: string
  public person?: string
  public status?: string
  public items?: OrderItemDto []
                    }