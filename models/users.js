const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

//Define users schema
const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Export the model
module.exports = mongoose.model('Users', userSchema); 