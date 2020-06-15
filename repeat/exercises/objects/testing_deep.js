/*
input: two object
out: boolean

Rules:
  - check if both objects have the same key value pairs
  - if the two value are object, check for deep equality

algorithm:
- a guard clause to see if both references passed as arguments are to the same object
- get keys of both objecct
- keys1
- keys2

===> defined a function that would check if two arrays are equal(strings because are keys are strings)
      - iterate over the first array, on each iteration check if the elements on the current index in both arrays are equal
      - if they are not equal, return false, return true in the end

- check with the help of the defined function if the keys are equal, if not, return false
- get values of both objects
- values1
- values2

====> define a method now that would deeply check if the elements in the both arrays of values are equal
        - iterate over the one of the arrays of values
        - on each iteration check if the typeof of both values is same
        - if it is not , return false
        - if it is, check further if both are `isArray`, use our array equality method to determine if they are equal,
        - if not, return false
        - if they are object, use our previous method to determine if the objects are equal, if they are not return false,
        - check for primitive values to be equal
- return true in the end.
- this method will only check for one level deep, we probably can use recursion to find out multiple level deep
- we will see

*/

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let i;
  let ele1;
  let ele2;

  for (i = 0; i < arr1.length; i += 1) {
    ele1 = arr1[i];
    ele2 = arr2[i];

    if (typeof ele1 !== typeof ele2) return false;

    if (Array.isArray(ele1) && Array.isArray(ele2)) {
      return arraysEqual(ele1, ele2);
    }

    if (typeof ele1 === 'object' && typeof ele2 === 'object') {
      return objectsDeepEqual(ele1, ele2);
    }

    if (ele1 !== ele2) return false;
  }

  return true;
}



function objectsDeepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  let keys1;
  let keys2;
  let values1;
  let values2;

  keys1 = Object.keys(obj1);
  keys2 = Object.keys(obj2);

  if (!arraysEqual(keys1, keys2)) return false;

  values1 = Object.values(obj1);
  values2 = Object.values(obj2);

  if (!arraysEqual(values1, values2)) return false;

  return true;
}

let a = {
  a: 'apple',
  b: {o: 'orange', p: 'pineapple'},
  c: 'carrot',
  d: [1, 2, 'a', 'b', undefined],
};

let b = {
  a: 'apple',
  b: {o: 'orange', p: 'pineapple'},
  c: 'carrot',
  d: [1, 2, 'a', 'b', undefined],
};

console.log(objectsDeepEqual(a, b));

// console.log(objectsDeepEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsDeepEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsDeepEqual({}, {}));                                      // true
// console.log(objectsDeepEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
// console.log(objectsDeepEqual({a: 'foo', b: undefined}, {a: 'foo', b: undefined}));  // true


















