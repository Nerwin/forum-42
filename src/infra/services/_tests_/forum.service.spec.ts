import { Forum } from '../../models';
import forumService from '../forum.service';

describe('ForumService', () => {
  beforeEach(async () => {
    // @ts-ignore
    forumService._loadFixtures('forums.json', Forum); // Use protected loadFixture function to reset the dataList
  });

  it('create() - should create a new Forum with furnished values', async () => {
    const name = 'TestForumName';
    const creatorId = '12345';

    const forum = await forumService.create(name, creatorId);

    expect(forum.id).toHaveLength(10);
    expect(forum.name).toBe(name);
    expect(forum.creatorId).toBe(creatorId);
  });

  it('findAll() - should return 3 forums', () => {
    const forums = forumService.findAll();

    expect(forums).toHaveLength(3);
  });

  it('findAllByCreator() - should return 3 forums', () => {
    const forums = forumService.findAllByCreator('4242424242');

    expect(forums).toHaveLength(3);
  });

  it('findAllByMember() - should return 2 forums', () => {
    const forums = forumService.findAllByMember('d7eceac031');

    expect(forums).toHaveLength(2);
  });

  it('findById() - should return the "Pub 42" forum', () => {
    const forumId = '6f2047559c';

    const forum = forumService.findById(forumId);

    expect(forum).toBeDefined();
    expect(forum?.id).toBe(forumId);
  });

  it('findByName() - should return the "General" forum', () => {
    const forumName = 'General';

    const forum = forumService.findByName(forumName);

    expect(forum).toBeDefined();
    expect(forum?.name).toBe(forumName);
  });
});
