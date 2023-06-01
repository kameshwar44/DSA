function fib(n){
    if(n==0 || n==1){
        return n
    }
    
    return fib(n-1) + fib(n-2)
}
console.log(fib(3))



// let n1 =0, n2=1 , next_num, i
// let num=5
// for(let i=1;i<=num;i++){
//     console.log(n1)
//     next_num=n1+n2
//     n1=n2
//     n2=next_num
// }