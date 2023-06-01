// Let, Const and Var

var x = "Hello";
var x = "Wow";
x = "cool";
console.log(x); //  bug in var


let x = "Hello";
// let x = "cff"
x = "cool"; // But we can reassign the value in Case of Let
console.log(x);


const x = "Hello";
const x = "Wow"; // No redeclartion
x = "cool"; // No reassign
console.log(x);
