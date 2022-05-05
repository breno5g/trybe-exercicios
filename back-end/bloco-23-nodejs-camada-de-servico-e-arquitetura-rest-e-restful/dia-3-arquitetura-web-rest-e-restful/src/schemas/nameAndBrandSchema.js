const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  brand: Joi.string().min(3).required(),
  // .message({ message: 'Brand invalido ou inexistente' }),
});

module.exports = schema;
