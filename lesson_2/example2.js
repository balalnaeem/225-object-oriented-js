let lastUsedIndex = -1;

let people = {
  collection: [],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  isValidPerson: function(person) {
    return typeof person.firstName === 'string' && typeof person.lastName === 'string';
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }
    });

    return index;
  },

  add: function(person) {
    if (!this.isValidPerson(person)) return;
    lastUsedIndex += 1;
    person.index = lastUsedIndex;
    this.collection.push(person);
  },

  remove: function(person) {
    let index;
    if (!this.isValidPerson(person)) return;

    index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1)
  },

  get: function(person) {
    if (!this.isValidPerson(person)) return;
    return this.collection[this.getIndex(person)];
  },

  update: function(person) {
    if (!this.isValidPerson(person)) return;

    if (this.getIndex(person) === -1) {
      this.add(person);
    } else {
      this.collection[getIndex(person)] = person;
    }
  },
};

let me = {
  firstName: 'Balal',
  lastName: 'Naeem',
}

let friend = {
  firstName: 'John',
  lastName: 'Smith',
}

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
}

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
}


people.add({firstName: 'Oscar', lastName: 'Wilde'});
people.add({firstName: 'Jane', lastName: 'Austen'});
people.add({firstName: 'Agatha', lastName: 'Christie'});
people.add(me);
people.add(friend);
people.add(mother);
people.add(father);
console.log(people.collection);




















