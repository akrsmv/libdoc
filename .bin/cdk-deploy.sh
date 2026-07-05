#!/bin/bash

cd $INCTA_INFRA_PATH
cdk deploy --profile $AWS_ACCOUNT_PROFILE

# query aws once and distribute same file to places needed
aws cloudformation describe-stacks --stack-name "${CDK_STACK_NAME}" --query 'Stacks[0].Outputs' --output text --profile $AWS_ACCOUNT_PROFILE --region $AWS_ACCOUNT_REGION --output json | jq '.[] | { (.Description): .OutputValue }' | jq -s add > $INCTA_WEBAPP_PATH/src/aws-exports.json

#####################
## MODIFY COGNITO IDP OUTSIDE CDK TO AVOID CIRCULAR DEPENDENCIES
COGNOTO_IDP_ID=`cat $INCTA_WEBAPP_PATH/src/aws-exports.json | jq --raw-output .aws_user_pools_id`
aws cognito-idp update-user-pool \
    --user-pool-id $COGNOTO_IDP_ID \
    --lambda-config '{
        "PreTokenGeneration": "arn:aws:lambda:'$AWS_ACCOUNT_REGION':'$AWS_ACCOUNT_NUMBER':function:lam-dev-'$CDK_STACK_NAME'-cog-trigger",
        "PostAuthentication": "arn:aws:lambda:'$AWS_ACCOUNT_REGION':'$AWS_ACCOUNT_NUMBER':function:lam-dev-'$CDK_STACK_NAME'-cog-trigger"
    }' \
    --profile $AWS_ACCOUNT_PROFILE \
    --region $AWS_ACCOUNT_REGION
#####################

APPSYNC_API_ID=`cat $INCTA_WEBAPP_PATH/src/aws-exports.json | jq --raw-output .aws_appsync_api_id`
aws appsync get-introspection-schema --region $AWS_ACCOUNT_REGION --include-directives --format JSON --api-id $APPSYNC_API_ID --profile $AWS_ACCOUNT_PROFILE $INCTA_LOCALDEV_API_PATH/src/schema-introspeciton.json

# keep track of that environment being deployed (aws-envs folder not used in code)
mkdir -p $INCTA_WEBAPP_PATH/aws-envs/
cp $INCTA_WEBAPP_PATH/src/aws-exports.json $INCTA_WEBAPP_PATH/aws-envs/$CDK_STACK_NAME.json   

# takes $INCTA_INFRA_PATH/.graphqlconfig.yml as input
amplify codegen --apiId $APPSYNC_API_ID
