function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

Person.prototype.communicate = function() {
  console.log('communicating');
};

Person.prototype.eat = function() {
  console.log('eating');
};

Person.prototype.sleep = function() {
  console.log('sleeping');
};

// DOCTOR
function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log('diagnosing');
};

// PROFESSOR
function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log('teaching');
};

// STUDENT
function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log('studying');
};


// GRADUATE STUDENT
function GraduateStudent(firstName, lastName, age, gender, graduateDegree) {
  Person.call(this, firstName, lastName, age, gender);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function(first_argument) {
  console.log('researching');
};

/*
- we need to define an extend method
- that will take an object1 and another different object2 as argument
- it will return object1
- but object1 will have access to the properties in object2 for the remainder of the program
*/

function delegate(obj1, methodName, obj2) {
  let args = [].slice.call(arguments, 2);
  return function() {
    return obj1[methodName].apply(obj2, args);
  }
}

function extend(obj1, obj2) {
  Object.keys(obj2).forEach(prop => {
    obj1[prop] = delegate(obj2, prop, obj1);
    obj1[prop] = delegate(obj2, prop, obj1);
  });

  return obj1;
}

const professional = {
  invoice: function() {
    console.log(this.fullName() + ' is billing customers.');
  },

  payTax: function() {
    console.log(this.fullName() + ' is paying taxes.');
  },
};

var doctor = extend(new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics'), professional);
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'S
doctor.diagnose();                         // logs 'Diagnosing'

var professor = extend(new Professor('foo', 'bar', 21, 'gender', 'Systems Engineering'), professional);
console.log(professor instanceof Person);     // logs true
console.log(professor instanceof Professor);  // logs true
professor.eat();                              // logs 'Eating'
professor.communicate();                      // logs 'Communicating'
professor.sleep();                            // logs 'Sleeping'
console.log(professor.fullName());            // logs 'foo bar'
professor.teach();                            // logs 'Teaching'

doctor.invoice();                          // logs 'foo bar is Billing customer'
doctor.payTax();                           // logs 'foo bar Paying taxes'

professional.invoice = function() {
  console.log(this.fullName() + ' is Asking customer to pay');
};

doctor.invoice();                          // logs 'foo bar is Asking customer to pay'
professor.invoice();                       // logs 'foo bar is Asking customer to pay'
professor.payTax();                        // logs 'foo bar Paying taxes'




















