const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

//Define authors schema
const AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
});

// Export the model
module.exports = mongoose.model('Authors', AuthorSchema); 