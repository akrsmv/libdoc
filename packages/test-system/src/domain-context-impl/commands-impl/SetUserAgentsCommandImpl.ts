import { IClaims, IIdentity } from "@incta/ddb-model";
import { SetUserAgents } from "../../domain-context/items/commandItems/SetUserAgents";
import { AdminUpdateUserAttributesCommand, CognitoIdentityProviderClient, CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
import { logdebug } from "@incta/common-utils";

export const start = async (setUserAgents: SetUserAgents, identity: IIdentity): Promise<void> => {
    logdebug('setUserAgents', setUserAgents)
    //// SETTING COGNITO USER attribute
    const config: CognitoIdentityProviderClientConfig = {}
    const client = new CognitoIdentityProviderClient(config);
    const input = { // AdminUpdateUserAttributesRequest
      UserPoolId: process.env.USERPOOLID, // required
      Username: setUserAgents.user, // required
      UserAttributes: [ // AttributeListType // required
        { // AttributeType
          Name: "custom:agents", // required
          Value: setUserAgents.agents?.join(','),
        },
      ],
      ClientMetadata: { // ClientMetadataType
        "<keys>": "STRING_VALUE",
      },
    };
    const command = new AdminUpdateUserAttributesCommand(input);
    const response = await client.send(command);
    logdebug('response from updateUserAttributes', response)
    // //<-------------------------
}

export const validateStart = async (setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}

export const onSingleCommandEventError = async (setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}

export const onCommandCompleted = async (setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}

export const onCommandErrored = async (setUserAgents: SetUserAgents, identity: Partial<IIdentity<Partial<IClaims>>> | null): Promise<void> => {
    
}
