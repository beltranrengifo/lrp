const colors = require('colors')
const { execFileSync } = require('node:child_process')

const { program } = require('../program')

const { messages } = require('../messages/index')

const pr = ({ get, repository, pull }) => {
  let res

  if (get) {
    try {
      execFileSync(
        'gh',
        [
          'pr',
          'checkout',
          pull,
          '-R',
          `https://github.com/${repository}/liferay-portal`,
        ],
        { stdio: 'inherit' }
      )
    } catch (error) {
      return { error }
    }
  } else {
    try {
      execFileSync(
        'gh',
        ['pr', 'create', '--fill', '-R', `${repository}/liferay-portal`],
        { stdio: 'inherit' }
      )
    } catch (error) {
      return { error }
    }
  }
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

    const { error } = pr({ get: isGetAction, repository, pull }) || {}

    if (error) {
      console.log(colors.red(messages.pr.error), error)

      return
    }

    console.log(
      colors.green(messages.pr[isGetAction ? 'getSuccess' : 'postSuccess'])
    )
  })
