const request = require('supertest');
const expect  = require('chai').expect;
const AuthService = require('../services/auth');
const bcrypt = require('bcrypt');


const app  = require('../index');

const User = require('../models/user');

describe('Users', () => {

  let user;

  before((done) => {

    User
      .create({
          firstname: "Bobby",
          lastname: "King",
          username: "bking",
          email: "bobby@king.com",
          password_digest: "bobby"
      })
      .then((data) => {
        user = data;
        done();
      })
  });

  after((done) => {
    done();
  });

  it('GET /users should return a 200 status code and be an object', (done) => {
    request(app)
    .get('/users')
    .end((err, results) => {
      expect(results.statusCode).to.be.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    })
  })

  it('GET /users should return a status code and be an object', (done) => {
    request(app)
    .get(`/users/2`)
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    })
  })

  it('POST /users should return a 201 status code and be an object', (done) => {
    request(app)
    .post('/users')
    .send({
      user: {
        firstname: "Irwin",
        lastname: "Tsay",
        username: "itsay",
        email: "irwin@tsay.com",
        password_digest: "hello"
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(201);
      expect(results.body).to.be.an.instanceOf(Object);
      expect(results.body).to.not.be.an.instanceOf(Array);
      done();
    })
  })


});
