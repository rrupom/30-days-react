const webTechs = require("./web_techs.js");
const countries = require("./countries.js");

// console.log(webTechs);
// console.log(countries);

//? This task takes a significant amount of time

const text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let arr = text.split(/[ ,:|+]/);

let arr2 = arr.filter((item) => item !== "");
let arr3 = arr2.filter((item, index, array) => array.indexOf(item) === index);
console.log(arr3);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
console.log(shoppingCart);
let indexOfHoney = shoppingCart.indexOf("Honey");
shoppingCart.splice(indexOfHoney, 1);
console.log(shoppingCart);
let indexOfTea = shoppingCart.indexOf("Tea");
shoppingCart[indexOfTea] = "Green Tea";
console.log(shoppingCart);

if (countries.includes("ETHIOPIA")) {
  console.log("ETHIOPIA");
} else {
  countries.push("ETHOPIA");
}

if (webTechs.includes("Saas")) {
  console.log("Saas is a CSS preprocess");
} else {
  webTechs.push("Saas");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log("Minimum ", ages[0]);
console.log("Maximum ", ages[ages.length - 1]);

if (ages.length % 2 == 1) {
  console.log("Median is: ", ages[Math.floor((ages.length - 1) / 2)]);
} else {
  let ind = (ages.length - 1) / 2;
  let item1 = ages[Math.floor(ind)];
  let item2 = ages[Math.floor(ind) + 1];
  console.log("Median is: ", item1 + item2);
}
