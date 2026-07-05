 
import { Agent } from '../../dataItems/Agent'

export type CreatePrivateAgentForUserDto = {  
  id?: string
  user?: string
  agentItem?: Agent
}