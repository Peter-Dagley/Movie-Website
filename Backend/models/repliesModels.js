const mongoose = require('mongoose')
const Schema = mongoose.Schema

const repliesSchema = new Schema
(
    {
        '_id': Number,
        'content': String,
        'content': [Array]
    }
);

const Replies = mongoose.model('Replies', repliesSchema)
module.exports = Replies;