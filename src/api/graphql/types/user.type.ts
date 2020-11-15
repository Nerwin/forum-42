import { gql } from 'apollo-server-express';

// *** I usually use the Code First approach for GraphQL types, but in that case i don't have any Database so i will use Schema first
// *** We could separate queries / mutations from types, but since the entity is quite small i will keep them in the same file.
export default gql`
  scalar Date

  type Query {
    user(id: String!): User
    userList: [User]
  }

  type Mutation {
    createUser(name: String!, pictureUri: String): User
  }

  type User {
    id: String!
    name: String!
    pictureUri: String
    createdAt: Date!
  }
`;
