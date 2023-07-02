import {
    aws_lambda as lambda,
    aws_appsync as appsync
} from "aws-cdk-lib"
import { Construct } from 'constructs';

import { AppSyncConstruct } from './appSyncConstruct';
import { CdkStackProps } from "../cdk-stack";
import { plural } from "pluralize";


export class AppSyncLambdaDataSourceConstruct extends Construct {
    constructor(scope: Construct, id: string, props: AppSyncConstruct & CdkStackProps & {lambdaFunction: lambda.Function}) {
        super(scope, id)
        // LOCAL DATA SOURCE ------------->
        const locaNoneDS = new appsync.NoneDataSource(this, `None`, {
            api: props.graphQLApi,
            name: 'Loopback',
            description: 'loopback datasource',
        });
        // <--------------

        const lds = new appsync.LambdaDataSource(this, 'Lambda', {
            api: props.graphQLApi,
            lambdaFunction: props.lambdaFunction,
            name: "Lambda"
        })
        lds.createResolver(`getResolver`, {
            fieldName: `get`,
            typeName: `Query`,
            responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
            requestMappingTemplate: appsync.MappingTemplate.fromString(`
#set($args = {})
#set($args.id = $context.arguments.id)
{
"version": "2017-02-28",
"operation": "Invoke",
"payload": {
    "meta": {
        "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
        "action": "get",
        "__typename": ""
    },                    
    "arguments": $utils.toJson($args),
    "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
    "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
    "identity": $utils.toJson($context.identity),
    "test_entire_vtl_ctx": $utils.toJson($context)
}
}`)
        });
        lds.createResolver(`delResolver`, {
            fieldName: `del`,
            typeName: `Mutation`,
            responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
            requestMappingTemplate:
                appsync.MappingTemplate.fromString(`
#set($args = {})
#set($args.id = $context.arguments.id)
#set($args.rev = $context.arguments.rev)
{    
"version": "2017-02-28",
"operation": "Invoke",
"payload": {
    "meta": {
        "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
        "action": "delete",
        "__typename": ""
    },                    
    "arguments": $utils.toJson($args),
    "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
    "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
    "identity": $utils.toJson($context.identity),
    "test_entire_vtl_ctx": $utils.toJson($context)
}
}`)
        });
        for (const itemKey of
            Object.keys(props.dataModelJson.Items)
                .concat(Object.keys(props.dataModelJson.Commands)
                    .concat(Object.keys(props.dataModelJson.Queries))).filter(key => key !== '__meta')) {
            // query{{item}} fields
            lds.createResolver(`query${plural(itemKey)}Resolver`, {
                fieldName: `query${plural(itemKey)}`,
                typeName: `Query`,
                responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
                requestMappingTemplate:
                    appsync.MappingTemplate.fromString(`{
                "version": "2017-02-28",
                "operation": "Invoke",
                "payload": {
                    "meta": {
                        "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
                        "action": "query",
                        "__typename": "${itemKey}"
                    },                    
                    "arguments": $utils.toJson($context.arguments.input),
                    "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
                    "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
                    "identity": $utils.toJson($context.identity),
                    "test_entire_vtl_ctx": $utils.toJson($context)
                }
            }`)
            });
            // search{{item}} fields
            lds.createResolver(`search${plural(itemKey)}Resolver`, {
                fieldName: `search${plural(itemKey)}`,
                typeName: `Query`,
                responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
                requestMappingTemplate:
                    appsync.MappingTemplate.fromString(`{
                "version": "2017-02-28",
                "operation": "Invoke",
                "payload": {
                    "meta": {
                        "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
                        "action": "search",
                        "__typename": "${itemKey}"
                    },                    
                    "arguments": $utils.toJson($context.arguments.input),
                    "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
                    "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
                    "identity": $utils.toJson($context.identity),
                    "test_entire_vtl_ctx": $utils.toJson($context)
                }
            }`)
            });
            // get{{item}} resolvers WILL BE REMOVING THOSE in favour of the generic get resolver above
//             lds.createResolver(`get${plural(itemKey)}Resolver`, {
//                 fieldName: `get${plural(itemKey)}`,
//                 typeName: `Query`,
//                 responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
//                 requestMappingTemplate:
//                     appsync.MappingTemplate.fromString(`
// #set($args = {})
// #set($args.id = $context.arguments.id)
// {
//     "version": "2017-02-28",
//     "operation": "Invoke",
//     "payload": {
//         "meta": {
//             "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
//             "action": "get",
//             "__typename": "${itemKey}"
//         },                    
//         "arguments": $utils.toJson($args),
//         "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
//         "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
//         "identity": $utils.toJson($context.identity),
//         "test_entire_vtl_ctx": $utils.toJson($context)
//     }
// }`)
//             });
            // update{{item}} resolvers
            lds.createResolver(`update${itemKey}Resolver`, {
                fieldName: `update${itemKey}`,
                typeName: `Mutation`,
                responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
                requestMappingTemplate:
                    appsync.MappingTemplate.fromString(`
$!{context.arguments.input.put("__typename", "${itemKey}")}
$!{context.arguments.input.put("rev", $context.arguments.rev)}
{
    "version": "2017-02-28",
    "operation": "Invoke",
    "payload": {
        "meta": {
            "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
            "action": "update",
            "__typename": "${itemKey}"
        },                    
        "arguments": $utils.toJson($context.arguments.input),
        "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
        "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
        "identity": $utils.toJson($context.identity),
        "test_entire_vtl_ctx": $utils.toJson($context)
    }
}`)
            });
            // patch{{item}} resolvers
            lds.createResolver(`patch${itemKey}Resolver`, {
                fieldName: `patch${itemKey}`,
                typeName: `Mutation`,
                responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
                requestMappingTemplate:
                    appsync.MappingTemplate.fromString(`
$!{context.arguments.input.put("__typename", "${itemKey}")}
$!{context.arguments.input.put("rev", $context.arguments.rev)}
{
    "version": "2017-02-28",
    "operation": "Invoke",
    "payload": {
    "meta": {
        "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
        "action": "patch",
        "__typename": "${itemKey}"
    },                    
    "arguments": $utils.toJson($context.arguments.input),
    "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
    "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
    "identity": $utils.toJson($context.identity),
    "test_entire_vtl_ctx": $utils.toJson($context)
    }
}`)
            });
            // delete{{item}} resolvers WILL BE REMOVING THOSE in favour of the generic del resolver above
//             lds.createResolver(`delete${itemKey}Resolver`, {
//                 fieldName: `delete${itemKey}`,
//                 typeName: `Mutation`,
//                 responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
//                 requestMappingTemplate:
//                     appsync.MappingTemplate.fromString(`
// #set($args = {})
// #set($args.id = $context.arguments.id)
// #set($args.rev = $context.arguments.rev)
// {    
//     "version": "2017-02-28",
//     "operation": "Invoke",
//     "payload": {
//         "meta": {
//             "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
//             "action": "delete",
//             "__typename": "${itemKey}"
//         },                    
//         "arguments": $utils.toJson($args),
//         "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
//         "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
//         "identity": $utils.toJson($context.identity),
//         "test_entire_vtl_ctx": $utils.toJson($context)
//     }
// }`)
//             });
            // create{{item}} resolvers
            lds.createResolver(`create${itemKey}Resolver`, {
                fieldName: `create${itemKey}`,
                typeName: `Mutation`,
                responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
                requestMappingTemplate:
                    appsync.MappingTemplate.fromString(`
$!{context.arguments.input.put("__typename", "${itemKey}")}
{
    "version": "2017-02-28",
    "operation": "Invoke",
    "payload": {
        "meta": {
            "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
            "action": "create",
            "__typename": "${itemKey}"
        },                    
        "arguments": $utils.toJson($context.arguments.input),
        "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
        "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
        "identity": $utils.toJson($context.identity),
        "test_entire_vtl_ctx": $utils.toJson($context)
    }
}`)
            });

        }

        for (const itemKey of Object.keys(props.dataModelJson.Commands).filter(key => key !== '__meta')) {
            // {{item}} resolvers for starting commands
            lds.createResolver(`${itemKey}Resolver`, {
                fieldName: `${itemKey}`,
                typeName: `Mutation`,
                responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
                requestMappingTemplate:
                    appsync.MappingTemplate.fromString(`
$!{context.arguments.input.put("__typename", "${itemKey}")}
{
    "version": "2017-02-28",
    "operation": "Invoke",
    "payload": {
        "meta": {
            "graphqlResolverFieldName": $utils.toJson($context.info.fieldName),
            "action": "start",
            "__typename": "${itemKey}"
        },                    
        "arguments": $utils.toJson($context.arguments.input),
        "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
        "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
        "identity": $utils.toJson($context.identity),
        "test_entire_vtl_ctx": $utils.toJson($context)
    }
}`)
            });
        }
    }
}
