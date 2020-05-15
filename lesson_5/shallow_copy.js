// write a function to provide a shallow copy for an object
// The object you copy, should share the same prototype chain as the original object
// and it should have the same own properties that return the same values when accessed
// use the code below to verify your implementation

function shallowCopy(object) {
  // first we get the prototype of the object given as argument
  // then we create an object from that prototype
  // then iterate over the properties of the original given object
  // and on each iteration copy the properties and their values in the created object
  // return that object

  let proto = Object.getPrototypeOf(object);
  let resultObj = Object.create(proto);

  Object.keys(object).forEach(key => {
    resultObj[key] = object[key];
  });

  return resultObj;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false