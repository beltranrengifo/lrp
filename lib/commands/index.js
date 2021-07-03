module.exports = {
  ...require('./clean'),
  ...require('./restore-sql'),
  ...require('./start'),
  ...require('./stop'),
}
