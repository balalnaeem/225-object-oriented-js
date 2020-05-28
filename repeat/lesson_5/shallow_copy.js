function shallowCopy(object) {
  let newObj = Object.create(Object.getPrototypeOf(object));
  Object.getOwnPropertyNames(object).forEach(key => {
    newObj[key] = object[key];
  });
  return newObj;
}

var foo = {
  a: 1,
  b: 2,
};

var bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

var baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
console.log(baz.hasOwnProperty('a'));  // false
console.log(baz.hasOwnProperty('b'));  // false