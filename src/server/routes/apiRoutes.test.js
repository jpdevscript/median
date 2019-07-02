const request = require('supertest');
const express = require('express');
const router = require('./apiRoutes');

const app = express();
app.use(router);

describe('GET /medianPrimeNumber/:inputValue', () => {
  it('It should respond with an array of median of prime Number', async () => {
    const inputValue = 10;
    const response = await request(app).get(`/medianPrimeNumber/${inputValue}`);
    expect(response.body).toEqual([3, 5]);
    expect(response.statusCode).toBe(200);
  });
});