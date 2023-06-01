function FirstMaxAndSecond(arr) {
  let firstMax = arr[0];
  let secondMax = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== firstMax) {
      secondMax = arr[i];
    }
  }
  return [firstMax, secondMax];
}
let arr = [1, 2, 3, 4, 5];
console.log(FirstMaxAndSecond(arr));
