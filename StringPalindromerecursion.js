let str = "abba";

function isplaindrome(str){
      if(str.length<=1)   return true    
      
      return str[0]== str.slice(-1) && isplaindrome(str.slice(1,-1))
      
}
console.log(isplaindrome(str));





// let employees = [
//     {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
//     {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
//     {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
// ];
// // sort by salary
// employees.sort(function (x, y) {
//     return x.salary - y.salary;
// });

// console.table(employees);