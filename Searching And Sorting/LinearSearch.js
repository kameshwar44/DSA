function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 3, 4, 64, 43];
let key = 4;
console.log(linearSearch(arr, key));
