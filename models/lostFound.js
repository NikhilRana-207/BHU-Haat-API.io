const mongoose = require('mongoose');

const foundItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foundBy: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    contact: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
})

const foundItem = mongoose.model('foundItem', foundItemSchema);
module.exports = foundItem;