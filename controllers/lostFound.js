const foundItems = require('../models/lostFound')

const fetchLostItem = async (req, res) => {
    if (req.query.name) {
        req.query.name = { $regex: req.query.name, $options: 'i' };
    }
    const Items = await foundItems.find(req.query);
    res.status(200).json(Items);
}

const postFoundItem = async (req, res) => {
    const Item = req.body;
    console.log(Item);
    try {
        Items = await foundItems.create(Item);
    } catch (err) {
        console.log(err.message);
        return res.status(400).send(err.message);
    }
    res.status(201).json({ "message": "Successfully Posted", "data": Items });
}

module.exports = {
    fetchLostItem,
    postFoundItem
}
