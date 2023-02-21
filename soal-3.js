const printDigitValue = (value) => {
  const arr = [];
  for (let index = 0; index < value.length; index++) {
    if (!isNaN(value[index])) {
      arr.push(parseInt(value[index]));
    }
  }

  let hasil = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--) {
      if (j === arr.length) {
        hasil += `${arr[i]} `;
      } else {
        hasil += `0 `;
      }
    }
    hasil += "\n";
  }

  console.log(arr.join(" "));
  console.log(hasil);
};
printDigitValue("9.86-A5.321");
