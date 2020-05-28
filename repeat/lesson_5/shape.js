const shape = {
  getType: function() {
    return this.type;
  },

  getPerimeter: function() {
    return this.a + this.b + this.c;
  },
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

var t = new Triangle(3, 4, 5);

console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"