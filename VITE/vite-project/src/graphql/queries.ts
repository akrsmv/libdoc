export const getUserVisibleAgents = /* GraphQL */ `
query GetUsers($id: [ID!]!) {
    get(id: $id) {
      items {
        ... on User {
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

export const queryUserEmails = /* GraphQL */ `
  query QueryUserEmails($input: QueryUserEmailsInput!) {
    queryUserEmails(input: $input) {
      items {
        rev
        HASH
        RANGE
        TITEM
        checksum
        agent
        Agent {
          rev
          HASH
          RANGE
          TITEM
          checksum
          public_data_ref
          Public_data_ref {
            rev
            HASH
            RANGE
            TITEM
            checksum
            name
            date_created
            date_updated
            user_created
            user_updated
            id
            __typename
          }
          location1
          location2
          location3
          location4
          location5
          code
          name
          child_agents
          parent_agents
          agt_data_visibility_conf
          date_created
          date_updated
          user_created
          user_updated
          id
          __typename
        }
        date_created
        date_updated
        user_created
        user_updated
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
