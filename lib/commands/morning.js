const colors = require('colors')
const { exec } = require('shelljs')

const { program } = require('../program')

const { messages } = require('../messages/index')

const morning = () =>
  exec(
    `lrp stop && lrp update-repo && lrp restore-sql && lrp build && lrp start`
  )

program
  .command(messages.morning.command)
  .description(messages.morning.description)
  .action(() => {
    console.log(colors.green(messages.morning.start))
    morning()
    console.log(colors.green(messages.morning.end))
  })
