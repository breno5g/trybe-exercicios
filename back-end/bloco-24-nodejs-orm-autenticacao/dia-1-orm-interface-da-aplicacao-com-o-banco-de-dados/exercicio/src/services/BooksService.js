const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) throw { status: 404, message: 'Book not found' };
  return book;
};

const create = async (title, author, pageQuantity) => {
  // Se tu passar os parametros na ordem errada, caga é tudo
  const book = await Book.create(title, author, pageQuantity);
  return book;
};

const update = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update(
    {
      title,
      author,
      pageQuantity,
    },
    { where: { id } }
  );
  if (!updatedBook) throw { status: 404, message: 'book not found' };
};

const remove = async (id) => {
  // Neste não precisa desestruturar... sei lá porque
  const isDeleted = await Book.destroy({ where: { id } });
  if (!isDeleted) throw { status: 404, message: 'book not found' };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
