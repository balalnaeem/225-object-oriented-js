let me = {
  firstName: 'Balal',
  lastName: 'Naeem',
};

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Herst',
};

let father = {
  firstName: 'John',
  lastName: 'Doe',
};

let spouse = {
  firstName: 'Jennifer',
  lastName: 'Lopez',
};

let people = {
  collection: [me, friend, mother, father],

  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function(collection) {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    if (this.isInvalid(person)) return;
    this.collection.push(person);
  },

  getIndex: function(person) {
    let index = -1;
    this.collection.forEach((comparator, i) => {
      if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
        index = i;
      }

    });

    return index;
  },

  remove: function(person) {
    let index;

    if (this.isInvalid(person)) return;

    index = this.getIndex(person);

    if (index === -1) return;

    this.collection.splice(index, 1);
  },

  isInvalid: function(person) {
    return typeof person.firstName !== 'string' && typeof person.lastName !== 'string';
  },

  get: function(person) {
    if (isInvalid(person)) return;

    return this collection[this.getIndex(person)];
  },

  update: function(person) {
    if (this.isInvalid(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
}

console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));




















