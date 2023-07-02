import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import JSON5 from 'json5'
import * as ddbActions from '@incta/ddb-actions';
import { loginfo, logwarn } from '@incta/common-utils';
// import { generateAirtoursTestData } from './____test-data-generators/___generateAirtoursTestData';
import { __dataModel, __domain, _sep1 } from '@incta/ddb-model';
import { dispatchAction } from '@incta/dispatch-action';
import { handleErrors } from './errorHandling';
import { injectDomainContext } from '@incta/test-system';
import { createHandler } from 'graphql-http/lib/use/express';
import { generatedSchema } from './generatedSchema';
import { buildSchema } from 'graphql';
import * as schemaIntrospection from './schema-introspeciton.json'
import { loadDomainContext } from '@incta/ddb-cqd-model';
import { resolve } from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded())
// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.text())
app.use(cors())

// // ----------- INJECT DOMAIN CONTEXT INTO CURRENT PROCESS
// const _injectDataItems = require('./test-ddb-model-generator-output/items/dataItems/_injectDataItems');
// const _injectCommandItems = require('./test-ddb-model-generator-output/items/commandItems/_injectCommandItems');
// const _injectQueryItems = require('./test-ddb-model-generator-output/items/queryItems/_injectQueryItems');
// const _injectCommands = require('./test-ddb-model-generator-output/commands/_injectCommands');
// const _injectQueries = require('./test-ddb-model-generator-output/queries/_injectQueries');
// const _injectDomains = require('./test-ddb-model-generator-output/domains/_injectDomains');

// if (_injectCommandItems && _injectCommandItems._injectCommandItems) {
//     _injectCommandItems._injectCommandItems()
//     loginfo(`Loaded ${__domain().commandItemsMap?.size} command payload definitions`)
// } else {
//     logwarn(`No Command Items loaded`)
// }

// if (_injectCommands && _injectCommands._injectCommands) {
//     _injectCommands._injectCommands()
//     loginfo(`Loaded ${__domain().commandsMap?.size} commands`)

// } else {
//     logwarn(`No Commands loaded`)
// }

// if (_injectQueryItems && _injectQueryItems._injectQueryItems) {
//     _injectQueryItems._injectQueryItems()
//     loginfo(`Loaded ${__domain().queryItemsMap?.size} query payload definitions`)
// } else {
//     logwarn(`No Query Items loaded`)
// }

// if (_injectQueries && _injectQueries._injectQueries) {
//     _injectQueries._injectQueries()
//     loginfo(`Loaded ${__domain().queriesMap?.size} queries`)
// } else {
//     logwarn(`No Queries loaded`)
// }

// if (_injectDataItems && _injectDataItems._injectDataItems) {
//     _injectDataItems._injectDataItems()
//     loginfo(`Loaded ${__domain().dataItemsMap?.size} data items`)

// } else {
//     logwarn(`No Data Items loaded`)
// }

// if (_injectDomains && _injectDomains._injectDomains) {
//     _injectDomains._injectDomains()
//     loginfo(`Loaded ${__domain().domainsMap?.size} domains`)
// } else {
//     logwarn(`No Domains loaded`)
// }

//----------------------
injectDomainContext()
//----------------------

//------------------
const fakeIdentity = (sub: string | undefined, active_agent: string | undefined) => ({
  sub: String(sub),
  claims: {
    active_agent: String(active_agent),
    'custom:agents': 'string',
    sub: String(sub),
    'custom:active_agent': 'string',
    'cognito:groups': ['string[]'],
    email_verified: true,
    'cognito:preferred_role': 'string',
    iss: 'string',
    'cognito:username': 'string',
    agents: ['string1','string2'],
    origin_jti: 'string',
    'cognito:roles': ['string[]'],
    aud: 'string',
    event_id: 'string',
    token_use: 'string',
    auth_time: 0,
    exp: 0,
    iat: 0,
    jti: 'string',
    email: 'string'
  },
  defaultAuthStrategy: 'fake',
  groups: ['fake'],
  issuer: 'fake',
  sourceIp: ['127.0.0.1'],
  username: 'fake'
})
//------------------

app.post('/lambda/invoke/ddb-actions/:action(updateItem|deleteItem|patchItem|createItem|getItems|queryItems|searchItems)', async (req, res, next) => {
  type possibleDdbActions = "updateItem" | "queryItems" | "deleteItem" | "patchItem" | "createItem" | "getItems" | "searchItems"
  res.send(await ddbActions[req.params.action as possibleDdbActions](req.body, fakeIdentity(String(req.query.__usr), String(req.query.__agt))).catch(next))
})

//#endregion

//#region Test dispach-action
app.post('/lambda/invoke/dispatch-action', async (req, res, next) => {
  res.send(await dispatchAction(req.body, fakeIdentity(String(req.query.__usr), String(req.query.__agt))).catch(next))
})
//#endregion

//#region Test dispach-action
app.post('/lambda/invoke/apimetadata', async (req, res) => {
  res.send(__domain().jsonDataModel)
})
//#endregion

//#region Test data Bulk generation TODO should become a command
// app.post('/lambda/invoke/generate-testdata/airtours-test-data', async (req, res, next) => {
//     res.send(await generateAirtoursTestData(String(req.query.__usr), String(req.query.__agt)).catch(next))
// })
//#endregion

//#region GRAPHQL

/** TODO 
 * - MAINGOAL resolveGraphQL to produce dispatchAction understandable input
 * - add Thunderbird collection for graphql
 * - add package @incta/graphql-resolve
 *      - implement resolveGraphQL
 * - add package @incta/dispatch-action-graphql
 *      - implement dispatchActionGraphql
 * - MAINGOAL pull code from localdev-api into dispatchActionGraphql and resolveGraphQL
 *      - so that in here its only one-liner, and code can be reused in other places
 */
app.post('/lambda/invoke/graphql/query', async (req, res, next) => {
  // return await dispatchAction(await resolveGraphQL(simulatedAppSyncPayload)).catch(next)

  const inctaControllerResponses: any = {}
  const inctaControllerResponseErrors: any = {}

  let matcher
  let action
  let selectionSetGraphQLs = []
  let graphqlQueries = []
  let queriesToServer = new Map()
  let params
  let customName
  let innerGraphql

  const regExpGraphqlWrapperMask = /^\s*(mutation|query|subscription)\s*[a-zA-Z0-9_]+\s*\{{1}([\s\S]+)\}\s*$/
  innerGraphql = req.body.query
  matcher = regExpGraphqlWrapperMask.exec(innerGraphql);
  if (matcher && matcher[2]) {
    innerGraphql = matcher[2]
  }

  const regEx = /((([a-zA-Z0-9_]+)\s*:)?\s*(getMetadata|get|query|customQuery|create|update|delete|start)\s*\(\s*params:([^)]+))\)\s*/g

  while ((matcher = regEx.exec(String(innerGraphql))) != null) {
    graphqlQueries.push(matcher[0])
  }

  for (const [index, query] of graphqlQueries.entries()) {
    selectionSetGraphQLs.push(innerGraphql.substring(innerGraphql.indexOf(query) + query.length, (index === graphqlQueries.length - 1) ? undefined : innerGraphql.indexOf(graphqlQueries[index + 1])))
  }

  let count = 0;
  while ((matcher = regEx.exec(String(innerGraphql))) != null) {
    if (matcher[3]) {
      customName = matcher[3].trim()
    }
    if (matcher[4]) {
      action = matcher[4].trim()
    }
    if (matcher[5]) {
      params = matcher[5].trim()
    }

    // simulate APP Sync resolver
    let singleInctaResponse
    try {
      const parsedParams = params ? JSON5.parse(String(params)/*.replace(/(\w+)\s*:/g, "\"$1\":")*/) : {};
      const args = {}
      switch (action) {
        case ("query"):
          Object.assign(args, {
            id: parsedParams.id,
            limit: parsedParams.limit,
            keysOnly: parsedParams.keysOnly,
            filter: parsedParams.filter,
            searchBackward: parsedParams.searchBackward,
            pageToken: parsedParams.pageToken
          });
          break;
        // case ("getMetadata"):
        //   Object.assign(args, { toDate: parsedParams.toDate, fromDate: parsedParams.fromDate, inDates: parsedParams.inDates })
        //   break
        case ("get"):
        case ("delete"):
          Object.assign(args, { pks: parsedParams.pks })
          // support passing pks also as part of the filter
          if (Array.isArray(parsedParams.filter?.pks?.eq)) {
            Object.assign(args, { pks: parsedParams.filter.pks })
          }
          break
        case "create":
        case "customQuery":
        case "start":
          Object.assign(args, parsedParams.payload ? parsedParams.payload : {})
          break
        case ("update"):
          Object.assign(args, parsedParams.payload ? parsedParams.payload : {}, { id: parsedParams.id }, { meta: parsedParams.meta }, { revisions: parsedParams.revisions })
          break
      }

      const simulatedAppSyncPayload = {
        __typename: parsedParams.__typename || "BASE",
        action: action,
        arguments: args,
        selectionSetGraphQL: selectionSetGraphQLs[count],
        variables: req.body.variables,// not used by now
        identity: { sub: req.query.sub, groups: (req.query.groups ? typeof req.query.groups === "string" ? req.query.groups.split(",") : Array.isArray(req.query.groups) ? req.query.groups : [] : []) } // simulate cognito user. TODO UI dev component to paste different GUIDs
      }

      console.log("DEV SERVER FORWARDING GRAPHQL TO test: ", JSON.stringify(simulatedAppSyncPayload))

      singleInctaResponse =
        Object.assign(inctaControllerResponses, { [`${customName ? customName : action}`]: singleInctaResponse })


    } catch (err: any) {
      Object.assign(inctaControllerResponseErrors, { [`${customName ? customName : action}`]: { incta: singleInctaResponse, dev_server: new Error(err ? err.stack || err.message : err).stack?.split('\n') } })
    }

    count += 1
  }

  if (!!Object.keys(inctaControllerResponseErrors).length) {
    res.send({ data: inctaControllerResponseErrors })
  } else {
    res.send({ data: inctaControllerResponses })
  }
})
//#endregion GRAPHQL




//#region Healthcheck
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
//#endregion

//#region jsn-graphql-server test
// The root provides a resolver function for each API endpoint
// Construct a schema, using GraphQL schema language
var schema = buildSchema(generatedSchema)
//@ts-ignore
app.all('/graphql', createHandler({ schema }));

//#region Healthcheck
app.all('/schema', (req: Request, res: Response) => {
  // res.send(introspectedSchema);
  res.send(schemaIntrospection);
});
//#endregion
//#endregion
app.use(handleErrors)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});