const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

let count = 0;
let pointsGreaterOrEqual50 = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    count++;
  }
  if (users[user].points >= 50) {
    pointsGreaterOrEqual50++;
  }
}

console.log("Total Logged In Users: ", count);
console.log("Points Greater than or equal to 50: ", pointsGreaterOrEqual50);

// mern stack developers

let mernStackDevelopers = 0;

for (const user in users) {
  //   console.log(user);
  let m = users[user].skills.includes("MongoDB");
  let e = users[user].skills.includes("Express");
  let r = users[user].skills.includes("React");
  let n = users[user].skills.includes("Node");
  //   console.log(m);

  if (m && e && r && n) {
    mernStackDevelopers++;
  }
}

console.log("Total MERN Developers are: ", mernStackDevelopers);

const copyObject = Object.assign({}, users);
console.log(copyObject);

let person = {
  email: "rakib.t.rupom@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node", "Bootstrap"],
  age: 24,
  isLoggedIn: true,
  points: 60,
};
copyObject.Rupom = person;
console.log(users);
console.log(copyObject);
console.log(Object.keys(users));
console.log(Object.values(users));
