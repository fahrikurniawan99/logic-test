// function kabisat(value) {
//   const date = new Date(value, 1, 29).getDate() === 29;
//   if (date) {
//     console.log(value + " adalah tahun kabisat");
//   } else {
//     console.log(value + " adalah bukan tahun kabisat");
//   }
// }

const kabisat = (value) => {
  if (value % 4 === 0) {
    if (value % 100 === 0) {
      if (value % 400 === 0) {
        console.log(`${value} adalah tahun kabisat`);
      } else {
        console.log(`${value} adalah bukan tahun kabisat`);
      }
    } else {
      console.log(`${value} adalah tahun kabisat`);
    }
  } else {
    console.log(`${value} adalah bukan tahun kabisat`);
  }
};

kabisat(2021);
kabisat(2024);
