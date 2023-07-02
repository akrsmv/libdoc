https://daveiscoding.com/nodejs-typescript-monorepo-via-npm-workspaces

### Pull repo and do initial build

`git clone ... && tsc --build`

The `tsc --build` will result in couple of errors. This is because the repo is set up to work with a generated code which is not yet present.

### After the initial build, generator libraries are built, generate test domain context and code

`.bin/gen-ddb-cqd-test-model.sh`

### Rebuild the repo with generated code for test domain context

`tsc --build`

### Deploy to AWS

`source .bin/loadenv.sh {env}`

# TODO currently final part of code generation is coupled with deploying to AWS, decouple them

Note on configuration variables
---
- packages/infrastructure/.graphqlconfig.yml
- .bin/env-vars/{env-name}.env
- packages/infrastructure/cdk.json

Generated files
---
/packages/test-system/src/domain-context
/test-system-web-app/src/graphql/generated
/packages/infrastructure/schema.graphql --> coupled with .bin/cdk-dpeloy
/packages/localdev-api/src/schema-intorspection.json --> coupled with .bin/cdk-dpeloy (BUT NO OTHER WAY SINCE WE ARE NOT RUNNING A GRAPHQL server locally)


### Sart stateless local dynamodb
Spin up 2 idenical dynamodbcontainers, one for tests, another for localdvelopment
Table shape is created based on `packages/test-system/src/domain-context/aws-ddb-table-definition.json`
```
<repo#>.bin/start-local-dynamodb.sh
```

### Run local Dev Server

`<repo#>npm run dev`

### Recreate the domain context at any time

`.bin/gen-ddb-cqd-test-model.sh`

### cleanup deps 
`find . -name "node_modules" -exec rm -rf '{}' +`
`find . -name "package-lock.json" -exec rm -rf '{}' +`
`find . -name "dist" -exec rm -fr '{}' +`

--------------------------------------------------

REACT WEB APP
---
using tailwindcss
outside of the monorepo
`cd <repo>/VITE/vite-project`

start developing
`npm run dev`

compile and watch css:
`npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`


TODO 
First ensure `ddb-model` works
---
`ddb-model` is the package that can generate POJOs for you based on JSON metada.
This JSON metadata may be created by a visual editor(__TODO__) or by hand.

Second, Test via localdev api `ddb-actions`
---
- wrap up and document dynamo methods
- wrap up dynamodb querying with incta!!!!

^^^^^^^^^^^^^^^^^^^^^^^^^
THIS SHOULD BE RELEASABLE
- no commands
- no lambda dispatcher
- __ONLY DYNAMODB INTERFACES + CDK INFRA FOR THE TABLE__


LOCAL DYNAMO DB STREAMS https://leonardqmarcq.com/posts/consuming-dynamodb-stream-without-lambda


Third, wrap up the `incta cli`
---
- regenerate dynamo items with the cli
- deploy infra with the CDK
- test in AWS


Fourth, enhance `ddb-model` to support Commands
---
- regenerate dynamo items __and commands__ with the cli

Fifth, implment `lambda-dispatcher`
---

WEB APP
---
TODO describe Environments and variables


- when generating model, scan for any reserved words defined in data model json and throw if found any

- since we are checking for type definition and assigning only those matching:
    - special care needed
    - string[]
    - isodatestring
    - Map
    - enum
    - object/json - recursive check on properties of the json

- Store data model in dynamodb to keep versioning



==================
TODO
- TEST added searchPublicData to query/search payload (it may be omitted by clients in which case the metadata.isPublicItem will be considered)
- TEST implement bulkWriteItems and use it for inserting Flights and any oher big voume test data
- implement NSHARD-TITEM indexing logic
  - pageToken to be an array of all pageTokens from each individual shard query
- TITEM index not to have additional loop through dates and indexes logic

GRAPHQL TEST
- login with user, create test private and public data for this user sub and some agent
- set same agent to be active_agent to the user (claim)
- query -> if token is not refreshed, old active_user claim is used and query would not find above inserted
- re-login and query again -> new active_agent claim should be set => query produces results
query MyQuery {
  searchAirplanes(input: {filter: {nr_seats_class_vip: {ge: 3.5}}}) {
    pageToken
    count
    correlation_id
    items {
      Country {
        name
        user_updated
        user_created
        date_updated
        date_created
      }
      code
    }
  }
}

mutation MyMutation {
  GenerateAirtoursPublicTestData(input: {}) {
    status
  }
}

mutation MyMutation2 {
  GenerateAirtoursTestData(input: {forUser: "2a7d514b-4298-491b-9899-6505d0c78737", forAgent: "Agent|6#v_0|Agent|6"}) {
    status
  }
}

mutation MyMutation3 {
  ChangeActiveAgent(input: {new_active_agent: "Agent|6#v_0|Agent|6"}) {
    status
  }
}
