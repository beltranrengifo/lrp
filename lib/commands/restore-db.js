const { exec } = require('shelljs')
const { portalPath } = require('../../config')

exports.restoreDb = () => {
  const { stderr } = exec(
    `rm -rf ${portalPath}/bundles/data ${portalPath}/bundles/osgi/state && echo "drop database lportal; create database lportal" | mysql -u root -p`
  )

  if (stderr) return false
  return true
}
