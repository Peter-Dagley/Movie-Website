const mongoose = require('mongoose')
const Schema = mongoose.Schema

const priceSchema = new Schema 
(
    {
        'type': String,
        'price': Number
    }
);

const Price = mongoose.model('Price', priceSchema)
module.exports = Price;