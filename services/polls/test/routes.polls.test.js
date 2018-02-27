process.env.NODE_ENV = "test";

const request = require("supertest"),
    chai = require("chai"),
    chaiHttp = require("chai-http"),
    should = chai.should(),
    server = require("../src/app"),
    queries = require("../src/db/queries"),
    mongo = require("../src/db/connection");

chai.use(chaiHttp);

describe("routes : polls", () => {

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
            userName: "Bas",
            pollName: "Your favourite soft drink",
            pollOptions: "Coca-Cola,Fanta",
            _id: "5a89948a490ecd3123f47150"
        }).then(() => {
            done(); 
        });
    });

    afterEach((done) => {
        mongo.getDb().collection("polls").drop();
        done();
    });

    describe("POST /api/polls/create", () => {
        it("it should CREATE a poll about mammals", (done) => {
            chai.request(server)
                .post("/api/polls/create")
                .send({ userName: "Bas", pollName: "Your favourite mammal", pollOptions: "wolf,whale"
                , _id: 2 })
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(201);
                    res.should.be.json;
                    res.body.should.have.property("status");
                    res.body.status.should.equal("success");
                    res.body.data.ok.should.equal(1);
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

    describe("GET /api/polls/user/Bas", () => {
        it("it should READ the polls of a specific user", (done) => {
            request(server)
                .get("/api/polls/user/Bas")
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("status");
                    res.body.status.should.equal("success");
                    res.body.data.length.should.not.equal(0);
                    done();
                });
        });
    });

    describe("GET /api/polls/poll/1", () => {
        it("it should READ a poll about soft drinks", (done) => {
            request(server)
                .get("/api/polls/poll/5a89948a490ecd3123f47150")
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("status");
                    res.body.status.should.equal("success");
                    done();
                });
        });
    });

    describe("PUT /api/polls/update/5a89948a490ecd3123f47150", () => {
        it("it should UPDATE a poll result", (done) => {
            request(server)
                .put("/api/polls/update/5a89948a490ecd3123f47150")
                .send({ pollName: "Name your favourite soft drink in the world", pollOptions: "Fanta"})
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("status");
                    res.body.status.should.equal("success");
                    res.body.data.n.should.equal(1);
                    done();
                });
        });
    });

    describe("DELETE /api/polls/delete/5a89948a490ecd3123f47150", () => {
        it("it should DELETE a poll about soft drinks", (done) => {
            request(server)
                .delete("/api/polls/delete/5a89948a490ecd3123f47150")
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.be.json;
                    res.body.should.have.property("status");
                    res.body.status.should.equal("success");
                    res.body.data.n.should.equal(1);
                    done();
                });
        });
    });
});