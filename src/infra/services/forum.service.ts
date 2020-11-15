import { Forum } from '../models/Forum.model';
import Service from './service.abstract';

class ForumService extends Service<Forum> {
  constructor() {
    super();
    super._loadFixtures('forums.json', Forum);
  }

  findAll() {
    return super.findAll();
  }

  findAllByCreator(creatorId: string) {
    const filterByName = (forum: Forum) => forum.creatorId === creatorId;
    return super.find(filterByName);
  }

  findAllByMember(memberId: string) {
    const filterByMember = (forum: Forum) => forum.members.includes(memberId);
    return super.find(filterByMember);
  }

  async create(name: string, creatorId: string) {
    const forum = new Forum(name, creatorId);

    return await super.createWithValidation(forum);
  }

  findByName(name: string) {
    const filterByName = (forum: Forum) => forum.name === name;
    return super.find(filterByName).shift();
  }

  findById(id: string) {
    const filterById = (forum: Forum) => forum.id === id;
    return super.find(filterById).shift();
  }
}

export default new ForumService();
