const colors = require('colors')
const { cd, exec } = require('shelljs')

const { program } = require('../program')
const { portalPath } = require('../../config')

const { messages } = require('../messages/index')

const clean = () => {
  cd(`${portalPath}/liferay-portal`)

  exec(`
    git clean -fdx -e '.project' -e '.classpath' -e '*.iml' -e '.idea' -e 'test.*.properties' -e '*.eml' -e 'app server.*.properties' -e 'build.*.properties' -e 'portal-test-ext.properties' -e 'portal-ext.properties'
  `)
}

program
  .command(messages.clean.command)
  .description(messages.clean.description)
  .action(() => {
    console.log(colors.green(messages.clean.start))
    clean()
    console.log(colors.green(messages.clean.end))
  })
