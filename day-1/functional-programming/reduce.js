const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

const strs = ["Hello", "world", "!"];
const helloWorld = strs.reduce((acc, cur) => {
  console.log("acc : ", acc, "cur : ", cur);
  return acc + " " + cur;
}, "");
console.log(helloWorld);

const num = [1, 2, 3, 4, 5];
const value = num.reduce((acc, cur) => {
  console.log("acc : ", acc, "cur : ", cur);
  return acc * cur;
}, 1);
console.log(value);
