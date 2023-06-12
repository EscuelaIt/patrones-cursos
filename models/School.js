const { console } = require('../utils/console');
const { teachers, courses } = require('../data');
const { Teacher } = require('./Teacher');
const { Course } = require('./Course');
const { StudyPlan } = require('./StudyPlan');

class School {
  constructor() {
    this.createTeachers();
    this.createCourses();
    this.currentTeacherId = 0;
  }

  createTeachers() {
    this.teachers = [];
    teachers.forEach( teacher => this.teachers.push(new Teacher(teacher)) );
  }

  createCourses() {
    this.courses = [];
    courses.forEach( course => this.courses.push(new Course(course)) );
  }

  showCourses() {
    this.courses.forEach( (course, index) => console.writeln(`[${index + 1}]: ${course.title}`));
  }

  teach(training, media) {
    this.teachers[this.currentTeacherId].teach(training, media);
    this.currentTeacherId = (this.currentTeacherId + 1) % this.teachers.length;
  }

  existsCourseId(courseId) {
    return courseId < this.courses.length;
  }

  createStudyPlan() {
    let studyPlan = new StudyPlan();
    console.writeln('Creando un plan de estudios');
    let courseId;
    do {
      courseId = console.readNumber('¿Qué curso quieres asignar al plan? (0 para terminar)')
      if(this.existsCourseId(courseId - 1) && courseId != 0) {
        studyPlan.addCourse(this.courses[courseId - 1]);
      }
    } while(courseId != 0)
    return studyPlan;
  }

  getCourse(courseId) {
    return this.courses[courseId];
  }

  createTraining() {
    this.showCourses();
    let courseId = console.readNumber('Qué curso quieres hacer? (0 para salir, cualquier otro numero para hacer un plan)');
    if(courseId == 0) {
      return null;
    }
    let training;
    if(this.existsCourseId(courseId - 1)) {
      training = this.getCourse(courseId - 1);
    } else {
      training = this.createStudyPlan();
    }
    return training;
  }
}

module.exports = { School }