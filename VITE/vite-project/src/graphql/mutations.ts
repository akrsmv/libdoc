export const ChangeActiveAgent = /* GraphQL */ `
  mutation ChangeActiveAgent($input: ChangeActiveAgentInput!) {
    ChangeActiveAgent(input: $input) {
      status
      errors {
        errorType
        message
        errorStack
        __typename
      }
      __typename
    }
  }
`;