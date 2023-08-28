// let arr = [10, 30, 10, 20, 40, 20, 50, 10];
// let n = arr.length;

// let visited = new Array(n);
// count_dis = 0;
// for (let i = 0; i < n; i++) {
//   if (visited[i] !== 1) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] === arr[j]) {
//         visited[j] = 1;
//       }
//     }
//     count_dis++;
//   }
// }
// console.log(count_dis);

//https://prepinsta.com/cpp-program/program-to-count-distinct-elements-in-an-array/

// let arr =  [10, 30, 10, 20, 40, 20, 50, 10];
//   let mp = new Map()
//   for(let i=0;i<arr.length;i++){
//     if(mp.has(arr[i])){
//       mp.set(arr[i],mp.get(arr[i])+1)
//     }
//     else{
//       mp.set(arr[i],1)
//     }
//   }
//  let count=0
// mp.forEach((values,keys)=>{
//   if(values>=1){
//     count++
//   }

// })

// console.log(count)

// let arr = [10,20,10,20,30,40,30,40]

// let newarr = []
//     let mp = new Map()
//     for(let i=0;i<arr.length;i++){
//         if(mp.has(arr[i])){
//             mp.set(arr[i],mp.get(arr[i])+1)
//         }
//         else{
//             mp.set(arr[i],1)
//         }
//     }
// mp.forEach((values,key)=>
//     newarr.push(key)
// )

// console.log(newarr);

// let arr = [10, 20, 10, 20, 30, 40, 30, 40];

// function distinct(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length - 1; j > i; j--)
//       if (arr[i] === arr[j]) {
//         arr.splice(j, 1);

//       }
//   }
//   return arr;
// }

// console.log(distinct(arr));

let arr = [10, 20, 10, 20, 30, 40, 30, 40];

function distinct(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) == -1) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(distinct(arr));
