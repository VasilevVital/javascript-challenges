var boolArray = function(arr) {
    var boolArray = [];
    var divide = arr.split(" ");
    for (var i = 0; i < divide.length; i++) {
        if (divide[i] === divide[i].split("").reverse().join("")) {
            boolArray.push(true);
        }
        else {
            boolArray.push(false);
        }
    }
    return boolArray;
};