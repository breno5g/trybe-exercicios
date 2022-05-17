const express = require('express');
require('dotenv').config();
const bookRoute = require('./routes/books.route');

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  return res.status(200).json({ message: 3000 });
});

app.use('/books', bookRoute);

app.use((err, _req, res, _next) => {
  if (!err.status) {
    return res.status(500).json({ message: 'Internal server error' });
  }
  return res.status(err.status).json({ message: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('O pai tá on');
});
