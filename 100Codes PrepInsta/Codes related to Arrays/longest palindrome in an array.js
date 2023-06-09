function isPalindrome(n) {
  let temp = n;
  let rev = 0;
  while (temp != 0) {
    let rem = temp % 10;
    rev = rev * 10 + rem;
    temp = Math.floor(temp / 10);
  }

  if (n == rev) {
    return 1;
  } else {
    return 0;
  }
}

function longestPalindrome(arr) {
  let res = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (isPalindrome(arr[i]) && arr[i] > res) {
      res = arr[i];
    }
  }
  if (res == -Infinity) {
    return -1;
  }
  return res;
}
let arr = [1, 121, 55551, 545545, 10111, 90];
console.log(longestPalindrome(arr));
