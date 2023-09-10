class Person {
  constructor(
    firstName = "Rakib",
    lastName = "Talukder",
    age = 24,
    country = "Bangladesh",
    city = "Sirajganj"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get getScore() {
    return this.score;
  }
  set setScore(score) {
    this.score += score;
  }

  get getSkills() {
    return this.skills;
  }

  set setSkills(skill) {
    this.skills.push(skill);
  }

  getPersonInfo() {
    let fullName = this.getFullName();
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(", ") +
        ` and ${this.skills[this.skills.length - 1]}`;
    let formattedSkills = skills ? `He knows ${skills}` : "";
    let info = `${fullName} is ${this.age}. He lives ${this.country}, ${this.city}. ${formattedSkills}`;

    return info;
  }

  static favouriteSkill() {
    const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
    const index = Math.floor(Math.random() * skills.length);

    return skills[index];
  }

  static showDateTime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}
console.log(Person.showDateTime());
console.log(Person.favouriteSkill());
