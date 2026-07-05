import Ajv from "ajv"
import addFormats from "ajv-formats"
import * as __typenameSchema from "./ddb-orm/system/keys/__typename.json"
import * as idSchema from "./ddb-orm/system/keys/id.json"
import * as hashSchema from "./ddb-orm/system/keys/hash.json"
import * as rangeSchema from "./ddb-orm/system/keys/range.json"
import * as revSchema from "./ddb-orm/system/keys/rev.json"
import * as dateSchema from "./ddb-orm/system/keys/date.json"
import * as itemSchema from "./ddb-orm/system/item.json"
import * as userSchema from "./ddb-orm/items/user.json"
// import * as userEmailRuleSchema from "./ddb-orm/items/user-email-rule.json"
// import * as agentSchema from "./ddb-orm/items/agent.json"

const ajv = new Ajv();
addFormats(ajv);

const systemSchemas = [__typenameSchema, idSchema, hashSchema, rangeSchema, revSchema, dateSchema, itemSchema]

const clientSchemas = [userSchema]

ajv.addSchema(systemSchemas)
ajv.addSchema(clientSchemas)

const userData = {
  "pk": "User|b5ea685a-337c-40e1-8404-a221025408a0",
  "sk": "v_0|User|b5ea685a-337c-40e1-8404-a221025408a0",
  "id": "User|b5ea685a-337c-40e1-8404-a221025408a0#v_0|User|b5ea685a-337c-40e1-8404-a221025408a0",
  "nshard": 9,
  "rev": 151,
  "created": "2023-08-02T06:18:01.451Z",
  "modified": "2023-08-20T12:15:32.122Z",
  "__typename": "User",
  "active_agent": "^b5ea685a-337c-40e1-8404-a221025408a0|-|Agent|DEFAULT#v_0|Agent|DEFAULT^Agent|cf3b7735-366e-463e-bc62-c79ee79bbd05#^b5ea685a-337c-40e1-8404-a221025408a0|-|Agent|DEFAULT#v_0|Agent|DEFAULT^v_0|Agent|cf3b7735-366e-463e-bc62-c79ee79bbd05",
  "agents": [
  ],
  "cognitoGroups": [
    "superuser"
  ],
  "email": "akrsmv@gmail.com",
  "iamRoles": [
    "arn:aws:iam::216788398771:role/TEST2023-AuthSuperUserRole4E564BD6-1SEXC24QKAKUH"
  ],
  "preferredIamRole": "arn:aws:iam::216788398771:role/TEST2023-AuthSuperUserRole4E564BD6-1SEXC24QKAKUH",
  "sGSI1": "akrsmv@gmail.com",
  "sGSI2": "b5ea685a-337c-40e1-8404-a221025408a0",
  "sub": "b5ea685a-337c-40e1-8404-a221025408a0",
  "TITEM": "User|2023-08-20",
  "userPoolId": "eu-west-1_fwhapbh6m",
  "user_created": "b5ea685a-337c-40e1-8404-a221025408a0",
  "user_updated": "b5ea685a-337c-40e1-8404-a221025408a0"
}

interface Hash {
  HASH: string
}

const validateItemSchema = ajv.getSchema("http://localhost:3000/ddb-orm/system/item.json")

if (validateItemSchema!(userData)) {
  console.log("Valid")
} else {
  console.log(validateItemSchema!.errors)
}

// ==============
// interface MyData {
//   foo: number
//   bar?: string
// }

// const schema: JSONSchemaType<MyData> = {
//   type: "object",
//   properties: {
//     foo: {type: "integer"},
//     bar: {type: "string", nullable: true}
//   },
//   required: ["foo"],
//   additionalProperties: false
// }

// validate is a type guard for MyData - type is inferred from schema type
// const validate = ajv.compile(schema)


// or, if you did not use type annotation for the schema,
// type parameter can be used to make it type guard:
// const validate = ajv.compile<MyData>(schema)

// const data = {
//   foo: 1,
//   bar: "abc"
// }

// if (validate(data)) {
//   // data is MyData here
//   console.log(data.foo)
// } else {
//   console.log(validate.errors)
// }

//=================

