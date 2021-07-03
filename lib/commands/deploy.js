const colors = require('colors')
const { cd, exec } = require('shelljs')

const { program } = require('../program')
const { portalPath } = require('../../config')

const { messages } = require('../messages/index')

const deploy = ({ fast, watch }) => {
  if (watch) {
    console.log(colors.yellow(messages.deploy.watch))
    exec(`gw deployFast -at`)
  } else if (fast) {
    console.log(colors.yellow(messages.deploy.fast))
    exec(`gw deploy -a`)
  } else {
    console.log(colors.yellow(messages.deploy.full))
    exec(`gw deploy`)
  }
}

program
  .option(messages.deploy['-a'], messages.deploy['option-a'])
  .option(messages.deploy['-w'], messages.deploy['option-w'])
  .command(messages.deploy.command)
  .description(messages.deploy.description)
  .action(() => {
    const { a: fast, w: watch } = program.opts()
    console.log(colors.green(messages.deploy.start))
    deploy({ fast, watch })
    console.log(colors.green(messages.deploy.end))
  })
