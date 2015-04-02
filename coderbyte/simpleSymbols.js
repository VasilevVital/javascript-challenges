function SimpleSymbols(str) {

  var string = str.split("");
  var alpha = "abcdefghijklmnopqrstuvwxyz"
  for (var i = 0; i < string.length; i++) {
    // if string[i] is alpha and no +'s
    if (alpha.indexOf(string[i]) != -1 && (string[i-1] != "+" || string[i+1] != "+")) {
      return false;
    }
  }
  return true;

}
