const express = require('express');
const route = express.Router();

const movieService = require('../services/movieService');

route.post('/', async (req, res) => {
  try {
    const { title, directedBy, releaseYear } = req.body;
    const movie = await movieService.create({ title, directedBy, releaseYear });
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = route;
