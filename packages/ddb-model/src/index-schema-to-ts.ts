import { mkdirSync, writeFileSync } from 'fs'
import { compileFromFile } from 'json-schema-to-typescript'

mkdirSync('ddb-orm-generated', { recursive: true })

compileFromFile('./ddb-orm/items/types.json')
  .then(ts => writeFileSync('./ddb-orm-generated/libdoc-entities.ts', ts))

// compile from file
// compileFromFile('./ddb-orm/system/item.json')
//   .then(ts => writeFileSync('./ddb-orm-generated/item.ts', ts))

// compileFromFile('./ddb-orm/items/user.json')
//   .then(ts => writeFileSync('./ddb-orm-generated/user.ts', ts))

// compileFromFile('./ddb-orm/items/agent.json')
//   .then(ts => writeFileSync('./ddb-orm-generated/agent.ts', ts))

// // or, compile a JS object
// let mySchema = {
//   properties: [...]
// }
// compile(mySchema, 'MySchema')
//   .then(ts => ...)