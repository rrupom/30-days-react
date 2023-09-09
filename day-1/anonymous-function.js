const anonymousFun = function () {
  console.log("This is an anonymous function");
};

anonymousFun();

(function (n) {
  console.log(n * n);
})(10);

let squaredNum = (function (n) {
  return n * n;
})(11);

console.log(squaredNum);
