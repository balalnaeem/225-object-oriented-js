// in: number
// out: function

// when we invoke the returned function with the second number, it should count up or down from the returned number

function makeCounter(start) {
  let diff = 1;
  return function(num2) {
    if (start > num2) {
      diff *= -1
    }

    console.log(start);

    do {
      start += diff;
      console.log(start);
    } while (start !== num2)
  }
}

/*
We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

When called with an argument that is not already on the list, it adds that argument to the list.
When called with an argument that is already on the list, it removes the element from the list.
When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.
*/

function makeList() {
  let list = [];
  return function(item) {
    if (item === undefined) {
      if (list.length === 0) {
        console.log('List is empty.');
      } else {
        list.forEach(item => console.log(item));
      }
      return;
    }

    if (!list.includes(item)) {
      list.push(item);
      console.log(item + ' added!');
      return;
    }

    if (list.includes(item)) {
      let index = list.indexOf(item)
      list.splice(index, 1);
      console.log(item + ' removed!');
      return;
    }
  };
}

let todoList = makeList();
todoList();
todoList('Breakfast');
todoList('Read book');
todoList('Breakfast');
todoList();



















