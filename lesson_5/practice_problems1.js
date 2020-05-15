function getDefiningObject(object, propKey) {
  // get object's prototype with Object.getPrototypeOf
  // check if the object has the property propKey with hasOwnProperty
  // if it does return that object,
  // if it does not, get prototype of that object and check again from step 2
  // if nowhere in the prototype chain the property exists, return null
  let proto = Object.getPrototypeOf(object);
  while (proto !== null) {
    if (proto.hasOwnProperty(propKey)) {
      return proto;
    } else {
      proto = Object.getPrototypeOf(proto);
    }
  }

  return null;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
var baz = Object.create(bar);
var qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'a') === foo);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null


// LS solution
function getDefiningObject(object, propKey) {
  while (object && !object.hasOwnProperty(propKey)) {
    object = Object.getPrototypeOf(object);
  }

  return object;
}