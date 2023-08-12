function prime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
        
    }
    return true
   
    
}
function printPrimes(n){
    for(let i=2;i<n;i++){
        if(prime(i)){
            console.log(i)
        }
    }
}
printPrimes(100)