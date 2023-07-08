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

export const createUserEmail = /* GraphQL */ `
  mutation CreateUserEmail($input: UserEmailInput!) {
    createUserEmail(input: $input) {
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