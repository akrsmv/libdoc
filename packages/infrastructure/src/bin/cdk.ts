#!/usr/bin/env node
import { App } from "aws-cdk-lib"
import { CdkStack } from '../lib/cdk-stack';
import { validateContext } from "./context-validator";

/**
 * TODO
 * importing/creating KMS encryption key
 * encryption on SQS,SNS,S3
 */
const app = new App();

const context = validateContext(app)
const environments: Record<string, {account: string, region: string}>  = { "dev":{account: '216788398771', region: 'eu-west-1'},"prod":{account: '216788398771', region: 'eu-west-2'} };

new CdkStack(app, context.clientAppName, {env: (process.env.CDK_ENV ? (environments[process.env.CDK_ENV] || environments.dev) : environments.dev), ...context});

app.synth();