let str = "prepinsta";
let newstr = "";
for (let i = 0; i < str.length; i++) {
  if (
    str[i] !== "A" &&
    str[i] !== "a" &&
    str[i] !== "E" &&
    str[i] !== "e" &&
    str[i] !== "I" &&
    str[i] !== "i" &&
    str[i] !== "O" &&
    str[i] !== "o" &&
    str[i] !== "U" &&
    str[i] !== "u"
  ) {
    newstr += str[i];
  }
 
}
console.log("Vowesl are " + newstr);







// =========================== susbtring Method=======================

// let str = "aaaasds"
// let newstr = ""
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i] !== "A" &&
//     str[i] !== "a" &&
//     str[i] !== "E" &&
//     str[i] !== "e" &&
//     str[i] !== "I" &&
//     str[i] !== "i" &&
//     str[i] !== "O" &&
//     str[i] !== "o" &&
//     str[i] !== "U" &&
//     str[i] !== "u"
//   )
//   newstr += str.substring(i,i+1)
// }
// console.log(newstr)
