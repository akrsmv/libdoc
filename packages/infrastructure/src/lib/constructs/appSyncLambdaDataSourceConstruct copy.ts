import {
    aws_lambda as lambda,
    aws_appsync as appsync
} from "aws-cdk-lib"
import { Construct } from 'constructs';

import { AppSyncConstruct } from './appSyncConstruct';


export type AartsResolver = {
    fieldName: string,
    payloadSubstitues?: {
        action?: string,
        jobType?: "long" | "short",
        __typename?: string,
        arguments?: string
    }
}

export interface AppSyncLambdaDataSourceConstructProps {
    appSyncConstruct: AppSyncConstruct
    lambdaFunction: lambda.Function
    mutateResolvers: Set<AartsResolver>
    queryResolvers: Set<AartsResolver>
}

export class AppSyncLambdaDataSourceConstruct extends Construct {
    constructor(scope: Construct, id: string, props: AppSyncLambdaDataSourceConstructProps) {
        super(scope, id)

        const resolverRequestMappingTemplate = (resolver: AartsResolver) => {

            let transformRequestParamsSection

            switch (resolver.payloadSubstitues?.action || resolver.fieldName) {
                case ("query"): transformRequestParamsSection = `
#set( $args = $util.map.copyAndRetainAllKeys($context.arguments.params, ["id", "filter","limit","searchBackward","pageToken","keysOnly"]) )
`; break
                // TODO remove getMetadata and rely on system queries of type action and __typename?
                // TODO analyse the idea of ahving "fromDate", "toDate", "inDates" as additional query params, along with limit, searchbackward etc
                //                 case ("getMetadata"): transformRequestParamsSection = `
                // #set( $args = $util.map.copyAndRetainAllKeys($context.arguments.params, ["fromDate", "toDate", "inDates"]) )
                // `; break
                case ("get"):
                case ("delete"): transformRequestParamsSection = `
## supply pks both top level or within "filter"
#set( $args = $util.map.copyAndRetainAllKeys($context.arguments.params, ["pks"]) )
#if($util.isList($context.arguments.params.filter.pks.eq))
    $util.qr($args.put("pks", $context.arguments.params.filter.pks))
#end
`; break
                case ("create"):
                case ("customQuery"):
                case ("start"): transformRequestParamsSection = `
#set( $args = $util.map.copyAndRemoveAllKeys($context.arguments.params.payload, []) )
`; break
                case ("update"): transformRequestParamsSection = `
#set( $args = $util.map.copyAndRemoveAllKeys($context.arguments.params.payload, []) )
$util.qr( $args.put("id", $context.arguments.params.id))
$util.qr( $args.put("meta", $context.arguments.params.meta))
$util.qr( $args.put("revisions", $context.arguments.params.revisions))
`; break
            }

            return appsync.MappingTemplate.fromString(
                `
                ${transformRequestParamsSection}
                {
                    "version": "2017-02-28",
                    "operation": "Invoke",
                    "payload": {
                        "action": "${resolver.payloadSubstitues?.action || resolver.fieldName}",
                        "jobType": "${resolver.payloadSubstitues?.jobType || 'short'}",
                        "__typename": "${resolver.payloadSubstitues?.__typename ? resolver.payloadSubstitues?.__typename : '$context.arguments.params.__typename'}",
                        "arguments": $utils.toJson($args),
                        "selectionSetList": $utils.toJson($ctx.info.selectionSetList),
                        "selectionSetGraphQL": $utils.toJson($ctx.info.selectionSetGraphQL),
                        "identity": $utils.toJson($context.identity)
                    }
                }`)
        }

        const createResolvers = (lds: appsync.LambdaDataSource, resolvers: Set<AartsResolver>, typeName: string) =>
            resolvers.forEach(resolver => {
                if (isNaN(Number(resolver))) {
                    lds.createResolver(resolver.fieldName, {
                        fieldName: resolver.fieldName,
                        typeName: typeName,
                        requestMappingTemplate: resolverRequestMappingTemplate(resolver),
                        responseMappingTemplate: appsync.MappingTemplate.fromString("$util.toJson($context.result)"),
                    });
                }
            })

        const lds = new appsync.LambdaDataSource(this, 'DS', {
            api: props.appSyncConstruct.graphQLApi,
            lambdaFunction: props.lambdaFunction,
            name: "Lambda"
        })
        createResolvers(lds, props.mutateResolvers, "Mutation")
        createResolvers(lds, props.queryResolvers, "Query")
    }
}
