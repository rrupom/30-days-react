const user = {
  name: "rakib",
  title: "student",
  country: "bangladesh",
  city: "sylhet",
};

const copiedUser = { ...user, city: "sirajganj" };
copiedUser.gender = "male";
console.log(user);
console.log(copiedUser);
