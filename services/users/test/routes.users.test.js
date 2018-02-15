process.env.NODE_ENV = 'test';

const request = require('supertest'),
    chai = require('chai'),
    should = chai.should(),
    server = require('../src/app'),
    mongoose = require('../src/db/connection'),
    User = require('../src/db/models.js');

describe('routes : users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    // ## URI endpoints

    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /users/login      |    POST     |      CREATE | login as a user |
    // | /users/register   |    POST     |      CREATE | register a user |
    // | /users/ping       |     GET     |        READ |            pong |
    // | /users/user/:id   |     GET     |        READ |   get user info |
    // | /users/update/:id |     PUT     |      UPDATE |     edit a user |
    // | /users/delete/:id |   DELETE    |      DELETE |   delete a user |


    describe('/GET /users/ping', () => {
        it('it should GET "pong"', (done) => {
            request(server)
                .get('/users/ping')
                .expect('Content-Type', /html/)
                .expect('Content-Length', '4')
                .expect(200)
                .end(function(err, res) {
                    err ?
                        console.log(err) :
                        done();
                });
        });
    });
});