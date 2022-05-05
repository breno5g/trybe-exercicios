const express = require('express');
const ProductService = require('../services/productService');
const { StatusCodes } = require('http-status-codes');
const validateProductMiddleware = require('../middlewares/validateProductMiddleware');

const router = express.Router();

router.get('/', async (_req, res, next) => {
  try {
    const products = await ProductService.getAll();

    return res.status(StatusCodes.OK).json(products);
  } catch (err) {
    console.log('Get All Products: ', err.message);
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductService.getById(id);
    return res.status(StatusCodes.OK).json(product);
  } catch (err) {
    console.log('Get product by id: ', err.message);
    next(err);
  }
});

router.post('/', validateProductMiddleware, async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await ProductService.add(name, brand);
    return res.status(StatusCodes.OK).json(newProduct);
  } catch (err) {
    console.log('Add Products: ', err.message);
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const products = await ProductService.exclude(req.params.id);
    return res.status(StatusCodes.OK).json(products);
  } catch (err) {
    console.log('Delete Product: ', err.message);
    next(err);
  }
});

router.put('/:id', validateProductMiddleware, async (req, res, next) => {
  try {
    const { name, brand } = req.body;
    const products = await ProductService.update(req.params.id, name, brand);
    return res.status(StatusCodes.OK).json(products);
  } catch (err) {
    console.log('Update Products: ', err.message);
    next(err);
  }
});

module.exports = router;
