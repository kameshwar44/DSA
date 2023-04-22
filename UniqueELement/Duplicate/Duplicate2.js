function removeDuplicates(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[i+1]) {
        nums[j] = nums[i];
        j++;
      }

    
    }

    nums.length = j;
    return nums;
  }
  
  let nums = [1, 2, 2, 4, 9, 9, 5, 5];
  nums = removeDuplicates(nums);
  console.log("Array with duplicates removed:", nums);
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
