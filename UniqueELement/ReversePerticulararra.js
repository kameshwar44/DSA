//swap two number
//reverse a number
// reverse k number

let arr = [1,2,3,4,5]
let j=arr.length-1;
let i=0;

function reverse(arr){
while(i<j){
    arr[i] = arr[i]+ arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j]
    i++;
    j--;
}
console.log(arr)
}
reverse(arr)



