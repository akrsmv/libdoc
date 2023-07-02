
import { AgentDto } from './dtos/AgentDto'
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


export class Agent implements IDdbItemBaseProps {
  static isPublicItem = true
  static __typename = "Agent"
  static __parent_typename = "Agent"
  static keys: Map<string, string> = new Map<string, string>([
    ['public_data_ref','string'], 
    
    ['location1','string'], 
    
    ['location2','string'], 
    
    ['location3','string'], 
    
    ['location4','string'], 
    
    ['location5','string'], 
    
    ['code','string'], 
    
    ['name','string'], 
    
    ['child_agents','string[]'], 
    
    ['parent_agents','string[]'], 
    
    ['agt_data_visibility_conf','"ALL"|"NONE"|"ONLY_CHILDREN"|"ONLY_PRENTS"|"SELECT"'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
    ['public_data_ref','Company'], 
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = ['code'
        ]
  static requiredKeys: string[] = ['code', 
        'name'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([['public_data_ref',['sGSI2','sGSI3']], 
            ['location1',['sGSI4']], 
            ['location2',['sGSI5']], 
            ['location3',['sGSI6']], 
            ['location4',['sGSI7']], 
            ['location5',['sGSI8']], 
            ['code',['sGSI9']], 
            ['name',['sGSI1']]
            ])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof Agent, DomainPropertyMetadata<Agent>> = new Map<keyof IDdbItemBaseProps | keyof Agent, DomainPropertyMetadata<Agent>>([
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
                  
      gsiKeys: ['sGSI2','sGSI3'],
                  
      peer: 'Company',
                  
                  
                  
    }], 
                
    ['location1', {
      key: 'location1',
      type: 'string',
                  
      gsiKeys: ['sGSI4'],
                  
                  
                  
                  
    }], 
                
    ['location2', {
      key: 'location2',
      type: 'string',
                  
      gsiKeys: ['sGSI5'],
                  
                  
                  
                  
    }], 
                
    ['location3', {
      key: 'location3',
      type: 'string',
                  
      gsiKeys: ['sGSI6'],
                  
                  
                  
                  
    }], 
                
    ['location4', {
      key: 'location4',
      type: 'string',
                  
      gsiKeys: ['sGSI7'],
                  
                  
                  
                  
    }], 
                
    ['location5', {
      key: 'location5',
      type: 'string',
                  
      gsiKeys: ['sGSI8'],
                  
                  
                  
                  
    }], 
                
    ['code', {
      key: 'code',
      type: 'string',
                  
      gsiKeys: ['sGSI9'],
                  
                  
                  
      required: true,
                  
      unique: true,
    }], 
                
    ['name', {
      key: 'name',
      type: 'string',
                  
      gsiKeys: ['sGSI1'],
                  
                  
                  
      required: true,
                  
    }], 
                
    ['child_agents', {
      key: 'child_agents',
      type: 'string[]',
                  
                  
                  
                  
                  
    }], 
                
    ['parent_agents', {
      key: 'parent_agents',
      type: 'string[]',
                  
                  
                  
                  
                  
    }], 
                
    ['agt_data_visibility_conf', {
      key: 'agt_data_visibility_conf',
      type: 'enum', enumValues: ["ALL","NONE","ONLY_CHILDREN","ONLY_PRENTS","SELECT"],
                  
                  
                  
                  
                  
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
  constructor({ args, identity }: { args?: AgentDto & IDdbItemKey & { isPublic?: boolean }, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (Agent.metadataPerKey.has(arg as keyof Agent)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && Agent.metadataPerKey.get(arg as keyof Agent)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(Agent.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(Agent.__typename, Agent.__typename)
    }
    this.__typename = Agent.__typename
    this.HASH = withPrefix(pk.HASH, Agent.isPublicItem || !!args?.isPublic, identity),
    this.RANGE = withPrefix(pk.RANGE, Agent.isPublicItem || !!args?.isPublic, identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = new Date()
    this.date_updated = new Date()
  }
  
  public public_data_ref?: string
  public location1?: string
  public location2?: string
  public location3?: string
  public location4?: string
  public location5?: string
  public code?: string
  public name?: string
  public child_agents?: string[]
  public parent_agents?: string[]
  public agt_data_visibility_conf?: "ALL"|"NONE"|"ONLY_CHILDREN"|"ONLY_PRENTS"|"SELECT"
                    }