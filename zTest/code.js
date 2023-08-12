function odd(n){
    if(n%2==0){
        return false
    }
    else{
        return true
    }
}

function printOdd(n){
    for(let i=1;i<=n;i++){
        if(odd(i)){
            console.log(i);
        }
    }
}
printOdd(100)