import { gql } from 'apollo-server-express';

// *** I usually use the Code First approach for GraphQL types, but in that case i don't have any Database so i will use Schema first
// *** We could separate queries / mutations from types, but since the entity is quite small i will keep them in the same file.
export default gql`
  type Query {
    forum(id: String!): Forum
    forumList: [Forum]
    forumListByCreator(creatorId: String!): [Forum]
    forumListByMember(memberId: String!): [Forum]
  }

  type Mutation {
    createForum(name: String!): Forum
    addMember(forumId: String!, memberId: String!): Boolean
  }

  type Forum {
    id: String!
    name: String!
    creator: User!
    members: [User]!
    messages: [Message]!
  }
`;
