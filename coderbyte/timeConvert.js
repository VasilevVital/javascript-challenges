function TimeConvert(num) {

  // expand to include years etc?
  var hours = parseInt(num / 60);
  var minutes = num % 60;

  return hours + ":" + minutes;

}
