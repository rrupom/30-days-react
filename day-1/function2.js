const sumAllNums = (...args) => {
  let sum = 0;
  for (let element of args) {
    sum += element;
  }

  return sum;
};

console.log(sumAllNums(1, 2, 3, 4));
console.log(sumAllNums(4, 5, 6, 7, 8));
