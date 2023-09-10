const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const allAreEvens = numbers.every((number) => number % 2 === 0);
const allAreOdds = numbers.every((number) => number % 2 === 1);

console.log(allAreEvens, allAreOdds);

const evens = [0, 2, 4, 6, 8, 10];
const allEvens = evens.every((number) => number % 2 === 0);
const allOdds = evens.every((number) => number % 2 === 1);

console.log(allEvens, allOdds);
