#!/usr/bin/env node
import { App } from "aws-cdk-lib"
import { CdkStack } from '../lib/cdk-stack';
import { validateContext } from "./context-validator";
import dotenv from 'dotenv';

// for a deployment process this var should be set
if (!process.env.tableName) {
    // if not assume test/debug is being run
    dotenv.config({
        path: 'packages/infrastructure/src/bin/test-env-vars.env'
    })
}

/**
 * TODO
 * importing/creating KMS encryption key
 * encryption on SQS,SNS,S3
 */
const app = new App();

const context = validateContext(app)

const environments: Record<string, { account: string, region: string }> = {
    "dev": {
        account: '216788398771',
        region: 'eu-west-1'
    },
    "prod": {
        account: '216788398771',
        region: 'eu-west-2'
    }
};

new CdkStack(app, context.clientAppName, {
    env: environments[String(process.env.CDK_ENV)] || environments.dev,
    ...context
});

app.synth();