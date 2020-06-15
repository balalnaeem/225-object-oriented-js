function myFilter(array, func, context) {
  var result = [];
  func = func.bind(context);

  array.forEach(function(value) {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

var filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter)); // returns [5, 6, 9]