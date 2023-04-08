// Take a number if Number is Multiple of 3 print "Foo"
// If number is multiple of 5 Print "Bar0"
// And if Number is Multiple of both 5 and 7 Print "Footbar"
// If not a multiplr of either print nothing

// remainder3= inp %3
// remainder5 = inp % 5

// if(remainder3 ==0) console.log("Foo");
// if( remainder5==0) console.log("Bar")


let n =15;
if(n%3==0 && n%5==0){
    console.log("FooBar")
}
else if(n%3==0){
    console.log("Foo")
}
else if(n%5==0){
    console.log("Bar")
}
else{
    console.log("FooBar")
}