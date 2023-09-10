class Person {
  constructor(
    firstName = "Rakib",
    lastName = "Talukder",
    country = "Bangladesh",
    age = 24,
    city = "Sirajganj"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
    this.age = age;
    this.city = city;
  }
}

class Student extends Person {
  saySomething() {
    console.log(`I am s child of the person class`);
  }
}

const student1 = new Student("Mahbub", "Talukder", "Englash", 23, "Dhaka");
student1.saySomething();

const student2 = new Student("Emon", "Mia", "Bangladeshi", 24, "Bogura");
student2.saySomething();
