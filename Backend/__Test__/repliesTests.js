const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index.js");

// Replies Tests
mocha.describe("Replies API Testing", () => {
    
    console.log("test started5");

    mocha.it("gets /replies/readReplies list", (done) => {
        
        chai
            .request(server)
            .get("/replies/readReplies")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    "_id": 1,
                    "content": [],
                    "__v": 0
                });
            });
        return done();
    })
    after(() => {server.close();}); 
})