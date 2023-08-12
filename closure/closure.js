function parent(){
    let first = "Suresh"
    function child(){
      let last = "kumar"
      console.log(first+last)
    }
    child();
  }
parent()


// function sum(a,b,c){
//     return{
//        sumoftwo:function(){
//         return a+b;
//        } ,
//        sumofthree:function(){
//         return a+b+c;
//        } 
//     }
// }
// var store = sum(3,4,5)
// console.log(store.sumoftwo())
// console.log(store.sumofthree())
