const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstEvenIndex = numbers.findIndex((number) => number % 2 === 0);
const firstOddIndex = numbers.findIndex((number) => number % 2 === 1);
console.log(firstEvenIndex, firstOddIndex);
const countries = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];

const index = countries.findIndex((country) => country.length === 6);
console.log(index, countries[index]);

const countryWithO = countries.findIndex((country) => country.includes("o"));

console.log(countryWithO, countries[countryWithO]);
