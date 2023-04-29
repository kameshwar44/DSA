let nums = [1,2,3,4,4,6,7,9,9]

var findDisappearedNumbers = function(nums) {
    let mp = new Map();
    for(let i=0;i<nums.length;i++){
        if(mp.has(nums[i])){
            mp.set(nums[i],mp.get(nums[i])+1)
        }
        else{
            mp.set(nums[i],1)
        }
    }

    let newstr=[];
    for(let i=1;i<nums.length;i++){
        if(mp.has(i)== false){
            newstr.push(i)
        }
    }
    console.log(newstr)
    
};

findDisappearedNumbers(nums)

