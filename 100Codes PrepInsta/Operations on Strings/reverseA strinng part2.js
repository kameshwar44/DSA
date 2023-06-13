
function rev(str){
    let len = str.length
    for(let i=0;i<len/2;i++){
    let temp = str[i];
    str[i] = str[len-i-1]
     str[len-i-1] = temp
}
return str.join('')
  
}
let oldstr = "hellow"
let str = oldstr.split('')
console.log(rev(str))




// function reverseString(newstr, i, j) {
//   while (i < j) {
//     let temp = newstr[i];
//     newstr[i] = newstr[j];
//     newstr[j] = temp;
//     i++;
//     j--;
//   }
//   return newstr.join("");
// }
// let str = "Welcome to Programiz!";
// let newstr = str.split("");

// console.log(reverseString(newstr, 0, str.length - 1));




