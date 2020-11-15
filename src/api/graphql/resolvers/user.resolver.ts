import { UserCreateInput } from '../../../infra/dto/userCreateInput.dto';
import { UserSearchInput } from '../../../infra/dto/userSearchInput.dto';
import validateObject from '../../../infra/validations/validator';
import userService from '../../../infra/services/user.service';

export default {
  Query: {
    user: (obj: any, { id }: UserSearchInput) => {
      return userService.findById(id);
    },

    userList: () => {
      return userService.findAll();
    },
  },

  Mutation: {
    createUser: async (obj: any, args: UserCreateInput) => {
      await validateObject(args);

      return await userService.create(args.name, args.pictureUri);
    },
  },
};
