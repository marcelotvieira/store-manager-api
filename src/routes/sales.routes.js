const { Router } = require('express');

const rescue = require('express-rescue');
const { insertNewSale } = require('../controllers/sales.controller');
const { valSaleRequestData, checkProductId } = require('../middlewares');
const {
  getAllSales,
  getSaleById,
  deleteSaleById,
  updateSaleById,
} = require('../controllers/sales.controller');

const salesRouter = Router();

salesRouter.post(
  '/sales',
  rescue(valSaleRequestData),
  rescue(checkProductId),
  rescue(insertNewSale),
);

salesRouter.get('/sales', rescue(getAllSales));

salesRouter.get('/sales/:id', rescue(getSaleById));

salesRouter.delete('/sales/:id', rescue(deleteSaleById));

salesRouter.put(
  '/sales/:id',
  rescue(valSaleRequestData),
  rescue(checkProductId),
  rescue(updateSaleById),
);

module.exports = salesRouter;
