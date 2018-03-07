process.env.NODE_ENV = "test";

const request = require("supertest"),
    chai = require("chai"),
    chaiHttp = require("chai-http"),
    should = chai.should(),
    server = require("../src/app"),
    queries = require("../src/db/queries"),
    getDb = require("../src/db/connection").getDb;

chai.use(chaiHttp);

describe("routes : polls", () => {
    let  pollId,
    userId= "12345"

    /* 

     URI endpoints

	| Endpoint              | HTTP Method | CRUD Method |              Result |
	| --------------------- | :---------: | ----------: | ------------------: |
	| /api/polls/create     |    POST     |      CREATE |       create a poll |
	| /api/polls/ping       |     GET     |        READ |                pong |
	| /api/polls/user/:id   |     GET     |        READ | get polls of a user |
	| /api/polls/poll/:id   |     GET     |        READ |          get a poll |
	| /api/polls/update/:id |     PUT     |      UPDATE |         edit a poll |
	| /api/polls/delete/:id |   DELETE    |      DELETE |       delete a poll |

    */

    beforeEach((done) => {
        getDb()
        queries.createPoll({
            userId: userId,
            pollName: "Your favourite soft drink",
            pollOptions: ["Coca-Cola","Fanta"]
        }).then((poll) => {
            pollId = poll.ops[0]._id;
            done(); 
        });
    });

    afterEach((done) => {
        getDb().collection("polls").drop();
        done();
    });

    describe("POST /api/polls/create", () => {
        it("it should CREATE a poll about mammals", (done) => {
            chai.request(server)
                .post("/api/polls/create")
                .send({ userId: "678910", pollName: "Your favourite mammal", pollOptions: ["wolf","whale"], _id: 2 })
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(201);
                    res.should.be.json;
                    res.body.should.have.property("success");
                    res.body.success.should.equal(true);
                    res.body.data.pollName.should.equal("Your favourite mammal");
                    done();
                });
        });
    });

    describe("/GET /api/polls/ping", () => {
        it("it should GET \"pong\"", (done) => {
            request(server)
                .get("/api/polls/ping")
                .expect(200)
                .end(function(err, res) {
                    if (err) return done(err);
                    done();
                });
        });
    });

    describe(`GET /api/polls/user/${userId}`, () => {
        it("it should READ the polls of a specific user", (done) => {
            request(server)
                .get(`/api/polls/user/${userId}`)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("success");
                    res.body.success.should.equal(true)
                    res.body.data.length.should.not.equal(0);
                    done();
                });
        });
    });

    describe(`GET /api/polls/poll/${pollId}}`, () => {
        it("it should READ a poll about soft drinks", (done) => {
            request(server)
                .get(`/api/polls/poll/${pollId}`)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("success");
                    res.body.success.should.equal(true);
                    res.body.data.pollName.should.equal("Your favourite soft drink");
                    done();
                });
        });
    });

    describe(`PUT /api/polls/update/${pollId}`, () => {
        it("it should UPDATE a poll result", (done) => {
            request(server)
                .put(`/api/polls/update/${pollId}`)
                .send({ pollName: "Name your favourite soft drink in the world", pollOptions: "Fanta"})
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("success");
                    res.body.success.should.equal(true);
                    res.body.data.n.should.equal(1);
                    done();
                });
        });
    });

    describe(`DELETE /api/polls/delete/${pollId}`, () => {
        it("it should DELETE a poll about soft drinks", (done) => {
            request(server)
                .delete(`/api/polls/delete/${pollId}`)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("success");
                    res.body.success.should.equal(true);
                    res.body.data.n.should.equal(1);
                    done();
                });
        });
    });
});