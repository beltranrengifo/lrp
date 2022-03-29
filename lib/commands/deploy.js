const colors = require('colors')
const { exec } = require('shelljs')

const { program } = require('../program')

const { messages } = require('../messages/index')

const deploy = ({ fast, watch }) => {
  let res
  if (watch) {
    console.log(colors.yellow(messages.deploy.watch))
    res = exec(`gw deployFast -at`)
  } else if (fast) {
    console.log(colors.yellow(messages.deploy.fast))
    res = exec(`gw deploy -a`)
  } else {
    console.log(colors.yellow(messages.deploy.full))
    res = exec(`gw deploy`)
  }
  return res
}

program
  .option(messages.deploy['-a'], messages.deploy['option-a'])
  .option(messages.deploy['-w'], messages.deploy['option-w'])
  .command(messages.deploy.command)
  .description(messages.deploy.description)
  .addHelpText('after', colors.yellow(messages.deploy.helpText))
  .action(() => {
    const { a: fast, w: watch } = program.opts()
    console.log(colors.green(messages.deploy.start))
    const { stdout } = deploy({ fast, watch })
    console.log(
      stdout
        ? colors.green(messages.deploy.end)
        : colors.red(messages.deploy.error)
    )
  })
