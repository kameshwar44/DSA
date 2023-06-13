let arr = [1, 7, 8, 4, 5, 16, 8]
let Evencount =0 , Oddcount=0
for(let i=0;i<arr.length;i++){
    
    if(arr[i]%2==0){
        console.log(arr[i])
        Evencount++
    }
    else Oddcount++
}
console.log("Evens Are " + Evencount)
console.log("Odds Are " + Oddcount)








// let arr = [1, 7, 8, 4, 5, 16, 8]
// let count =0
// for(let i=0;i<arr.length;i++){
    
//     if(arr[i]%2==0){
//         console.log(arr[i])
//         count++
//     }
//     else -1
// }
// console.log("Evens Are " + count)
// console.log("Odds Are  "+(arr.length-count))