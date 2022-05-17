const BookService = require('../services/BooksService');

const getAll = async (_req, res, next) => {
  try {
    const books = await BookService.getAll();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BookService.create({ title, author, pageQuantity });
    return res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    await BookService.update(id, {
      title,
      author,
      pageQuantity,
    });
    return res.status(201).json({ message: 'Book is updated' });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BookService.remove(id);
    return res.status(201).json({ message: 'Book is deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
