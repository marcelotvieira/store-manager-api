const {
  insertSale,
  getSales,
  getById,
  deleteSale,
  updateSale,
} = require('../services/sales.services');

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

const updateSaleById = async (req, res) => {
  console.log('rodando controlador');
  const { id } = req.params;
  const updatedSale = await updateSale(id, req.body);
  res.status(200).json(updatedSale);
};

module.exports = {
  insertNewSale,
  getAllSales,
  getSaleById,
  deleteSaleById,
  updateSaleById,
};