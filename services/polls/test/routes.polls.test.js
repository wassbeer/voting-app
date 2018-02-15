// TEMPLATE

// Define environment
process.env.NODE_ENV = 'test';

// require dependencies
var chai = require('chai'),
should = chai.should(),
chaiHttp = require('chai-http');
chai.use(chaiHttp);

// require server and test configuration
var server = require('../../src/server/app'),
knex = require('../../src/server/db/knex');

// describe routes

// seed the db table with knex.seed.run() --> How does this work in Jest?


// GET test

// 1. describe route

describe('GET /api/v1/users', () => {

// 1.1 describe what it should do 

it('should respond with all users', (done) => {

// 1.2 call the server

    chai.request(server)

// 1.3 invoke an HTTP method

   .get('/api/v1/users')

// 1,3 Upon ending of the HTTP method 

    .end((err, res) => {

// 1.4 there should be no errors

      should.not.exist(err);

// 1.5 there should be a 200 status code

      res.status.should.equal(200);

// 1.6  the response should be JSON

      res.type.should.equal('application/json');

// 1.7 the JSON response body should have a key-value pair of {"status": "success"}

      res.body.status.should.eql('success');

// 1.8 the JSON response body should have a key-value pair of {"data": [2 user objects]}

      res.body.data.length.should.eql(2);

// 1.9 the first object in the data array should have the right keys

      res.body.data[0].should.include.keys(
        'id', 'username', 'email', 'created_at'
      );

// 1.10 callback

      done();
    });
  });
});


// POST test

// 2. describe route

describe('POST /api/v1/users', () => {

  // 2.1 describe what the route should do

  it('should respond with a success message along with a single user that was added', (done) => {

    // 2.3 request the server

    chai.request(server)

    // 2.4 invoke the POST HTTP methodd

    .post('/api/v1/users')

    // 2.5 send the post object

    .send({
      username: 'ryan',
      email: 'ryan@ryan.com'
    })

    // 2.6 end the HTTP request and trigger callback

    .end((err, res) => {

      // 2.7 there should be no errors

      should.not.exist(err);

      // 2.8 there should be a 201 status code (indicating that something was "created")

      res.status.should.equal(201);

      // 2.9 the response should be JSON
      res.type.should.equal('application/json');

      // 2.10 the JSON response body should have a key-value pair of {"status": "success"}

      res.body.status.should.eql('success');

      // 2.11 the JSON response body should have a key-value pair of {"data": 1 user object}
      res.body.data[0].should.include.keys(
        'id', 'username', 'email', 'created_at'
      );

      // 2.12 callback done ()
      done();
    });
  });
});


// PUT test

describe('PUT /api/v1/users', () => {
  it('should respond with a success message along with a single user that was updated', (done) => {
    knex('users')
    .select('*')
    .then((user) => {
      const userObject = user[0];
      chai.request(server)
      .put(`/api/v1/users/${userObject.id}`)
      .send({
        username: 'updatedUser',
        email: 'updated@user.com'
      })
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {"status": "success"}
        res.body.status.should.eql('success');
        // the JSON response body should have a
        // key-value pair of {"data": 1 user object}
        res.body.data[0].should.include.keys(
          'id', 'username', 'email', 'created_at'
        );
        // ensure the user was in fact updated
        var newUserObject = res.body.data[0];
        newUserObject.username.should.not.eql(userObject.username);
        newUserObject.email.should.not.eql(userObject.email);
        // redundant
        newUserObject.username.should.eql('updatedUser');
        newUserObject.email.should.eql('updated@user.com');
        done();
      });
    });
  });
});


// DETELETE test

describe('DELETE /api/v1/users/:id', () => {
  it('should respond with a success message along with a single user that was deleted', (done) => {
    knex('users')
    .select('*')
    .then((users) => {
      const userObject = users[0];
      const lengthBeforeDelete = users.length;
      chai.request(server)
      .delete(`/api/v1/users/${userObject.id}`)
      .end((err, res) => {
        // there should be no errors
        should.not.exist(err);
        // there should be a 200 status code
        res.status.should.equal(200);
        // the response should be JSON
        res.type.should.equal('application/json');
        // the JSON response body should have a
        // key-value pair of {"status": "success"}
        res.body.status.should.eql('success');
        // the JSON response body should have a
        // key-value pair of {"data": 1 user object}
        res.body.data[0].should.include.keys(
          'id', 'username', 'email', 'created_at'
        );
        // ensure the user was in fact deleted
        knex('users').select('*')
        .then((updatedUsers) => {
          updatedUsers.length.should.eql(lengthBeforeDelete - 1);
          done();
        });
      });
    });
  });
});
