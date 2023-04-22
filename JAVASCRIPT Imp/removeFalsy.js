//13 - Write a function to remove falsy values from an array in JavaScript.

function removeFalsy(arr) {
    return arr.filter(Boolean);
  }
  
  console.log(removeFalsy([1, null, undefined, 0, "", 2])); // Output: [1, 2]
  