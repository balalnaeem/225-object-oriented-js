function newStack() {
  let stack = [];
  return {
    push: function(val) {
      stack.push(val);
    },

    pop: function() {
      stack.pop();
    },

    printStack: function() {
      stack.forEach(val => console.log(val));
    },
  };
}