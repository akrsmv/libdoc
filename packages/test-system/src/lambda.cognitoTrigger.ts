import { logdebug, logerror } from "@incta/common-utils"
import { __domain, _sep1, _sep2, versionString } from "@incta/ddb-model"
import { createItem, getItems, patchItem } from "@incta/ddb-actions"
import { User } from "./domain-context/items/dataItems/User"
import { _injectDataItems } from "./domain-context/items/dataItems/_injectDataItems"


import { CognitoIdentityClient, GetIdCommand, ListIdentitiesCommand } from '@aws-sdk/client-cognito-identity'

const getUserIdentityIdNew = (username: string) => new Promise((resolve, reject) => {

	// Create an instance of the CognitoIdentityClient
	const cognitoIdentityClient = new CognitoIdentityClient({ region: process.env.AWS_REGION });
	const filterBySub = username;
	const filterByUsername = username;
	// Create the ListIdentitiesCommand with the Identity Pool ID
	const listIdentitiesCommand = new ListIdentitiesCommand({
		IdentityPoolId: String(process.env.COGNITO_IDENTITY_POOL_ID), MaxResults: 10,
		// @ts-ignore
		Filter: filterBySub ? `sub = "${filterBySub}"` : `cognito:username = "${filterByUsername}"`,
	});

	// Call the ListIdentitiesCommand to list the identities
	cognitoIdentityClient.send(listIdentitiesCommand)
		.then(data => {
			logdebug('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', data)
			const identityIds = data.Identities?.filter(identity => identity.Logins![0] !== 'DISABLED').map(identity => identity.IdentityId);
			logdebug('Identity IDs:', identityIds);
			resolve(identityIds && identityIds[0])
		})
		.catch(error => {
			logerror(error);
			reject(error)
		});
})


/**
 * @param evnt 
 * @param context 
 * @param callback 
 * @returns 
 */
export const handler = async (evnt: any, context?: any, callback?: Function): Promise<any> => {
	logdebug('COGNITO LAMBDA TRIGGERED', { evnt, context })
	// // WARNING appears that lambda triggers expect the original event returned, without any modifications. 
	// // code was decorating the event with ringToken, and then I got error - InvalidLambdaResponseException:Unrecognizable lambda output 

	// if ("triggerSource" in evnt && evnt["triggerSource"] === "PostAuthentication_Authentication") {
	// 	// catch events of payload:
	// 	//{ "version": "1", "region": "eu-west-1", "userPoolId": "eu-west-1_5fFubCk74", "userName": "76c46c18-0aa8-4786-a1eb-ae50b880f7f7", "callerContext": { "awsSdkVersion": "aws-sdk-unknown-unknown", "clientId": "5og3ldap1shskk164029tg9a8s" }, "triggerSource": "PostAuthentication_Authentication", "request": { "userAttributes": { "sub": "76c46c18-0aa8-4786-a1eb-ae50b880f7f7", "email_verified": "true", "cognito:user_status": "FORCE_CHANGE_PASSWORD", "email": "akrsmv@gmail.com" }, "newDeviceUsed": false }, "response": {} }
	// 	!process.env.DEBUGGER || loginfo({ ringToken: evnt["ringToken"] as string }, `PostAuthentication_Authentication event`, evnt)

	// 	return (!!callback && callback(null, evnt)) || evnt
	// }

	if ("triggerSource" in evnt && evnt["triggerSource"] === "PostAuthentication_Authentication") {
		_injectDataItems() // load metadata for items, we need only the user item here
		// load user from db
		const existingUser = (await getItems({
			id: `${User.__typename}${_sep1}${evnt.request.userAttributes.sub}${_sep2}${versionString(0)}${_sep1}${User.__typename}${_sep1}${evnt.request.userAttributes.sub}`
		}, null)).items[0]

		const cognitoUserPayload = {
			id: `${User.__typename}${_sep1}${evnt.request.userAttributes.sub}${_sep2}${versionString(0)}${_sep1}${User.__typename}${_sep1}${evnt.request.userAttributes.sub}`,
			rev: existingUser?.rev || 0,
			__typename: User.__typename,
			sub: evnt.request.userAttributes.sub,
			userPoolId: evnt.userPoolId,
		}

		if (existingUser && !existingUser.idpId) {
			const idpId = await getUserIdentityIdNew(evnt.request.userAttributes.sub)
			await patchItem({ ...cognitoUserPayload, idpId }, null)
		} else if (!existingUser){
			const idpId = await getUserIdentityIdNew(evnt.request.userAttributes.sub)
			await createItem({ ...cognitoUserPayload, idpId }, null)
		}

		const reloadedUser = (await getItems<User>({
			id: `${User.__typename}${_sep1}${evnt.request.userAttributes.sub}${_sep2}${versionString(0)}${_sep1}${User.__typename}${_sep1}${evnt.request.userAttributes.sub}`
		}, null)).items[0]

		logdebug('[handler] [PostAuthentication_Authentication] reloaderUser', reloadedUser)

	}

	if ("triggerSource" in evnt && (evnt["triggerSource"] === "TokenGeneration_Authentication"
		|| evnt["triggerSource"] === "TokenGeneration_RefreshTokens")) {
		_injectDataItems() // load metadata for items, we need only the user item here
		// load user from db
		const existingUser = (await getItems({
			id: `${User.__typename}${_sep1}${evnt.request.userAttributes.sub}${_sep2}${versionString(0)}${_sep1}${User.__typename}${_sep1}${evnt.request.userAttributes.sub}`
		}, null)).items[0]

		const cognitoUserPayload = {
			id: `${User.__typename}${_sep1}${evnt.request.userAttributes.sub}${_sep2}${versionString(0)}${_sep1}${User.__typename}${_sep1}${evnt.request.userAttributes.sub}`,
			rev: existingUser?.rev || 0,
			__typename: User.__typename,
			sub: evnt.request.userAttributes.sub,
			userPoolId: evnt.userPoolId,
			email: evnt.request.userAttributes['email'],
			agents: evnt.request.userAttributes['custom:agents'] ? evnt.request.userAttributes['custom:agents'].split(',') : "##del##",
			active_agent: evnt.request.userAttributes['custom:active_agent'] || "##del##",
			groups: evnt.request.groupConfiguration['groupsToOverride'],
			roles: evnt.request.groupConfiguration['iamRolesToOverride'],
			active_role: evnt.request.groupConfiguration['preferredRole']
		}

		if (existingUser) {
			// do not ask Codnito IDP for the identity ID again, because: 
			// - by above code, assume it was taken first time user authenticated and handled above in PostAuthentication_Authentication event
			// - by AWS docs, Identity ID never changes for a user
			await patchItem(cognitoUserPayload, null)
		} else {
			await createItem(cognitoUserPayload, null)
		}

		const reloadedUser = (await getItems<User>({
			id: `${User.__typename}${_sep1}${evnt.request.userAttributes.sub}${_sep2}${versionString(0)}${_sep1}${User.__typename}${_sep1}${evnt.request.userAttributes.sub}`
		}, null)).items[0]

		logdebug(`[handler] [${evnt["triggerSource"]}] reloaderUser`, reloadedUser)

		// evnt.response = {
		// 	claimsOverrideDetails: {
		// 		claimsToAddOrOverride: {
		// 			'agents': JSON.stringify(reloadedUser.agents || []),
		// 			'active_agent': reloadedUser.active_agent
		// 		}
		// 	}
		// };

		// 	// catch events of payload:
		// 	//{ "version": "1", "triggerSource": "TokenGeneration_Authentication", "region": "eu-west-1", "userPoolId": "eu-west-1_5fFubCk74", "userName": "76c46c18-0aa8-4786-a1eb-ae50b880f7f7", "callerContext": { "awsSdkVersion": "aws-sdk-unknown-unknown", "clientId": "5og3ldap1shskk164029tg9a8s" }, "request": { "userAttributes": { "sub": "76c46c18-0aa8-4786-a1eb-ae50b880f7f7", "email_verified": "true", "cognito:user_status": "FORCE_CHANGE_PASSWORD", "email": "akrsmv@gmail.com" }, "groupConfiguration": { "groupsToOverride": [], "iamRolesToOverride": [], "preferredRole": null } }, "response": { "claimsOverrideDetails": null } }
		// 	logdebug(`TokenGeneration_Authentication event`, evnt)
		// 	logdebug(`TokenGeneration_Authentication evnt.request.groupConfiguration.groupsToOverride `, evnt.request.groupConfiguration.groupsToOverride)
		// 	logdebug(`TokenGeneration_Authentication evnt.request.groupConfiguration `, evnt.request.groupConfiguration)

		// 	// TODO excerpt in separate npm package
		// 	// TODO sync user with Dynamo
		// 	// sending each update for processing in its own lambda!!! (ensuring retries will kick in if there are multiple conflicting updates)

		// 	const updateUserRequest = {
		// 		Update: {
		// 			TableName: process.env["DB_NAME"],
		// 			Key: Object.assign({
		// 				id: { S: `InctaUser|${evnt.request.userAttributes.email}` },
		// 				meta: { S: `${versionString(0)}|InctaUser|${evnt.request.userAttributes.email}` },
		// 			}),
		// 			UpdateExpression: `SET #cognitoGroups = :cognitoGroups, #iamRoles = :iamRoles, #preferredIamRole = :preferredIamRole, #__typename = :__typename, #__REF1 = :__REF1, #__SHARD = :__SHARD, #email = :email, #sub = :sub, #userPoolId = :userPoolId, #clientAppId = :clientAppId`,
		// 			ExpressionAttributeNames: { [`#cognitoGroups`]: "cognitoGroups", [`#iamRoles`]: "iamRoles", [`#preferredIamRole`]: "preferredIamRole", [`#__typename`]: "__typename", [`#__REF1`]: "__REF1", [`#__SHARD`]: "__SHARD", [`#email`]: "email", [`#sub`]: "sub", [`#userPoolId`]: "userPoolId", [`#clientAppId`]: "clientAppId" },
		// 			ExpressionAttributeValues: { ":cognitoGroups": { "M": evnt.request.groupConfiguration.groupsToOverride.reduce((accum: Record<string, { 'S': string }>, next: string, i: number) => { accum[`${i}`] = { 'S': next }; return accum; }, {}) }, ":iamRoles": { "M": evnt.request.groupConfiguration.iamRolesToOverride.reduce((accum: Record<string, { 'S': string }>, next: string, i: number) => { accum[`${i}`] = { 'S': next }; return accum; }, {}) }, ":preferredIamRole": { "S": evnt.request.groupConfiguration.preferredRole }, ":__typename": { "S": "InctaUser" }, ":__REF1": { "S": evnt.request.userAttributes.sub }, ":__SHARD": { "S": `InctaUser|0` }, ":email": { "S": evnt.request.userAttributes.email }, ":sub": { "S": evnt.request.userAttributes.sub }, ":userPoolId": { "S": `${evnt.userPoolId}` }, ":clientAppId": { S: evnt.callerContext.clientId } }
		// 		}
		// 	}

		// 	// Cognito Groups NOT replicated in DB they live only in cognito!
		// 	// if (Array.isArray(evnt.request.userAttributes.groups) && evnt.request.userAttributes.groups.length) {
		// 	// 	updateUserRequest.Update.UpdateExpression += ", #groups = :groups"
		// 	// 	Object.assign(updateUserRequest.Update.ExpressionAttributeNames, {[`#groups`]: "groups"})
		// 	// 	Object.assign(updateUserRequest.Update.ExpressionAttributeValues, {[":groups"]: toAttributeMap(evnt.request.userAttributes.groups)})
		// 	// }

		// 	const message: Input = {
		// 		action: "update",
		// 		__typename: "BASE",

		// 		arguments: {
		// 			TransactItems: [updateUserRequest],
		// 			ReturnConsumedCapacity: "TOTAL",
		// 			ReturnItemCollectionMetrics: "SIZE",
		// 			// ClientRequestToken: uuid()
		// 		},
		// 		"identity": {
		// 			username: "superuser",
		// 			dbUser: {
		// 				"sub": "superuser"
		// 			}
		// 		},
		// 		forcePublishToBus: true,
		// 		eventType: "input",
		// 		jobType: "short",
		// 		ringToken: `cognito-events|${context?.awsRequestId}`
		// 	}

		// 	console.log("SHOULD PUBLISH ", message)

		// 	await controller(message)

		// 	// attempt as per https://medium.com/@dantasfiles/creating-a-simple-multi-tenant-aws-amplify-mobile-app-e26119ab8246
		// 	// add tenant to groups

		// 	// DO NOT ADD any "virtual" groups. Instead load tenants the normal way from corresponding InctaUser 
		// 	// 	evnt.response = {
		// 	// 		claimsOverrideDetails: {
		// 	// 			groupOverrideDetails: {
		// 	// 				// claimsToAddOrOverride: {
		// 	// 				// 	attribute_key2: "attribute_value2",
		// 	// 				// 	attribute_key: "attribute_value",
		// 	// 				// },
		// 	// 				groupsToOverride: [
		// 	// 					"public", // denotes each user has access to public data pool
		// 	// 					"TENANT1", //- excerpted from TENANTUSERCONFIG, denotes access to TENANT1 data pool
		// 	// 					"TENANT2", //- excerpted from TENANTUSERCONFIG, denotes access to TENANT2 data pool
		// 	// 					"TENANT3", //- excerpted from TENANTUSERCONFIG, denotes access to TENANT3 data pool
		// 	// 					"TENANT4",
		// 	// 					"TENANT5",
		// 	// 					"TENANT6",
		// 	// 					"TENANT7",
		// 	// 					"TENANT8",
		// 	// 					"TENANT9",
		// 	// 					"TENANT10",
		// 	// 					"TENANT11",
		// 	// 					"TENANT12",
		// 	// 					"TENANT13",
		// 	// 					"TENANT14",
		// 	// 					"TENANT15",
		// 	// 					...evnt.request.groupConfiguration.groupsToOverride // add initial cognito groups the user has
		// 	// 				]
		// 	// 			}
		// 	// 		}
		// 	// 	}

	}

	// // Return to Amazon Cognito
	// return (!!callback && callback(null, evnt)) || evnt
	return evnt
}
