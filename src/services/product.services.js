const { getAll, findById } = require('../models/product.model');

const getProducts = async () => {
  try {
    const data = await getAll();
    return data;
  } catch (err) {
    return err;
  }
};

const getById = async (id) => {
  try {
    const data = await findById(id);
    return data;
  } catch (err) {
    return err;
  }
};

module.exports = { getProducts, getById };