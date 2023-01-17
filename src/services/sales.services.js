const ApiError = require('../error/ApiError');
const { getAll, findById } = require('../models/sales.model');
const { insert } = require('../models/sales.model');

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

module.exports = { insertSale, getSales, getById };
