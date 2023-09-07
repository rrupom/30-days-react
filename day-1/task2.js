let mixedDataTypes = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(mixedDataTypes);
let first = 0;
let mid = (mixedDataTypes.length - 1) / 2;
let last = mixedDataTypes.length - 1;
console.log(mixedDataTypes[first], mixedDataTypes[mid], mixedDataTypes[last]);
console.log("Total number of companies :", mixedDataTypes.length);

for (let i in mixedDataTypes) {
  console.log(mixedDataTypes[i].toUpperCase());
}

let companies = mixedDataTypes.join(", ");
console.log(companies);
companies += "are big IT companies";
console.log(companies);

let filteredCompanies = [];
console.log(mixedDataTypes);

for (let i in mixedDataTypes) {
  let arr = mixedDataTypes[i].match(/o/g);
  if (arr != null && arr.length > 1) {
    filteredCompanies.push(mixedDataTypes[i]);
  }
}

console.log(filteredCompanies);

mixedDataTypes.sort();
console.log(mixedDataTypes);
console.log(mixedDataTypes.slice(0, 3));
console.log(mixedDataTypes.slice(-3));
console.log(mixedDataTypes.length);
console.log(mixedDataTypes.slice(3, 4));
console.log(mixedDataTypes.shift());
console.log(mixedDataTypes);
console.log(mixedDataTypes.pop());
console.log(mixedDataTypes);
console.log(mixedDataTypes.splice(0, mixedDataTypes.length));
console.log(mixedDataTypes);
