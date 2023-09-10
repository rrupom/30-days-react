class Person {
  constructor(
    firstName = "Rakib",
    lastName = "Talukder",
    age = 23,
    homeTown = "Sirajganj"
  ) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.homeTown = homeTown;
  }

  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person1 = new Person("Rakib", "Talukder");
const person2 = new Person("Mahbub", "Talukder");
const person3 = new Person("Sayma", "Talukder");

console.log(person1.getFullName());
console.log(person2);
console.log(person3);
