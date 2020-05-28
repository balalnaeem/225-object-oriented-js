function makeList() {
  let list = [];
  return function(item) {
    let index = list.indexOf(item);

    if (item !== undefined) {
      if (index >= 0) {
        console.log(item + ' removed!');
        list.splice(index, 1);
      } else {
        console.log(item + ' added!');
        list.push(item);
      }
    }

    if (item === undefined) {
      if (list.length === 0) {
        console.log('list is empty!')
      } else {
        list.forEach(item => console.log(item));
      }
    }
  };
}

let list = makeList();
list('coffee');
list('eggs');
list('books');
list('code');

list('coffee');

list();