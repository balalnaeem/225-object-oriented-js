// Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:

function getDefiningObject(object, propKey) {
  var prototype = Object.getPrototypeOf(object);

  if (prototype === null) {
    return null;
  }

  if (prototype.hasOwnProperty(propKey)) {
    return prototype;
  } else {
    return getDefiningObject(prototype, propKey);
  }
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null