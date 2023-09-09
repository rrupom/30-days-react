const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [num1, num2, num3, num4, ...rest] = nums;

console.log(num1, num2, num3, num4, rest);

const countries = [
  ["Bangladesh", "Dhaka"],
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

const fullStack = [
  ["html", "css", "js", "react"],
  ["node", "express", "mongodb"],
];

for (const [first, second, third, fourth = "blank"] of fullStack) {
  console.log(first, second, third, fourth);
}

const [x, y] = [2, (value) => value ** 2];
console.log(x, y(x));
