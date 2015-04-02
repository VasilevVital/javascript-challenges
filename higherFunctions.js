var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// add all together
console.log(arr.reduce(function(a, b){return a + b}));

// multipy each element by 10
console.log(arr.map(function(a){return a * 10}));

// multiply by 10, check if divisible by 3
console.log((arr.map(function(a){return a * 10}).filter(function(a){return a % 3 === 0})));
