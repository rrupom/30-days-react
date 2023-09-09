function calculateAge(birthYear, currentYear = new Date().getFullYear()) {
  let age = currentYear - birthYear;
  return age;
}

console.log("Age : ", calculateAge(1999));
