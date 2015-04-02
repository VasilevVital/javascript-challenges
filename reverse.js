var reverse = function (str) {
  var divide = str.split(" ");
  var mixed = [];
  
  for (var i = 0; i < divide.length; i++) {
    mixed.push(divide[i].split("").reverse().join(""));  
  }
  return mixed.join(" ");