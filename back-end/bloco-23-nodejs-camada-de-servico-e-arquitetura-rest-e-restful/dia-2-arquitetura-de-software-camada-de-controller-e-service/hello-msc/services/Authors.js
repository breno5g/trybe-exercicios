const Author = require('../models/Authors');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) =>
  authorData.map((item) =>
    getNewAuthor({
      id: item.id,
      firstName: item.first_name,
      middleName: item.middle_name,
      lastName: item.last_name,
    })
  );

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const getAll = async () => {
  const authors = await Author.getAll();
  return serialize(authors);
};

const findById = async (id) => {
  const author = await Author.findById(id);
  if (!author) return null;
  return serialize(author);
};

const createAuthor = async (firstName, middleName = null, lastName) => {
  const validAuthor = isValid(firstName, middleName, lastName);

  if (!validAuthor) return false;

  const author = await Author.createAuthor(firstName, middleName, lastName);
  const authorId = author.id;

  return getNewAuthor({
    id: authorId,
    firstName,
    middleName,
    lastName,
  });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
