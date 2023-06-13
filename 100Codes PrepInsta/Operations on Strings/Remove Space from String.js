function removeSpaces(str) {
    let newstr = ''
    for(let i=0;i<str.length;i++){
        if(str[i] !== " "){
           newstr += str[i] 
        }
    }
    return newstr
}

let str = "P re p i n sta ";
str = removeSpaces(str);
console.log(str);
