function FirstReverse(str) {

  // start at end, fill letters
  var x = "";
  for (var i = str.length - 1; i >= 0; i--) {

    x += str[i];
  }
  return x;

}
