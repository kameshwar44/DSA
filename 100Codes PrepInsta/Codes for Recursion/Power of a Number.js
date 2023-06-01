function Pow(base, exp) {
  if (exp == 0) {
    return 1;
  }

  return base * Pow(base, exp - 1);
}
console.log(Pow(2, 4));
