import { User } from '../index';

describe('UserModel', () => {
  beforeAll(async () => {});

  it('should create a new User with furnished value', () => {
    const name = 'TestUserName';

    const user = new User(name);

    expect(user.id).toHaveLength(10);
    expect(user.name).toBe(name);
    expect(user.createdAt).toBeInstanceOf(Date);
  });
});
