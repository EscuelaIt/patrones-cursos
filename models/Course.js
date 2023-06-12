const { Training } = require('./Training');

class Course extends Training{
  constructor(data) {
    super();
    this.title = data.title;
    this.duration = data.duration;
    this.description = data.description;
  }

  trainingTitle() {
    return this.title;
  }
  trainingDuration() {
    return this.duration;
  }
}

module.exports = { Course }