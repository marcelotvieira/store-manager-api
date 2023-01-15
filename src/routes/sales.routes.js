const { Router } = require('express');
const { insertNewSale } = require('../controllers/sales.controller');
const { valSaleRequestData, checkProductId } = require('../middlewares');

const salesRouter = Router();

salesRouter.post('/sales', valSaleRequestData, checkProductId, insertNewSale);

module.exports = salesRouter;
