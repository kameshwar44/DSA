function BinarySearch(arr, key) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] < key) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
}

let arr = [1, 2, 3, 3, 4, 5, 45, 65, 677, 8];
let key = 45;
console.log(BinarySearch(arr, key));
