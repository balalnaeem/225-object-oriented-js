function makeList() {
  let items = [];

  let list = {
  };

  list.add = function(item) {
    items.push(item);
    console.log(item + ' added!')
  };

  list.remove = function(item) {
    let index = items.indexOf(item);
    items.splice(index, 1);
    console.log(item + ' removed!')
  };

  list.list = function() {
    if (items.length === 0) {
      console.log('list is empty!');
    } else {
      items.forEach(item => console.log(item));
    }
  };

  return list;
}

const list = makeList();
list.add('peas');
list.add('corn');
list.list();
list.remove('peas');
list.list();