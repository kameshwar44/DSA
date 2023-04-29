function sumofSubarray(arr,k){
    let currsum =0;
    let maxsum =0;

    for(let i=0;i<k;i++){
        currsum +=arr[i]
    }
    maxsum = currsum;
    for(let i=k;i<arr.length;i++){
        currsum =currsum + arr[i] - arr[i-k]
        maxsum = Math.max(currsum,maxsum)
    }
    return maxsum


}

let arr = [1,2,3,4,5,6,7,8,9]
let k =3
console.log(sumofSubarray(arr,k))