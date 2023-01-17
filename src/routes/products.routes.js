const { Router } = require('express');
const rescue = require('express-rescue');

const {
  getAllProducts,
  getProductById,
  insertNewProduct,
  updateProductById,
  deleteProductById,
} = require('../controllers/product.controller');
const { valProductRequestData } = require('../middlewares');

const productRouter = Router();

productRouter.get('/products', rescue(getAllProducts));

productRouter.get('/products/:id', rescue(getProductById));

productRouter.post('/products', rescue(valProductRequestData), rescue(insertNewProduct));

productRouter.put('/products/:id', rescue(valProductRequestData), rescue(updateProductById));

productRouter.delete('/products/:id', rescue(deleteProductById));

module.exports = productRouter;
