module.exports = {
  ...require('./build'),
  ...require('./clean'),
  ...require('./deploy'),
  ...require('./format'),
  ...require('./restore-sql'),
  ...require('./start'),
  ...require('./stop'),
  ...require('./update-repo'),
}
