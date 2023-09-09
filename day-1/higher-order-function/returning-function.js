const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };

    return doWhatEver;
  };

  return doSomething;
};

console.log(higherOrder(10)(3)(20));
