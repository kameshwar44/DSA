let str = "prepinsta";
let count = 0
for (let i = 0; i < str.length; i++) {
  if (
    str[i] == "A" ||
    str[i] == "a" ||
    str[i] == "E" ||
    str[i] == "e" ||
    str[i] == "I" ||
    str[i] == "i" ||
    str[i] == "O" ||
    str[i] == "o" ||
    str[i] == "U" ||
    str[i] == "u"
  ) {
    count++
  }
}
console.log("Vowesl are " +  count)
 
