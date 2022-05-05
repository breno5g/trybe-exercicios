const ProductModel = require('../models/productModel');

const getAll = async () => {
  const products = await ProductModel.getAll();
  if (!products) {
    throw { status: 500, message: 'Internal Server Error' };
  }
  return products;
};

const getById = async (id) => {
  const products = await ProductModel.getById(id);
  if (!products) {
    throw { status: 404, message: 'Product not found' };
  }
  return products;
};

const add = async (name, brand) => {
  const product = await ProductModel.add(name, brand);
  if (!product) {
    throw { status: 500, message: 'Internal Server Error' };
  }
  return product;
};

const exclude = async (id) => {
  await getById(id);
  await ProductModel.exclude(id);
  return { message: `Product with id ${id} has deleted` };
};

const update = async (id, name, brand) => {
  await getById(id);
  await ProductModel.update(id, name, brand);
  return { message: `Product with id ${id} has updated` };
};

module.exports = {
  getAll,
  getById,
  add,
  exclude,
  update,
};
