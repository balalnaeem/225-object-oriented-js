/*
1 - item creator - makes sure all necessary information is present and valid
2 - item manager - responsible for creating items, updating info, deleting items and querying info about items
3 - reports manager - generates report for a specific item or all items

- report for specific items are created from report objects created from report manager
- report manager is responsible for creating reports for all items

__ required information about an item __
* SKU code - first 3 letters of the item name and first 2 letters of the category
  item name consists of two words
    first word is two letters only
    so the third letter is taken from the next word

* item name - This is the name of the item. It must consist of minimum of 5 chars. Spaces are not counted as chars

* category - only one word and minimum of 5 chars

* quantity - in stock. Must not be blank. assume that a valid number is provided

*/

// function Foo(a, b) {
//  this.a = a;
//  this.b = b;
// }

// Foo.prototype = {
//   bar: function() {
//     console.log(this.a);
//   },
//   baz: function() {
//     console.log(this.b);
//   },
// };

// var myFoo = new Foo('bar', 'baz');


function Contact(name, gender) {
  this.name = name;
  this.gender = gender;
}

Contact.prototype.hasName = function(comparableName) {
  return this.name === comparableName;
};

var contacts = {
  list: [],
  add: function(name, gender) {
    var contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
    });
  },
  females: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName: function(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name)
    });
  },
};

contacts.add('balal', 'male');
contacts.add('saba', 'female');
contacts.add('Jibran', 'male');
contacts.add('Madeeha', 'female');



var box = {
  x: 25,
  y: 42,
  z: 12,
  logVolume: function() {
    console.log(this.x * this.y * this.z);
  },
};

box.logVolume();


























