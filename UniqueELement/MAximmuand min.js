// let arr = [1,-2,3,5]

// function Kadens(arr){
//     let currsum=arr[0]
//     let maxsum = arr[0];
//     for(let i=1;i<arr.length;i++){
//         currsum = Math.max(currsum+arr[i],arr[i])
       
//         maxsum = Math.max(currsum,maxsum)
//     }
//     return maxsum

// }
// console.log(Kadens(arr))







function Kadens(arr){
    let currsum = arr[0]
    let maxsum = arr[0]

    for(let i=1;i<arr.length;i++){
        currsum = Math.max(currsum+arr[i],arr[i])
        maxsum = Math.max(currsum,maxsum)
    }
    return maxsum
}

let arr = [1,2,-2,3,4]

console.log(Kadens(arr));

