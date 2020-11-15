import { UserCreateInput } from '../../../infra/dto/userCreateInput.dto';
import userService from '../../../infra/services/user.service';
import validateObject from '../../../infra/validations/validator';

export default {
  Query: {
    userList: () => userService.findAll(),
  },

  Mutation: {
    createUser: async function (obj: any, args: UserCreateInput) {
      await validateObject(args);

      return await userService.create(args.name, args.pictureUri);
    },
  },
};
