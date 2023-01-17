const { getAll } = require('../models/product.model');
const ApiError = require('../error/ApiError');
const validations = require('../validations/index');

const { productValidateSchema, saleValidateSchema } = validations;
const valProductRequestData = (req, res, next) => {
  try {
    const { error } = productValidateSchema.validate(req.body);
    if (error) throw new Error(error.message);
    next();
  } catch (err) {
    if (err.message.includes('required')) {
      return res.status(400).json({ message: err.message });
    }
    res.status(422).json({ message: err.message });
  }
};

const valSaleRequestData = (req, res, next) => {
  try {
    const { error } = saleValidateSchema.validate(...req.body);
    if (error) throw new Error(error.message);
    next();
  } catch (err) {
    if (err.message.includes('required')) {
      return res.status(400).json({ message: err.message });
    }
    res.status(422).json({ message: err.message });
  }
};

const checkProductId = async (req, res, next) => {
  try {
    const products = await getAll();

    const productIds = [];
    products.forEach((product) => {
      productIds.push(product.id);
    });

    req.body.forEach((sale) => {
      if (!productIds.includes(sale.productId)) throw new Error('Product not found');
    });

    next();
  } catch (err) {
        res.status(404).json({ message: err.message });
  }
};

const errorHandler = async (error, _req, res, _next) => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  res.status(500).json({ message: 'Alguma coisa deu errado' });
};

module.exports = {
  valProductRequestData,
  valSaleRequestData,
  checkProductId,
  errorHandler,
};
