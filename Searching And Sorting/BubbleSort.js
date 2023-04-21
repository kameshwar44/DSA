function BubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){ // fix inner loop condition
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
           
        }
    }
    console.log(arr)
}

let arr = [43,5,2,44,4,23,22];
console.log(BubbleSort(arr));
