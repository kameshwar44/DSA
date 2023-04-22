// Write a function to find the first non-repeating character in a string in JavaScript.

function findNonRepeatingChar(str) {
    for (var i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) === i && str.indexOf(str[i], i + 1) === -1) {
        return str[i];
      }
    }
    return null;
  }
  
  console.log(findNonRepeatingChar("hello")); // Output: "h"
  