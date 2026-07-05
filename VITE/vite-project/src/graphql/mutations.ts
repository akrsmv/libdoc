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

export const createUserEmailRule = /* GraphQL */ `
  mutation CreateUserEmailRule($input: UserEmailRuleInput!) {
    createUserEmailRule(input: $input) {
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

export const createPrivateAgentForUser = /* GraphQL */ `
  mutation CreatePrivateAgentForUser($input: CreatePrivateAgentForUserInput!) {
    CreatePrivateAgentForUser(input: $input) {
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

export const del = /* GraphQL */ `
  mutation Del($id: ID!, $rev: Int) {
    del(id: $id, rev: $rev) {
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
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent($input: ItemIdentifierInput) {
    deleteAgent(input: $input) {
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