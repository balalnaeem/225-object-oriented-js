function createStudent(name, year) {
  let student = {
    name: name,
    year: year,
    courses: [],
  };

  student.info = function() {
    console.log(this.name + ' is a ' + this.year + ' year student');
  };

  student.listCourses = function() {
    console.log(this.courses);
  };

  student.addCourse = function(course) {
    this.courses.push(course);
  };

  student.addNote = function(code, note) {
    let targetCourse = this.courses.filter(course => {
      return course.code === code;
    })[0];

    if (targetCourse.note) {
      targetCourse.note += '; '
      targetCourse.note += note;
    } else {
      targetCourse.note = note;
    }
  };

  student.viewNotes = function() {
    this.courses.forEach(course => {
      if (course.note) {
        console.log(course.name + ': ' + course.note);
      }
    });
  };

  student.updateNote = function(code, note) {
    let targetCourse = this.courses.filter(course => {
      return course.code === code;
    })[0];

    targetCourse.note = note;
  };

  return student;
}

let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
foo.updateNote(101, 'Fun course');
foo.viewNotes();















