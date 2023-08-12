

// function rev(str){
//     let newstr ="";
//     for(let i=str.length;i>=0;i--){
//         newstr +=str.charAt(i)
      
//     }
//     if(str == newstr ){
//        return "yes"
//     }
//     else{
//          return 'No'
//     }
//     }
//     let str ="addsda"
//     console.log(rev(str))
    
    

function plaindromestring(str){
    let newstr = ''

    for(let i=str.length-1;i>=0;i--){
        newstr +=str[i]
    }
    if(newstr == str){
        return "yes"
    }
    else{
        return "No"
    }
}
let str = "aba"
console.log(plaindromestring(str));