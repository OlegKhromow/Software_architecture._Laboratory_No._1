const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

it('check Hello World', async() => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello World');
});