const colors = require('colors')
const { exec } = require('shelljs')

const { program } = require('../program')

const { messages } = require('../messages/index')

const pr = ({ get, send }) => {
  if (get) {
    console.log(colors.yellow(messages.deploy.watch))
    exec(`gw deployFast -at`)
  } else if (send) {
    console.log(colors.yellow(messages.deploy.fast))
    exec(`gw deploy -a`)
  }
}

program
  .option(messages.pr.get, messages.pr['option-a'])
  .option(messages.pr['-w'], messages.pr['option-w'])
  .command(messages.pr.command)
  .description(messages.pr.description)
  .addHelpText('after', colors.yellow(messages.pr.helpText))
  .action(() => {
    const { a: fast, w: watch } = program.opts()
    console.log(colors.green(messages.pr.start))
    pr({ fast, watch })
    console.log(colors.green(messages.pr.end))
  })
