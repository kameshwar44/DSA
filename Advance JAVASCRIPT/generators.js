function *test(){
    console.log("First Message");
    yield "first";
    console.log("2nd Message");
    yield "Third";
    console.log("3nd Message");
}
let g = test()

console.log(g.next())
console.log(g.next())
console.log(g.next())
