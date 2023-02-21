const reverseString = (text) => {
  let result = "";
  for (let index = text.length - 1; index >= 0; index--) {
    result += text[index];
  }
  return result;
};

console.log(reverseString("abcde"));
