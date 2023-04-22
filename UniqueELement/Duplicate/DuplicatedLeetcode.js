var removeDuplicates = function(nums) {
    let j=0
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== nums[i+1]){
            nums[j]=nums[i]
            j++
        }
    }
    nums.length = j       // j= 5 nums.length pe fix kar diya  uske baad add he nhi kiye because last digit 9 c
                        //  compare hua undefined ke sath
    return nums
  }
  let nums =  [1, 2, 2, 3, 4, 9];
console.log(removeDuplicates(nums));