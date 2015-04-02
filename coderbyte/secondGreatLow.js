function SecondGreatLow(arr) {

  // new array with first element
  var noCopy = [arr[0]];

  for(var i = 1; i < arr.length; i++) {
    //if array doesn't have duplicate
    if (noCopy.indexOf(arr[i]) == -1) {
      noCopy.push(arr[i]);
    }
  }

  // sort lowest to highest
  noCopy.sort(function(a,b){return a - b});

  // second highest and lowest to strings
  var lowest = noCopy[1].toString();
  var highest = noCopy[noCopy.length - 2].toString();

  return lowest + " " + highest;
}
