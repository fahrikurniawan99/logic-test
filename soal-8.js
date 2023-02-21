const fn = (number) => {
  const multiple3 = 3;
  const multiple5 = 5;
  for (let index = 1; index < number + 1; index++) {
    if (index % multiple3 === 0) {
      console.log("edu");
    } else if (index % multiple5 === 0) {
      console.log("work");
    } else {
      console.log(index);
    }
  }
};

fn(15);
