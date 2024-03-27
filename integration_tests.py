Here are the integration tests for the Duffel API based on the functionalities proposed for integration:

```javascript
const request = require('supertest');
const app = require('../app'); // your express app

// Test for GET /stays endpoint
describe('GET /stays', () => {
  it('responds with a list of stays', async () => {
    const response = await request(app)
      .get('/stays')
      .set('Authorization', `Bearer ${process.env.DUFFEL_API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.data).toBeInstanceOf(Array);
  });
});

// Test for GET /stays/:id endpoint
describe('GET /stays/:id', () => {
  it('responds with a specific stay', async () => {
    const stayId = 'some-stay-id';
    const response = await request(app)
      .get(`/stays/${stayId}`)
      .set('Authorization', `Bearer ${process.env.DUFFEL_API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.data.id).toEqual(stayId);
  });
});

// Test for POST /stays endpoint
describe('POST /stays', () => {
  it('creates a new stay', async () => {
    const newStay = {
      // your stay data here
    };

    const response = await request(app)
      .post('/stays')
      .send(newStay)
      .set('Authorization', `Bearer ${process.env.DUFFEL_API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body.data).toMatchObject(newStay);
  });
});

// Test for PUT /stays/:id endpoint
describe('PUT /stays/:id', () => {
  it('updates a specific stay', async () => {
    const stayId = 'some-stay-id';
    const updatedStay = {
      // your updated stay data here
    };

    const response = await request(app)
      .put(`/stays/${stayId}`)
      .send(updatedStay)
      .set('Authorization', `Bearer ${process.env.DUFFEL_API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.data).toMatchObject(updatedStay);
  });
});

// Test for DELETE /stays/:id endpoint
describe('DELETE /stays/:id', () => {
  it('deletes a specific stay', async () => {
    const stayId = 'some-stay-id';

    await request(app)
      .delete(`/stays/${stayId}`)
      .set('Authorization', `Bearer ${process.env.DUFFEL_API_KEY}`)
      .expect(204);
  });
});
```

Please replace `'../app'` with the path to your express app, and replace `'some-stay-id'`, `newStay`, and `updatedStay` with your actual data. Also, make sure to set the `DUFFEL_API_KEY` environment variable with your actual Duffel API key.