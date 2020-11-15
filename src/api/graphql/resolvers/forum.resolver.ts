import { ForumAddMemberInput } from '../../../infra/dto/forumAddMemberInput.dto';
import { ForumCreateInput } from '../../../infra/dto/forumCreateInput.dto';
import { ForumSearchInput } from '../../../infra/dto/forumSearchInput.dto';
import messageService from '../../../infra/services/message.service';
import validateObject from '../../../infra/validations/validator';
import forumService from '../../../infra/services/forum.service';
import userService from '../../../infra/services/user.service';
import { Forum } from '../../../infra/models';
import { ApolloContext } from '../../../interfaces';

export default {
  Query: {
    forum: (obj: any, { id }: ForumSearchInput) => {
      return forumService.findById(id!);
    },

    forumList: () => {
      return forumService.findAll();
    },

    forumListByCreator: (obj: any, { creatorId }: ForumSearchInput) => {
      return forumService.findAllByCreator(creatorId!);
    },

    forumListByMember: (obj: any, { memberId }: ForumSearchInput) => {
      return forumService.findAllByMember(memberId!);
    },
  },

  Forum: {
    creator: (obj: Forum) => {
      return userService.findById(obj.creatorId);
    },

    members: (obj: Forum) => {
      return userService.findManyById(obj.members);
    },

    messages: (obj: Forum) => {
      return messageService
        .findAllByForumId(obj.id)
        .sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1));
    },
  },

  Mutation: {
    createForum: async (
      obj: any,
      args: ForumCreateInput,
      { user }: ApolloContext
    ) => {
      await validateObject(args);

      return await forumService.create(args.name, user.id);
    },

    addMember: async (obj: any, args: ForumAddMemberInput) => {
      await validateObject(args);

      await forumService.addMember(args.forumId, args.memberId);

      return true;
    },
  },
};
