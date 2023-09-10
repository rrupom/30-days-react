const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenNum = numbers.find((n) => n % 2 === 0);
const firstOddNum = numbers.find((n) => n % 2 === 1);
console.log(firstEvenNum, firstOddNum);

const countries = ["Finland", "Estonia", "Sweden", "Norway", "Iceland"];
const countryWithWay = countries.find((country) => country.includes("way"));
console.log(countryWithWay);
