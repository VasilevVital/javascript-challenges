function reduce(array, combine, start) {
  var current = start;
  for (var i = 0; i < array.length; i++)
    // argument in place of function
    current = combine(current, array[i]);
  return current;
}

// reduce(element, callback, index)
console.log(reduce([1, 2, 3, 4], function(a, b) {
  return a + b;
}, 0));

console.log(arr.filter(function(a){return a % 2 === 0}))
