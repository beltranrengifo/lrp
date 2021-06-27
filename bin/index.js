#!/usr/bin/env node

const program = require('commander')
const colors = require('colors')

const { version } = require('../package.json')

const { clean, restoreDb, run, stop } = require('../lib/commands')

program.version(version)

program
  .command('clean')
  .description('Clean Liferay Portal')
  .action(() => {
    console.log(colors.green('Starting clean up...'))
    clean()
    console.log(colors.green('Portal is now clean!'))
  })

program
  .command('restore-db')
  .description('Restore Liferay Portal database')
  .action(() => {
    console.log(colors.green('Restoring database...'))

    const result = restoreDb()

    console.log(
      result ? colors.green('Database restored!') : colors.red('Try again!')
    )
  })

program
  .command('run')
  .description('Run Liferay Portal')
  .action(() => {
    console.log(colors.green('Starting up...'))
    run()
    console.log(colors.green('Portal server shut down!'))
  })

program
  .command('stop')
  .description('Stop Liferay Portal server')
  .action(() => {
    console.log(colors.green('Stopping server...'))
    stop()
    console.log(colors.green('Portal server shut down!'))
  })

// allow commander to parse `process.argv`
program.parse(process.argv)
