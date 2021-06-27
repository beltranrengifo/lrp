const { exec } = require('shelljs')
const { portalPath } = require('../../config')

exports.run = () =>
  exec(`${portalPath}/bundles/tomcat-9.0.43/bin/catalina.sh jpda run`)
