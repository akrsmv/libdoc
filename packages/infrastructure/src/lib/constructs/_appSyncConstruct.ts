// import {
//     aws_appsync as appsync
// } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import * as appsync_alpha from '@aws-cdk/aws-appsync-alpha';

// import { sep } from 'path';

// import { DataModel } from '@incta/common';
// import { CognitoConstruct } from './cognitoConstruct';
// import { clientAppDirName, clientAppName } from "../incta-stack"


// export interface AppSyncConstructProps {
//     cognitoConstruct: CognitoConstruct
// }

// export class AppSyncConstruct extends Construct {
//     public readonly graphQLApi: appsync_alpha.GraphqlApi
//     public readonly notifierFunction: Function

//     constructor(scope: Construct, id: string, props: AppSyncConstructProps) {
//         super(scope, id)

//         const dataModel: DataModel = require(`${clientAppDirName}${sep}src${sep}data-model.json`)

//         this.graphQLApi = new appsync_alpha.GraphqlApi(this, 'AppSync', {
//             name: `${clientAppName}AppSync`,

//             authorizationConfig: {
//                 defaultAuthorization: {
//                     authorizationType: appsync_alpha.AuthorizationType.USER_POOL,
//                     userPoolConfig: {
//                         userPool: props.cognitoConstruct.userPool,
//                         defaultAction: appsync_alpha.UserPoolDefaultAction.ALLOW
//                     },
//                 },
//                 additionalAuthorizationModes: [
//                     {
//                         // todo comment "#workaroundcode" and unccoment below to test if they implemented it
//                         authorizationType: appsync_alpha.AuthorizationType.IAM
//                         // TODO because of lack of support by now we use '#workaroundcode' to add AWS_IAM
//                         //https://github.com/aws/aws-cdk/issues/6247
//                     }
//                 ]
//             }
//         });
//         // the #workaroundcode:
//         // ((this.graphQLApi.node.defaultChild as CfnGraphQLApi).additionalAuthenticationProviders as Array<CfnGraphQLApi.AdditionalAuthenticationProviderProperty>).push({
//         //     authenticationType: 'AWS_IAM',
//         // });

//         this.graphQLApi.grantSubscription(props.cognitoConstruct.authenticatedRole)
//         this.graphQLApi.grantMutation(props.cognitoConstruct.authenticatedRole)
//         this.graphQLApi.grantQuery(props.cognitoConstruct.authenticatedRole)
//         // no mutation access for unauthenticated users
//         this.graphQLApi.grantSubscription(props.cognitoConstruct.unauthenticatedRole)
//         this.graphQLApi.grantQuery(props.cognitoConstruct.unauthenticatedRole)

//         //TODO populate the schema based on data-model.json and aarts-config.json?

//         const schema = gqlSchemaTemplate
//             .replace(/##MUTATION_SECTION##/g, generateMutations(dataModel))
//             .replace(/##QUERY_SECTION##/g, generateQueries(dataModel))
//             .replace(/##SUBSCRIPTION##/g, generateSubscriptions(dataModel))
//             .replace(/##DOMAINTYPE_SECTION##/g, gqlDomainTypeSectionTemplate + "\n" + generateDomainTypes(dataModel) + "\n" + generateCommandTypes(dataModel))
//             .replace(/##ALL_SEARCHABLE_FIELDS_SECTION##/g, generateAllSearchableFields(dataModel))
//             .replace(/##ALL_ENTITIES_FIELDS_SECTION##/g, generateAllEntitiesFields(dataModel))
//             .replace(/##ALL_COMMANDS_FIELDS_SECTION##/g, generateAllCommandsFields(dataModel))
//             .replace(/##ALL_CUSTOM_QUERIES_FIELDS_SECTION##/g, generateAllCustomQueriesFields(dataModel))
//             .replace(/##ALL_DOMAIN_TYPES_UNION_SECTION##/g, generateAllDomainTypesUnion(dataModel))
//             .replace(/##ALL_COMMAND_TYPES_UNION_SECTION##/g, generateAllCommandTypesUnion(dataModel))

//         // DEBUG
//             // console.log(schema)
//         this.graphQLApi.schema.definition = schema

//         // /*
//         // CAUTION
//         // When you submit an update, AWS CloudFormation updates resources based on differences between what you submit and the stack's current template. 
//         // To cause this resource to be updated you must change a property value for this resource in the CloudFormation template. 
//         // Changing the Amazon S3 file content without changing a property value will not result in an update operation.
//         // See Update Behaviors of Stack Resources in the AWS CloudFormation User Guide : https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html
//         // */
//         // // this.graphQLApi.schema.definition = schema
//         // const cfnGraphQLSchema = new appsync.CfnGraphQLSchema(this, 'MyCfnGraphQLSchema', {
//         //     apiId: this.graphQLApi.apiId,

//         //     // the properties below are optional
//         //     definition: schema,
//         //     // definitionS3Location: 'definitionS3Location',
//         //   });


//         //         this.graphQLApi.schema.definition = `
//         // schema {
//         //     query: Query
//         //     mutation: Mutation
//         //     subscription: Subscription
//         // }

//         // type Mutation {
//         //     start(item: String!, payload: AWSJSON): AWSJSON
//         //     create(item: String!, payload: AWSJSON!): AWSJSON
//         //     update(item: String!, payload: AWSJSON!): AWSJSON
//         //     delete(item: String!, payload: AWSJSON!): AWSJSON
//         //     feed(item: String!, action: String!, identity: String!, ringToken: String!, eventSource: String!, body: String!): Notification  
//         // }

//         // type Query {
//         //     get(item: String, payload: AWSJSON!): AWSJSON 
//         //     query(item: String, payload: AWSJSON!): AWSJSON
//         // }

//         // type Subscription {
//         //     inbox(item: String, action: String, identity: String, ringToken: String, eventSource: String): Notification @aws_subscribe(mutations: ["feed"])
//         // }

//         // type Notification  {
//         //     item: String!
//         //     action: String!
//         //     identity: String!
//         //     ringToken: String!
//         //     eventSource: String!
//         //     body: String!
//         //     sentAt: String!
//         // }
//         // `
//     }
// }

// const gqlSchemaTemplate =
//     `
// schema {
//     query: Query
//     mutation: Mutation
//     subscription: Subscription
// }

// ##MUTATION_SECTION##

// ##QUERY_SECTION##

// type Subscription {
//     inbox(__typename: String, action: String, identity: String, ringToken: String, eventSource: String): Notification @aws_subscribe(mutations: ["feed"])  

//     ##SUBSCRIPTION##
// }

// type Notification  {
//     __typename: String!
//     __typename: String!
//     action: String!
//     identity: String!
//     ringToken: String!
//     eventSource: String!
//     body: String!
//     sentAt: String!
// }

// ##DOMAINTYPE_SECTION##


// ###
// ### All types query support
// ###
// input ItemIdInput {
// 	eq: String!
// }

// input QueryInput {
// 	__typename: String
// 	limit: Int
// 	pageToken: AWSJSON
// 	keysOnly: Boolean
// 	searchBackward: Boolean
// 	filter: QueryFilterInput
// }

// input QueryFilterInput {
//     #id is not part of data-model as all entities have it, but one should be able to search on it
//     id: ModelStringInput
    
//     ##ALL_SEARCHABLE_FIELDS_SECTION## 
// }

// input GetQueryInput {
// 	#possibility to supply pks both top level or within filter
// 	pks: DBTableKey
// 	filter: PKSFilterInput
// 	ringToken: String
// 	__typename: String
// 	pageToken: AWSJSON
// }

// #possibility to supply pks also via filter
// input PKSFilterInput {
// 	pks: DBTableKey
// }

// #input GetMetadataIput {
// #	__typename: String
// #	fromDate: String
// #	toDate: String
// #	inDates: [String]
// #}

// input CustomQueryInput {
// 	__typename: String!
// 	payload: AllCustomQueriesPropertiesInput!
// }

// input StartInput {
// 	__typename: String!
// 	payload: AllCommandsPropertiesInput!
// }

// input CreateInput {
//     __typename: String!
//     payload: AllEntitiesPropertiesInput!
// }

// input UpdateInput {
//     __typename: String!
//     id: String!
//     meta: String!
//     revisions: Int!
//     payload: AllEntitiesPropertiesInput!
// }

// input DeleteInput {
// 	__typename: String!
// 	pks: DBTableKey!
// }

// input AllEntitiesPropertiesInput {
//     # id is present here to allow users create their own id patterns ? TODO TEST this
//     id: String
//     ##ALL_ENTITIES_FIELDS_SECTION## 
// }

// input AllCommandsPropertiesInput {
//     ##ALL_COMMANDS_FIELDS_SECTION## 
// }

// input AllCustomQueriesPropertiesInput {
//     ##ALL_CUSTOM_QUERIES_FIELDS_SECTION## 
// }

// union DomainEntitiesUnion = ItemIdentifier | APIMetadata | APIMetadataItemProperties | APICommand | APIQuery | APIEntity | ##ALL_DOMAIN_TYPES_UNION_SECTION## | ##ALL_COMMAND_TYPES_UNION_SECTION##


// type QueryResultValue @aws_iam @aws_cognito_user_pools
//  {
// 	items: [DomainEntitiesUnion!]!
// 	pageToken: AWSJSON
// 	count: Int
// }

// type QueryResultConnection @aws_iam @aws_cognito_user_pools
//  {
// 	value: QueryResultValue
// 	done: Boolean!
// 	selectionSetList: [String]
// 	errors: [String]
// 	excludedFromFilter: [String]
// 	ringToken: String!
// }
// `



// function generateMutations(dataModel: DataModel): string {

//     let gqlMutationSectionTemplate = `
// type Mutation   {
//     start(params:  StartInput): QueryResultConnection 
//     create(params: CreateInput): QueryResultConnection
//     update(params: UpdateInput): QueryResultConnection 
//     delete(params: DeleteInput): QueryResultConnection 
//     feed(__typename: String!, action: String!, identity: String!, ringToken: String!, eventSource: String!, body: String!): Notification  @aws_iam
// }

// #type MutationResultConnection 
// # {
// #	value: MutationResultValue
// #	done: Boolean!
// #	selectionSetList: [String]
// #	errors: [String]
// #	ringToken: String!
// #}
// #
// #type MutationResultValue 
// # {
// #	item: DomainEntitiesUnion!
// #}
// `

//     return gqlMutationSectionTemplate
// }


// function generateQueries(dataModel: DataModel): string {
//     let queriesTemplateSection = `
// type Query   {
//     get(params: GetQueryInput!): QueryResultConnection @aws_iam @aws_cognito_user_pools
// 	query(params: QueryInput): QueryResultConnection @aws_iam @aws_cognito_user_pools
//     #getMetadata(params: GetMetadataIput!): QueryResultConnection
//     customQuery(params: CustomQueryInput!): QueryResultConnection

//     ##QUERY##
// }

// `

//     // WE DO NOT WANT QUERIES FOR EACH ENTITY AS THIS GREATLY INCREASES APPSYNC RESOLVERS
//     // for (const itemName of Object.keys(dataModel.Items)) {
//     //     queriesTemplateSection = queriesTemplateSection
//     //         .replace(/##QUERY##/g, `\tget${itemName}(params: GetQueryInput): ${itemName}Connection` + "\n" + `##QUERY##`)
//     //     queriesTemplateSection = queriesTemplateSection
//     //         .replace(/##QUERY##/g, `\tlist${itemName}(params: List${itemName}Input): ${itemName}Connection` + "\n" + `##QUERY##`)
//     // }

//     queriesTemplateSection = queriesTemplateSection.replace(/##QUERY##/g, '')

//     return queriesTemplateSection;
// }

// function generateSubscriptions(dataModel: DataModel): string {
//     return "";
// }

// function generateAllSearchableFields(dataModel: DataModel): string {
//     let itemGQL = "##SEARCH_INPUT_FIELD##"
//     for (const itemName of Object.keys(dataModel.Items)) {
//         if (itemName === "meta") continue
//         const itemPropsDef = dataModel.Items[itemName].props || {}
//         for (const itemPropName of Object.keys(itemPropsDef)) {
//             if (itemName === "meta") continue
//             let gqlType
//             if (itemPropsDef[itemPropName]!.type) {
//                 gqlType = itemPropsDef[itemPropName].type === "string" ? "String" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                     itemPropsDef[itemPropName].type === "string[]" ? "[String]" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                         itemPropsDef[itemPropName].type === "number" ? "Float" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                             itemPropsDef[itemPropName].type === "number[]" ? "[Float]" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                                 "String"
//             } else {
//                 gqlType = "AWSJSON" // TODO required and subproperties
//             }

//             if (itemPropsDef[itemPropName].type) { // we want all properties to search from and later decide which index to use, see BaseItemManager.__validateQuery method // && itemDef[itemPropName].rangeKeys && (itemDef[itemPropName].rangeKeys as string[]).length > 0
//                 const searchField = `\t${itemPropName}: ${gqlType.replace("!", "") === "String" ? "ModelStringInput" : gqlType.replace("!", "") === "Boolean" ? "ModelBooleanInput" : "ModelFloatInput"}`
//                 if (itemGQL.indexOf(searchField) === -1) {
//                     // filter out fields that already appeared in other domain types
//                     itemGQL = itemGQL.replace(/##SEARCH_INPUT_FIELD##/g, searchField + "\n" + `##SEARCH_INPUT_FIELD##`)
//                 }
//             }
//         }
//     }

//     itemGQL = itemGQL.replace(/##SEARCH_INPUT_FIELD##/g, "")

//     return itemGQL;
// }

// function generateAllEntitiesFields(dataModel: DataModel): string {
//     let itemGQL = "##INPUT_FIELD##"
//     for (const itemName of Object.keys(dataModel.Items)) {
//         if (itemName === "meta") continue
//         const itemDef = dataModel.Items[itemName].props
//         for (const itemPropName of Object.keys(itemDef)) {
//             if (itemName === "meta") continue
//             let gqlType
//             if (itemDef[itemPropName].type) {
//                 gqlType = itemDef[itemPropName].type === "string" ? "String" :
//                     itemDef[itemPropName].type === "string[]" ? "[String]" :
//                         itemDef[itemPropName].type === "number" ? "Float" :
//                             itemDef[itemPropName].type === "number[]" ? "[Float]" :
//                                 "String"
//             } else {
//                 gqlType = "AWSJSON" // TODO required and subproperties
//             }

//             if (itemDef[itemPropName].type) { // we want all properties to search from and later decide which index to use, see BaseItemManager.__validateQuery method // && itemDef[itemPropName].rangeKeys && (itemDef[itemPropName].rangeKeys as string[]).length > 0

//                 const domainField = `\t${itemPropName}: ${gqlType}`
//                 if (itemGQL.indexOf(domainField) === -1) {
//                     // filter out fields that already appeared in other domain types
//                     itemGQL = itemGQL.replace(/##INPUT_FIELD##/g, domainField + "\n" + `##INPUT_FIELD##`)
//                 }
//             }
//         }
//     }
//     itemGQL = itemGQL.replace(/##INPUT_FIELD##/g, "")

//     return itemGQL;
// }

// function generateAllCommandsFields(dataModel: DataModel): string {
//     let itemGQL = "##INPUT_FIELD##"
//     for (const itemName of Object.keys(dataModel.Commands)) {
//         if (itemName === "meta") continue
//         const itemDef = dataModel.Commands[itemName].props
//         for (const itemPropName of Object.keys(itemDef)) {
//             if (itemName === "meta") continue
//             let gqlType
//             if (itemDef[itemPropName].type) {
//                 gqlType = itemDef[itemPropName].type === "string" ? "String" :
//                     itemDef[itemPropName].type === "string[]" ? "[String]" :
//                         itemDef[itemPropName].type === "number" ? "Float" :
//                             itemDef[itemPropName].type === "number[]" ? "[Float]" :
//                                 "String"
//             } else {
//                 gqlType = "AWSJSON" // TODO required and subproperties
//             }

//             if (itemDef[itemPropName].type) { // we want all properties to search from and later decide which index to use, see BaseItemManager.__validateQuery method // && itemDef[itemPropName].rangeKeys && (itemDef[itemPropName].rangeKeys as string[]).length > 0

//                 const domainField = `\t${itemPropName}: ${gqlType}`
//                 if (itemGQL.indexOf(domainField) === -1) {
//                     // filter out fields that already appeared in other domain types
//                     itemGQL = itemGQL.replace(/##INPUT_FIELD##/g, domainField + "\n" + `##INPUT_FIELD##`)
//                 }
//             }
//         }
//     }
//     itemGQL = itemGQL.replace(/##INPUT_FIELD##/g, "")

//     return itemGQL;
// }

// function generateAllCustomQueriesFields(dataModel: DataModel): string {
//     let itemGQL = "##INPUT_FIELD##"
//     for (const itemName of Object.keys(dataModel.Queries)) {
//         if (itemName === "meta") continue
//         const itemDef = dataModel.Queries[itemName].props
//         for (const itemPropName of Object.keys(itemDef)) {
//             if (itemName === "meta") continue

//             let gqlType
//             if (itemDef[itemPropName].type) {
//                 gqlType = itemDef[itemPropName].type === "string" ? "String" :
//                     itemDef[itemPropName].type === "string[]" ? "[String]" :
//                         itemDef[itemPropName].type === "number" ? "Float" :
//                             itemDef[itemPropName].type === "number[]" ? "[Float]" :
//                                 "String"
//             } else {
//                 gqlType = "AWSJSON" // TODO required and subproperties
//             }

//             if (itemDef[itemPropName].type) { // we want all properties to search from and later decide which index to use, see BaseItemManager.__validateQuery method // && itemDef[itemPropName].rangeKeys && (itemDef[itemPropName].rangeKeys as string[]).length > 0

//                 const domainField = `\t${itemPropName}: ${gqlType}`
//                 if (itemGQL.indexOf(domainField) === -1) {
//                     // filter out fields that already appeared in other domain types
//                     itemGQL = itemGQL.replace(/##INPUT_FIELD##/g, domainField + "\n" + `##INPUT_FIELD##`)
//                 }
//             }
//         }
//     }
//     itemGQL = itemGQL.replace(/##INPUT_FIELD##/g, "")

//     return itemGQL;
// }

// function generateAllDomainTypesUnion(dataModel: DataModel): string {
//     let itemGQL = Object.keys(dataModel.Items).filter(key => key !== "meta").concat(Object.keys(dataModel.Items).filter(key => key !== "meta").map(item => `${item}History`)).join(' | ')

//     return itemGQL;
// }

// function generateAllCommandTypesUnion(dataModel: DataModel): string {
//     let itemGQL = Object.keys(dataModel.Commands).filter(key => key !== "meta").concat(Object.keys(dataModel.Commands).filter(key => key !== "meta").map(item => `${item}History`)).join(' | ')

//     return itemGQL;
// }

// function generateDomainTypes(dataModel: DataModel): string {
//     let domainTypesDefs = ""
//     for (const itemName of Object.keys(dataModel.Items)) {
//         if (itemName === "meta") continue
//         let itemGQL = singleDomainTypeTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let itemHistoryGQL = singleDomainHistoryTypeTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let itemGQLInput = singleDomainInputTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let itemGQLConnection = singleDomainConnectionTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let listItemQueryInput = domainItemQueryInputTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)

//         const itemPropsDef = dataModel.Items[itemName].props
//         for (const itemPropName of Object.keys(itemPropsDef)) {
//             if (itemName === "meta") continue
//             let gqlType
//             if (itemPropsDef[itemPropName].type) {
//                 gqlType = itemPropsDef[itemPropName].type === "string" ? "String" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                     itemPropsDef[itemPropName].type === "string[]" ? "[String]" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                         itemPropsDef[itemPropName].type === "number" ? "Float" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                             itemPropsDef[itemPropName].type === "number[]" ? "[Float]" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                                 "String"
//             } else {
//                 gqlType = "AWSJSON" // TODO required and subproperties
//             }

//             itemGQL = itemGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName}: ${gqlType}` + "\n" + `##DOMAIN_PROPERTY##`)
//             if (!!itemPropsDef[itemPropName].peer) {
//                 // add a graphql loadable property definition 
//                 itemGQL = itemGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName.charAt(0).toUpperCase() + itemPropName.substring(1)}: ${itemPropsDef[itemPropName].peer}` + "\n" + `##DOMAIN_PROPERTY##`)
//             }

//             itemHistoryGQL = itemHistoryGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName}: ${gqlType}` + "\n" + `##DOMAIN_PROPERTY##`)
//             if (!!itemPropsDef[itemPropName].peer) {
//                 // add a graphql loadable property definition 
//                 itemHistoryGQL = itemHistoryGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName.charAt(0).toUpperCase() + itemPropName.substring(1)}: ${itemPropsDef[itemPropName].peer}` + "\n" + `##DOMAIN_PROPERTY##`)
//             }

//             itemGQLInput = itemGQLInput.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName}: ${gqlType}` + "\n" + `##DOMAIN_PROPERTY##`)

//             if (itemPropsDef[itemPropName].type) { // we want all properties to search from and later decide which index to use, see BaseItemManager.__validateQuery method // && itemPropsDef[itemPropName].rangeKeys && (itemPropsDef[itemPropName].rangeKeys as string[]).length > 0
//                 listItemQueryInput = listItemQueryInput.replace(/##SEARCH_INPUT_FIELD##/g, `\t${itemPropName}: ${gqlType.replace("!", "") === "String" ? "ModelStringInput" : gqlType.replace("!", "") === "Boolean" ? "ModelBooleanInput" : "ModelFloatInput"}` + "\n" + `##SEARCH_INPUT_FIELD##`)
//             }
//         }
//         itemGQL = itemGQL.replace(/##DOMAIN_PROPERTY##/g, "")
//         itemHistoryGQL = itemHistoryGQL.replace(/##DOMAIN_PROPERTY##/g, "")
//         listItemQueryInput = listItemQueryInput.replace(/##SEARCH_INPUT_FIELD##/g, "")
//         itemGQLInput = itemGQLInput
//             .replace(/##DOMAIN_PROPERTY##/g, "")
//             .replace(/\!/g, "") // input types not to have mandatory stuff for now
//         domainTypesDefs += itemGQL + "\n" + itemHistoryGQL + "\n" + itemGQLInput + "\n" + itemGQLConnection + "\n" + listItemQueryInput + "\n"
//     }
//     return domainTypesDefs;
// }

// function generateCommandTypes(dataModel: DataModel): string {
//     let commandTypesDefs = ""
//     for (const itemName of Object.keys(dataModel.Commands)) {
//         if (itemName === "meta") continue
//         let itemGQL = singleDomainTypeTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let itemHistoryGQL = singleDomainHistoryTypeTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let itemGQLInput = singleDomainInputTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let itemGQLConnection = singleDomainConnectionTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)
//         let listItemQueryInput = domainItemQueryInputTemplate
//             .replace(/##DOMAIN_NAME##/g, itemName)

//         const itemPropsDef = dataModel.Commands[itemName].props
//         for (const itemPropName of Object.keys(itemPropsDef)) {
//             if (itemName === "meta") continue
//             let gqlType
//             if (itemPropsDef[itemPropName].type) {
//                 gqlType = itemPropsDef[itemPropName].type === "string" ? "String" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                     itemPropsDef[itemPropName].type === "string[]" ? "[String]" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                         itemPropsDef[itemPropName].type === "number" ? "Float" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                             itemPropsDef[itemPropName].type === "number[]" ? "[Float]" + (itemPropsDef[itemPropName].required === true ? "!" : "") :
//                                 "String"
//             } else {
//                 gqlType = "AWSJSON" // TODO required and subproperties
//             }

//             itemGQL = itemGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName}: ${gqlType}` + "\n" + `##DOMAIN_PROPERTY##`)
//             if (!!itemPropsDef[itemPropName].peer) {
//                 // add a graphql loadable property definition 
//                 itemGQL = itemGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName.charAt(0).toUpperCase() + itemPropName.substring(1)}: ${itemPropsDef[itemPropName].peer}` + "\n" + `##DOMAIN_PROPERTY##`)
//             }

//             itemHistoryGQL = itemHistoryGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName}: ${gqlType}` + "\n" + `##DOMAIN_PROPERTY##`)
//             if (!!itemPropsDef[itemPropName].peer) {
//                 // add a graphql loadable property definition 
//                 itemHistoryGQL = itemHistoryGQL.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName.charAt(0).toUpperCase() + itemPropName.substring(1)}: ${itemPropsDef[itemPropName].peer}` + "\n" + `##DOMAIN_PROPERTY##`)
//             }

//             itemGQLInput = itemGQLInput.replace(/##DOMAIN_PROPERTY##/g, `\t${itemPropName}: ${gqlType}` + "\n" + `##DOMAIN_PROPERTY##`)

//             if (itemPropsDef[itemPropName].type) { // we want all properties to search from and later decide which index to use, see BaseItemManager.__validateQuery method // && itemPropsDef[itemPropName].rangeKeys && (itemPropsDef[itemPropName].rangeKeys as string[]).length > 0
//                 listItemQueryInput = listItemQueryInput.replace(/##SEARCH_INPUT_FIELD##/g, `\t${itemPropName}: ${gqlType.replace("!", "") === "String" ? "ModelStringInput" : gqlType.replace("!", "") === "Boolean" ? "ModelBooleanInput" : "ModelFloatInput"}` + "\n" + `##SEARCH_INPUT_FIELD##`)
//             }
//         }
//         itemGQL = itemGQL.replace(/##DOMAIN_PROPERTY##/g, "")
//         itemHistoryGQL = itemHistoryGQL.replace(/##DOMAIN_PROPERTY##/g, "")
//         listItemQueryInput = listItemQueryInput.replace(/##SEARCH_INPUT_FIELD##/g, "")
//         itemGQLInput = itemGQLInput
//             .replace(/##DOMAIN_PROPERTY##/g, "")
//             .replace(/\!/g, "") // input types not to have mandatory stuff for now
//         commandTypesDefs += itemGQL + "\n" + itemHistoryGQL + "\n" + itemGQLInput + "\n" + itemGQLConnection + "\n" + listItemQueryInput + "\n"
//     }
//     return commandTypesDefs;
// }

// const dynamoItemBaseProps = `
// \tid: String!
// \tmeta: String!

// # TODO this can be removed from here?
// \t__typename: String

// \titem_state: String
// \tstate_history: AWSJSON
// \trevisions: Int
// \tchecksum: String

// \tuser_created: String
// \tuser_updated: String
// \tdate_created: AWSDateTime
// \tdate_updated: AWSDateTime

// \tringToken: String
// \tstrictDomainMode: Boolean
// \tprocessingMessages: [ProcMessage]
// `

// const ProcMessageType = `
// type ProcMessage   {
// \tseverity: String,
// \tmessage: String,
// \tproperties: String
// }
// `

// const gqlDomainTypeSectionTemplate = `
// type Aggregation   {
// \tid: String,
// \tmeta: String,
// \tcount: Int
// }

// type APIMetadata @aws_iam @aws_cognito_user_pools
//  {
// \tversion: String
// #\t__typename: String!
// \tEntities: [APIEntity]
// \tQueries: [APIQuery]
// \tCommands: [APICommand]
// }

// type APIEntity @aws_iam @aws_cognito_user_pools
//  {
// #\t__typename: String!
// \tname: String
// \tprops: [APIMetadataItemProperties!]
// \tDESC: String
// }

// type APICommand @aws_iam @aws_cognito_user_pools
//  {
// #\t__typename: String!
// \tname: String
// \tprops: [APIMetadataItemProperties!]
// #TODO future developments - make this enum, or somehow ref to an Entity
// \rresultTypename: String!
// \rlambdaAction: String!
// \tDESC: String
// }

// type APIQuery @aws_iam @aws_cognito_user_pools
//  {
// #\t__typename: String!
// \tname: String
// \tprops: [APIMetadataItemProperties!]
// #TODO future developments - make this enum, or somehow ref to an Entity
// \tresultTypename: String!
// \tlambdaAction: String!
// \tDESC: String
// }

// type APIMetadataItemProperties @aws_iam @aws_cognito_user_pools
//  {
// #\t__typename: String!
// \tprops: [APIMetadataItemProperties]
// \tname: String
// \ttype: String
// \tunique: Boolean
// \trequired: Boolean
// \tDESC: String
// \tpeer: String
// }

// input ModelBooleanInput {
// \tne: Boolean
// \teq: Boolean
// \tattribute_exists: Boolean
// \tattribute_not_exists: Boolean
// }

// input ModelFloatInput {
// \tne: Float
// \teq: Float
// \tle: Float
// \tlt: Float
// \tge: Float
// \tgt: Float
// \tbetween: [Float]
// \tattribute_exists: Boolean
// \tattribute_not_exists: Boolean
// }

// input ModelStringInput {
// \tne: String
// \teq: String
// \tle: String
// \tlt: String
// \tge: String
// \tgt: String
// \tcontains: String
// \tnot_contains: String
// \tbetween: [String]
// \tbegins_with: String
// \tattribute_exists: Boolean
// \tattribute_not_exists: Boolean
// }

// type ItemIdentifier   {
// \tid: String!
// \tmeta: String
// }

// input ItemIdentifierInput {
// \tid: String!
// \tmeta: String!
// \trevisions: Int
// }

// input DBTableKey {
// \teq: [ItemIdentifierInput!]!
// }

// interface Item {${dynamoItemBaseProps}}
// ${ProcMessageType}
// `

// const singleDomainHistoryTypeTemplate = `
// type ##DOMAIN_NAME##History implements Item  {
// ##DOMAIN_PROPERTY##${dynamoItemBaseProps}}
// `
// const singleDomainTypeTemplate = `
// type ##DOMAIN_NAME## implements Item  {
// ##DOMAIN_PROPERTY##${dynamoItemBaseProps}}
// `
// const singleDomainInputTemplate = `
// type ##DOMAIN_NAME##Input {
// ##DOMAIN_PROPERTY##${dynamoItemBaseProps}}
// `
// const singleDomainConnectionTemplate = `
// type ##DOMAIN_NAME##Connection   {
// \titems: [##DOMAIN_NAME##!]!
// \tpageToken: AWSJSON
// \tcount: Int,
// \tselectionSetList: [String]
// }
// `

// const domainItemQueryInputTemplate = `
// input List##DOMAIN_NAME##Input {
// \tringToken: String
// \tnshard: Int
// \titem_state: ModelStringInput

// ### 
// ##SEARCH_INPUT_FIELD##
// ###

// \tpageToken: AWSJSON,
// \tlimit: Int,
// \tkeysOnly: Boolean
// \tdate_created: ModelStringInput
// \tdate_updated: ModelStringInput
// \tuser_created: ModelStringInput
// \tuser_updated: ModelStringInput
// \tand: [List##DOMAIN_NAME##Input]
// \tor: [List##DOMAIN_NAME##Input]
// }
// `
