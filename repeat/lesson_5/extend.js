// Write a function that extends an object (destination object) with contents from multiple objects (source objects).

function extend(destination) {
  let objects = [].slice.call(arguments, 1);
  objects.forEach(obj => {
    Object.getOwnPropertyNames(obj).forEach(key => {
      destination[key] = obj[key];
    });
  });

  return destination;
}

var foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

var joe = {
  name: 'Joe'
};

var funcs = {
  sayHello: function() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye: function() {
    console.log('Goodbye, ' + this.name);
  },
};

var object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
console.log(object);