
// function sum(num1, num2) {
//     return num1+num2
// }
// console.log(sum(4,3))
// console.log(sum(4,3,7))
// console.log(sum(4,3,7,14))


function sum(name,...args){
    let sum=0
    for(let i in args){
        sum += args[i]
    }
    console.log(name,sum);
}

console.log(sum("age",4,3,7,14))

