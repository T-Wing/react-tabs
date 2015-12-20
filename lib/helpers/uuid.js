// Get a universally unique identifier
let count = 0;
module.exports = {
  uuid: function () {
    return 'react-tabs-' + count++;
  },
  resetUuid: function () {
    count = 0;
  }
};
