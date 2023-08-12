//call

function Myname(a, b, c) {
  console.log(this.name, this.age, a, b, c);
}

let obj = {
  name: "kamesh",
  age: 24,
};

Myname.call(obj, 1, 2, 3); //call

Myname.apply(obj, [1, 2, 3]); //Apply

var bindfn = Myname.bind(obj); //bind
bindfn(); // it Doesn't Return Anything we can create a function so that it can be invoked later
