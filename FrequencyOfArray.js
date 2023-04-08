let arr = [1,55,3,4,45,5,6,65,4,3]

let freq = new Map()
for(let i=0;i<arr.length;i++){
    if(freq.get(arr[i]) == undefined){
        freq.set(arr[i],1)
    }
    else{
        freq.set(arr[i],freq.get(arr[i])+1)
    }
}
console.log(freq)

for(let pair of freq){
    if(pair[1]>1)
    console.log(pair)
}

