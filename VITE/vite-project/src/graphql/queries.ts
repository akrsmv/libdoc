export const getUserVisibleAgents = /* GraphQL */ `
query GetUsers($id: [ID!]!) {
    get(id: $id) {
      items {
        ... on User {
          email
          sub
          active_agent
          Agents {
              name
              id
          }
          Active_agent {
              name
              id
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