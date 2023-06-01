for(let i=1;i<=100;i++){
    let count = 0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            count = 1;
            
        }
    }
    if(count==0 && i>1)
        console.log(i);
    
}


// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0)
//             return false;
//     }
    
//     return true;
// }

// console.log(isPrime(100));
