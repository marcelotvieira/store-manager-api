const ApiError = require('../error/ApiError');
const { getAll, findById, insert, destroy } = require('../models/sales.model');

const insertSale = async (sale) => {
  const newRegister = await insert(sale);
  return newRegister;
};

const getSales = async () => {
  const sales = await getAll();
  return sales;
};

const getById = async (id) => {
  const sale = await findById(id);
  if (sale.length < 1) ApiError.notFound('Sale not found');
  return sale;
};

const deleteSale = async (id) => {
  const deletedSale = await destroy(id);
  if (deletedSale.affectedRows < 1) ApiError.notFound('Sale not found');
};

module.exports = { insertSale, getSales, getById, deleteSale };
