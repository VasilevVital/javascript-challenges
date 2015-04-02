function LetterChanges(str) {
    var newString = "";
    var newerString = "";
    var regexp = /[a-yA-Y]/;


    for (var i=0; i < str.length; i++) {

        // if str[i] is alpha
        if(regexp.test(str[i])) {
          // get ASCII, shift up 1, then turn it back into string
          newString += String.fromCharCode(str.charCodeAt(i) + 1);
        }

        else if (str[i] == "z") {
          newString += "a";
        }

        else if (str[i] == "Z") {
          newString += "A";
        }
        //if not alpha
        else {
          newString += str[i];
        }
    }

    for (var j=0; j < newString.length; j++) {
        // if uppercase vowel in newString
        if (/[AEIOU]/.test(newString[j])) {
            newerString += newString[j].toLowerCase();
        }
        // if lowercase vowel in newString
        if (/[aeiou]/.test(newString[j])) {
            newerString += newString[j].toUpperCase();
        }
        else {
            newerString += newString[j];
        }

    }

    return newerString;

}
