function Palindrome(str) {

  // split into words, mash all letters together
  str = str.split(" ").join("");

  // only go half way
  for (var i = 0; i < str.length / 2; i++){
    // start at ends and go to center
    if (str[i] != str[str.length - 1 - i]){
      return false;
    }
  }
  // if passes test
  return true;

}
