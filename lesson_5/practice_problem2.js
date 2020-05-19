let shape = {
  getType: function() {
    return this.type;
  },

  getPerimeter: function() {
    return this.a + this.b + this.c;
  },
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;

let t = new Triangle(3, 4, 5);

Triangle.prototype.constructor = Triangle;


function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

var name = 'Jane Doe';
var user1 = new User('John', 'Doe');
var user2 = User('John', 'Doe');



function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// var foo = {
//   a: 1
// };

// var bar = createObject(foo);

var foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();
}

var bar = foo.begetObject();

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(object, args);
  return typeof result === 'object' ? result : object;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

var john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
john.constructor;         // Person(firstName, lastName) {...}



























