const { console } = require('./utils/console');
const { School } = require('./models/School');
const { OnlineMedia } = require('./models/OnlineMedia');
const { OfflineMedia } = require('./models/OfflineMedia');


console.writeln('Bienvenidos a mi escuela');
let school = new School();
let training;
do {
  training = school.createTraining();
  if(training) {
    let mediaType;
    do {
      mediaType = console.readNumber('¿lo quires online (1) u offline (2)?');
      if(mediaType == 1) {
        school.teach(training, new OnlineMedia());
      }
      else if(mediaType == 2) {
        school.teach(training, new OfflineMedia());
      }
      else {
        console.writeln ('Error: Tipo de enseñanza no existente...')
      }
    } while(mediaType != 1 && mediaType != 2)
  }
} while(training)




