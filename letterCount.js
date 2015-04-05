/*returns the number of most repeating letter in a word */
function letterCount(word) {

  // sorting makes count easy
  var array = word.split('').sort();
  // current is char
  var current = null;
  var count = 0;

  for (var i = 0; i < array.length; i++) {
    // don't count first letter
    if (array[i] !== current) {
      current = array[i];
    }
    else {
      count++;
    }
  }

  return count;
}

/*returns letter with highest frequency*/
function maxLetters(string) {

  // read words; letters are keys, frequency is value
  string = string.split(' ');
  var obj = {};
  string.forEach(function(e) {
    // each key is the word and its value is repeat number
    obj[e] = letterCount(e);
  });

  // for each key, fill array with value
  var nums = Object.keys(obj).map(function(k) {
    return obj[k];
  });

  console.log(nums);

  // set max value
  var max = Math.max.apply(null, nums);

  array = [];

  // go through keys
  Object.keys(obj).forEach(function(k) {
    // if value equal to max
    if (obj[k] === max) {
      array.push(k);
    }
  });

  return array.toString();
}

console.log(maxLetters('papapapa test abc'));
