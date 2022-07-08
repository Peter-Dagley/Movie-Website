const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
)


const Payment = mongoose.model('Payment', paymentSchema)
module.exports = Payment