let users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function generateID(length = 5) {
  let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * charset.length);
    id += charset[index];
  }

  return id;
}

function getUserNames() {
  let usernames = [];

  for (let user of users) {
    usernames.push(user["username"]);
  }

  return usernames;
}

function signUp(...user) {
  let username = user[0];
  let usernames = getUserNames();
  console.log("usernames are: ", usernames);
  if (usernames.includes(username)) {
    return "user already signed up";
  } else {
    let person = {
      _id: generateID(),
      username: user[0],
      email: user[1],
      password: user[2],
      createdAt: new Date().toLocaleString(),
      isLoggedIn: user[3],
    };

    return person;
  }
}

let obj = signUp("rakib", "rakib.t.rupom@gmail.com", "12345", true);

if (typeof obj === "object") {
  users.push(obj);
} else {
  console.log(obj);
}
