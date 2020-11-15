import { Message } from '../../models';
import messageService from '../message.service';

describe('MessageService', () => {
  beforeEach(async () => {
    // @ts-ignore
    messageService._loadFixtures('messages.json', Message); // Use protected loadFixture function to reset the dataList
  });

  it('create() - should create a new Message with furnished values', async () => {
    const body = 'Body of my message test';
    const userId = '154685';
    const forumId = '845754';

    const message = await messageService.create(body, forumId, userId);

    expect(message.body).toBe(body);
    expect(message.userId).toBe(userId);
    expect(message.forumId).toBe(forumId);
  });

  it('findAll() - should return 4 messages', () => {
    const messages = messageService.findAll();

    expect(messages).toHaveLength(4);
  });

  it('findAllByCreator() - should return 1 message', () => {
    const messages = messageService.findAllByForumId('210dd8774d');

    expect(messages).toHaveLength(1);
  });
});
