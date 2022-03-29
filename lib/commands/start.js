const colors = require('colors')
const { exec } = require('shelljs')

const { program } = require('../program')
const { portalPath, tomcatVersion } = require('../../config')

const { messages } = require('../messages/index')

const start = () =>
  exec(`${portalPath}/bundles/tomcat-${tomcatVersion}/bin/catalina.sh jpda run`)

program
  .command(messages.start.command)
  .description(messages.start.description)
  .action(() => {
    console.log(colors.green(messages.start.start))
    start()
    console.log(colors.green(messages.start.end))
  })
