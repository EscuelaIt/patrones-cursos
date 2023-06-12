const { Training } = require('./Training');

class StudyPlan extends Training {
  constructor() {
    super();
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  trainingTitle() {
    let coursesTitle = this.courses.map( course => course.trainingTitle() );
    return coursesTitle.join(', ');
  }

  trainingDuration() {
    let totalDuration = 0;
    this.courses.forEach( course => {
      totalDuration += course.trainingDuration();
    });
    return totalDuration;
  }
}

module.exports = { StudyPlan }