Object.prototype.name = 'Object.prototype';

Object.prototype.ancestors = function() {
  let result = [];
  let prototype = Object.getPrototypeOf(this);

  while (prototype !== null) {
    result.push(prototype.name);
    prototype = Object.getPrototypeOf(prototype);
  }

  console.log(result);
}






// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
foo.ancestors();  // returns ['Object.prototype']