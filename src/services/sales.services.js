const { insert } = require('../models/sales.model');

const insertSale = async (sale) => {
  try {
    console.log('rodou serviço');
    const newRegister = await insert(sale);
    return newRegister;
  } catch (err) {
    return err;
  }
};

module.exports = { insertSale };
