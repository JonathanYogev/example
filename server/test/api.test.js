const request = require('supertest');
const { app, server } = require('../index'); // Import the app

describe('GET /api/data', () => {
  afterAll((done) => {
    server.close(done); // Close the server after all tests are done
  });

  it('should return a 200 OK response', async () => {
    const response = await request(app).get('/api/data');
    expect(response.statusCode).toBe(200);
  });

  it('should return a JSON object with a message property', async () => {
    const response = await request(app).get('/api/data');
    expect(response.body).toHaveProperty('message');
  });
});
