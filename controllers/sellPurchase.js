const sellItems = require('../models/sellPurchase')

const findSellItem = async (req, res) => {
    if (req.query.name) {
        req.query.name = {$regex: req.query.name, $options:'i'};
    }
    const Items = await sellItems.find(req.query);
    res.status(200).json(Items);
}

const postSellItem = async (req, res) => {
    const Item = req.body;
    try {
        Items = await sellItems.create(Item);   
    } catch (err) {
        return res.status(400).send(err.message);
    }
    res.status(201).json({ "message": "Successfully Posted", "data": Items });
}

module.exports = {
    findSellItem,
    postSellItem
}
