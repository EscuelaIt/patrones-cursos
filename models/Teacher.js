const { console } = require('../utils/console');

class Teacher {
  constructor(data) {
    this.name = data.name;
    this.price = data.price;
  }

  teach(training, media) {
    console.writeln('\n......................');
    console.writeln(`Soy ${this.name} y voy a dar clases de ${training.trainingTitle()} con ${media.createSupport()} y ${media.createWriter()} en ${training.trainingDuration()} horas de duración`);
    console.writeln('......................\n');
  } 
}

module.exports = { Teacher }