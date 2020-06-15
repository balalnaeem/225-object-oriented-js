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

function createSchool() {
  let students = [];
  let validYears = ['1st', '2nd', '3rd', '4th', '5th'];

  return {
    addStudent: function(name, year) {
      let student = createStudent(name, year);
      if (!validYears.includes(student.year)) {
        return 'Invalid year';
      }
      students.push(student);
      return student;
    },

    enrollStudent: function(student, course) {
      student.addCourse(course);
    },

    addGrade: function(student, courseCode, grade) {
      let targetCourse = student.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      targetCourse.grade = grade;
    },

    getReportCard: function(student) {
      let report = '';
      student.courses.forEach(course => {
        report += String(course.name) + ': '
        if (course.grade) {
          report += String(course.grade);
        } else {
          report += 'In progress';
        }

        report += '\n'
      });

      return report.trim();
    },

    getCourseAverage: function(subject) {
      let total = 0;
      let count = 0;
      students.forEach(student => {
        student.courses.forEach(course => {
          if (course.name === subject) {
            total += course.grade;
            count += 1;
          }
        });
      });

      return total / count;
    },

    getCourseReport: function(subject) {
      let report = '=' + subject + ' Grades=\n';
      students.forEach(student => {
        student.courses.forEach(course => {
          if (course.name === subject) {
            report += student.name + ': ' + course.grade + '\n';
          }
        });
      });
      report += '---\n'

      if (isNaN(this.getCourseAverage(subject))) return undefined;

      report += 'Course Average: ' + String(this.getCourseAverage(subject));
      return report;
    },
  };
}

let balal = school.addStudent('Balal', '1st');
school.enrollStudent(balal, {name: 'Math', code: 101});
// school.enrollStudent(balal, { name: 'Advanced Math', code: 102 });
school.enrollStudent(balal, { name: 'Physics', code: 202, });
school.addGrade(balal, 101, 95);
// school.addGrade(balal, 102, 97);

let foo = school.addStudent('Foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101, grade: 94, });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102, grade: 90, });
school.enrollStudent(foo, { name: 'Physics', code: 202, });

let qux = school.addStudent('Qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101, grade: 93, });
school.enrollStudent(qux, { name: 'Advanced Math', code: 102, grade: 90, });

console.log(school.getCourseReport('Math'));














