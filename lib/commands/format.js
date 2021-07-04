const colors = require('colors')
const { cd, exec } = require('shelljs')

const { program } = require('../program')
const { portalPath } = require('../../config')

const { messages } = require('../messages/index')

const format = () => {
  exec(`gw formatSource`)
}

program
  .command(messages.format.command)
  .description(messages.format.description)
  .addHelpText('after', colors.yellow(messages.deploy.helpText))
  .action(() => {
    console.log(colors.green(messages.format.start))
    format()
    console.log(colors.green(messages.format.end))
  })
