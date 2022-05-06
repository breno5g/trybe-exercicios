const express = require('express');
const route = express.Router();

const movieController = require('../controllers/movieController');

route.post('/', movieController);

module.exports = route;
