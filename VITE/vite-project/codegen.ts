
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.json",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", 'typescript-operations', 'typescript-graphql-request']
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
