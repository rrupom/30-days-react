const arr = Array(); // create empty array
console.log(arr);

const eightXvalues = Array(8).fill(8);
console.log(eightXvalues);

const eight0values = Array(8).fill(0);
console.log(eight0values);

const four4values = Array(4).fill(4);
console.log(four4values);

const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["tomato", "potato", "cabbage", "onion", "carrot"];
const fruitsAndVegatables = fruits.concat(vegetables);

console.log(fruitsAndVegatables);

// array length
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
console.log(numbers.indexOf(2));
console.log(numbers.indexOf(5));
