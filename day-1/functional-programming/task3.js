const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const prices = products.map(({ price }) => price);

console.log(prices);

const productsWithPrice = products.filter(
  ({ price, product }) => price != "" && price != " "
);

console.log(productsWithPrice);

const prices2 = products
  .filter(({ price }) => price != "" && price != " ")
  .reduce((acc, cur) => {
    return {
      price: acc.price + cur.price,
    };
  });
console.log(prices2.price);
