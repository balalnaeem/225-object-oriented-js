function add(n1, n2) {
  return n1 + n2;
}

function makeAddNumber(num) {
  return function(num2) {
    return add(num, num2);
  };
}

let add1 = makeAddNumber(1);

console.log(add1(9));