
import { UserDto } from './dtos/UserDto'
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


export class User implements IDdbItemBaseProps {
  static isPublicItem = true
  static __typename = "User"
  static __parent_typename = "User"
  static keys: Map<string, string> = new Map<string, string>([
    ['public_data_ref','string'], 
    
    ['email','string'], 
    
    ['sub','string'], 
    
    ['preferredIamRole','string'], 
    
    ['iamRoles','string[]'], 
    
    ['cognitoGroups','string[]'], 
    
    ['userPoolId','string'], 
    
    ['active_agent','string'], 
    
    ['agents','string[]'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
    ['public_data_ref','Person'], 
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
    ['active_agent','Agent'], 
          
        
          
    ['agents','Agent'], 
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = ['sub'
        ]
  static requiredKeys: string[] = ['sub', 
        'userPoolId'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['public_data_ref',['sGSI3']], 
            ['email',['sGSI1']], 
            ['sub',['sGSI2']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof User, DomainPropertyMetadata<User>> = new Map<keyof IDdbItemBaseProps | keyof User, DomainPropertyMetadata<User>>([
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
                  
      gsiKeys: ['sGSI3'],
                  
      peer: 'Person',
                  
                  
                  
    }], 
                
    ['email', {
      key: 'email',
      type: 'string',
                  
      gsiKeys: ['sGSI1'],
                  
                  
                  
                  
    }], 
                
    ['sub', {
      key: 'sub',
      type: 'string',
                  
      gsiKeys: ['sGSI2'],
                  
                  
                  
      required: true,
                  
      unique: true,
    }], 
                
    ['preferredIamRole', {
      key: 'preferredIamRole',
      type: 'string',
                  
                  
                  
                  
                  
    }], 
                
    ['iamRoles', {
      key: 'iamRoles',
      type: 'string[]',
                  
                  
                  
                  
                  
    }], 
                
    ['cognitoGroups', {
      key: 'cognitoGroups',
      type: 'string[]',
                  
                  
                  
                  
                  
    }], 
                
    ['userPoolId', {
      key: 'userPoolId',
      type: 'string',
                  
                  
                  
                  
      required: true,
                  
    }], 
                
    ['active_agent', {
      key: 'active_agent',
      type: 'string',
                  
                  
      peer: 'Agent',
                  
                  
                  
    }], 
                
    ['agents', {
      key: 'agents',
      type: 'string[]',
                  
                  
      peer: 'Agent',
                  
                  
                  
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
  constructor({ args, identity }: { args?: UserDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (User.metadataPerKey.has(arg as keyof User)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && User.metadataPerKey.get(arg as keyof User)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(User.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(User.__typename, User.__typename)
    }
    this.__typename = User.__typename
    this.HASH = withPrefix(pk.HASH, User.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, User.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public public_data_ref?: string
  public email?: string
  public sub?: string
  public preferredIamRole?: string
  public iamRoles?: string[]
  public cognitoGroups?: string[]
  public userPoolId?: string
  public active_agent?: string
  public agents?: string[]
                    }