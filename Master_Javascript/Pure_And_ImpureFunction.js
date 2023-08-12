//Impure function

function Imp(val) {
  console.log(Math.random() * val);
}

Imp(10);
Imp(10);

//Pure Function
function abc(a, b) {
  console.log(a * b);
}
abc(5, 23);
abc(5, 23);
