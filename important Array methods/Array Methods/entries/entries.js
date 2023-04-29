const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
for (let [index, element] of iterator) {
  console.log(index, element); // Output: 0 'a', 1 'b', 2 'c'
}
