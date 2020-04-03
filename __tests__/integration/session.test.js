import app from '../../src/app';
import User from '../../src/app/models/User';

describe('Authentication', () => {
  it('should receive JWT token authencicated with valid credentials', async () => {
    const user = await User.create({
      name: 'Manoel',
      email: 'manogel@gmail.com',
      password_hash: '123456',
    });

    expect(user.email).toBe('manogel@gmail.com');
  });
});
