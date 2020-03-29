function Dog(params) {
    this.name = params.name;
    this.breed = params.breed;
    this.weight = params.weight;
    
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

var fidoParams =  {
    name: "Fido",
    breed: "Mixed",
    weight: "38"
}
var fido = new Dog(fidoParams);

console.log(fido);
console.log(typeof fido);
console.log(fido instanceof Dog);

fido.owner = "Bob";
delete fido.weight;
fido.trust = function(person) {
    return (person === "Bob");
};

console.log(typeof fido);
console.log(fido instanceof Dog);