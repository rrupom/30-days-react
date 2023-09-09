function fullName(firstName = "Rakib", lastName = "Talukder") {
  return firstName + " " + lastName;
}

console.log(fullName());
console.log(fullName("mahbub", "talukder"));

function areaOfCicle(radius) {
  return Math.PI * radius * radius;
}

console.log(areaOfCicle(2));

function convertFarenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

console.log(convertFarenheit(37.2));
