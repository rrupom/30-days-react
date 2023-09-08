let Autumn = ["September", "October", "November"];
let Winter = ["December", "January", "February"];
let Spring = ["March", "April", "May"];
let Summer = ["June", "July", "August"];

let userInput = "December";

if (Autumn.includes(userInput)) {
  console.log("Autumn");
} else if (Winter.includes(userInput)) {
  console.log("Winter");
} else if (Spring.includes(userInput)) {
  console.log("Spring");
} else {
  console.log("Summer");
}
