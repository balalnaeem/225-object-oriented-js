Object.prototype.ancestors = function() {
  let chain = [];
  let proto = Object.getPrototypeOf(this);

  while (proto !== Object.prototype) {
    chain.push(proto.name);
    proto = Object.getPrototypeOf(proto);
  }

  chain.push('Object.prototype');
  return chain;
}

// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

