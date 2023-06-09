function IsOdd(n){
    if(n%2 !==0){
        return true
    }
    return false
}
console.log(IsOdd(5))
function PrintOdd(n){
    for(let i=0;i<100;i++){
        if(IsOdd(i)){
            console.log(i)
        }
    }
}
PrintOdd()