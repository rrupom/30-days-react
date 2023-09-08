const person = {
  firstName: "Rakib",
  lastName: "Talukder",
  country: "Bangladesh",
  city: "Sirajganj",
  skills: ["HTML", "CSS", "JavaScript"],
  title: "Student",
  address: {
    street: "Akhalia University Gate",
    pobox: 3114,
    city: "Sylhet",
  },
  age: 23,
  getPersonInfo() {
    return `I am ${person.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age} years old`;
  },
};

const copyPerson = Object.assign({}, person);
const copyPerson2 = Object.assign(person);
console.log(copyPerson2);
console.log(person);

const keys = Object.keys(copyPerson);
console.log(keys);
const address = Object.keys(copyPerson.address);
console.log(address);

const values = Object.values(copyPerson);
console.log(values);

console.log(Object.entries(copyPerson));
