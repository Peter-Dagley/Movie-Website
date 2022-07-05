const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index.js");

// Testing read methods of all the locations
describe("Movie API Testing", () => {
    
    it("gets /locationlist list", (done) => {
        chai
            .request(server)
            .get("/locationlist")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(16);
            });
        return done();
    })
})