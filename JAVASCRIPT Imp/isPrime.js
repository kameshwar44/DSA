
// 8 - Write a function to check if a given number is a prime number in JavaScript.

function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isPrime(7)); // Output: true
  