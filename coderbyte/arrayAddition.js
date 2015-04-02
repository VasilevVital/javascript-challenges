function ArrayAdditionI(arr) {

  // sort array lowest to highest
  arr.sort(function(a,b){return a - b});
    // take end num
    var largest = arr.pop();
    var sum = 0;

    // go through array, check if nums add up to largest
    for (var i = 0; i < arr.length; i++){
        sum += arr[i];
        for (var j = 0; j < arr.length; j++){
          if (i != j) {
            sum += arr[j];
            if (sum == largest) {
              return true;
            }
          }
    }

    // negative numbers????
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        sum -= arr[k];
        if (sum == largest) {
          return true;
        }
      }
    }
    sum = 0;
  }
  return false;

}
