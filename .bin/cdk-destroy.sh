#!/bin/bash

cd $INCTA_INFRA_PATH
cdk destroy --profile $AWS_ACCOUNT_PROFILE

# delete files linking sourcecode to the deleted AWS deployment
rm -fr $INCTA_WEBAPP_PATH/src/aws-exports.json
rm -fr $INCTA_WEBAPP_PATH/aws-envs/$CDK_STACK_NAME.json