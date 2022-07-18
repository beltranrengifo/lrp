const colors = require('colors')
const { cd, exec, pwd, ls } = require('shelljs')

const { program } = require('../program')

const { messages } = require('../messages/index')

const deploy = ({ fast, watch, lsd }) => {
  let res
  if (watch) {
    console.log(colors.yellow(messages.deploy.watch))
    res = exec(`gw deployFast -at`)
  } else if (fast) {
    console.log(colors.yellow(messages.deploy.fast))
    res = exec(`gw deploy -a`)
  } else if (lsd) {
    try {
      console.log(colors.yellow(messages.deploy.super))
      res = exec('lsd')
    } catch (e) {
      console.log({ e })
    }
  } else {
    console.log(colors.yellow(messages.deploy.full))
    res = exec(`gw deploy`)
  }
  return res
}

program
  .option(messages.deploy['-a'], messages.deploy['option-a'])
  .option(messages.deploy['-w'], messages.deploy['option-w'])
  .option(messages.deploy['-s'], messages.deploy['option-s'])
  .command(messages.deploy.command)
  .description(messages.deploy.description)
  .addHelpText('after', colors.yellow(messages.deploy.helpText))
  .action(() => {
    const { a: fast, w: watch, s: lsd } = program.opts()
    console.log(colors.green(messages.deploy.start))
    const { stdout } = deploy({ fast, watch, lsd })
    console.log(
      stdout
        ? colors.green(messages.deploy.end)
        : colors.red(messages.deploy.error)
    )
  })
