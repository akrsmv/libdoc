
import { ChangeActiveAgentDto } from './dtos/ChangeActiveAgentDto'
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


export class ChangeActiveAgent implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "ChangeActiveAgent"
  static __parent_typename = "ChangeActiveAgent"
  static keys: Map<string, string> = new Map<string, string>([
    ['new_active_agent','string'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = ['new_active_agent'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof ChangeActiveAgent, DomainPropertyMetadata<ChangeActiveAgent>> = new Map<keyof IDdbItemBaseProps | keyof ChangeActiveAgent, DomainPropertyMetadata<ChangeActiveAgent>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['new_active_agent', {
      key: 'new_active_agent',
      type: 'string',
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: ChangeActiveAgentDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (ChangeActiveAgent.metadataPerKey.has(arg as keyof ChangeActiveAgent)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && ChangeActiveAgent.metadataPerKey.get(arg as keyof ChangeActiveAgent)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(ChangeActiveAgent.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(ChangeActiveAgent.__typename, ChangeActiveAgent.__typename)
    }
    this.__typename = ChangeActiveAgent.__typename
    this.HASH = withPrefix(pk.HASH, ChangeActiveAgent.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, ChangeActiveAgent.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public new_active_agent?: string
                    }