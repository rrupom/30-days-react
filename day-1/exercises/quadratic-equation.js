function solveQuadratic(a = 1, b = 0, c = 0) {
  let discriminant = b * b - 4 * a * c;
  if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  } else if (discriminant == 0) {
    let x = -b / (2 * a);
    if (x == 0) return [0];
    else return [x];
  } else {
    return [0];
  }
}

console.log(solveQuadratic());
console.log(solveQuadratic(1, 4, 4));
console.log(solveQuadratic(1, -1, -2));
console.log(solveQuadratic(1, 7, 12));
console.log(solveQuadratic(1, 0, -4));
console.log(solveQuadratic(1, -1, 0));
