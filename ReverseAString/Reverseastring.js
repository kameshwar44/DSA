//  a= a+b
//  b = a-b;
//  a= a-b

//Welcome to this Javascript Guide!
//emocleW ot siht tpircsavaJ !ediuG

function reverse(arr,i,j){
    while(i<j){
        let temp = arr[i]
        arr[i]=arr[j]
        arr[j] =temp
        i++;
        j--;
       
    }
    return arr
}
let str = "emocleW ot siht tpircsavaJ !ediuG";
let arr = str.split('')
let newarr = []
newarr.push(reverse(arr,arr.length-1,0).join(''))
console.log(newarr.join(''))




