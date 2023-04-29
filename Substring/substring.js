let str= "Welcome to Programiz"

let ss = s.substring(1,3)   // just subtract 3-1 =2   this means el
                                // 2nd case substring(3) don't use 0 based indexing in your mind just remove 3 element

console.log(ss)

// --------------------------------------------------PERFECT EXAMPLE-------------------------------------------


let s= "xfddgxxzy"

for(let i=0;i<s.length;i++){
    if(s[i]==s[i+1]){
    let ss=s.substring(i+2)
    console.log(ss)
    }

}
