import { User } from '../../models';
import userService from '../user.service';

describe('UserService', () => {
  beforeEach(async () => {
    // @ts-ignore
    userService._loadFixtures('users.json', User); // Use protected loadFixture function to reset the dataList
  });
  it('create() - should create a new User with furnished values', async () => {
    const name = 'TestUserName';

    const user = await userService.create(name);

    expect(user.id).toHaveLength(10);
    expect(user.name).toBe(name);
    expect(user.pictureUri).toBeUndefined();
    expect(user.createdAt).toBeDefined();
  });

  it('findAll() - should return 5 users', () => {
    const users = userService.findAll();

    expect(users).toHaveLength(5);
  });

  it('findById() - should return one user', () => {
    const userId = 'd7eceac031';

    const user = userService.findById(userId);

    expect(user).toBeDefined();
    expect(user?.id).toBe(userId);
  });

  it('findByName() - should return one user', () => {
    const userName = 'Nerwin';

    const user = userService.findByName(userName);

    expect(user).toBeDefined();
    expect(user?.name).toBe(userName);
  });
});
