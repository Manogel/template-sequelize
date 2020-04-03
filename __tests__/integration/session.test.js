import request from 'supertest';
import app from '../../src/app';
import truncate from '../util/truncate';
import factory from '../factories';

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should not authenticate with invalid email', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'invalid',
        password: '123456',
      });

    expect(response.status).toBe(400);
  });

  it('should not authenticate with password missing', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'validmail@mail.com',
      });

    expect(response.status).toBe(400);
  });

  it('should not authenticate when user not found', async () => {
    await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: 'invalid@gmail.com',
        password: '123456',
      });

    expect(response.status).toBe(401);
  });

  it('should not authenticate with invalid credentials', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '1233456',
      });

    expect(response.status).toBe(401);
  });

  it('should return jwt token when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });

    expect(response.body).toHaveProperty('token');
  });

  it('should be able to access private routes when authenticated', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    const response = await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });

    const { token } = response.body;

    const response2 = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer ${token}`);

    expect(response2.status).toBe(200);
  });

  it('should not be able to access private routes without jwt token', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });

    const response = await request(app).get('/dashboard');

    expect(response.status).toBe(401);
  });

  it('should not be able to access private routes with invalid jtw token', async () => {
    const user = await factory.create('User', {
      password: '123456',
    });

    await request(app)
      .post('/sessions')
      .send({
        email: user.email,
        password: '123456',
      });

    const response2 = await request(app)
      .get('/dashboard')
      .set('Authorization', `Bearer sdasdasdsdasd`);

    expect(response2.status).toBe(401);
  });
});
