
```gql
type Forum {
  id: String!
  name: String!
  creator: User!
  members: [User]!
  messages: [Message]!
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
  forumList: [Forum]
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
