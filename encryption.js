var encrypt = function(message, key) {
    var encrypted = [""];
    var k = key.toString();
    var max = k.length;
    for (var i = 0; i < message.length; i++) {
        encrypted[i] = String.fromCharCode(message[i].charCodeAt() + parseInt(k[i % max]));
    }
    return encrypted.join("");
};

var decrypt = function(message, key) {
    var decrypted = [""];
    var k = key.toString();
    var max = k.length;
    for (var i = 0; i < message.length; i++) {
        decrypted[i] = String.fromCharCode(message[i].charCodeAt() - parseInt(k[i % max]));
    }
    return decrypted.join("");
};

console.log(encrypt("Hello", 123));
console.log(decrypt("Igomq", 123));