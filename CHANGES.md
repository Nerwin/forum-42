
```gql
type Forum {
  id: String!
  name: String!
  creator: User!
  members: [User]!
  messages: [Message]!
  isPrivate: Boolean
}

type Message {
  body: String!
  user: User!
  forum: Forum!
  timestamp: Date!
}

type User {
  id: String!
  name: String!
  pictureUri: String
  createdAt: Date!
}

type Mutation {
  createForum(name: String!): Forum
  addMember(forumId: String!, memberId: String!): Boolean

  createMessage(body: String!, forumId: String!): Message

  createUser(name: String!, pictureUri: String): User
}

type Query {
  forum(id: String!): Forum
  forumList(showPrivate: Boolean = false): [Forum] # Here we can add an optional parameter. Won't affect current implementation, but still offer possibility to fetch all forums
  forumListByCreator(creatorId: String!): [Forum]
  forumListByMember(memberId: String!): [Forum]

  messageList: [Message]

  user(id: String!): User
  userList: [User]
}

# This subscription is not mandatory but would be use by client for real time
type Subscription {
  messageAdded(forumId: String!): Message
}
```
<!-- For the last 4 lines of the spec part 2, we don't need to change the schema. It's only business logic, which means the change are in the resolvers / services -->
