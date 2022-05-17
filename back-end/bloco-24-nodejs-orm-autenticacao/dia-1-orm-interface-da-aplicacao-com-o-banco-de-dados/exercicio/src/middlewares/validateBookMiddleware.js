const joi = require('joi');

const schema = joi.object({
  title: joi.string().min(2).required(),
  author: joi.string().min(2).required(),
  pageQuantity: joi.number().required(),
});

const validateBook = async (req, res, next) => {
  const { author, title, pageQuantity } = req.body;
  const { error } = schema.validate({ title, author, pageQuantity });
  if (error) return res.status(400).json({ message: error.message });
  next();
};

module.exports = validateBook;
