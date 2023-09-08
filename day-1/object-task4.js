const personAccount = {
  firstName: "Rakib",
  lastName: "Talukder",
  incomes: {
    salary: 100000,
    bonus: 10000,
    profit: 50000,
    bussiness: 12000,
  },
  expenses: {
    rent: 100000,
    food: 10000,
    entertainment: 10000,
    transport: 4000,
  },
  totalIncome() {
    let sum = 0;
    for (let i in this.incomes) {
      sum += this.incomes[i];
    }

    return sum;
  },
  totalExpense() {
    let sum = 0;
    for (let i in this.expenses) {
      sum += this.expenses[i];
    }

    return sum;
  },
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  accountInfo() {
    let statement = `${this.getFullName()} has total income ${this.totalIncome()} and total expense ${this.totalExpense()}`;

    return statement;
  },

  addIncome(sector, income) {
    let keys = Object.keys(this.incomes);
    if (keys.includes(sector)) {
      return "this sector already included";
    } else {
      this.incomes[sector] = income;
      return "income added successfully";
    }
  },
  addExpense(sector, expense) {
    let keys = Object.keys(this.expenses);
    if (keys.includes(sector)) {
      return "this sector already included";
    } else {
      this.expenses[sector] = expense;
      return "expense added successfully";
    }
  },
  accountBalance() {
    let income = this.totalIncome();
    let expense = this.totalExpense();

    return `Your current account balance is ${income - expense}`;
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

personAccount.addIncome("houseboat", 8000);
console.log(personAccount.totalIncome());
console.log(personAccount.accountBalance());
personAccount.addExpense("restuarent", 8000);
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());
