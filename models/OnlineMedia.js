const { Media } = require('./Media');

class OnlineMedia extends Media {
  createSupport() {
    return 'ordenador';
  }
  createWriter() {
    return 'teclado';
  }
}

module.exports = { OnlineMedia }
