const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const someAreEvens = numbers.some((number) => number % 2 === 0);
const someAreOdds = numbers.some((number) => number % 2 === 1);
console.log(someAreEvens, someAreOdds);

const evens = [0, 2, 4, 6, 8, 10];
const even = evens.some((number) => number % 2 === 0);
const odd = evens.some((number) => number % 2 === 1);
console.log(even, odd);
