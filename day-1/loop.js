const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

const countries = ["Finland", "France", "Norway", "Denmark", "Iceland"];

for (const country of countries) {
  console.log(country);
}

numbers.forEach((number, index) => {
  console.log(number, index);
});

countries.forEach((country, index, countries) => {
  console.log(country, index, countries);
});

const user = {
  firstName: "Rakib",
  lastName: "Talukder",
  age: 24,
  country: "Bangladesh",
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python", "D3.js"],
};

for (const key in user) {
  console.log(key, ":", user[key]);
}
