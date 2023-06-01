function Prime(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true

}

function PrintPrimeNumbers(n){
    for(let i=2;i<=n;i++){
        if (Prime(i)){
            console.log(i);
        }
    }
    
}
PrintPrimeNumbers(100)






