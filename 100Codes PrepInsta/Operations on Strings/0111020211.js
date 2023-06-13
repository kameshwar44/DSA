let str = "01020203"
let newstr = ""
for(let i=0;i<str.length;i++){
    if(str.charAt(i)==0){
      newstr += 1
    }
    else{
        newstr +=str[i]
    }
   
}
console.log(newstr)
