const { getAll, findById } = require('../models/sales.model');
const { insert } = require('../models/sales.model');

const insertSale = async (sale) => {
  try {
    const newRegister = await insert(sale);
    return newRegister;
  } catch (err) {
    return err;
  }
};

const getSales = async () => {
  try {
    const sales = await getAll();
    return sales;
  } catch (err) {
    return err;
  }
};

const getById = async (id) => {
  try {
    const sale = await findById(id);
    return sale;
  } catch (err) {
    return err;
  }
};

module.exports = { insertSale, getSales, getById };
