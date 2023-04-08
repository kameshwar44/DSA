// Unique Element pair whose Sum is equal to target
// 
let arr = [1,3,4,4,3,4,4,5,9,6,68,6,]

let target = 6

function unique(arr,target){
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(target-arr[i])){
            console.log(map.get(target-arr[i]))
        }
        else{
            map.set(arr[i],true)
        }
    }
        console.log(map)
}
unique(arr,target)

