const countries = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];

const countriesWithLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesWithLand);
const countriesWithoutLand = countries.filter(
  (country) => !country.includes("land")
);
console.log(countriesWithoutLand);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = numbers.filter((number) => number % 2 === 0);
const odd = numbers.filter((number) => number % 2 === 1);
console.log(even, odd);
