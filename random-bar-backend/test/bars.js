const request = require('supertest');
const expect = require('chai').expect;

const app = require('../index.js');

describe('Bars', () => {

  it('POST /bars. Returns status code 201', (done) => {
    request(app)
    .post('/saved_bars')
    .send({
      bar: {
        name: 'Random Bar Test',
        rating: 4.5,
        phone: '8659869028',
        price: '$$',
        address: '123 Ave, TE 4th St. Test, TST 11234'
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(201);
      done();
    });
  });

});
