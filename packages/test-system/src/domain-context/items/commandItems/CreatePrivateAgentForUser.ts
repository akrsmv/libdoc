
import { CreatePrivateAgentForUserDto } from './dtos/CreatePrivateAgentForUserDto'
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
import { Agent } from '../dataItems/Agent'


export class CreatePrivateAgentForUser implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "CreatePrivateAgentForUser"
  static __parent_typename = "CreatePrivateAgentForUser"
  static keys: Map<string, string> = new Map<string, string>([
    ['user','string'], 
    
    ['agentItem','Agent'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = ['user', 
        'agentItem'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof CreatePrivateAgentForUser, DomainPropertyMetadata<CreatePrivateAgentForUser>> = new Map<keyof IDdbItemBaseProps | keyof CreatePrivateAgentForUser, DomainPropertyMetadata<CreatePrivateAgentForUser>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['user', {
      key: 'user',
      type: 'string',
                  
                  
                  
                  
      required: true,
                  
    }], 
                
    ['agentItem', {
      key: 'agentItem',
      type: 'object',
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: Partial<CreatePrivateAgentForUserDto & IDdbItemKey & { isPublic?: boolean }>, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (CreatePrivateAgentForUser.metadataPerKey.has(arg as keyof CreatePrivateAgentForUser)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && CreatePrivateAgentForUser.metadataPerKey.get(arg as keyof CreatePrivateAgentForUser)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(CreatePrivateAgentForUser.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(CreatePrivateAgentForUser.__typename, CreatePrivateAgentForUser.__typename)
    }
    this.__typename = CreatePrivateAgentForUser.__typename
    this.HASH = withPrefix(pk.HASH, calculatePrivateOrPublicData(args, CreatePrivateAgentForUser), identity),
    this.RANGE = withPrefix(pk.RANGE, calculatePrivateOrPublicData(args, CreatePrivateAgentForUser), identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = timestamp
    this.date_updated = timestamp
  }
  
  public user?: string
  public agentItem?: Agent
                    }