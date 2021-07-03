const colors = require('colors')
const { exec } = require('shelljs')

const { program } = require('../program')

const { messages } = require('../messages/index')

const stop = () => exec(`pgrep -f tomcat | xargs kill -9`)

program
  .command(messages.stop.command)
  .description(messages.stop.description)
  .action(() => {
    console.log(colors.green(messages.stop.start))
    stop()
    console.log(colors.green(messages.stop.end))
  })
