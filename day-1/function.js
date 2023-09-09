function sumAllNums() {
  //   console.log(arguments);
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4));

const sumAllNumber = (...arguments) => {
  console.log(arguments);
};

sumAllNumber(1, 2, 3, 4);
