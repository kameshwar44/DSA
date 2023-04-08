let str = "Geeks"
let setrd=''
function reverse(str){
    
    for(let i=str.length-1;i>=0;i--){
        setrd +=str[i]
    }
    return setrd
    
}
console.log(reverse(str))