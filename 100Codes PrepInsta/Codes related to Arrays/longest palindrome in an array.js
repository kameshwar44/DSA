// function isPalindrome(n) {
//   let temp = n;
//   let rev = 0;
//   while (temp != 0) {
//     let rem = temp % 10;
//     rev = rev * 10 + rem;
//     temp = Math.floor(temp / 10);
//   }

//   if (n == rev) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// function longestPalindrome(arr) {
//   let res = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (isPalindrome(arr[i]) && arr[i] > res) {
//       res = arr[i];
//     }
//   }
//   if (res == -Infinity) {
//     return -1;
//   }
//   return res;
// }
// let arr = [1, 121, 55551, 545545, 10111, 90];
// console.log(longestPalindrome(arr));

function palindrome(n) {
  let temp = n;
  let rev = 0;
  while (temp != 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  return rev;
}

// function checklongestPalindrome(arr){
//   let longestpaln = arr[0]
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>longestpaln && palindrome(i) ){
//       longestpaln = arr[i]
//     }
//   }
//   return longestpaln

// }

// let arr = [2222222222,1, 121, 55551, 545545, 10111, 90,2,3,23,24,,434343434];
// console.log(checklongestPalindrome(arr));





function palindrome(n) {
  let temp = n;
  let rev = 0;

  while (temp !== 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp/ 10);
  }
  if(rev == n){
    return true
  }
  else{
    return false
  }


}
let arr = [21,21212,1111,121212,1111111111111111];

function longestPalindrome(arr){
  let longest = arr[0]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>longest  && palindrome(i)){
      longest = arr[i]
    }
  }
  return longest


}  
console.log(longestPalindrome(arr));

