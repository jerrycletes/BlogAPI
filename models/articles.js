const mongoose = require('mongoose');
const { readingTime } = require("./readingTime");

//Define a schema
const Schema = mongoose.Schema;

//Define authors schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: [true, 'Title must be unique']
    },
    description: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    timestamp : {
        type: Date,
        default: Date.now
    },
    read_count : {
        type: Number
    },
    reading_time : {
        type: String,
    },
})

 // Export the model
module.exports = mongoose.model('Articles', ArticleSchema); 