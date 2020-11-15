import { Forum, User } from '../index';

describe('ForumModel', () => {
  beforeAll(async () => {});

  it('should create a new Forum with furnished values', () => {
    const name = 'TestForumName';
    const creatorId = '12345';

    const forum = new Forum(name, creatorId);

    expect(forum.id).toHaveLength(10);
    expect(forum.name).toBe(name);
    expect(forum.creatorId).toBe(creatorId);
  });
});
