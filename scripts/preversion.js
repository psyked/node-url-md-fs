const sh = require('shelljs')

const { version } = require('../package.json')

sh.echo('Running unit tests...')

const results = sh.exec('npm run test')

if (results.code !== 0) {
  sh.echo('ERROR: Please fix the failing tests before versioning.')
  sh.exit(1)
}

sh.echo('Checking for an up-to-date CHANGELOG.md before versioning...')
sh.echo()
sh.echo('git status --porcelain')
sh.echo()

const status = sh.exec('git status --porcelain').stdout.trim()

sh.echo()

if (status.indexOf('M CHANGELOG.md') === -1) {
  sh.echo('ERROR: Please update the CHANGELOG.md file before versioning.')
  sh.exit(1)
}

if (status !== 'M CHANGELOG.md') {
  sh.echo('ERROR: Please commit or stash these changes (excluding CHANGELOG.md).')
  sh.exit(1)
}
