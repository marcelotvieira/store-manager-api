const services = require('../services/sales.services');

const { insertSale, getSales, getById, deleteSale } = services;

const insertNewSale = async (req, res) => {
    const response = await insertSale(req.body);
    const sale = {
      id: response,
      itemsSold: req.body,
    };
    res.status(201).json(sale);
};

const getAllSales = async (_req, res) => {
    const response = await getSales();
    res.status(200).json(response);
};

const getSaleById = async (req, res) => {
    const { id } = req.params;
    const response = await getById(id);
    res.status(200).json(response);
};

const deleteSaleById = async (req, res) => {
  const { id } = req.params;
  await deleteSale(id);
  res.status(204).json({ message: 'sucess' });
};

module.exports = {
  insertNewSale,
  getAllSales,
  getSaleById,
  deleteSaleById,
};