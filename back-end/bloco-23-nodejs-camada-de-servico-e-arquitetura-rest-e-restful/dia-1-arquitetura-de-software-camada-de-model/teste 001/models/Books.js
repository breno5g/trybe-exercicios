const connection = require('./connection');
const Author = require('./Author');

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books'
  );
  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `
      SELECT title 
      FROM model_example.books as book
      WHERE book.author_id = ${id}
    `
  );

  return books;
};

const findById = async (id) => {
  const [book] = await connection.execute(
    `
      SELECT title 
      FROM model_example.books as book
      WHERE book.id = ${id}
    `
  );

  return book;
};

const addBook = async ({ title, authorId }) => {
  const isAuthorValid = await Author.findById(authorId);
  if (!isAuthorValid || title.length < 3) return false;
  await connection.execute(
    'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
    [title, authorId]
  );
  return true;
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  addBook,
};
