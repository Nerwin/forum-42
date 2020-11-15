import { MessageCreateInput } from '../../../infra/dto/messageCreateInput.dto';
import { MessageSearchInput } from '../../../infra/dto/messageSearchInput.dto';
import messageService from '../../../infra/services/message.service';
import userService from '../../../infra/services/user.service';
import forumService from '../../../infra/services/forum.service';
import validateObject from '../../../infra/validations/validator';
import { Message } from '../../../infra/models';

export default {
  Query: {
    messageList: async function (obj: any, args: any) {
      return messageService.findAll();
    },
  },

  Message: {
    forum: async function (obj: Message) {
      return forumService.findById(obj.forumId);
    },

    user: async function (obj: Message) {
      return userService.findById(obj.userId);
    },
  },

  Mutation: {
    createMessage: async function (obj: any, args: MessageCreateInput) {
      await validateObject(args);

      return await messageService.create(args.body, args.forumId, args.userId);
    },
  },
};
