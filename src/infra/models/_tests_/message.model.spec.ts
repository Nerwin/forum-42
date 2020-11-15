import { Message } from '../index';

describe('MessageModel', () => {
  beforeAll(async () => {});

  it('should create a new Message', () => {
    const body = 'Hello, this is a test message';
    const userId = '1234';
    const forumId = '5678';

    const message = new Message(body, userId, forumId);

    expect(message.body).toBe(body);
    expect(message.userId).toBe(userId);
    expect(message.forumId).toBe(forumId);
  });
});
