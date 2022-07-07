const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index.js");
const { application } = require("express");

// Bookings Tests
mocha.describe("Bookings API Testing", () => {

    console.log("test started1");

    mocha.it("gets /bookings list", (done) => {
        chai
            .request(server)
            .get("/bookings")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(0);
            });
        return done();
    })

    mocha.it("gets booking by id", (done) => {
        let id = 1;
        chai
            .request(server)
            .get(`/bookings/select/location/${id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    
                    // Insert expected booking json data here

                  });
            });
        return done();
    })
    
    // Needs post booking method test here

    after(() => {server.close();});
})