function removeDuplicate(arr, n) {
  let j = 0;
  let temp = [];
  for (let i = 0; i < n-1; i++) {
    if (arr[i] != arr[i + 1]) {
      temp[j] = arr[i]
      j++;
    }
  }
  temp[j] = arr[n - 1];
  return temp;
}
let arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 8,9,9,9,9,9,9]
let n = arr.length
console.log(removeDuplicate(arr,n))




// function dup(arr){
//   let j=0;
//   let temp=[]
//   for(let i=0;i<arr.length;i++){
//       if(arr[i] !=arr[i+1]){
//           temp[j] = arr[i]
//           j++
//       }
//   }
//   temp.length = j
//   return temp
// }
// let arr = [ 1, 2, 3,3,3,4,4,4,4,4,5,5,5,5,554];
// console.log(dup(arr))
