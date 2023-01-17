const { Router } = require('express');
const {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProductById,
} = require('../controllers/product.controller');
const { valProductRequestData } = require('../middlewares');

const productRouter = Router();

productRouter.get('/products', getAllProducts);

productRouter.get('/products/:id', getProductById);

productRouter.post('/products', valProductRequestData, insertNewProduct);

productRouter.put('/products/:id', valProductRequestData, updateProductById);

module.exports = productRouter;
