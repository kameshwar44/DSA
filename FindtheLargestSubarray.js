// Find the maximum sum of any two elements in arraty ==finding the largest and secondLargest elements in array 

let arr = [1,55,3,4,45,5,6,65,4,3];

let largest =0;
let secLargest=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secLargest = largest;
        largest = arr[i]
    }
    else if(arr[i]>secLargest && arr[i]<largest){
        secLargest = arr[i]
    }
}

console.log(largest,secLargest)