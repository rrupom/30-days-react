const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const productWithoutPrice = products.find(
  ({ price }) => price == "" || price == " "
);
console.log(productWithoutPrice);

const someProductsWithoutPrice = products.some(
  ({ price }) => price == "" || price == ""
);
console.log(someProductsWithoutPrice);

const allProductsWithoutPrice = products.every(
  ({ price }) => price != "" || price != " "
);
console.log(allProductsWithoutPrice);
