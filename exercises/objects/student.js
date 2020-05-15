function createStudent(name, year) {
  let student = {};
  student.name = name;
  student.year = year;
  student.courses = [];

  student.info = function() {
    console.log(this.name + ' is a ' + this.year + ' year student.');
  };

  student.listCourses = function() {
    return this.courses;
  };

  student.addCourse = function(course) {
    this.courses.push(course);
  };

  student.addNote = function(code, note) {
    let i;
    let course;

    for (i = 0; i < this.courses.length; i += 1) {
      course = this.courses[i];
      if (course.code === code) {
        if(course.note) {
          course.note += ('; ' + note);
        } else {
          course.note = note;
        }
        return;
      }
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
    let i;
    let course;

    for (i = 0; i < this.courses.length; i += 1) {
      course = this.courses[i];
      if (course.code === code) {
        course.note = note;
        return;
      }
    }
  };

  return student;
}


function createSchool() {
  let school = {};
  school.students = [];

  school.addStudent = function(name, year) {
    let validYears = ['1st', '2nd', '3rd', '4th', '5th'];
    let student;

    if (!validYears.includes(year)) {
      console.log('Invalid year!');
    } else {
      student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
  };

  school.enroll = function(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  };

  school.addGrade = function(student, courseName, grade) {
    let course = student.listCourses().filter(course => {
      return course.name === courseName;
    })[0];

    if (course) {
      course.grade = grade;
    }
  };

  school.getReportCard = function(student) {
    student.courses.forEach(course => {
      console.log(course.name + ': ' + `${course.grade ? course.grade : 'In progress'}`);
    });
  };

  school.courseReport = function(courseName) {
    let result = '=' + courseName + '=\n'
    let total = 0;
    let studentCount = 0;
    let average;
    let course;

    this.students.forEach(student => {
      course = student.courses.filter(course => {
        return course.name === courseName;
      })[0];
      if (course && !course.grade) return undefined;
      if (course) {
        result += student.name;
        result += ': ';
        result += String(course.grade);
        result += '\n';
        total += course.grade;
        studentCount += 1;
      }
    });
    average = total / studentCount;

    result += '---\n'
    result += 'Course Average: ';
    result += String(average);

    return result;
  };

  return school;
}


let school = createSchool();
let foo = school.addStudent('foo', '5th');
school.enroll(foo, 'Math', 101);
school.enroll(foo, 'Advanced Math', 102);
school.enroll(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);


let bar = school.addStudent('bar', '1st');
school.enroll(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

let qux = school.addStudent('qux', '2nd');
school.enroll(qux, 'Math', 101);
school.enroll(qux, 'Advanced Math', 102);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);

console.log(school.courseReport('Physics'));












