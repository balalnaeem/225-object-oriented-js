// input: two object
// output: boolean
// Rules:
//  - if two objects have the same key value pairs, return true
//  - if both objects are empty, return true
//  - there is no need to check for deep equality I think

// AL:
  // - get the keys of the first object with Object.keys
  // - get the keys of the second object as well
  // check if their length is not equal, return false
  // iterate over the first set of keys, and on each iteration check if the value in the first object === value in the second object
  // if at any point, it returns false, return out of the function and return false
  // if we get through the whole set of keys without getting false, return true in the end

function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  let i;

  if (keys1.length !== keys2.length) return false;

  for (i = 0; i < keys1.length; i += 1) {
    if (obj1[keys1[i]] !== obj2[keys2[i]]) {
      return false;
    }
  }

  return true;
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false