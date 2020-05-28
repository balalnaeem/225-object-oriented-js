function createObject(obj) {
  function Obj() {};
  Obj.prototype = obj;
  Obj.prototype.constructor = Obj;
  return new Obj();
}

var foo = {
  a: 1
};

var bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true