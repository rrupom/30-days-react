class Person {
  constructor(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("rakib", "rupom");
console.log(person1);
