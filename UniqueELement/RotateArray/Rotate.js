let arr = [1,2,3,4,5,6,7]   // [443, 2, 3, 67, 4, 46, 4, 1]
let k = 3

function reverse(arr,i,j){
    while(i<j){
        arr[i]= arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
        i++;
        j--;
        
    }
    console.log(arr);
        
}
reverse(arr,0,arr.length-1)
reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)