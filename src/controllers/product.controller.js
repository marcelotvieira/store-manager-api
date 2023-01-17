const {
  getProducts,
  getById,
  insertProduct,
  updateProduct,
  deleteProduct,
} = require('../services/product.services');

const getAllProducts = async (req, res) => {
  const data = await getProducts();
  res.status(200).json(data);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const data = await getById(id);
  res.status(200).json(data[0]);
};

const insertNewProduct = async (req, res) => {
  const newProduct = await insertProduct(req.body);
  res.status(201).json(newProduct);
};

const updateProductById = async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await updateProduct(id, req.body);
  res.status(200).json(updatedProduct);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  await deleteProduct(id);
  res.status(204).json({ message: 'success' });
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProductById,
  deleteProductById,
};
