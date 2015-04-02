var arr = [1,2,3,4,5,6,7,8,9,10]

function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

// passing in functtion as argument
console.log(filter(arr, function(num) {
  // return even numbers < 5
  return num < 5  && num % 2 === 0;
});
