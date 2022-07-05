const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index.js");

// Replies Tests
describe("Replies API Testing", () => {
    
    it("gets /replies/readReplies list", (done) => {
        chai
            .request(server)
            .get("/replies/readReplies")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(1);
            });
        return done();
    })

})