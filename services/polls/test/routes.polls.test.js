process.env.NODE_ENV = 'test';

const request = require('supertest'),
	chai = require('chai'),
	chaiHttp = require('chai-http'),
	should = chai.should(),
	server = require('../src/app'),
	queries = require('../src/db/queries'),
	mongo = require('../src/db/connection');
	
chai.use(chaiHttp);

describe('routes : polls', () => {

	/* 

     URI endpoints

	| Endpoint              | HTTP Method | CRUD Method |              Result |
	| --------------------- | :---------: | ----------: | ------------------: |
	| /api/polls/create     |    POST     |      CREATE |       create a poll |
	| /api/polls/ping       |     GET     |        READ |                pong |
	| /api/polls/user/:id   |     GET     |        READ | get polls of a user |
	| /api/polls/poll/:id   |     GET     |        READ |          get a poll |
	| /api/polls/result/:id |     GET     |        READ |   get a poll result |
	| /api/polls/update/:id |     PUT     |      UPDATE |         edit a poll |
	| /api/polls/delete/:id |   DELETE    |      DELETE |       delete a poll |

    */

	beforeEach((done) => {
		queries.createPoll({
			poll: 'Your favourite soft drink',
			option1: 'Coca-Cola', // pollOptions: [{'Coca-Cola': 0}]
			option2: 'Fanta', // // pollOptions: [{'Coca-Cola': 0}, {'Fanta': 0}]
			user: '5a89948a490ecd3123f47150'
			_id: 1
		}).then((poll) => {
			// update poll with result
			done();
		});
	});

	afterEach((done) => {
		mongo.getDb().collection('polls').drop();
		done();
	});

	describe('POST /api/polls/create', () => {
		it('it should CREATE a poll about mammals', (done) => {
			chai.request(server)
				.post('/api/polls/create')
				.send({ poll: 'Your favourite mammal', option1: 'whale', option2: 'wolf', _id: 2 })
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
	});

	describe('/GET /api/polls/ping', () => {
		it('it should GET "pong"', (done) => {
			request(server)
				.get('/api/polls/ping')
				.expect(200)
				.end(function(err, res) {
					if (err) return done(err);
					done();
				});
		});
	});

	describe('GET /api/polls/user/5a89948a490ecd3123f47150', () => {
		it('it should READ the polls of a specific user', (done) => {
			request(server)
				.get('/api/polls/user/5a89948a490ecd3123f47150')
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

	describe('GET /api/polls/poll/1', () => {
		it('it should READ a poll about soft drinks', (done) => {
			request(server)
				.get('/api/polls/poll/1')
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

	describe('GET /api/polls/result/1', () => {
		it('it should READ the result about the soft drinks poll', (done) => {
			request(server)
				.get('/api/polls/result/1')
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

	describe('PUT /api/polls/update/1 --> Change poll, vote for option Fanta', () => {
		it('it should UPDATE user bas', (done) => {
			request(server)
				.put('/api/polls/update/1')
				.send({ poll: 'Name your favourite SoFT drink', option: 'Fanta', _id:1})
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

	describe('DELETE /api/polls/delete/:id', () => {
		it('it should DELETE user bas', (done) => {
			request(server)
				.delete('/api/polls/delete/1')
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