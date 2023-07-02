

export type UserDto = {  
  id?: string
  public_data_ref?: string
  email?: string
  sub?: string
  preferredIamRole?: string
  iamRoles?: string[]
  cognitoGroups?: string[]
  userPoolId?: string
  active_agent?: string
  agents?: string[]
}