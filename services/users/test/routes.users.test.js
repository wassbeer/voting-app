process.env.NODE_ENV = 'test';

const request = require('supertest'),
	chai = require('chai'),
	chaiHttp = require('chai-http'),
	server = require('../src/app'),
	queries = require('../src/db/queries'),
	mongo = require('../src/db/connection'),
	should = chai.should();

chai.use(chaiHttp);

describe('routes : users', () => {

	/* 

		## URI endpoints

		| Endpoint              | HTTP Method | CRUD Method |          Result |
		| --------------------- | :---------: | ----------: | --------------: |
		| /api/users/create     |    POST     |      CREATE | register a user |
		| /api/users/read       |    POST     |      CREATE | authenticate    |
		| /api/users/ping       |    GET      |        READ |            pong |
		| /api/users/read/:id   |    GET      |        READ |   get user info |
		| /api/users/update/:id |    PUT      |      UPDATE |     edit a user |
		| /api/users/delete/:id |    DELETE   |      DELETE |   delete a user |

    */

	beforeEach((done) => {
		queries.createUser({
			name: 'Bas',
			email: 'bkdelaat@gmail.com',
			password: '3982jnf',
			_id: '5a89948a490ecd3123f47150'
		}).then(() => {
			done();
		});
	});

	afterEach((done) => {
		mongo.getDb().collection('users').drop();
		done();
	});

	describe('POST /api/users/create', () => {
		it('it should CREATE a user Bas', (done) => {
			chai.request(server)
				.post('/api/users/create')
				.send({ name: 'Bas', email: 'bkkddelaat@gmail.com', password: '38eqw', _id: 2 })
				.end((err, res) => {
					if (err) return done(err);
					res.should.have.status(201);
					res.should.be.json;
					res.body.should.have.property('status');
					res.body.status.should.equal('success');
					res.body.data.ok.should.equal(1);
					done();
				});
		});

		// it('it should not create a user with an already created e-mail', (done) => {
		// 	chai.request(server)
		// 		.post('/api/users/create')
		// 		.send({ name: 'bas', email: 'bkdelaat@gmail.com', password: '12345' })
		// 		.end((err, res) => {
		// 			should.exist(err);
		// 		});
		// });
	});

	describe('POST /api/users/read', () => {
		it('it should authenticate user Bas', (done) => {
			request(server)
				.post('/api/users/read')
				.send({email: 'bkdelaat@gmail.com'})
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('status');
					res.body.should.have.property('data')
					res.body.status.should.equal('success');
					res.body.data.name.should.equal('Bas')
					done();
				});
		});
	});

	describe('POST /api/users/read', () => {
		it('it should authenticate user Bas', (done) => {
			request(server)
				.post('/api/users/read')
				.send({email: 'bkksddelaat@gmail.com'})
				.expect(404)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('status');
					res.body.should.have.property('data')
					res.body.status.should.equal('failure');
					done();
				});
		});
	});

	describe('GET /api/users/read/5a89948a490ecd3123f47150', () => {
		it('it should READ user Bas', (done) => {
			request(server)
				.get('/api/users/read/5a89948a490ecd3123f47150')
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('status');
					res.body.status.should.equal('success');
					done();
				});
		});
	});

	describe('/GET /api/users/ping', () => {
		it('it should GET "pong"', (done) => {
			request(server)
				.get('/api/users/ping')
				.expect(200)
				.end(function(err, res) {
					if (err) return done(err);
					done();
				});
		});
	});

	// this test fails because the 'inserted' custom id is not the same as the stored id
	describe('PUT /api/users/update/:id', () => {
		it('it should UPDATE user bas', (done) => {
			request(server)
				.put('/api/users/update/5a89948a490ecd3123f47150')
				.send({ name: 'bas', email: 'bassiedelaat@hotmail.com', password: '12345' })
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('status');
					res.body.status.should.equal('success');
					done();
				});
		});
	});

	describe('DELETE /api/users/delete/:id', () => {
		it('it should DELETE user bas', (done) => {
			request(server)
				.delete('/api/users/delete/5a89948a490ecd3123f47150')
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('status');
					res.body.status.should.equal('success');
					done();
				});
		});
	});
});