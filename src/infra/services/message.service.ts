import { Message } from '../models/message.model';
import Service from './service.abstract';

class MessageService extends Service<Message> {
  constructor() {
    super();
    super._loadFixtures('messages.json', Message);
  }

  findAll() {
    return super.findAll();
  }

  async create(body: string, forumId: string, userId: string) {
    const message = new Message(body, userId, forumId);

    return await super.createWithValidation(message);
  }

  findAllByForumId(forumId: string) {
    const filterByForumId = (message: Message) => message.forumId === forumId;
    return super.find(filterByForumId);
  }
}

export default new MessageService();
