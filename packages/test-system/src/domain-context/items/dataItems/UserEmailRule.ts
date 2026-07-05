
import { UserEmailRuleDto } from './dtos/UserEmailRuleDto'
import {
  IClaims, IIdentity,
  _sep2,
  DomainPropertyMetadata,
  existingPKWithoutPrefix,
  IDdbItemBaseProps,
  IDdbItemKey,
  IDdbItemStaticMetadata,
  newPK, staticImplements, withPrefix, withoutPrefix, _sep1, calculatePrivateOrPublicData
} from '@incta/ddb-model'


export class UserEmailRule implements IDdbItemBaseProps {
  static isPublicItem = true
  static __typename = "UserEmailRule"
  static __parent_typename = "UserEmailRule"
  static keys: Map<string, string> = new Map<string, string>([
    ['agent','string'], 
    
    ['user','string'], 
    
    ['email','string'], 
    
    ['sub','string'], 
    
    ['match_pattern','string'], 
    
    ['disabled','boolean'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
    ['agent','Agent'], 
          
        
          
    ['user','User'], 
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = ['agent', 
        'user', 
        'email', 
        'sub'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['email',['sGSI1']], 
            ['sub',['sGSI2']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof UserEmailRule, DomainPropertyMetadata<UserEmailRule>> = new Map<keyof IDdbItemBaseProps | keyof UserEmailRule, DomainPropertyMetadata<UserEmailRule>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['agent', {
      key: 'agent',
      type: 'string',
                  
                  
      peer: 'Agent',
                  
                  
      required: true,
                  
    }], 
                
    ['user', {
      key: 'user',
      type: 'string',
                  
                  
      peer: 'User',
                  
                  
      required: true,
                  
    }], 
                
    ['email', {
      key: 'email',
      type: 'string',
                  
      gsiKeys: ['sGSI1'],
                  
                  
      HASH: true,
                  
      required: true,
                  
    }], 
                
    ['sub', {
      key: 'sub',
      type: 'string',
                  
      gsiKeys: ['sGSI2'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['match_pattern', {
      key: 'match_pattern',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['disabled', {
      key: 'disabled',
      type: 'boolean',
                  
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: Partial<UserEmailRuleDto & IDdbItemKey & { isPublic?: boolean }>, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (UserEmailRule.metadataPerKey.has(arg as keyof UserEmailRule)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && UserEmailRule.metadataPerKey.get(arg as keyof UserEmailRule)?.type === typeof args[arg]
//           ) {
//           validArgs[arg] = args[arg]
//         }
//         return validArgs
//       }, {})
//     )

    let pk: IDdbItemKey
    const timestamp = new Date()
    if (!!args?.id) {
      const [HASH, RANGE] = withoutPrefix(String(args.id)).split(_sep2)
      args = {...args, HASH, RANGE}
    }
    if (!!args?.HASH && !!args?.RANGE) {
      pk = existingPKWithoutPrefix(UserEmailRule.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(UserEmailRule.__typename, UserEmailRule.__typename)
    }
    this.__typename = UserEmailRule.__typename
    this.HASH = withPrefix(pk.HASH, calculatePrivateOrPublicData(args, UserEmailRule), identity),
    this.RANGE = withPrefix(pk.RANGE, calculatePrivateOrPublicData(args, UserEmailRule), identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = timestamp
    this.date_updated = timestamp
  }
  
  public agent?: string
  public user?: string
  public email?: string
  public sub?: string
  public match_pattern?: string
  public disabled?: boolean
                    }