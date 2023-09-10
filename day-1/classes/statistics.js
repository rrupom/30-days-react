const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  count() {
    return this.ages.length;
  }

  sum() {
    let sum = 0;
    for (let i of this.ages) {
      sum += i;
    }
    return sum;
  }
  min() {
    return Math.min(...this.ages);
  }
  max() {
    return Math.max(...this.ages);
  }
  range() {
    return this.max() - this.min();
  }

  mean() {
    return Math.floor(this.sum() / this.count());
  }
  median() {
    let count = this.count();
    if (count % 2 == 1) {
      return this.ages[Math.floor(count / 2)];
    } else {
      let ind1 = Math.floor(count / 2);
      let ind2 = ind1 + 1;
      return Math.floor((this.ages[ind1] + this.ages[ind2]) / 2);
    }
  }
}

const statistics = new Statistics(ages);
console.log("Count: ", statistics.count());
console.log("Sum: ", statistics.sum());
console.log("Min: ", statistics.min());
console.log("Max: ", statistics.max());
console.log("Range: ", statistics.range());
console.log("Mean: ", statistics.mean());
console.log("Median: ", statistics.median());
