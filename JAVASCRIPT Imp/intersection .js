// Write a function to find the intersection of two arrays in JavaScript.

function intersection(arr1, arr2) {
  return arr1.filter(function (item) {
    return arr2.includes(item);
  });
}

console.log(
  intersection([1, 2, 45, 43, 54, 646, 456, 3], [2, 54, 646, 456, 3, 4])
); // Output: [2, 3]
