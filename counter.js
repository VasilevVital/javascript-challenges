function info(str){
    
    var spex = {};
    
    spex.words = str.split(" ").length;
    spex.characters = str.split("").length;
    spex.spaces = spex.Words - 1;
    spex.average = parseInt(spex.Characters / spex.Words);
    
    return spex;
}