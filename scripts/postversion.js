const sh = require('shelljs')

const { version } = require('../package.json')

sh.exec(`git commit package.json yarn.lock CHANGELOG.md -m "Version ${version}"`)
sh.echo()

sh.echo(`git tag v${version}`)
sh.exec(`git tag v${version}`)
sh.echo()

sh.exec('git push')
sh.exec('git push --tags')
