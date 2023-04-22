
// 5 - Write a function to remove duplicate elements from an array in JavaScript.

function removeDuplicates(arr) {
    return arr.filter(function(item, index) {
      return arr.indexOf(item) === index;
    });
  }
  
  console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3])); // Output: [1, 2, 3, 4, 5]
  