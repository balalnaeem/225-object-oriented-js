function extend(destination) {
  // first we get the destination objects which is arguments[0]
  // then we call [].slice.call(arguments, 1), that will give us the sources
  // iterate over the array of sources
  // on each iteration iterate over the current objects keys
  // copy each key and value in the destination
  // return destination;
  let sources = [].slice.call(arguments, 1);
  sources.forEach(source => {
    Object.keys(source).forEach(key => {
      destination[key] = source[key];
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