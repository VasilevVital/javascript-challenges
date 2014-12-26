/*

Evan Gatchell
projectEuler2.js
Takes all the even Fibonacci numbers between 1 and 4,000,000 and adds 'em up.

*/

var x;
var y;
var z;
var evenTotal = 0;

for(var i = 0; i < 50; i++) {
    
    //start
    if(i === 0) {
        x = 1;
        y = 2;
    }
    
    // first plus second
    z = x + y;
    
    //update values
    x = y;
    y = z;
    '
	// if over ceiling, return value
    if (z > 4000000) {
        console.log(evenTotal + 2);
        break;
    }

    // if new number is even, add to evenTotal
    if (z % 2 === 0) {
        evenTotal += z;
    }    
}
console.log(evenTotal + 2);
