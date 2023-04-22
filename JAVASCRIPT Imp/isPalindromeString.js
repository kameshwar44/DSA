
//3 - Write a function to check if a given string is a palindrome in JavaScript.
function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }
  
  console.log(isPalindrome("racecar")); // Output: true

//   -----------------------------------------------------------------------------------------------------
  
//  4- Write a function to sort an array of numbers in JavaScript.

  function sortArray(arr) {
    return arr.sort(function(a, b) {
      return a - b;
    });
  }
  
  console.log(sortArray([5, 3, 1, 4, 2])); // Output: [1, 2, 3, 4, 5]