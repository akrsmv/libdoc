import { IClaims, IIdentity, _sep1, versionString } from "@incta/ddb-model";
import { ChangeActiveAgent } from "../../domain-context/items/commandItems/ChangeActiveAgent";
import { AdminUpdateUserAttributesCommand, CognitoIdentityProviderClient, CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
import { ValidationError, logdebug } from "@incta/common-utils";
import { getItems, patchItem, queryItems, searchItems, updateItem } from "@incta/ddb-actions";
import { User } from "../../domain-context/items/dataItems/User";
import { ChangeActiveAgentDto } from "../../domain-context/items/commandItems/dtos/ChangeActiveAgentDto";

export const start = async (changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {

  const user = (await getItems<User>({
    id: [{ 
              HASH: `${User.__typename}${_sep1}${identity?.sub}`,
              RANGE:`${versionString(0)}${_sep1}${User.__typename}${_sep1}${identity?.sub}`
          }],
          loadPeersInput:{
              projectionExpression: "agents"
          }
  }, identity)).items[0]

  const userPrivateAgents = (await searchItems<User>({
    privateData: true,
    __typename: "Agent"
    }, {...identity, claims: {active_agent: undefined}})).items

  logdebug('LOADED USER is ', user)
  logdebug('LOADED USER PRIVATE AGENTS are ', userPrivateAgents)

  const config: CognitoIdentityProviderClientConfig = {}
  const client = new CognitoIdentityProviderClient(config);

  const input = { // AdminUpdateUserAttributesRequest
    UserPoolId: process.env.USERPOOLID, // required
    Username: identity?.username, // required
    UserAttributes: [ // AttributeListType // required
      { // AttributeType
        Name: "custom:active_agent", // required
        Value: changeActiveAgent.new_active_agent,
      },
    ],
    ClientMetadata: { // ClientMetadataType
      "<keys>": "STRING_VALUE",
    },
  };
  const command = new AdminUpdateUserAttributesCommand(input);

  if (changeActiveAgent.new_active_agent) {
      // -----------------------------> 
    // validate requested new active agent is part of user's visible agents
    if (!user) {
      throw new ValidationError('user not found')
    } else if (!user.agents && !userPrivateAgents.length) {
      throw new ValidationError('user does not have any agents assigned')
    }
    else if (
      //new_active_agent is either not part of active_agents (public ones)
      (Array.isArray(user.agents) && user.agents.indexOf(String(changeActiveAgent.new_active_agent)) === -1)
      // or new_active_agent is not some private agent for this user, previously created
    || !userPrivateAgents.filter(agt => agt.id === changeActiveAgent.new_active_agent).length) {
        throw new ValidationError('user agents does not include requested new agent')
    }
    else {
      // proceed
    }        
  }
    

    const response = await client.send(command);
    
    await patchItem({ 
      HASH: `${User.__typename}${_sep1}${identity?.sub}`,
      RANGE:`${versionString(0)}${_sep1}${User.__typename}${_sep1}${identity?.sub}`,
      // @ts-ignore
      rev: user.rev,
      __typename: User.__typename,
      active_agent: changeActiveAgent?.new_active_agent || "##del##"
    }, identity)
    
    
    logdebug('response from updateUserAttributes', response)
    // <------------------------------

}

export const validateStart = async (changeActiveAgent: ChangeActiveAgentDto, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}

export const onSingleCommandEventError = async (changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}

// export const onCommandCompleted = async (changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
// }

// export const onCommandErrored = async (changeActiveAgent: ChangeActiveAgent, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
// }
