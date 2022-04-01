const colors = require('colors')
const { exec } = require('shelljs')

const { program } = require('../program')

const { messages } = require('../messages/index')

const pr = ({ get, repository, pull }) => {
  let res

  if (get) {
    res = exec(
      `gh pr checkout ${pull} -R https://github.com/${repository}/liferay-portal`
    )
  } else {
    res = exec(`gh pr create --fill -R ${repository}/liferay-portal`)
  }

  return res
}

program
  .command(messages.pr.command)
  .argument('[action]', 'Action name: get or post')
  .argument('[repository]', 'Repository name')
  .argument('[pull]', 'Pull request id')
  .description(messages.pr.description)
  .addHelpText('after', colors.yellow(messages.pr.helpText))
  .action((action, repository, pull) => {
    if (!action) {
      console.log(colors.red(messages.pr.missingAction))
      return
    }

    if (action !== 'get' && action !== 'post') {
      console.log(colors.red(messages.pr.unknownAction))
      return
    }

    if (!repository) {
      console.log(colors.red(messages.pr.missingRepoName))
      return
    }

    const isGetAction = action === 'get'

    if (isGetAction && !pull) {
      console.log(colors.red(messages.pr.missingPrId))
      return
    }

    console.log(
      colors.green(messages.pr[isGetAction ? 'getOption' : 'postOption'])
    )

    const { code: isError } = pr({ get: isGetAction, repository, pull })

    if (isError) {
      console.log(colors.red(messages.pr.error))

      return
    }

    console.log(
      colors.green(messages.pr[isGetAction ? 'getSuccess' : 'postSuccess'])
    )
  })
