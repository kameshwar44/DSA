// function Captialized(str){
//      let first = str.charAt(0).toUpperCase()
//      let middle = str.slice(1,-1)
//      let last = str.charAt(str.length-1).toUpperCase()
//          return first + middle + last
//      }
//      let str = 'hello world'
//      let word = str.split(' ')

//      for(let i=0;i<word.length;i++){
//           word[i] = Captialized(word[i])
//      }
//      console.log(word.join(' '))
















function Captialized(newstr) {
  let first = newstr[0].toUpperCase();
  let middle = newstr.slice(1, -1);
  let last = newstr[newstr.length - 1].toUpperCase();
  
  return first + middle + last;
}
let str = "hello world";
let newstr = str.split(" ");


 for(let i=0;i<newstr.length;i++){
          newstr[i] = Captialized(newstr[i])
     }
     console.log(newstr.join(' '));
     



