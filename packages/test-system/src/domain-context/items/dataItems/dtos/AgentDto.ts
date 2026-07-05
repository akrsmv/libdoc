

export type AgentDto = {  
  id?: string
  public_data_ref?: string
  location1?: string
  location2?: string
  location3?: string
  location4?: string
  location5?: string
  code?: string
  name?: string
  child_agents?: string[]
  parent_agents?: string[]
  agt_data_visibility_conf?: "ALL"|"NONE"|"ONLY_CHILDREN"|"ONLY_PRENTS"|"SELECT"
}