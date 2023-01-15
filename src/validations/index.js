const Joi = require('joi');

const productValidateSchema = Joi.object({
  name: Joi.string().min(5).required().messages({
    'string.base': '"name" precisa ser do tipo string',
    'string.empty': '"name" is required',
    'string.min': '"name" length must be at least 5 characters long',
  }),
});

const saleValidateSchema = Joi.object({
  productId: Joi.number().integer().required(),
  quantity: Joi.number().integer().min(1).required(),
});

module.exports = {
  productValidateSchema,
  saleValidateSchema,
};