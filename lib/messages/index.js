exports.messages = {
  clean: {
    command: 'clean',
    description: 'Clean Liferay Portal repository',
    start: 'Starting repository clean up...',
    end: 'Liferay Portal repository is now clean!',
  },
  'restore-sql': {
    command: 'restore-sql',
    description: 'Initialize and restore Liferay Portal MySQL database',
    start: 'Initializing MySQL database...',
    end: 'Portal MySQL Database restored!',
    error: 'Oops, there is a problem around... Please try again!',
  },
  start: {
    command: 'start',
    description: 'Start Liferay Portal server',
    start: 'Starting up the Liferay Portal...',
    end: 'Liferay Portal is shut!',
  },
  stop: {
    command: 'stop',
    description: 'Stop Liferay Portal server',
    start: 'Stopping Liferay Portal server process...',
    end: 'Liferay Portal server process is now stopped!',
  },
  deploy: {
    command: 'deploy [option]',
    description:
      'Update the module you are working on... Rememeber to execute this command in the module folder',
    start: 'Deploying module...',
    end: 'Module deployed! Wait to see STARTED in your Tomcat console and refresh the page.',
    fast: 'Initializing fast module deployment',
    full: 'Initializing full module deployment',
    watch: 'Initializing fast module deployment and watch for changes',
    '-a': '-a',
    'option-a': 'Generate a fast deploy',
    '-w': '-w',
    'option-w': 'Generate a fast deploy and watch for changes',
  },
}
