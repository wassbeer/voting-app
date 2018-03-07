process.env.NODE_ENV = 'test';

const request = require('supertest'),
	chai = require('chai'),
	chaiHttp = require('chai-http'),
	server = require('../src/app'),
	queries = require('../src/db/queries'),
	getDb = require('../src/db/connection').getDb,
	should = chai.should();

chai.use(chaiHttp);

describe('routes : users', () => {
	let userId;
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
			password: '3982jnf'
		}).then((user) => {
			// store userId
			userId = user._id;
			done();
		});
	});

	afterEach((done) => {
		getDb().collection('users').drop();
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
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					res.body.data.name.should.equal('Bas');
					done();
				});
		});
	});

	describe('POST /api/users/read', () => {
		it('it should authenticate user Bas', (done) => {
			request(server)
				.post('/api/users/read')
				.send({email:'bkdelaat@gmail.com'})
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.should.have.property('data');
					res.body.success.should.equal(true);
					res.body.data.name.should.equal('Bas');
					done();
				});
		});
	});

	describe('POST /api/users/read', () => {
		it('it should authenticate user Bas', (done) => {
			request(server)
				.post('/api/users/read')
				.send({email: 'bksdsdfksddelaat@gmail.com'})
				.expect(404)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.should.have.property('data');
					res.body.success.should.equal(false);
					done();
				});
		});
	});

	describe('GET /api/users/read/:id', () => {
		it('it should READ user Bas', (done) => {
			request(server)
				.get(`/api/users/read/${userId}`)
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					done();
				});
		});
	});

	describe('/GET /api/users/ping', () => {
		it('it should GET "pong"', (done) => {
			request(server)
				.get('/api/users/ping')
				.expect(200)
				.end((err) => {
					if (err) return done(err);
					done();
				});
		});
	});

	// this test fails because the 'inserted' custom id is not the same as the stored id
	describe('PUT /api/users/update/:id', () => {
		it('it should UPDATE user bas', (done) => {
			request(server)
				.put(`/api/users/update/${userId}`)
				.send({ name: 'bas', email: 'bassiedelaat@hotmail.com', password: '12345' })
				.expect(201)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					res.body.data.n.should.equal(1);
					done();
				});
		});
	});

	describe('DELETE /api/users/delete/:id', () => {
		it('it should DELETE user bas', (done) => {
			request(server)
				.delete(`/api/users/delete/${userId}`)
				.expect(200)
				.end((err, res) => {
					if (err) return done(err);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					res.body.data.n.should.equal(1);
					done();
				});
		});
	});
});