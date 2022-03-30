const _fs = require('fs')
const files = _fs.readdirSync(__dirname)

const EXCLUDED_FILES = ['index.js']

const modules = files.reduce((acc, file) => {
  if (EXCLUDED_FILES.includes(file)) {
    return acc
  }

  if (_fs.lstatSync(`${__dirname}/${file}`).isFile()) {
    const trimmedName = file.substring(0, file.length - 3)
    acc[trimmedName] = require(`./${trimmedName}`)
  }

  return acc
}, {})

module.exports = modules
