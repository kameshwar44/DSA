// function FirstMaxAndSecond(arr) {
//   let firstMax = arr[0];
//   let secondMax = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstMax) {
//       secondMax = firstMax;
//       firstMax = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== firstMax) {
//       secondMax = arr[i];
//     }
//   }
//   return [firstMax, secondMax];
// }
// let arr =[1,2,3,46,543 , 76 ,78]
// console.log(FirstMaxAndSecond(arr));

function firstandSecond(arr) {
  let firstMax = arr[0];
  let secondMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] !== firstMax && secondMax < arr[i]) {
      secondMax = arr[i];
    }
  }
  return [firstMax, secondMax];
}

let arr = [1, 2, 3, 46, 53, 76, 78, 99, 1];
console.log(firstandSecond(arr));
