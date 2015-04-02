function ExOh(str) {

  var x = 0;
  var o = 0;

  for (var i = 0; i < str.length; i++){
    if (str[i] == "x"){
      x += 1;
    }
    else if (str[i] == "o") {
      o += 1;
    }
  }

  // if same amount of x's and o's
  return x == o;

}
