function age(year, month, day) {


  var oneDay = 24*60*60*1000;	// hours*minutes*seconds*milliseconds
  var today = new Date();
  var anotherDate = new Date(year,month,day);

  var diffDays = parseInt(Math.abs((today.getTime() - anotherDate.getTime())/(oneDay)));

  if (diffDays > 365) {
    var years = parseInt(diffDays / 365);
    var rawDays = (diffDays % 365);
    var months = parseInt(rawDays / 30);
    var days = parseInt(rawDays % 30);
    return years + " years " + months + " months " + days + " days";
  }
  else if (diffDays > 30) {
    var months = parseInt(diffDays / 30);
    var days = parseInt(diffDays % 30);
    return months + " months " + days + " days";
  }
  else {
    return diffDays + " days";
  }
}
