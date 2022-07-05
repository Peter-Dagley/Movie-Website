const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index.js");

// Locations Tests
describe("Location API Testing", () => {
    
    it("gets /locationlist list", (done) => {
        chai
            .request(server)
            .get("/locationlist")
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(10);
            });
        return done();
    })

    it("gets location by id", (done) => {
        let id = 206;
        chai
            .request(server)
            .get(`/location/select/${id}`)
            .end((err, res) => {
                chai.expect(err).to.be.null;
                chai.expect(res.body).to.have.lengthOf(1);
                chai.expect(res.body[0]).to.include({
                    "id": 206,
                    "city": "Belfast",
                    "sessons": [
                        {
                            "date": "2022-06-30",
                            "cinema": 1,
                            "movie": {
                                "id": 107,
                                "title": "Casablanca"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-06-30",
                            "cinema": 2,
                            "movie": {
                                "id": 108,
                                "title": "The Planet of the Apes"
                            },
                            "times": [
                                "12:00 AM",
                                "3:00 PM",
                                "6:00 PM",
                                "8:30 PM"
                            ]
                        },
                        {
                            "date": "2022-06-30",
                            "cinema": 3,
                            "movie": {
                                "id": 101,
                                "title": "The Magnificent Seven"
                            },
                            "times": [
                                "11:00 AM",
                                "2:30 PM",
                                "5:00 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-06-30",
                            "cinema": 4,
                            "movie": {
                                "id": 102,
                                "title": "The Great Escape"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "8:00 PM"
                            ]
                        },
                        {
                            "date": "2022-07-01",
                            "cinema": 1,
                            "movie": {
                                "id": 107,
                                "title": "Casablanca"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-01",
                            "cinema": 2,
                            "movie": {
                                "id": 108,
                                "title": "The Planet of the Apes"
                            },
                            "times": [
                                "12:00 AM",
                                "3:00 PM",
                                "6:00 PM",
                                "8:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-01",
                            "cinema": 3,
                            "movie": {
                                "id": 101,
                                "title": "The Magnificent Seven"
                            },
                            "times": [
                                "11:00 AM",
                                "2:30 PM",
                                "5:00 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-01",
                            "cinema": 4,
                            "movie": {
                                "id": 102,
                                "title": "The Great Escape"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "8:00 PM"
                            ]
                        },
                        {
                            "date": "2022-07-02",
                            "cinema": 1,
                            "movie": {
                                "id": 107,
                                "title": "Casablanca"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-02",
                            "cinema": 2,
                            "movie": {
                                "id": 108,
                                "title": "The Planet of the Apes"
                            },
                            "times": [
                                "12:00 AM",
                                "3:00 PM",
                                "6:00 PM",
                                "8:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-02",
                            "cinema": 3,
                            "movie": {
                                "id": 101,
                                "title": "The Magnificent Seven"
                            },
                            "times": [
                                "11:00 AM",
                                "2:30 PM",
                                "5:00 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-02",
                            "cinema": 4,
                            "movie": {
                                "id": 102,
                                "title": "The Great Escape"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "8:00 PM"
                            ]
                        },
                        {
                            "date": "2022-07-03",
                            "cinema": 1,
                            "movie": {
                                "id": 107,
                                "title": "Casablanca"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-03",
                            "cinema": 2,
                            "movie": {
                                "id": 108,
                                "title": "The Planet of the Apes"
                            },
                            "times": [
                                "12:00 AM",
                                "3:00 PM",
                                "6:00 PM",
                                "8:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-03",
                            "cinema": 3,
                            "movie": {
                                "id": 101,
                                "title": "The Magnificent Seven"
                            },
                            "times": [
                                "11:00 AM",
                                "2:30 PM",
                                "5:00 PM",
                                "7:30 PM"
                            ]
                        },
                        {
                            "date": "2022-07-03",
                            "cinema": 4,
                            "movie": {
                                "id": 102,
                                "title": "The Great Escape"
                            },
                            "times": [
                                "11:00 AM",
                                "2:00 PM",
                                "4:30 PM",
                                "8:00 PM"
                            ]
                        }
                    ]
                  });
            });
        return done();
    })
})