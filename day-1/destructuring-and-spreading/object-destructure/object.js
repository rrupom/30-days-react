const rectangle = {
  width: 20,
  height: 10,
};

let width = rectangle["width"];
let height = rectangle["height"];
console.log(width, height);

const props = {
  user: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
  },
  post: {
    title: "Destructuring and Spread",
    subtitle: "ES6",
    year: 2020,
  },
  skills: ["JS", "React", "Redux", "Node", "Python"],
};

// const { user, post, skills } = props;
// console.log(user, post, skills);

const {
  user: { firstName, lastName, age },
  post: { title, subtitle, year },
  skills: [f, s, t, fo, fi],
} = props;

console.log(firstName, lastName, age);
console.log(title, subtitle, year);
console.log(f, s, t, fo, fi);
