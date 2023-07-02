
import { PaymentDto } from './dtos/PaymentDto'
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


export class Payment implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "Payment"
  static __parent_typename = "Payment"
  static keys: Map<string, string> = new Map<string, string>([
    ['invoice_number','string'], 
    
    ['invoice','string'], 
    
    ['sender_company','string'], 
    
    ['sender_person','string'], 
    
    ['recipient_person','string'], 
    
    ['recipient_company','string'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
    ['invoice','Invoice'], 
          
        
          
    ['sender_company','Company'], 
          
        
          
    ['sender_person','Person'], 
          
        
          
    ['recipient_person','Person'], 
          
        
          
    ['recipient_company','Company'], 
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = []
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Payment, DomainPropertyMetadata<Payment>> = new Map<keyof IDdbItemBaseProps | keyof Payment, DomainPropertyMetadata<Payment>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['invoice_number', {
      key: 'invoice_number',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['invoice', {
      key: 'invoice',
      type: 'string',
                  
                  
      peer: 'Invoice',
                  
                  
                  
    }], 
                
    ['sender_company', {
      key: 'sender_company',
      type: 'string',
                  
                  
      peer: 'Company',
                  
                  
                  
    }], 
                
    ['sender_person', {
      key: 'sender_person',
      type: 'string',
                  
                  
      peer: 'Person',
                  
                  
                  
    }], 
                
    ['recipient_person', {
      key: 'recipient_person',
      type: 'string',
                  
                  
      peer: 'Person',
                  
                  
                  
    }], 
                
    ['recipient_company', {
      key: 'recipient_company',
      type: 'string',
                  
                  
      peer: 'Company',
                  
                  
                  
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
  constructor({ args, identity }: { args?: PaymentDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Payment.metadataPerKey.has(arg as keyof Payment)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Payment.metadataPerKey.get(arg as keyof Payment)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Payment.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Payment.__typename, Payment.__typename)
    }
    this.__typename = Payment.__typename
    this.HASH = withPrefix(pk.HASH, Payment.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Payment.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public invoice_number?: string
  public invoice?: string
  public sender_company?: string
  public sender_person?: string
  public recipient_person?: string
  public recipient_company?: string
                    }