function newStack() {
  let stack: [];
  let stackObject = {};

  stackObject.push = function(value) {
    stack.push(value);
  };

  stackObject.pop = function() {
    stack.pop();
  };

  stackObject.printStock = function() {
    stack.forEach(val => console.log(val));
  };

  return stackObject;
}

