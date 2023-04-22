
// 6 -  Write a function to count the number of occurrences of a given element in an array in JavaScript.

function countOccurrences(arr, val) {
    return arr.reduce(function(acc, item) {
      return acc + (item === val);
    }, 0);
  }
  
  console.log(countOccurrences([1, 2, 3, 2, 4, 5, 3], 2)); // Output: 2
  