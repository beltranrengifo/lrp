/* const { build } = require('./build')
const { clean } = require('./clean')
const { deploy } = require('./deploy')
const { format } = require('./format')
const { restoreSql } = require('./restore-sql')
const { start } = require('./start')
const { stop } = require('./stop')
const { updateRepo } = require('./update-repo')
const { pr } = require('./pr')

module.exports = {
  build,
  clean,
  deploy,
  format,
  restoreSql,
  start,
  stop,
  updateRepo,
  pr,
} */

const _fs = require('fs')
const files = _fs.readdirSync(__dirname)

const EXCLUDED_FILES = ['index.js']

const modules = files.reduce((acc, file) => {
  if (EXCLUDED_FILES.includes(file)) {
    return acc
  }

  if (_fs.lstatSync(`${__dirname}/${file}`).isFile()) {
    const trimmedName = file.substring(0, file.length - 3)
    try {
      acc[trimmedName] = require(`./${trimmedName}`)
    } catch (e) {
      console.error(e)
    }
  }

  return acc
}, {})

module.exports = modules
