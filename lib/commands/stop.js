const { exec } = require('shelljs')

exports.stop = () => exec(`pgrep -f tomcat | xargs kill -9`)
