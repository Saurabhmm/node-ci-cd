const request = require('supertest');  // to test HTTP requests
const app = require('../src/index');   // import your express app

describe('GET /health', () => {
  it('should return status ok', async () => {
    const res = await request(app).get('/health');    // send GET request
    expect(res.statusCode).toEqual(200);              // check status code
    expect(res.body.status).toBe('ok');               // check response body
  });
});
