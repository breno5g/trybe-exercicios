const route = require('express').Router();
const BooksController = require('../controllers/BooksController');
const validateBook = require('../middlewares/validateBookMiddleware');

route.get('/', BooksController.getAll);
route.get('/:id', BooksController.getById);
route.post('/', validateBook, BooksController.create);
route.put('/:id', validateBook, BooksController.update);
route.delete('/:id', BooksController.remove);

module.exports = route;
