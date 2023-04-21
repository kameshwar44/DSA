function slidingwindow(arr,k){
     let n = arr.length
    let currsum=0;
    let maxsum=0;
    for(let i=0;i<k;i++){
        currsum +=arr[i]
        
    }
    maxsum = currsum
    for(let i=k;i<n;i++){
        currsum += arr[i]- arr[i-k]
        maxsum = Math.max(currsum,maxsum)
        
    }
    return maxsum
}
let arr = [1,23,3,4,5,5,6,7,8]
let k= 3
console.log(slidingwindow(arr,k))