const ApiError = require('../error/ApiError');
const { getAll,
  findById,
  findByName,
  insert,
  update,
  destroy,
} = require('../models/product.model');

const getProducts = async () => {
  const data = await getAll();
  return data;
};

const getById = async (id) => {
  const data = await findById(id);
  if (data.length < 1) ApiError.notFound('Product not found');
  return data;
};

const insertProduct = async (product) => {
  const data = await insert(product);
  return data;
};

const updateProduct = async (id, payload) => {
  const updatedProduct = await update(id, payload);
  if (updatedProduct.affectedRows < 1) ApiError.notFound('Product not found');
  return { id, ...payload };
};

const deleteProduct = async (id) => {
  const deletedProduct = await destroy(id);
  if (deletedProduct.affectedRows < 1) ApiError.notFound('Product not found');
};

const searchProduct = async ({ q }) => {
  if (!q) {
    const products = await getAll();
    return products;
  }
  
  const product = await findByName(q);
  if (product.length < 1) ApiError.notFound('Product not found');
  return product;
};

module.exports = {
  getProducts,
  getById,
  insertProduct,
  deleteProduct,
  updateProduct,
  searchProduct,
};
