function NonRpeating(arr) {
  let n = arr.length;
  let visited = new Array(n).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (visited[i] !== 1) {
      let count = 1;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          count++;
          visited[j] = 1;
        }
      }
      if(count==1){
        console.log(arr[i]);
      }
    }
    
  }
}
let arr = [10, 20, 30, 10, 20, 20, 10,50,90,33];
NonRpeating(arr);
