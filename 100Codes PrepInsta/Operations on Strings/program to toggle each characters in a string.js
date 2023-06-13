function toggleString(str) {
  let newstr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      newstr += str[i].toLowerCase();
    } else if (str[i] >= "a" && str[i] <= "z") {
      newstr += str[i].toUpperCase();
    } else {
      newstr += str[i];
    }
  }
  return newstr;
}

console.log(toggleString("Hello WOlrds"));
