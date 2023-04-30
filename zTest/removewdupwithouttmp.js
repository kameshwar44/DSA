
function removedupl(arr,n){
    let j=0;
    for(let i=0;i<n;i++){
        if(arr[i] != arr[i+1]){
            arr[j] = arr[i]
            j++
        }
    }
   arr.length = j    // this should be remembered !Important
    return arr
}
let arr = [1,2,2,3,3,3]
let n = arr.length
console.log(removedupl(arr,n))