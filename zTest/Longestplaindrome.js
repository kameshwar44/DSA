function isPlaindrome(n){
    let temp =n;
    let rev = 0
    while(temp !=0){
        let rem = temp % 10;
        rev = rev*10 +rem;
        temp = Math.floor(temp/10)
    }
   
    if(rev==n){
        return true
    }
    else{
        return false
    }
}


function LongestPalindrome(arr){
    let res = -9999
    for(let i=0;i<arr.length;i++){
        if(isPlaindrome(arr[i]) && res <arr[i]){
            res = arr[i]
        }
    }
    return res
    
}
let arr = [1, 121, 55551, 545545, 10111, 90]
console.log(LongestPalindrome(arr))