const extractFilename = require('../extract-filename')
const commonFilters = require('./common-metadata-filters')

module.exports = (frontmatter, sourceURL) => {
  let constructedFrontMatter = ''

  const keys = Object.keys(frontmatter).filter(
    key => commonFilters.indexOf(key) === -1
  )

  constructedFrontMatter += `path: /blog/${extractFilename(sourceURL)}/\n`

  keys.forEach(key => {
    if (key === 'article:published_time' || key === 'date') {
      constructedFrontMatter += `${key}: ${frontmatter[key]}\n`
    } else {
      constructedFrontMatter += `${key}: "${frontmatter[key]}"\n`
    }
  })

  return '---\n' + constructedFrontMatter + '---\n'
}
