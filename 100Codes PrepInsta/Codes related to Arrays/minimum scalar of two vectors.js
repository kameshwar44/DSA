let arr1 = [1, 2, 6, 3, 7]
let arr2 = [10, 7, 45, 3, 7]
let n = arr1.length


for(let i=0;i<arr1.length-1;i++){
    if(arr1[i]>arr1[i+1]){
        let temp = arr1[i]
        arr1[i] = arr1[i+1]
        arr1[i+1] = temp
        i=-1
        
    }
}
console.log(arr1);

for(let i=0;i<arr2.length-1;i++){
    if(arr2[i]<arr2[i+1]){
        let temp = arr2[i]
        arr2[i] = arr2[i+1]
        arr2[i+1] = temp
        i=-1
        
    }
   
}
console.log(arr2);
let pr =0

for(let i=0;i<n;i++){
    pr += arr1[i] * arr2[i]


}
console.log(pr)

