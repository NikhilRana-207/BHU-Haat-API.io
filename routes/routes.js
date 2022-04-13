const express = require('express');
const Router = express.Router();

const { fetchLostItem, postFoundItem } = require('../controllers/lostFound');
const { findSellItem, postSellItem } = require('../controllers/sellPurchase');

Router.route('/').get((req, res) => {
    res.end('HELLO. BYE.');
})

Router.route('/lost').get(fetchLostItem).post(postFoundItem);
Router.route('/sell').get(findSellItem).post(postSellItem);

module.exports = Router