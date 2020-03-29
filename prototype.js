function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

var toy1 = new Robot("Toy", 2013, "Avary");
console.log(toy1.toString()); // returns [object Object]

Robot.prototype.toString = function() {
    return this.name + " Robot belonging to " + this.owner;
   };
var toy2 = new Robot("Toy", 2013, "Avary");
console.log(toy2.toString());
console.log("Robot is: " + toy2); //toy2 is converted to string