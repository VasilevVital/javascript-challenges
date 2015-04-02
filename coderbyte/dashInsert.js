function DashInsert(str) {

  var dashString = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 == 1) {
      dashString.push(str[i].toString());
      if (str[i+1] % 2 == 1) {
        dashString.push("-")
      }
    }
    else {
      dashString.push(str[i]);
    }
  }
  return dashString;

}

/* NEEDS TESTING AND TWEAKING, DAWG!!!!!!!!!!!!!!!!!!!*/
