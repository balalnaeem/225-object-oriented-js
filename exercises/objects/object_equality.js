/*
in: two objects
out: boolean

PROBLEM:
- check if the two objects are equal
- so we need to check if both objects have the same keys and values pairs
- assuming none of the values will be non-primitive

al:
- we can access the keys in an object with Object.keys
  - so we can access keys for both the objects and store them in arrays
  - if arrays are not the same length, return false
- iterate over one of the array, check if elements on the same index in both arrays are same
- if they  are, check if they have the same values in objects
  - if at any point they are not, return false,
  - so we use for loop since there is a need to exit out of the loop early
- return true in the end
*/

function objectsEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let i = 0; i < keys1.length; i += 1) {
    if (typeof obj1[keys1[i]] === 'object' && typeof obj2[keys2[i]] === 'object') {
      if (!objectsEqual(obj1[keys1[i]], obj2[keys2[i]])) return false;
    } else {
      if (keys1[i] !== keys2[i])             return false;
      if (obj1[keys1[i]] !== obj2[keys2[i]]) return false;
    }
  }

  return true;
}




console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: {a: 1, b: 2}}, {a: 'foo', b: {a: 1, b: 2}}));            // true
console.log(objectsEqual({a: 'foo', b: {a: 1, b: 2}}, {a: 'foo', b: {a: 1, b: 3}}));            // false
