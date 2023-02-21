const lowHigh = (arr) => {
  let high = 0;
  let low = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < low) {
      low = arr[j];
    }
  }

  console.log("high :", high);
  console.log("low :", low);
};

lowHigh([4, 2, 6, 88, 33, 11]);
