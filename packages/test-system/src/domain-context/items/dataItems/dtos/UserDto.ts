

export type UserDto = {  
  id?: string
  email?: string
  sub?: string
  preferredIamRole?: string
  iamRoles?: string[]
  cognitoGroups?: string[]
  userPoolId?: string
  active_agent?: string
  agents?: string[]
}