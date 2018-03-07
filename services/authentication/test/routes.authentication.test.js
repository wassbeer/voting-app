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
    | /authentication/signup   |    POST     |   CREATE    | hash password and provide JWT upon signup             |
    | /authentication/login    |     POST    |   CREATE    | bcrypt compare password and provide JWT upon login    |
    | /authentication/verify   |     POST    |   CREATE    | verify a JWT for authenticated routes                 |
    | /authentication/ping     |     GET     |   READ      | api test route                                        |
    | /authentication/update   |     PUT     |   UPDATE    | hash a newly created password                         |

*/



	describe('POST /authentication/signup', () => {
		it('it should CREATE a JWT', (done) => {
			reusableEmail =  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + '@gmail.com';
			chai.request(server)
				.post('/authentication/signup')
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

	describe('POST /authentication/login', () => {
		it('it should CREATE a JWT', (done) => {
			chai.request(server)
				.post('/authentication/login')
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

	describe('POST /authentication/verify', () => {
		it('it should verify a JWT', (done) => {
			chai.request(server)
				.post('/authentication/verify')
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


	describe('/GET /authentication/ping', () => {
		it('it should GET "pong"', (done) => {
			request(server)
				.get('/authentication/ping')
				.expect(200)
				.end((err) => {
					if (err) return done(err);
					done();
				});
		});
	});

	describe('PUT /authentication/update', () => {
		it('it should UPDATE a password', (done) => {
			chai.request(server)
				.put(`/authentication/update/${reusableID}`)
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