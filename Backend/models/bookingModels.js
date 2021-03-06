const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookingSchema = new Schema 
(
    {
        'location': Number,
        'date': String,
        'cinema': Number,
        'time' : String,
        'seat': String,
        'reference': String
    }
);

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;