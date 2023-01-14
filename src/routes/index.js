const { Router } = require('express');
const {
  getAllProducts,
  getProductById,
} = require('../controllers/product.controller');

const productRouter = Router();

productRouter.get('/products', getAllProducts);

productRouter.get('/products/:id', getProductById);

module.exports = productRouter;
