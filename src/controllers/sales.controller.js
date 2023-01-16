const services = require('../services/sales.services');

const { insertSale, getSales, getById } = services;

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

const getAllSales = async (req, res) => {
  try {
    const response = await getSales();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getById(id);
    if (response.length < 1) throw new Error('Sale not found');
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  insertNewSale,
  getAllSales,
  getSaleById,
};