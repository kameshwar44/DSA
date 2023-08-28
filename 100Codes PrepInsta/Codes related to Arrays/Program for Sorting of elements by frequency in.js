let arr = [10, 20, 10, 10, 20, 30, 30, 30, 30, 0];


let mp = new Map();

for (let i = 0; i < arr.length; i++) {
  if (mp.has(arr[i])) {
    mp.set(arr[i], mp.get(arr[i]) + 1);
  } else {
    mp.set(arr[i], 1);
  }
}
let newarr = [];
mp.forEach((values, key) => {
  for (let i = 0; i < values; i++) newarr.push(key);
});
console.log(newarr.sort());






