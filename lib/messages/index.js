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
    end: 'Liferay Portal server is now shut down!',
  },
  stop: {
    command: 'stop',
    description: 'Stop Liferay Portal server',
    start: 'Stopping Liferay Portal server process...',
    end: 'Liferay Portal server is now shut down!',
  },
}
