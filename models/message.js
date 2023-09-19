const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String,
        required: true
    }
})

const message = mongoose.model('message', messageSchema);
module.exports = message;