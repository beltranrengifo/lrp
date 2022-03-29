const colors = require('colors')

const { exec } = require('shelljs')

const { portalPath } = require('../../config')

const { messages } = require('../messages/index')

const { program } = require('../program')

const restoreSql = () => {
  const { stderr } = exec(
    `rm -rf ${portalPath}/bundles/data ${portalPath}/bundles/osgi/state && echo "drop database lportal; create database lportal" | mysql -u root`
  )

  if (stderr) {
    return false
  }

  return true
}

program
  .command(messages['restore-sql'].command)
  .description(messages['restore-sql'].description)
  .action(() => {
    console.log(colors.green(messages['restore-sql'].start))

    const result = restoreSql()

    console.log(
      result
        ? colors.green(messages['restore-sql'].end)
        : colors.red(messages['restore-sql'].error)
    )
  })
