const colors = require('colors')
const { cd, exec } = require('shelljs')

const { program } = require('../program')
const { portalPath } = require('../../config')

const { messages } = require('../messages/index')

const build = () => {
  cd(`${portalPath}/liferay-portal`)
  exec(`ant all`)
}

program
  .command(messages.build.command)
  .description(messages.build.description)
  .action(() => {
    console.log(colors.green(messages.build.start))
    build()
    console.log(colors.green(messages.build.end))
  })
