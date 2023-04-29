function myMap(arr,callback){
    let result = [];

    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i],i,arr))
    }
    return result
}
let arr = [1,2,3,4,5]
let callback = item => item*2;
console.log(myMap(arr,callback));