import { plainToClass } from 'class-transformer';

import { User } from '../models/user.model';
import Service from './service.abstract';

class UserService extends Service<User> {
  constructor() {
    super();
    super._loadFixtures('users.json', User);
  }

  findAll() {
    return super.findAll();
  }

  async create(name: string, pictureUri?: string) {
    const user = new User(name, pictureUri);

    return await super.createWithValidation(user);
  }

  findById(id: string) {
    const filterById = (user: User) => user.id === id;
    return super.find(filterById).shift();
  }

  findManyById(ids: string[]) {
    const filterById = (user: User) => ids.includes(user.id);
    return super.find(filterById);
  }

  findByName(name: string) {
    const filterByName = (user: User) => user.name === name;
    return super.find(filterByName).shift();
  }
}

export default new UserService();
