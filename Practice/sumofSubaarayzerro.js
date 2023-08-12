function sumOfSubarr(arr, n) {
    let pre = new Array(n);
    pre[0] = arr[0];
  
    for (let i = 1; i < n; i++) {
      pre[i] = pre[i - 1] + arr[i];
    }
  
    let mp = new Map();
    let ans = 0;
  
    for (let i = 0; i < n; i++) {
      if (pre[i] === 0) {
        ans++;
      }  if (mp.has(pre[i])) {
        ans += mp.get(pre[i]);
        mp.set(pre[i], mp.get(pre[i]) + 1);
      } else {
        mp.set(pre[i], 1);
      }
    }
  
    return ans;
  }
  
  let arr = [0, 0, 5, 5, 0, 0];
  let n = arr.length;
  console.log(sumOfSubarr(arr, n));
  