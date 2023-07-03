const { School } = require('./models/School');

console.writeln('Bienvenidos a mi escuela');
let school = new School();
do {
  school.train();
} while(school.shouldContine())




