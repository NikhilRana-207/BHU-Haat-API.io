const mongoose = require('mongoose');

const sellItemSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    imageURL:{
        type: String,
        required: true
    }
})

const sellItem = mongoose.model('sellItem', sellItemSchema);
module.exports = sellItem;
