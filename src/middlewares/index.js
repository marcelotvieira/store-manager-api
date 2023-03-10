const { getAll } = require('../models/product.model');
const ApiError = require('../error/ApiError');
const validations = require('../validations/index');

const { productValidateSchema, saleValidateSchema } = validations;
const valProductRequestData = (req, _res, next) => {
  try {
    const { error } = productValidateSchema.validate(req.body);
    if (error) throw new Error(error);
    next();
  } catch (err) {
    const [type, message] = err.message.split(': ');
    console.log(type);
    if (err.message.includes('required')) ApiError.badRequest(message);
    ApiError.unprocessable(message);
  }
};

const valSaleRequestData = (req, _res, next) => {
  try {
    const { error } = saleValidateSchema.validate(...req.body);
    if (error) throw new Error(error);
    next();
  } catch (err) {
    const [type, message] = err.message.split(': ');
    console.log(type);
    if (err.message.includes('required')) ApiError.badRequest(message);
    ApiError.unprocessable(message);
  }
};

const checkProductId = async (req, _res, next) => {
    const products = await getAll();
    const productIds = [];
    products.forEach((product) => {
      productIds.push(product.id);
    });
    req.body.forEach((sale) => {
      if (!productIds.includes(sale.productId)) ApiError.notFound('Product not found');
    });

    next();
};

const errorHandler = async (error, _req, res, _next) => {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  res.status(500).json({ message: error.message });
};

module.exports = {
  valProductRequestData,
  valSaleRequestData,
  checkProductId,
  errorHandler,
};
