let arr = [10, 30, 10, 20, 40, 20, 50, 10]

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
    if(values ==1)
    console.log(key,values)
})