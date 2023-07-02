### Pull repo and do initial build

`git clone ... && tsc --build`

The `tsc --build` will result in couple of errors. This is because the repo is set up to work with a generated code which is not yet present.

### After the initial build, generator libraries are built, generate test domain context and code

`.bin/gen-ddb-cqd-test-model.sh`

### Rebuild the repo with generated code for test domain context

`tsc --build`

### Deploy to AWS

`source .bin/loadenv.sh {env}`
`./bin/cdk-deploy.sh`

REACT WEB APP
---
using tailwindcss
outside of the monorepo
`cd <repo>/VITE/vite-project`

start developing
`npm run dev`

compile and watch css:
`npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`

Cleanup
---
`./bin/cleanup-local-repo.sh` should return to as if repo was just cloned
`./bin/cleanup-generated-models.sh` deletes any generated test models and code

