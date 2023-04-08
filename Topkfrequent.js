let arr = [1,5,4,4,4,4]
let k =2

let mp = new Map();
for(let i=0;i<arr.length;i++){
    if(mp.has(arr[i])){
        mp.set(arr[i],mp.get(arr[i])+1)
    }else{
        mp.set(arr[i],1)
    }
}

let frequency =[];
let freqmp = new Map([...mp.entries()].sort((a,b)=>{
    [b[1]-a[1]]
}))
console.log(freqmp)

freqmp.forEach((value,key)=>{
    if(k>0){
        frequency.push(key)
    }
})
console.log(frequency)





