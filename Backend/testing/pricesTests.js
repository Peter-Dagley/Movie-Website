const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index.js");

// Prices Tests
describe("Prices API Testing", () => {
    
    it("gets /prices list", (done) => {
        chai
            .request(server)
            .get("/prices")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(4);
            });
        return done();
    })

})