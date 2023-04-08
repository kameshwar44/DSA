
let arr = [1,2,3,4,5,6,7,8]

function reverseArray(arr,i,j){
    while(i<j){
        let temp = arr[i];
        arr[i]= arr[j];
        arr[j]= temp;
        i++;
        j--;
    }
    return arr
    
}

console.log(reverseArray(arr,0,arr.length-1))