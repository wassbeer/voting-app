process.env.NODE_ENV = 'test';

const request = require('supertest'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    should = chai.should(),
    server = require('../src/app'),
    queries = require('../src/db/queries'),
    getDb = require('../src/db/connection').getDb,
    connectDatabase = require('../src/db/connection').init;

chai.use(chaiHttp);

describe('routes : users', () => {


    /* 

 URI endpoints

| Endpoint              | HTTP Method | CRUD Method |          Result |
| --------------------: | :---------: | ----------: | --------------: |
| /api/users/create     |    POST     |      CREATE | create a user |
| /api/users/ping       |     GET     |        READ |            pong |
| /api/users/user/:id   |     GET     |        READ |   get user info |
| /api/users/update/:id |     PUT     |      UPDATE |     edit a user |
| /api/users/delete/:id |   DELETE    |      DELETE |   delete a user |

*/

beforeEach((done) => {
    getDb().collection('users').drop();
})

    // beforeEach((done) => {
    //     console.log('before each test')
    //     // drop collection
    //     getDb().collection('users').drop().then(() => {
    //         // create collection
    //         getDb().createCollection('users').then(() => {
    //             // insert a dummy user Bas
    //             queries.createUser({
    //                 name: 'Bas',
    //                 email: 'bkdelaat@gmail.com',
    //                 password: '3982jnf',
    //                 _id: '1'
    //             }).then(() => {
    //                 done()
    //             })
    //         })
    //     })
    // });

    describe('POST /api/users/create', () => {
        it('it should create a user', (done) => {
            chai.request(server)
                .post('/api/users/create')
                .send({name: 'Bas', email: 'bkddelaat@gmail.com', password: '38eqw', _id: 2})
                .end((err, res) => {
                    if (err) return done(err);
                    // res.should.have.status(200);
                    // res.should.be.json;
                    // res.body.should.have.property('status');
                    // res.body.status.should.equal('success')
                    done();
                });
        });

        // it('it should not create a user with an already created e-mail', (done) => {
        //     queries.createUser({ name: "bas", email: "bkdelaat@gmail.com", password: "12345" }, (err, user) => {
        //         request(server)
        //             .post('/user/create')
        //             .field(user.name)
        //             .field(user.email)
        //             .field(user.password)
        //             .expect(500)
        //             .end((err, res) => {
        //                 err ? console.log(err) :
        //                     done();
        //             });
        //     })
        // });
    });

    //     describe('GET /api/users/user/:id', () => {
    //         it('it should GET a user Bas', (done) => {
    //             request(server)
    //                 .get('/api/users/user/1')
    //                 .expect(200)
    //                 .expect((res) => {
    //                     res.status === "success"
    //                 })
    //                 .end((err, res) => {
    //                     err ? console.log(err) :
    //                         done();
    //                 });
    //         });
    //     });

    //     describe('/GET /api/users/ping', () => {
    //         it('it should GET "pong"', (done) => {
    //             request(server)
    //                 .get('/api/users/ping')
    //                 .expect('Content-Type', /html/)
    //                 .expect('Content-Length', '4')
    //                 .expect(200)
    //                 .end(function(err, res) {
    //                     err ? console.log(err) :
    //                         done();
    //                 });
    //         });
    //     });

    //     describe('PUT /api/users/update/:id', () => {
    //         it('it should PUT users/user/bas', (done) => {
    //             queries.updateUser('1', { name: "bas", email: "bkdelaat@hotmail.com", password: "12345" }, (err, user) => {
    //                 request(server)
    //                     .expect(200)
    //                     .expect((res) => {
    //                         res.status === "success"
    //                     })
    //                     .end((err, res) => {
    //                         err ? console.log(err) :
    //                             done();
    //                     });
    //             })
    //         })
    //     })

    //     describe('DELETE /api/users/delete/:id', () => {
    //         it('it should DELETE user bas', (done) => {
    //             queries.createUser({ name: "bas", email: "bkdelaat@gmail.com", password: "12345" }, (err, user) => {
    //                 queries.deleteUser({ email: "bkdelaat@hotmail.com" }, (err, user) => {
    //                     request(server)
    //                         .expect(200)
    //                         .expect((res) => {
    //                             res.status === "success"
    //                         })
    //                         .end((err, res) => {
    //                             err ? console.log(err) :
    //                                 done();
    //                         });
    //                 })
    //             })
    //         })
    //     });
});