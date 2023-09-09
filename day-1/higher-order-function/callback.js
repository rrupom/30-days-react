const callback = (n) => {
  return n * n;
};

function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));
