import { gql } from 'apollo-server-express';

// *** I usually use the Code First approach for GraphQL types, but in that case i don't have any Database so i will useSchema first
// *** We could separate queries / mutations from types, but since the entity is quite small i will keep them in the same file.
export default gql`
  scalar Date

  type Query {
    messageList: [Message]
  }

  type Mutation {
    createMessage(name: String!): Message
  }

  type Subscription {
    messageAdded(forumId: String!): Message
  }

  type Message {
    body: String!
    user: User!
    forum: Forum!
    timestamp: Date!
  }
`;
