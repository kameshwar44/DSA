function Pow(base, exp) {
  if (exp == 0) {
    return 1;
  }

  return base * Pow(base, exp - 1);
}
console.log(Pow(2, 4));

// function power(base, exp) {
//   if (exp == 0) {
//     return 1;
//   }

//   return base * power(base, exp - 1);
// }
// console.log(power(2,3));
