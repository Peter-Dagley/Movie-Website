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

const paymentSchema = new Schema 
(
    {
        'adults': Number,
        'children': String,
        'date': String,
        'time' : String,
        'card': Number,
        'amount': Number,
        'reference': String
    }
);

const Booking = mongoose.model('Booking', bookingSchema);
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Booking;