// function reverse(arr, i, j) {
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n / 2; j++) {
//       if (arr[i] < arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }

//     for (let j = n / 2; j < n; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// let arr = [3, 2, 4, 1, 10, 30, 40, 20]
// let n = arr.length;
// console.log(reverse(arr, 0, n - 1));

function bubblesort(arr){
  for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<(arr.length)/2;j++){
          if(arr[j]>arr[j+1]){
              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp
          }
      }
      for(let j=arr.length/2;j<arr.length-1;j++){
          if(arr[j]<arr[j+1]){
              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp
          }
      }
  }
  return arr
  
}
let arr= [3, 2, 4, 1, 10, 30, 40, 20]
console.log(bubblesort(arr))

// ====================================================FOR LOOP ============================

// function bubblesort(arr){
//   let newarrs = []
//  let newarr = arr.sort((a,b) =>a-b)
//  for(let j=0;j<arr.length/2;j++){
//      newarrs.push(arr[j])
//  }
//  for(let i =arr.length-1;i>=arr.length/2;i--){
//      newarrs.push(arr[i])
//  }
//  return newarrs
 
// }
  

// let arr= [3, 2, 4, 1, 10, 30, 40, 20]
// console.log(bubblesort(arr))
