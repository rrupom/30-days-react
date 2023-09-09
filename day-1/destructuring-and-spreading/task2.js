const person = {
  firstName: "Rakib",
  lastName: "Talukder",
  age: 24,
  country: "Bangladesh",
  job: "Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const { firstName, lastName, country, age, job } = person;
let first = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is a ${job}.`;

const {
  skills: [html, css, js, react, redux, node, mongodb, python, d3],
  languages: [amharic, english, suomi],
} = person;

let second = ` He teaches ${html}, ${css}, ${js}, ${react}, ${redux}, ${node}, ${mongodb}, ${python} and ${d3}. He speaks ${amharic}, ${english} and a little bit of ${suomi}.`;

let final = first + second;
console.log(final);
