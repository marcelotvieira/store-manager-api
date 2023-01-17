const { getAll, findById, insert, update } = require('../models/product.model');

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

const insertProduct = async (product) => {
  try {
    const data = await insert(product);
    return data;
  } catch (err) {
    return err;
  }
};

const updateProduct = async (id, payload) => {
  try {
    const updatedProduct = await update(id, payload);
    if (updatedProduct.affectedRows < 1) throw new Error('Product not found');
    return { id, ...payload };
  } catch (err) {
    return { err: err.message };
  }
};

module.exports = {
  getProducts,
  getById,
  insertProduct,
  updateProduct,
};
