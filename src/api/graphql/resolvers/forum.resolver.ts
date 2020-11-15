import { ForumCreateInput } from '../../../infra/dto/forumCreateInput.dto';
import { ForumSearchInput } from '../../../infra/dto/forumSearchInput.dto';
import { ForumAddMemberInput } from '../../../infra/dto/forumAddMemberInput.dto';
import forumService from '../../../infra/services/forum.service';
import userService from '../../../infra/services/user.service';
import messageService from '../../../infra/services/message.service';
import validateObject from '../../../infra/validations/validator';
import { Forum } from '../../../infra/models';

export default {
  Query: {
    forumList: async function (obj: any, args: any) {
      return forumService.findAll();
    },

    forumListByCreator: async function (obj: any, args: ForumSearchInput) {
      return forumService.findAllByCreator(args.creatorId!);
    },

    forumListByMember: async function (obj: any, args: ForumSearchInput) {
      return forumService.findAllByMember(args.memberId!);
    },
  },

  Forum: {
    creator: async function (obj: Forum) {
      return userService.findById(obj.creatorId);
    },

    members: async function (obj: Forum) {
      return userService.findManyById(obj.members);
    },

    messages: async function (obj: Forum) {
      return messageService
        .findAllByForumId(obj.id)
        .sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1));
    },
  },

  Mutation: {
    createForum: async function (obj: any, args: ForumCreateInput) {
      await validateObject(args);

      return await forumService.create(args.name, args.creatorId);
    },

    addMember: async function (obj: any, args: ForumAddMemberInput) {
      await validateObject(args);

      await forumService.addMember(args.id, args.memberId);

      return true;
    },
  },
};
