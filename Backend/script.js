import axios from "axios";

// Get Movie List
const getMovieList = () => {
    axios.get("http://localhost:4000/movielist")
        .then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

// Get Coming Soon
const getComingSoon = () => {
    axios.get("http://localhost:4000/comingsoon")
        .then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

// Get Location List
const getLocationList = () => {
    axios.get("http://localhost:4000/locationlist")
        .then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
}

module.exports.getMovieList = getMovieList;
module.exports.getComingSoon = getComingSoon;
module.exports.getLocationList = getLocationList;
