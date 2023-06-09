// function frequncyCounter(arr, n) {
//   let visited = new Array(n).fill(0);

//   for (let i = 0; i < n; i++) {
//     if (visited[i] !== 1) {
//       let count = 1;
//       for (let j = i + 1; j < n; j++) {
//         if (arr[i] === arr[j]) {
//           visited[j] = 1;
//           count++;
//         }
//       }

//       for (let k = 0; k < count; k++) {
//         console.log(arr[k]);
//       }
//     }
//   }
// }

// let arr = [10, 30, 10, 20, 10, 20, 30, 10];
// let n = arr.length;
// frequncyCounter(arr, n);

const arr = [10, 30, 10, 20, 10, 20, 30, 10];
const n = arr.length;

const visited = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  if (visited[i] !== 1) {
    let count = 1;
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        count++;
        visited[j] = 1;
      }
    }

    console.log(arr[i] + " occurs at " + count + " times");
  }
}
