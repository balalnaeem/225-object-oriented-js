function subtract(a, b) {
  return a - b;
}

function makeSubN(n) {
  return function(m) {
    return subtract(m, n);
  }
}

var sub5 = makeSubN(5);
console.log(sub5(20)); // 5

function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }
}

function multiply(a, b) {
  return a * b;
}

var multiplyBy5 = makePartialFunc(multiply, 5);

console.log(multiplyBy5(100)); // 500