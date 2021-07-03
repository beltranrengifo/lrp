module.exports = {
  ...require('./clean'),
  ...require('./deploy'),
  ...require('./restore-sql'),
  ...require('./start'),
  ...require('./stop'),
}
