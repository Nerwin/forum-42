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

  addMember(id: string, memberId: string) {
    const forum = this.findById(id);
    if (!forum) {
      throw Error(`Cannot find forum with id ${id}`);
    }

    forum.members.push(memberId);

    const index = this._data.findIndex((forum) => forum.id === id);

    return super.update(index, forum);
  }

  updateById(id: string, data: Partial<Forum>) {
    const forum = this.findById(id);
    if (!forum) {
      throw Error(`Cannot find forum with id ${data.id}`);
    }

    const index = this._data.findIndex((forum) => forum.id === data.id);

    const updatedForum = { ...forum, ...data } as Forum;

    return super.update(index, updatedForum);
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

    if (this.findByName(name)) {
      throw Error('Forum with this name already exist');
    }

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
