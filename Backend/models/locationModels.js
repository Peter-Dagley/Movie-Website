const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema 
(
    {
        'id': Number,
        'address': Number,
        'city': String,
        'opening times': Number,
        'telephone': String,
        'sessions': [Object]
    }
);

const Location = mongoose.model('Location', locationSchema);
module.exports = Location;