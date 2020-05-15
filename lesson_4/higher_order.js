// higher order functions can take a function as an argument
// they can also return a function
// and can do both


function makeListTransformer(func) {
  return function(list) {
    return list.map(func);
  };
}

var timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]