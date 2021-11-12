const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const productsPrice = (productsValue, priceValues) => {
  return productsValue.map((product, pos) => {
    return {[product]: priceValues[pos]}
  });
}
const listProducts = productsPrice(products, prices);
console.log(listProducts);