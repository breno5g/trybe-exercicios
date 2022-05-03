const express = require('express');

const app = express();
app.use(express.json());

const Author = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.findById(id);

  res.status(200).json(authors);
});

// app.get('/books', async (_req, res) => {
//   const books = await Books.getAll();

//   res.status(200).json(books);
// });

app.get('/books', async (req, res) => {
  const { id } = req.query;
  const books = await Books.getByAuthorId(id);

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id);

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;
  const addBook = await Books.addBook({ title, authorId });
  if (!addBook) return res.status(400).json({ message: 'Deu ruim' });

  res.status(200).json({ message: 'Suave' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
