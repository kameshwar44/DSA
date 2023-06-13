// let str = "sjdj29342394 jf"
// console.log(str.replace(/[^a-zA-Z]/g,''))


// =====================BRUTEFORCE=====================================

function charcode(str){
    let newstr = ''
    for(let i=0;i<str.length;i++){
    if(str[i] >= "A" && str[i] <= "Z" || str[i]>= "a" && str[i] <="z"){
             newstr +=str[i]
         } 
    }
    return newstr
  
}
let str = "sdfs efsdf 453^^6372332sdf"
console.log(charcode(str))



// // =======================Using CharCodeAt() ============================

// function charcodes(str){
//     let newstr = ''
//     for(let i=0;i<str.length;i++){
//         let charcode = str.charCodeAt(i)
//     if((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <=122)){
//              newstr +=str[i]
//          } 
//     }
//     return newstr
  
// }
// let str = "sdfs efsdf 453^^6372332sdf"
// console.log(charcodes(str))