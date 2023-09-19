const message = require('../models/message');

const getMessage = async (req, res) => {
    const Messages = await message.find({});
    res.status(200).json(Messages);
}

const postMessage = async (req, res) => {
    const Message = req.body;
    try {
        Messages = await message.create(Message);
    } catch (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
    }
    res.status(201).json({ "message": "Message Sent!" });
}

module.exports = { 
    getMessage, 
    postMessage
};