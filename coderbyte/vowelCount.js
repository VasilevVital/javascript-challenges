function VowelCount(str) {

  var vowels = "aeiouAEIOU"
  var count = 0;

  for (var i = 0; i < str.length; i++){
    // check if vowels in string
    if (vowels.indexOf(str[i]) != -1){
      count += 1;
    }
  }
  return count;
}
