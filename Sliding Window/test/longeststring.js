// abcabcbb
// longest substring which doesnot contain any repeating elements
// abcabcbb
// abc

let str = "abcabcbb";
let arr = str.split('')

for(let i=0;i<arr.length;i++){
    if(arr[i] !=arr[i+1]){
      let newstr=  arr.splice(i,1)
      console.log(newstr)
    }
    
}


