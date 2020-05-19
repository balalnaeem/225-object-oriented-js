function Circle(radius) {
  this.area = function () {
    return Math.PI * (radius**2);
  };
}

var a = new Circle(3);
var b = new Circle(4);

var ninjaA;
// var ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
// ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
}

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung


var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

let ninjaB = Object.create(ninjaA);

console.log(ninjaB.constructor === ninjaA.constructor);