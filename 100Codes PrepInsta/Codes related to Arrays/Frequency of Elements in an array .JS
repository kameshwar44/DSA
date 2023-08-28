let arr = [10, 30, 10, 20, 10, 20, 30, 10];

let mp = new Map()

for(let i=0;i<arr.length;i++){
    if(mp.has(arr[i])){
        mp.set(arr[i],mp.get(arr[i])+1)
    }
    else{
        mp.set(arr[i],1)
    }
}
mp.forEach((values,key)=>{
    console.log(key, "occurs",values, "Times")
})
console.log(mp)
