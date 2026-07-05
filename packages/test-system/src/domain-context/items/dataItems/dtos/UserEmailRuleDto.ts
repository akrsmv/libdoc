

export type UserEmailRuleDto = {  
  id?: string
  agent?: string
  user?: string
  email?: string
  sub?: string
  match_pattern?: string
  disabled?: boolean
}