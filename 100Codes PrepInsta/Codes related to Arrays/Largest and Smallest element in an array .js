function maxAndMin(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

let arr = [61, 24, 2, 45, 54, 46, 466, 7, 64, 32, 1443];
console.log(maxAndMin(arr));
