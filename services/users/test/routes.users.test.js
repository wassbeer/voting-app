process.env.NODE_ENV = 'test';

const request = require('supertest'),
    chai = require('chai'),
    should = chai.should(),
    server = require('../src/app'),
    queries = require('../src/db/queries'),
    getDb = require('../src/db/connection').getDb,
    connectDatabase = require('../src/db/connection').init

describe('routes : users', () => {

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

    // ## URI endpoints

    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /api/users/create   |    POST     |      CREATE | create a user |
    // | /api/users/ping       |     GET     |        READ |            pong |
    // | /api/users/user/:id   |     GET     |        READ |   get user info |
    // | /api/users/update/:id |     PUT     |      UPDATE |     edit a user |
    // | /api/users/delete/:id |   DELETE    |      DELETE |   delete a user |


    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /api/users/create   |    POST     |      CREATE | create a user |

    describe('POST /api/users/create', () => {
        it('it should create a user', (done) => {
            request(server)
                .post('/api/users/create')
                .field('name', 'Thomas')
                .field('email', 'tm.wassenberg@gmail.com')
                .field('password', 'baea0912')
                .field('_id', '2')
                .expect(queries.readUser({_id: '2'}).then((users => {
                    users !== null;
                    users.name === 'Thomas'
                    users.email === 'tm.wassenberg@gmail.com'
                    users.password === 'baea0912'
                })))
                .end((err, res) => {
                    err ? console.log(err) :
                        done();
                });
        });

        it('it should not create a user with an already created e-mail', (done) => {
            queries.createUser({ name: "bas", email: "bkdelaat@gmail.com", password: "12345" }, (err, user) => {
                request(server)
                    .post('/user/create')
                    .field(user.name)
                    .field(user.email)
                    .field(user.password)
                    .expect('Content-Type', /html/)
                    .expect(500)
                    .end((err, res) => {
                        err ? console.log(err) :
                            done();
                    });
            })
        });

        it('it should not create a user when there is no e-mail', (done) => {
            request(server)
                .post('/api/users/create')
                .field('name', 'Bas')
                .field('password', '<passport-generated-password>')
                .expect(500)
                .end((err, res) => {
                    err ? console.log(err) :
                        done();
                });
        });
        it('it should not create a user when there is no password', (done) => {
            request(server)
                .post('/api/users/create')
                .field('name', 'Bas')
                .field('email', 'bkdelaat@gmail.com')
                .expect(500)
                .end((err, res) => {
                    err ? console.log(err) :
                        done();
                });
        });
    });

    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /api/users/user/:id   |     GET     |        READ |   get user info |

    describe('GET /api/users/user/:id', () => {
        it('it should GET a user Bas', (done) => {
            request(server)
                .get('/api/users/user/1')
                .expect(200)
                .expect((res) => {
                    res.body.name === 'Bas'
                })
                .end((err, res) => {
                    err ? console.log(err) :
                        done();
                });
        });
    });

    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /api/users/ping       |     GET     |        READ |            pong |

    describe('/GET /api/users/ping', () => {
        it('it should GET "pong"', (done) => {
            request(server)
                .get('/api/users/ping')
                .expect('Content-Type', /html/)
                .expect('Content-Length', '4')
                .expect(200)
                .end(function(err, res) {
                    err ? console.log(err) :
                        done();
                });
        });
    });

    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /api/users/update/:id |     PUT     |      UPDATE |     edit a user |

    describe('PUT /api/users/update/:id', () => {
        it('it should PUT users/user/bas', (done) => {
            queries.updateUser('1', { name: "bas", email: "bkdelaat@hotmail.com", password: "12345" }, (err, user) => {
                request(server)
                    .expect('Content-Type', /html/)
                    .expect(200)
                    .expect('Location', '/api/users/user/' + user.id)
                    .end((err, res) => {
                        err ? console.log(err) :
                            done();
                    });
            })
        })
    })


    // | Endpoint          | HTTP Method | CRUD Method |          Result |
    // | ----------------- | :---------: | ----------: | --------------: |
    // | /api/users/delete/:id |   DELETE    |      DELETE |   delete a user |

    describe('DELETE /api/users/delete/:id', () => {
        it('it should DELETE user bas', (done) => {
            queries.createUser({ name: "bas", email: "bkdelaat@gmail.com", password: "12345" }, (err, user) => {
                queries.deleteUser({ email: "bkdelaat@hotmail.com" }, (err, user) => {
                    request(server)
                        .expect('Content-Type', /html/)
                        .expect(200)
                        .expect('Location', '/')
                        .end((err, res) => {
                            err ? console.log(err) :
                                done();
                        });
                })
            })
        })
    });

});