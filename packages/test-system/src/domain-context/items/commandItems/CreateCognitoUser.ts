
import { CreateCognitoUserDto } from './dtos/CreateCognitoUserDto'
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
import { User } from '../dataItems/User'


export class CreateCognitoUser implements IDdbItemBaseProps {
  static isPublicItem = false
  static __typename = "CreateCognitoUser"
  static __parent_typename = "CreateCognitoUser"
  static keys: Map<string, string> = new Map<string, string>([
    ['userItem','User'], 
    
    ['date_created','Date'], 
    
    ['date_updated','Date'], 
    
    ['user_created','string'], 
    
    ['user_updated','string'], 
    
    ['id','string']
    
  ])
  static peerKeys: Map<string, string> = new Map<string, string>([
          
        
          
        
          
        
          
        
          
        
          
        
  ])
  static uniqueKeys: string[] = []
  static requiredKeys: string[] = ['userItem'
        ]
  static gsiKeys:Map<string, string[]> = new Map<string, string[]>([])
  static metadataPerKey:Map<keyof IDdbItemBaseProps | keyof CreateCognitoUser, DomainPropertyMetadata<CreateCognitoUser>> = new Map<keyof IDdbItemBaseProps | keyof CreateCognitoUser, DomainPropertyMetadata<CreateCognitoUser>>([
    ['date_created',{
      key: 'date_created',
      type: 'isodatestring'
    }],
    ['date_updated',{
      key: 'date_updated',
      type: 'isodatestring'
    }],
    ['userItem', {
      key: 'userItem',
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
  constructor({ args, identity }: { args?: Partial<CreateCognitoUserDto & IDdbItemKey & { isPublic?: boolean }>, identity: Partial<IIdentity<Partial<IClaims>>> | null}) {
      
    Object.assign(this, args)
//     // commenting below - do not apply restrictions on what can be added in dynamo and need to be present in data model
//     // TODO make it configurable
//     Object.assign(this, typeof args === "object"
//       && Object.keys(args).reduce((validArgs: Record<string, any>, arg: string) => {
//         if (CreateCognitoUser.metadataPerKey.has(arg as keyof CreateCognitoUser)
// 
//           // commenting bellow because of issue with metadata types and js types, eg 'string[]' is js 'object' and they are not equal, causing valid props to fall off
//           // && CreateCognitoUser.metadataPerKey.get(arg as keyof CreateCognitoUser)?.type === typeof args[arg]
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
      pk = existingPKWithoutPrefix(CreateCognitoUser.__typename, { HASH: args.HASH, RANGE: args.RANGE })
    } else {
      pk = newPK(CreateCognitoUser.__typename, CreateCognitoUser.__typename)
    }
    this.__typename = CreateCognitoUser.__typename
    this.HASH = withPrefix(pk.HASH, calculatePrivateOrPublicData(args, CreateCognitoUser), identity),
    this.RANGE = withPrefix(pk.RANGE, calculatePrivateOrPublicData(args, CreateCognitoUser), identity),
    this.id = `${this.HASH}${_sep2}${this.RANGE}`
    this.date_created = timestamp
    this.date_updated = timestamp
  }
  
  public userItem?: User
                    }