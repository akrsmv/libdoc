import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { IDynamoDBStackProps } from './interfaces/IDynamoDBStackProps'
import { DynamoDBConstruct } from './constructs/dynamoDbConstruct'

export class DynamoDBStack extends cdk.Stack {
  
  constructor(scope: Construct, id: string, props: IDynamoDBStackProps) {
    super(scope, id, props)

    new DynamoDBConstruct(this, 'DB', props)
  }
}
