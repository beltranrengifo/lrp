const _fs = require('fs')
const files = _fs.readdirSync(__dirname)

const EXCLUDED_FILES = ['index.js']

const modules = files
  .filter(
    (file) =>
      !EXCLUDED_FILES.includes(file) &&
      _fs.lstatSync(`${__dirname}/${file}`).isFile()
  )
  .reduce((acc, file) => {
    const trimmedName = file.substring(0, file.length - 3)
    acc[trimmedName] = require(`./${trimmedName}`)

    return acc
  }, {})

module.exports = modules
