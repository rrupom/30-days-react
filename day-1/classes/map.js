const myMap = new Map();

myMap.set("rakib", "sirajganj");
myMap.set("rupom", "dhaka");

for (const [key, value] of myMap) {
  console.log(key, value);
}

console.log(myMap);
