import {
    aws_appsync as appsync,
    aws_lambda as lambda
} from 'aws-cdk-lib';
import * as nunjucks from 'nunjucks'
import { Construct } from 'constructs';
import { join, sep } from 'path';
import { CognitoConstruct } from './cognitoConstruct';
import { CdkStackProps } from '../cdk-stack';
import { readFileSync, writeFileSync } from 'fs';
import { firstCaseUpper } from '@incta/common-utils';
import { prepareItemDefinitionsDataForTemplating, except_system_fields } from '@incta/ddb-model';
import pluralize from 'pluralize';
import { ppjson } from '@incta/common-utils';
import { plural } from 'pluralize';
import { AppSyncLambdaDataSourceConstruct } from './appSyncLambdaDataSourceConstruct';


const getGraphqlSingleKeyAndQueryInputType = (__typename: string, key: string, attrs: any): string => {
    if (key === 'id') {
        return `${key}: StringQueryInput`
    }
    if (typeof attrs.__type === 'object' && Array.isArray(attrs.__type)) {
        // TODO NOT SUPPORTED
        return ''
    }
    else if (typeof attrs.__type === 'object') {
        // TODO NOT SUPPORTED
        return ''
    }
    else if (attrs.__type === 'enum') {
        const singularKey = pluralize.singular(key)
        return `${key}: ${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Enum`
    }
    switch (attrs.__type) {
        case "isodatestring": return `${key}: StringQueryInput`;
        case "string": return `${key}: StringQueryInput`;
        // TODO NOT SUPPORTED
        case "string[]": return '';
        case "number": return `${key}: FloatQueryInput`;
        case "boolean": return `${key}: BooleanQueryInput`;
        // TODO NOT SUPPORTED
        case "number[]": return '';
        default: return attrs.__type;
    }
};
const getGraphqlSingleKeyAndInputType = (__typename: string, key: string, attrs: any): string => {
    if (key === 'id') {
        return `${key}: ID`;
    }
    if (typeof attrs.__type === 'object' && Array.isArray(attrs.__type)) {
        const singularKey = pluralize.singular(key)
        return `${key}: [${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}DtoInput]`
    }
    else if (typeof attrs.__type === 'object') {
        const singularKey = pluralize.singular(key)
        return `${key}: ${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}DtoInput`
    }
    else if (attrs.__type === 'enum') {
        const singularKey = pluralize.singular(key)
        return `${key}: ${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Enum`
    }
    switch (attrs.__type) {
        case "isodatestring": return `${key}: AWSDateTime`;
        case "string": return `${key}: String`;
        case "boolean": return `${key}: Boolean`;
        case "string[]": return `${key}: [String]`;
        case "number": return `${key}: Float`;
        case "number[]": return `${key}: [Float]`;
        default: return `${key}: ${attrs.__type}`;
    }
}

const getGraphqlType = (__typename: string, key: string, attrs: any): string => {
    if (key === 'id') {
        return 'ID'
    }
    if (typeof attrs.__type === 'object' && Array.isArray(attrs.__type)) {
        const singularKey = pluralize.singular(key)
        return `[${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto]`
    }
    else if (typeof attrs.__type === 'object') {
        const singularKey = pluralize.singular(key)
        return `${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Dto`
    }
    else if (attrs.__type === 'enum') {
        const singularKey = pluralize.singular(key)
        return `${__typename[0].toUpperCase() + __typename.slice(1)}${singularKey[0].toUpperCase() + singularKey.slice(1)}Enum`
    }
    switch (attrs.__type) {
        case "isodatestring": return "AWSDateTime";
        case "boolean": return "Boolean";
        case "string": return "String";
        case "string[]": return "[String]";
        case "number": return "Float";
        case "number[]": return "[Float]";
        default: return attrs.__type;
    }
}

export class AppSyncConstruct extends Construct {
    public readonly graphQLApi: appsync.GraphqlApi
    public readonly notifierFunction: Function
    public readonly schema: string

    constructor(scope: Construct, id: string, props: CdkStackProps & CognitoConstruct & { lambdaDs: lambda.Function }) {
        super(scope, id)

        const nunjucksEnv = nunjucks.configure({ autoescape: false, noCache: true })
        nunjucksEnv.addFilter('firstCaseUpper', firstCaseUpper)
        nunjucksEnv.addFilter('plural', (noun: string) => plural(noun))
        nunjucksEnv.addGlobal('getGraphqlSingleKeyAndQueryInputType', getGraphqlSingleKeyAndQueryInputType);
        nunjucksEnv.addGlobal('getGraphqlSingleKeyAndInputType', getGraphqlSingleKeyAndInputType);
        nunjucksEnv.addGlobal('getGraphqlType', getGraphqlType);
        nunjucksEnv.addFilter('except_system_fields', except_system_fields);
        const allItems = prepareItemDefinitionsDataForTemplating(Object.entries(props.dataModelJson.Items).concat(Object.entries(props.dataModelJson.Queries)).concat(Object.entries(props.dataModelJson.Commands)))
        const allDtos = prepareItemDefinitionsDataForTemplating(Object.entries(props.dataModelJson.Items))
        const allQueries = prepareItemDefinitionsDataForTemplating(Object.entries(props.dataModelJson.Queries))
        const allCommands = prepareItemDefinitionsDataForTemplating(Object.entries(props.dataModelJson.Commands))
        writeFileSync('schema-input.json', ppjson(allItems));


        const allItemsUniqueKeysQueryInputs = new Set<string>()
        for (const [itemKey, attr] of Object.entries(allItems)) {
            for (const [attr_itemKey, attr_attr] of Object.entries((attr as any).itemDef.__attributes)) {
                allItemsUniqueKeysQueryInputs.add(getGraphqlSingleKeyAndQueryInputType((attr as any).__typename, attr_itemKey, attr_attr))
            }
        }

        const allItemsKeysInput = new Set<string>()
        for (const [itemKey, attr] of Object.entries(allItems)) {
            for (const [attr_itemKey, attr_attr] of Object.entries((attr as any).itemDef.__attributes)) {
                allItemsKeysInput.add(getGraphqlSingleKeyAndInputType((attr as any).__typename, attr_itemKey, attr_attr))
            }
        }

        this.schema = nunjucks.renderString(
            readFileSync(join(__dirname.replace(`${sep}dist${sep}`, `${sep}src${sep}`), '..', 'templates', 'graphql-schema', `generic-schema.nunjucks`)).toString(),
            {
                allItems,
                allDtos,
                allQueries,
                allCommands,
                allItemsUniqueKeysQueryInputDefinitions: Array.from(allItemsUniqueKeysQueryInputs).join('\n'),
                AllItemsKeysInputDefinitions: Array.from(allItemsKeysInput).join('\n')
            })

        // debugpurposes later make it always write and bindschema to the written file
        writeFileSync('schema.graphql', this.schema);

        let ischema: appsync.ISchema = {
            bind: (api: appsync.IGraphqlApi, options?: appsync.SchemaBindOptions) => {
                return {
                    apiId: api.apiId,
                    definition: this.schema
                }
            }
        }

        this.graphQLApi = new appsync.GraphqlApi(this, 'GraphQLApi', {
            schema: ischema,
            name: `${props.clientAppName}AppSync`,
            authorizationConfig: {
                defaultAuthorization: {
                    authorizationType: appsync.AuthorizationType.USER_POOL,
                    userPoolConfig: {
                        userPool: props.userPool,
                        defaultAction: appsync.UserPoolDefaultAction.ALLOW
                    },
                },
                additionalAuthorizationModes: [
                    {
                        authorizationType: appsync.AuthorizationType.IAM
                    }
                ]
            }
        });

        this.graphQLApi.grantSubscription(props.authenticatedRole)
        this.graphQLApi.grantMutation(props.authenticatedRole)
        this.graphQLApi.grantQuery(props.authenticatedRole)
        // no mutation access for unauthenticated users
        this.graphQLApi.grantSubscription(props.unauthenticatedRole)
        this.graphQLApi.grantQuery(props.unauthenticatedRole)


        //------------------------------->
        // TEST DS creation with permissioning 
        const appSyncLambdaDatasourceConstruct = new AppSyncLambdaDataSourceConstruct(this, "DataSource", {
            ...props,
            lambdaFunction: props.lambdaDs,
            ...this
        })
        //<-------------------------------

        // -------------------------------->
        // TEST LOCAL resolver serving the graphql schema
        // const appSyncLocalDatasourceConstruct = new AppSyncLocalDatasourceConstruct(this, "None", {
        //     ...props,
        //     ...this
        // })
        //<---------------------------------
    }
}