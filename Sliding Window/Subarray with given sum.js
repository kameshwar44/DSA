function sumofSubarraysum(nums,s,n){
    
    let sum=nums[0];
    let l=0;
    let r=0;
    if(sum==0){
        return -1
    }
    while(l<n && r<n){
        if(sum ==s){
            return [l+1,r+1];       // 1- based indexing
        }
        else if(sum<s){
            r++;
            sum +=nums[r];
        }
        else{
            sum -=nums[l];
            l++;
        }
    }
    return -1
}

let nums = [1,2,3,7,5]
let s=15;
let n = nums.length;
console.log(sumofSubarraysum(nums,s,n))