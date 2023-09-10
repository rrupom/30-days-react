const countries = ["finland", "estonia", "sweden", "norway"];
countries.forEach(function (country, index, arr) {
  console.log(country, index, arr);
});

const newCountry = [];

countries.forEach((country) => newCountry.push(country.toUpperCase()));
console.log(newCountry);
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

numbers.forEach((n) => (sum += n));
console.log(sum);
