
class hello{
    message(){
        console.log("Hello EveryOne");
    }
}
let a = new hello()
a.message()


// ============Constructor==========================

class student{
    constructor(){
        console.log("Hey I am constructor don't need to call me ");
    }

}
let ab = new student()



// ============Multiple Methods==========================

class cool{
    constructor(){
        let names;
        console.log("Constructor Function");
    }

    hello(){
        console.log("Hi Bro" + this.names);
    }
}

let s = new cool()
a.names = "Yahoo baba"
s.hello()


