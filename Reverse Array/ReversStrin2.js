let str = "Geeks"
let arr = str.split("")

function StringReverse(arr,i,j){
   while(i<j){
        let temp = arr[i];
        arr[i]= arr[j];
        arr[j]= temp;
        i++;
        j--;
   }
    return arr.join("")
}
console.log(StringReverse(arr,0,arr.length-1))
