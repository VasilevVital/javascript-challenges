function LetterCapitalize(str) {

  var words = str.split(" ");

  // split up each word and capitalize first letter
  for (var i = 0; i < words.length; i++){
    var word = words[i].split("");
    word[0] = word[0].toUpperCase();
    words[i] = word.join("");
  }
  return words.join(" ");
}
