const data = [1, 4, 7, 9, 12];
const low = 2;
const high = 15;
const result = data.slice(low === 1 ? 0 : low - 1, high);

console.log(result);
