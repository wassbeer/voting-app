process.env.NODE_ENV = "test";

const request = require("supertest"),
    chai = require("chai"),
    chaiHttp = require("chai-http"),
    should = chai.should(),
    server = require("../app");

chai.use(chaiHttp);

describe("routes : authentication", () => {
    let reusableToken;

    /* 

     URI endpoints

	| Endpoint                 | HTTP Method | CRUD Method |              Result                                   |
	| ------------------------ | :---------: | ----------: | ----------------------------------------------------: |
	| /authentication/signup   |    POST     |   CREATE    | hash password and provide JWT upon signup             |
	| /authentication/login    |     POST    |   CREATE    | bcrypt compare password and provide JWT upon login    |
	| /authentication/verify   |     POST    |   CREATE    | verify a JWT for authenticated routes                 |

    */

    describe("POST /authentication/signup", () => {
        it("it should CREATE a JWT", (done) => {
            chai.request(server)
                .post("/authentication/signup")
                .send({ name: "Bas", email: "bkdelaat@gmail.com", password: "wolf" })
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property("success");
                    res.body.success.should.equal(true);
                    res.body.should.have.property("token");
                    reusableToken = res.body.token;
                    done();
                });
        });
    });

        describe("POST /authentication/login", () => {
            it("it should CREATE a JWT", (done) => {
                chai.request(server)
                    .post("/authentication/login")
                    .send({ name: "Bas", email: "bkdelaat@gmail.com", password: "wolf" })
                    .end((err, res) => {
                        if (err) return done(err);
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.have.property("success");
                        res.body.success.should.equal(true);
                        res.body.should.have.property("token");
                        done();
                    });
            });
        });

    describe("POST /authentication/verify", () => {
        it("it should verify a JWT", (done) => {
            chai.request(server)
                .post("/authentication/verify")
                .send({ token: reusableToken })
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.have.property("success");
                    res.body.success.should.equal(true);
                    res.body.should.have.property("message");
                    done();
                });
        });
    });

});