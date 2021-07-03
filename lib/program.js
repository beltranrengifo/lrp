const { version } = require('../package.json')

const { Command } = require('commander')

const program = new Command()
program.version(version)

exports.program = program
