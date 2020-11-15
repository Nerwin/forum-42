class Message {
  body: string;
  userId: string;
  forumId: string;
  timestamp: Date;

  constructor(body: string, userId: string, forumId: string) {
    this.body = body;
    this.userId = userId;
    this.forumId = forumId;
    this.timestamp = new Date();
  }
}

export { Message };
