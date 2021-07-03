const colors = require('colors')
const { exec } = require('shelljs')

const { program } = require('../program')

const stop = () => exec(`pgrep -f tomcat | xargs kill -9`)

program
  .command('stop')
  .description('Stop Liferay Portal server')
  .action(() => {
    console.log(colors.green('Stopping server...'))
    stop()
  })
