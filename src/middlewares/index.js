const validations = require('../validations/index');

const { productValidateSchema } = validations;
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

module.exports = {
  valProductRequestData,
};
