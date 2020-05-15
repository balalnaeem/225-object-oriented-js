function makeList() {
  let items = [];

  return {
    add: function(item) {
      items.push(item);
      console.log(`${item} added!`);
    },

    remove: function(item) {
      let index = items.indexOf(item);
      items.splice(index, 1);
      console.log(`${item} removed!`);
    },

    list: function() {
      if (items.length === 0) {
        console.log('list is empty!');
      } else {
        items.forEach(item => {
          console.log(item);
        });
      }
    },
  };
}

let list = makeList();
list.add('make breakfast');
list.add('workout');
list.add('read a book');

list.remove('make breakfast');
list.remove('workout');
list.remove('read a book');

list.list();