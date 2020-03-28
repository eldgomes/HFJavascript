function addN(n) {
    var adder = function(x) {
        return n + x;
    };
    return adder;
}

var add2 = addN(2);
console.log(add2(100)); // 102
console.log(add2(1000)); // 1002