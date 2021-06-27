const { cd, exec } = require('shelljs')
const { portalPath } = require('../../config')

exports.clean = () => {
  cd(`${portalPath}/liferay-portal`)

  exec(`
    git clean -fdx -e '.project' -e '.classpath' -e '*.iml' -e '.idea' -e 'test.*.properties' -e '*.eml' -e 'app server.*.properties' -e 'build.*.properties' -e 'portal-test-ext.properties' -e 'portal-ext.properties'
  `)
}
