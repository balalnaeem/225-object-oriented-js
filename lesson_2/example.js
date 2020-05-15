var name = 'Bobbo';
var foo = {
  name: name,
  sayName: function() {
    console.log(this.name);
  },
};

var baz = foo.sayName;

foo.sayName();
baz();
