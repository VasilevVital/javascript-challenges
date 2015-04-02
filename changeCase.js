var changeCase = function(str) {
    var transform = [""];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            transform.push(str[i].toUpperCase());
        }
        else {
            transform.push(str[i].toLowerCase());
        }
    }
    return transform.join("");