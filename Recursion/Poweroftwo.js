function pow(base,exp){
    if(exp==0){
        return 1
    }
    //recursive case
    return base*pow(base,exp-1)
}
console.log(pow(2,5))


// function power(n){
//     let pr=1;
//      for(let i=0;i<n;i++){
//           pr=pr*2;
//       }
//       return pr
//     }
// console.log(power(5))