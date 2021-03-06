const express = require('express');
// const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/errorMiddleware');

require('dotenv').config();

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', require('./controllers/productController'));

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('listening on port 3000');
});
