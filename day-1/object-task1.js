const dog = {};
console.log(dog);

dog.name = "kukur";
dog.legs = 4;
dog.color = "white";
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};

console.log(dog.name, dog.legs, dog.age, dog.bark());
