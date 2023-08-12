function sortChar(arr){
    let mp = new Map()
    for(let i=0;i<arr.length;i++){
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1)
        }
        else{
            mp.set(arr[i],1)
        }
    }
    
let newchar = [...mp.keys()].sort((a,b)=>mp.get(b)- mp.get(a))
let newcstr = newchar.map((ch)=>ch.repeat(mp.get(ch))).join('')
return newcstr

}

let char ="tree"
let arr = char.split('')
console.log(sortChar(arr))