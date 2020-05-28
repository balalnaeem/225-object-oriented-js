/*
Write a delegate function that can be used to delegate the behaviour of a method or function to another objects method.

In: the object, name of the method on the object
out: nothing (just execute the method in the context of current object)

rules:
- take object as an argument
- and name of the method on that object (string form ofcourse)
- minimum two arguments
- any extra arguments are passed to the method that we are are delegating to

algorithm:
- define a function called delegare
  - takes an object as an argument, take name of the method
  - and takes additional arguments
  - invoke the method in the context of that object it is defined on
*/

function delegate(object, method) {
  let args = [].slice.call(arguments, 2);
  return function() {
    return object[method].apply(object, args)
  };
}

var foo = {
  name: 'test',
  bar: function(greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

var baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test'

foo.bar = function() {
  console.log('changed');
}

baz.qux();          // logs 'changed'