function solution(a,arr) {
    let sum=0;
      let maxSum = -9999;
      for(let i=0;i<arr.length;i++){
      sum = Math.max(arr[i]+sum,arr[i]);
      maxSum = Math.max(sum,maxSum)
  }
  
  return maxSum;
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr = readLine().split(' ').map(Number)
      var res = solution(a,arr);
      console.log(res);
  }
  