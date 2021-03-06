const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index.js");

// Movies Tests
mocha.describe("Movie API Testing", () => {

    console.log("test started3");
    
    mocha.it("gets /movielist list", (done) => {
        chai
            .request(server)
            .get("/movielist")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(16);
            });
        return done();
    })

    mocha.it("gets /nowshowing list", (done) => {
        chai
            .request(server)
            .get("/nowshowing")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(8);
            });
        return done();
    })

    mocha.it("gets /comingsoon list", (done) => {
        chai
            .request(server)
            .get("/comingsoon")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(8);
            });
        return done();
    })

    mocha.it("gets movie by id", (done) => {
        let id = 101;
        chai
            .request(server)
            .get(`/movie/select/${id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    "_id": "62c30c096bb449fd9599125a",
                    "id": 101,
                    "title": "The Magnificent Seven",
                    "release date": "",
                    "starring": "Yul Brynner, Steve McQueen, James Cogburn, Robert Vaughn, Charles Bronson",
                    "genre": "western",
                    "runtime": 126,
                    "rating": "M",
                    "thumbnail": "https://xl.movieposterdb.com/21_08/2016/2404435/xl_2404435_4b793c03.jpg"
                  });
            });
        return done();
    })

    mocha.it("gets movie by genre", (done) => {
        let genre = "western";
        chai
            .request(server)
            .get(`/movie/search/genre/${genre}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    "_id": "62c30c096bb449fd9599125a",
                    "id": 101,
                    "title": "The Magnificent Seven",
                    "release date": "",
                    "starring": "Yul Brynner, Steve McQueen, James Cogburn, Robert Vaughn, Charles Bronson",
                    "genre": "western",
                    "runtime": 126,
                    "rating": "M",
                    "thumbnail": "https://xl.movieposterdb.com/21_08/2016/2404435/xl_2404435_4b793c03.jpg"
                  });
            });
        return done();
    })

    mocha.it("gets movie by title", (done) => {
        let title = "The Magnificent Seven";
        chai
            .request(server)
            .get(`/movie/search/title/${title}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    "_id": "62c30c096bb449fd9599125a",
                    "id": 101,
                    "title": "The Magnificent Seven",
                    "release date": "",
                    "starring": "Yul Brynner, Steve McQueen, James Cogburn, Robert Vaughn, Charles Bronson",
                    "genre": "western",
                    "runtime": 126,
                    "rating": "M",
                    "thumbnail": "https://xl.movieposterdb.com/21_08/2016/2404435/xl_2404435_4b793c03.jpg"
                  });
            });
        return done();
    })
    after(() => {server.close();});
})