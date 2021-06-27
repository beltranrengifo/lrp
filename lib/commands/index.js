module.exports = {
  ...require('./clean'),
  ...require('./restore-db'),
  ...require('./run'),
  ...require('./stop'),
}
