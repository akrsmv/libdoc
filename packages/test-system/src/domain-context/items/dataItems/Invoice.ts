
import { InvoiceDto } from './dtos/InvoiceDto'
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


export class Invoice implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Invoice"
  static __parent_typename = "Invoice"
  static keys: Map<string, string> = new Map<string, string>([
    ['invoice_due_date','Date'], 
    
    ['invoice_issued_date','Date'], 
    
    ['invoice_number','string'], 
    
    ['orders','string[]'], 
    
    ['total_net','number'], 
    
    ['total_gross','number'], 
    
    ['total_vat','number'], 
    
    ['vat_percent','number'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
        
          
    ['orders','Order'], 
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = []
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Invoice, DomainPropertyMetadata<Invoice>> = new Map<keyof IDdbItemBaseProps | keyof Invoice, DomainPropertyMetadata<Invoice>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['invoice_due_date', {
      key: 'invoice_due_date',
      type: 'isodatestring',
                  
                  
                  
                  
                  
    }], 
                
    ['invoice_issued_date', {
      key: 'invoice_issued_date',
      type: 'isodatestring',
                  
                  
                  
                  
                  
    }], 
                
    ['invoice_number', {
      key: 'invoice_number',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['orders', {
      key: 'orders',
      type: 'string[]',
                  
                  
      peer: 'Order',
                  
                  
                  
    }], 
                
    ['total_net', {
      key: 'total_net',
      type: 'number',
                  
                  
                  
                  
                  
    }], 
                
    ['total_gross', {
      key: 'total_gross',
      type: 'number',
                  
                  
                  
                  
                  
    }], 
                
    ['total_vat', {
      key: 'total_vat',
      type: 'number',
                  
                  
                  
                  
                  
    }], 
                
    ['vat_percent', {
      key: 'vat_percent',
      type: 'number',
                  
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: InvoiceDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Invoice.metadataPerKey.has(arg as keyof Invoice)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Invoice.metadataPerKey.get(arg as keyof Invoice)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Invoice.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Invoice.__typename, Invoice.__typename)
    }
    this.__typename = Invoice.__typename
    this.HASH = withPrefix(pk.HASH, Invoice.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Invoice.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public invoice_due_date?: Date
  public invoice_issued_date?: Date
  public invoice_number?: string
  public orders?: string[]
  public total_net?: number
  public total_gross?: number
  public total_vat?: number
  public vat_percent?: number
                    }