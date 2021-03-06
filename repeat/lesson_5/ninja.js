// var ninjaA;
// var ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// };

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

var ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object

var ninjaB = new ninjaA.constructor();

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true