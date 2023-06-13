function revstr(str1) {
    let len = str1.length;
    
    for(let i = 0; i < len / 2; i++) {
        let temp = str1[i];
        str1[i] = str1[len - i - 1];
        str1[len - i - 1] = temp;
    }
}

let str = "Priyanka";
console.log("Before reversing the string: " + str);

str = str.split('');
revstr(str);
str = str.join('');

console.log("After reversing the string: " + str);
