const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema 
(
    {
        'id':Number,
        'title': String,
        'release date': String,
        'starring': String,
        'genre': String,
        'runtime': Number,
        'rating': String,
        'thumbnail': String
    }
);

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;