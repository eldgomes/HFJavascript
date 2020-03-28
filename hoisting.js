/*
JS runs 2 passes at the code
1st pass stacks function declarations only, ignores rest of the code
2nd pass starts executing line by line
since fly() on line 12 is not yet defined from the first pass, it throws error
*/

var migrating = true;

if (migrating) {
    quack(4);
    fly(4);
}

var fly = function(num) {
    for (var i = 0; i < num; i++) {
        console.log("Flying!");
    }
};

function quack(num) {
    for (var i = 0; i < num; i++) {
        console.log("Quack!");
    }
}