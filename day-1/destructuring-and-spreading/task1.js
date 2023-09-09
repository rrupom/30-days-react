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

let statement = `${person.firstName} ${person.lastName} lives in ${person.country}. He is ${person.age} years old. He is a ${person.job}.`;

let skills = person.skills;
let skillWithoutLast = skills.slice(0, skills.length - 1);
let lastskill = skills.slice(-1);

let statement2 = `He teaches ${skillWithoutLast.join(
  ","
)} and ${lastskill}.He speaks ${person.languages[0]}, ${
  person.languages[1]
} and a little bit of ${person.languages[2]}`;

let final = statement + statement2;
console.log(final);
