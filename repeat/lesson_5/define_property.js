function Person(name) {
  this.name = name;
  Object.defineProperties(this, {
    log: {
      value: function() {console.log(name)},
      writable: false,
    }
  });
}

let me = new Person('Big Dog');
me.log();
me.log = function() { console.log('Amanda Panda')};
me.log();