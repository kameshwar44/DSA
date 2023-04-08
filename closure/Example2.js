var sum = function(a){
    console.log("Live user" +a)
    var c=4;
    return function(b){
        return a+b+c;
    }
}
var store =sum(445) 
console.log(store(5))

