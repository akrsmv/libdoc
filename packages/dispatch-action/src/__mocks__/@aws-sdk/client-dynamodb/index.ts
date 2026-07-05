import { DB_NAME } from "@incta/ddb-actions";

const send = jest.fn((send) => {
    if (send.__proto__.constructor.mockName()() === 'GetItemCommand') {
        return Promise.resolve({
            Item: { HASH: { S: 'hash_of_some_db_item' }, RANGE: { S: 'range_of_some_db_item' } }
        })
    }
    
    if (send.__proto__.constructor.mockName()() === 'BatchGetItemCommand') {
        return Promise.resolve({
            // when BatchGetItemCommand is sent, this is the structure of results:
            UnprocessedKeys: {}, // the requested keys not processed yet
            Responses: {
                [DB_NAME()]: [{ // responses per table names, batch get supports querying multiple tables
                    Item: { M: { HASH: { S: 'hash_of_some_db_item' }, RANGE: { S: 'range_of_some_db_item' } } }
                }]
            }
        })
    }

})

export const 
    DynamoDBClient = jest.fn(() => ({ send })),
    UpdateItemCommand = jest.fn(() => 'UpdateItemCommand'),
    BatchGetItemCommand = jest.fn(() => 'BatchGetItemCommand'),
    GetItemCommand = jest.fn(() => 'GetItemCommand'),
    PutItemCommand = jest.fn(() => 'PutItemCommand'),
    TransactWriteItemsCommand = jest.fn(() => 'TransactWriteItemsCommand')

