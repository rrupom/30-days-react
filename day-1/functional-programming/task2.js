const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

let sum = 0;

products.forEach(({ product, price }) => {
  if (price != " " && price != "") {
    console.log(`The price of ${product} is ${price} takas.`);
    sum += price;
  } else {
    console.log(`The price of ${product} is unknown.`);
  }
});

console.log("sum: ", sum);
