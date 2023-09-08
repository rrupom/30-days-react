const person = {
  firstName: "rakib",
  lastName: "talukder",
  age: 24,
  country: "Bangladesh",
  city: "Sirajganj",
  skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "MongoDB", "D3.js"],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

person.nationality = "Bangladeshi";
person.country = "Bangladesh";
person.title = "Student";
person.skills.push("Meteor");
person.skills.push("Saas");
person.isMarried = false;
person.personInfo = function () {
  let skillsWithoutLastSkills = this.skills
    .slice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.slice(this.skills.length - 1)[0];
  let skills = `${skillsWithoutLastSkills} and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}`;

  return statement;
};

console.log(person.personInfo());
