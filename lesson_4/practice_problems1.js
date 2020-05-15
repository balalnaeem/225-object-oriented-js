function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);
  message = greeting + ', ' + name;
  console.log(message);
}

function generator(greeting) {
  return function(name) {
    greet(greeting, name);
  }
}

let sayHi = generator('Hi');
let sayHello = generator('Hello');

sayHi('Brandon');
sayHello('Shane');