function sumofATrget(arr,sum){
    let i=0;
    let j=arr.length-1
   while(i<j){
    if(arr[i]+arr[j]==sum){
        return [i,j]
    }
    else if(arr[i]+arr[j]<sum){
        i++
    }
    else{
        j--
    }
   }
   return -1

}

let arr = [2,7,11,15]
let sum = 9
console.log(sumofATrget(arr,sum))