let mont30 = ["april", "june", "september", "november"];
let mon28 = ["february"];

let userInput = "MaRch";

let month = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

if (mont30.includes(userInput.toLowerCase())) {
  console.log(`${month} has 30 days`);
} else if (mon28.includes(userInput.toLowerCase())) {
  console.log(`${month} has 28 days`);
} else {
  console.log(`${month} has 31 days`);
}
