const {
  getProducts,
  getById,
  insertProduct,
  updateProduct,
} = require('../services/product.services');

const getAllProducts = async (req, res) => {
  try {
    const data = await getProducts();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getById(id);

    if (data.length < 1) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const insertNewProduct = async (req, res) => {
  try {
    const newProduct = await insertProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await updateProduct(id, req.body);
    const { err } = updatedProduct;
    if (err) return res.status(404).json({ message: err });
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(404).json({ mrdsdsg: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProductById,
};
