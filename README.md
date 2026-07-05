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

compile and watch css:
`npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch`

start developing
`npm run dev`

Cleanup
---
`.bin/cleanup-local-repo.sh` should return to as if repo was just cloned
`.bin/cleanup-generated-models.sh` deletes any generated test models and code

Local Dev
---

how to send attachment with curl: https://blog.ambor.com/2021/08/using-curl-to-send-e-mail-with.html


NOT in CDK
---
SES: email receiving
SESconfiguration: SES action on email receiving
Route53: domain configuraion
setting of USER_POOL_ID / IDENTITY_POOL_ID variables to a cognito trigger lambda (because of cyclical dependency)


Query patterns:

- get user by email: sGSI1-sGSI2