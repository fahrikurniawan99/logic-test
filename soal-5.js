const fn = (value) => {
  if (value > 100 || value < 1) return "silahkan masukkan bilangan 1-100";

  const words = [
    "nol",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
    "sepuluh",
    "sebelas",
  ];

  if (value < 100) {
    if (value < 12) {
      return words[value];
    } else if (value < 20) {
      const n = value + "";
      return `${words[n.slice(-1)]} belas`;
    } else {
      const first = (value + "").charAt(0);
      const last = (value + "").slice(-1);
      if (last === "0") {
        return `${words[first]} puluh`;
      } else {
        return `${words[first]} puluh ${words[last]}`;
      }
    }
  } else {
    return "seratus";
  }
};

console.log(fn(4));
console.log(fn(20));
console.log(fn(39));
console.log(fn(104));
