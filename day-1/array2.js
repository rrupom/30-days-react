const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana");
console.log(index);

if (index != -1) {
  console.log("This fruit does exist in the array");
} else {
  console.log("This fruit does not exist in the array");
}

index != -1
  ? console.log("This fruit does exist in the array")
  : console.log("Fruit item does not exist in the array");

let indexOfAvocado = fruits.indexOf("avocado");
if (indexOfAvocado != -1) {
  console.log("Fruit item exist in the array");
} else {
  console.log("Fruit item not exist in the array");
}
