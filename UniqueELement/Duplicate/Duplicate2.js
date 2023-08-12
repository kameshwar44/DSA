function removeDuplicate(arr){
    
  for(let i=0;i<arr.length;i++){
      for(let j=arr.length-1;j>=i+1;j--){
          if(arr[i] == arr[j]){
              arr.splice(i,1)
          }
      }
  }
  return arr
}

let arr = [1, 2, 2, 3, 4, 5, 5, 5, 5];
console.log(removeDuplicate(arr))



// function removeDuplicates(nums) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//       if (nums[i] !== nums[i+1]) {
//         nums[j] = nums[i];
//         j++;
//       }

    
//     }

//     nums.length = j;      //sets the length of arr to j, which is the new length of the array after removing duplicates
//     return nums;
//   }
  
//   let nums = [1, 2, 2, 4, 5, 5,8,8,8,8];
//   nums = removeDuplicates(nums);
//   console.log("Array with duplicates removed:", nums);



//   -------------------------------------------

//   function removeDuplicates(nums) {
//     let n = nums.length
//     let newarr= []
//   let j = 0;
//   for (let i = 0; i < n-1; i++) {
//     if (nums[i] !== nums[i+1]) {
//       newarr.push(nums[i]);
//       j++;
//     }
//   }
//  newarr[j] = nums[nums.length-1]
//   return newarr;
// }

// let nums = [1, 2, 2, 3, 4, 5, 5, 5, 5];
// nums = removeDuplicates(nums);
// console.log("Array with duplicates removed:", nums);
