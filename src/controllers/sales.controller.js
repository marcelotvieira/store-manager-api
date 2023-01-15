const services = require('../services/sales.services');

const { insertSale } = services;

const insertNewSale = async (req, res) => {
  try {
    const response = await insertSale(req.body);
    const sale = {
      id: response,
      itemsSold: req.body,
    };

    res.status(201).json(sale);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  insertNewSale,
};