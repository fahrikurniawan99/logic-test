const fn = (n) => {
  let result = 1;
  for (let index = n; index > 0; index--) {
    result *= index;
  }
  return result;
};

console.log("test 1 =", fn(4));
console.log("test 2 =", fn(8));
