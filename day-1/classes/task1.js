class Animal {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

  getInfo() {
    const info = `This is ${this.name}. It is ${this.age} years old. It is ${this.color} in color.`;
    console.log(info);
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color);
    this.legs = legs;
    this.type = "Dog";
  }

  getInfo() {
    const info = `It is ${this.type}. It's name is ${this.name}. It has ${this.legs} legs. It is ${this.age} years old. It is ${this.color} in color.`;
    console.log(info);
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color);
    this.legs = legs;
    this.type = "Cat";
  }
  getInfo() {
    const info = `It is ${this.type}. It's name is ${this.name}. It has ${this.legs} legs. It is ${this.age} years old. It is ${this.color} in color.`;
    console.log(info);
  }
}

const animal = new Animal("kukur", 2, "black");
animal.getInfo();
const animal2 = new Dog("kutta", 4, "black", 4);
animal2.getInfo();
const dog = new Dog("kutta", 1, "blue", 4);
dog.getInfo();

const cat = new Cat("billi", 2, "white", 4);
cat.getInfo();
