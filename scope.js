var justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    var justAVar = "Just an every day LOCAL";
    
    function inner() {
        return justAVar;
    }
    
    return inner();
}

var result = whereAreYou();
console.log(result);