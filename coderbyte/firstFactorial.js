function FirstFactorial(num) {
  if (num == 0) {
    return 1
  }
  // recursive factorial
  return  num * FirstFactorial(num - 1);

}
