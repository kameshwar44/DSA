const arr = [1, 30, 39, 29, 10, 13];
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(arr.every(isBelowThreshold)); // Output: true
