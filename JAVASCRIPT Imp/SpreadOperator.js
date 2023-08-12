// // The spread operator (...) is a JavaScript syntax that allows an iterable,
// //  such as an array or a string, to be expanded into its individual elements or
// //  characters. It can be used in function calls or array literals to provide a more concise and readable syntax.

// //  Here are some examples of how the spread operator can be used:

// // 1 - To concatenate arrays:

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
// console.log(arr3);

// // 2- To pass an array as individual arguments to a function:

// const numbers = [1, 2, 3];
// const max = Math.max(...numbers); // 3
// console.log(max);

// // 3 - To convert a string into an array of characters:

// const str = "hello";
// const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']
// console.log(chars);

// //-----------------------------------------SPREAD OPEERATOR-----------------------------------------------

// function sum(...numbers) {
//   return numbers.reduce((total, number) => total + number, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7)); // 22
