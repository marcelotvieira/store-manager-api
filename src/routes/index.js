const { Router } = require('express');
const {
  getAllProducts,
  getProductById,
  insertNewProduct,
} = require('../controllers/product.controller');

const productRouter = Router();

productRouter.get('/products', getAllProducts);

productRouter.get('/products/:id', getProductById);

productRouter.post('/products', insertNewProduct);

module.exports = productRouter;
