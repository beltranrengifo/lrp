const colors = require('colors')
const { cd, exec } = require('shelljs')

const { program } = require('../program')
const { portalPath } = require('../../config')

const { messages } = require('../messages/index')

const updateRepo = () => {
  cd(`${portalPath}/liferay-portal`)

  exec(`
    git checkout master && \
    git pull upstream master --rebase
    git push origin master
  `)
}

program
  .command(messages['update-repo'].command)
  .description(messages['update-repo'].description)
  .action(() => {
    console.log(colors.green(messages['update-repo'].start))
    updateRepo()
    console.log(colors.green(messages['update-repo'].end))
  })
