function countOccDigit(n) {
  let d = 9;
  let count = 0;
  while (n > 0) {
    let rem = n % 10;
    if (rem == d) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
}
console.log(countOccDigit(9948490494));
