const schema = require('../schemas/nameAndBrandSchema');

const validateProductMiddleware = (req, res, next) => {
  const { name, brand } = req.body;
  const { error } = schema.validate({ name: name, brand: brand });
  if (error) {
    next({ status: 400, message: error.message });
  }
  next();
};

module.exports = validateProductMiddleware;
