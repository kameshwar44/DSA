function reverse(n) {
  let temp = n;
  let rev = 0;
  while (temp > 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }
  if (n == rev) {
    console.log(rev);
    return true;
  } else {
    return false;
  }
}
console.log(reverse(1212));
