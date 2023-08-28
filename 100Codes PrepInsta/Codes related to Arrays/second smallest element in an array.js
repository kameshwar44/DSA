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

// function firstandSecond(arr) {
//   let firstMax = arr[0];
//   let secondMax = -Infinity;

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

// let arr = [100, 2, 93, 32, 43, 34, 3, 24, 55];
// console.log(firstandSecond(arr));







// function firstandSecond(arr) {
//   let firstMax = arr[0];
//   let secondMax = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstMax){
//       secondMax = firstMax;
//       firstMax = arr[i];
//     }
//     else if(arr[i] <firstMax && arr[i]>secondMax){ // arr[i] is greater than first but smaller then seconmax then only add it
//       secondMax = arr[i]
//     }
    
//   }
//  return [firstMax,secondMax]
// }
// let arr = [99,100,57,200];

// console.log(firstandSecond(arr));


function firstandSecond(arr){
  let firstMax = arr[0]
  let secondMax = -Infinity
  for(let i=0;i<arr.length;i++){
    if(arr[i]>firstMax){
      secondMax = firstMax;
      firstMax = arr[i]
    }
    else if(arr[i]>secondMax && arr[i] !==firstMax){
      secondMax = arr[i]
    }

  }
  return [firstMax,secondMax]
}
let arr = [100,2,93,32,43,34,3,24,55]
console.log(firstandSecond(arr));