const services = require('../services/sales.services');

const { insertSale, getSales, getById } = services;

const insertNewSale = async (req, res) => {
    const response = await insertSale(req.body);
    const sale = {
      id: response,
      itemsSold: req.body,
    };
    res.status(201).json(sale);
};

const getAllSales = async (req, res) => {
    const response = await getSales();
    res.status(200).json(response);
};

const getSaleById = async (req, res) => {
    const { id } = req.params;
    const response = await getById(id);
    res.status(200).json(response);
};

module.exports = {
  insertNewSale,
  getAllSales,
  getSaleById,
};