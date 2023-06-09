let arr = [10, 30, 10, 20, 40, 20, 50, 10];
let n = arr.length;

let visited = new Array(n);
count_dis = 0;
for (let i = 0; i < n; i++) {
  if (visited[i] !== 1) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        visited[j] = 1;
      }
    }
    count_dis++;
  }
}
console.log(count_dis);

//https://prepinsta.com/cpp-program/program-to-count-distinct-elements-in-an-array/
