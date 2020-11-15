import { MessageCreateInput } from '../../../infra/dto/messageCreateInput.dto';
import messageService from '../../../infra/services/message.service';
import userService from '../../../infra/services/user.service';
import forumService from '../../../infra/services/forum.service';
import validateObject from '../../../infra/validations/validator';
import { Message } from '../../../infra/models';
import { ApolloContext } from '../../../interfaces';

export default {
  Query: {
    messageList: () => {
      return messageService.findAll();
    },
  },

  Message: {
    forum: (obj: Message) => {
      return forumService.findById(obj.forumId);
    },

    user: (obj: Message) => {
      return userService.findById(obj.userId);
    },
  },

  Mutation: {
    createMessage: async (
      obj: any,
      args: MessageCreateInput,
      { user }: ApolloContext
    ) => {
      await validateObject(args);

      return await messageService.create(args.body, args.forumId, user.id);
    },
  },
};
