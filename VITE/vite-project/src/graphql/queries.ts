export const getUserVisibleAgents = /* GraphQL */ `
query GetUsers($input: [ItemIdentifierInput]!) {
  getUsers(input: $input) {
      items {
        ... on User {
          id
          email
          sub
          active_agent
          agents
          Agents {
              name
              id
          }
          Active_agent {
              name
              id
              rev
          }
        }
      }
      errors {
        errorType
        message
        errorStack
        __typename
      }
    }
  }
`;

export const queryUserEmailRules = /* GraphQL */ `
  query QueryUserEmailRules($input: QueryUserEmailRulesInput!) {
    queryUserEmailRules(input: $input) {
      items {
        rev
        HASH
        RANGE
        TITEM
        checksum
        agent
        id
        __typename
      }
      pageToken
      count
      selectionSetList
      errors {
        errorType
        message
        errorStack
        __typename
      }
      excludedFromFilter
      correlation_id
      __typename
    }
  }
`;
