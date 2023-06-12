const { Media } = require('./Media');

class OfflineMedia extends Media {
  createSupport() {
    return 'pizarra';
  }
  createWriter() {
    return 'tiza';
  }
}

module.exports = { OfflineMedia }