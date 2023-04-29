const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  arr3.push(arr2[i]);
}

console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
