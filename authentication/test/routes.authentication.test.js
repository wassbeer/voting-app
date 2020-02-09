process.env.NODE_ENV = 'test';

const request = require('supertest'),
	chai = require('chai'),
	chaiHttp = require('chai-http'),
	server = require('../app');

chai.use(chaiHttp);

describe('routes : authentication!', () => {
	let reusableToken,
		reusableID,
		reusableEmail; // to prevent double e-mail

	/* 

    URI endpoints

    | Endpoint                 | HTTP Method | CRUD Method |              Result                                   |
    | ------------------------ | :---------: | ----------: | ----------------------------------------------------: |
    | /api/authentication/signup   |    POST     |   CREATE    | hash password and provide JWT upon signup             |
    | /api/authentication/login    |     POST    |   CREATE    | bcrypt compare password and provide JWT upon login    |
    | /api/authentication/verify   |     POST    |   CREATE    | verify a JWT for authenticated routes                 |
    | /api/authentication/update   |     PUT     |   UPDATE    | hash a newly created password                         |

*/



	describe('POST /api/authentication/signup', () => {
		it('it should CREATE a JWT', (done) => {
			reusableEmail =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '@gmail.com';
			chai.request(server)
				.post('/api/authentication/signup')
				.send({ name: 'Bas', email: reusableEmail, password: 'wolf' })
				.end((err, res) => {
					if (err) return done(err);
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					res.body.should.have.property('token');
					reusableToken = res.body.token;
					reusableID = res.body.user._id;
					done();
				});
		});
	});

	describe('POST /api/authentication/login', () => {
		it('it should CREATE a JWT', (done) => {
			chai.request(server)
				.post('/api/authentication/login')
				.send({ name: 'Bas', email: reusableEmail, password: 'wolf' })
				.end((err, res) => {
					if (err) return done(err);
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					res.body.should.have.property('token');
					done();
				});
		});
	});

	describe('POST /api/authentication/verify', () => {
		it('it should verify a JWT', (done) => {
			chai.request(server)
				.post('/api/authentication/verify')
				.send({ token: reusableToken })
				.end((err, res) => {
					if (err) return done(err);
					res.should.have.status(200);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					res.body.should.have.property('message');
					done();
				});
		});
	});

	describe('PUT /api/authentication/update', () => {
		it('it should UPDATE a password', (done) => {
			chai.request(server)
				.put(`/api/authentication/update/${reusableID}`)
				.send({password: 'wolf' })
				.end((err, res) => {
					if (err) return done(err);
					res.should.have.status(201);
					res.should.be.json;
					res.body.should.have.property('success');
					res.body.success.should.equal(true);
					done();
				});
		});
	});

});