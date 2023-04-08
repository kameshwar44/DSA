let arr1=[1,6,9];
let arr2 =[2,4,8,10,15]
let arr3= [];

let i=0;
let j=0;
let m = arr1.length;
let n = arr2.length;

while(arr3.length<m+n){
    if(i==m){
        arr3.push(arr2[j])
        j++;
    }
    if(j==n){
        arr3.push(arr1[i])
        i++
    }
    if(arr1[i]<arr2[j]){
        arr3.push(arr1[i])
        i++
    }
    else{
        arr3.push(arr2[j])
        j++
    }

}
console.log(arr3)
