const { Router } = require('express');
const { insertNewSale } = require('../controllers/sales.controller');
const { valSaleRequestData, checkProductId } = require('../middlewares');
const { getAllSales, getSaleById } = require('../controllers/sales.controller');

const salesRouter = Router();

salesRouter.post('/sales', valSaleRequestData, checkProductId, insertNewSale);

salesRouter.get('/sales', getAllSales);

salesRouter.get('/sales/:id', getSaleById);

module.exports = salesRouter;
