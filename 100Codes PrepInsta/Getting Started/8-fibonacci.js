function fib(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const n = 15;
for (let i = 0; i < n; i++) {
  console.log(fib(i), " ");
}


// function fib(n){
//   if(n==0 || n==1){
//     return n
//   }
//   return fib(n-1) + fib(n-2)
// }

// function printFib(n){
//   for(let i=0;i<n;i++){
    
//       console.log(fib(i));
    
//   }
// }
// console.log(printFib(10));