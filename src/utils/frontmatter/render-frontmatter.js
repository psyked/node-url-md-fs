const extractFilename = require('../extract-filename')

const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/

module.exports = (frontmatter, sourceURL) => {
  let constructedFrontMatter = ''

  const keys = Object.keys(frontmatter)

  constructedFrontMatter += `path: /blog/${extractFilename(sourceURL)}/\n`

  keys.forEach(key => {
    if (typeof frontmatter[key] === 'string') {
      if (isoPattern.test(frontmatter[key])) {
        constructedFrontMatter += `${key}: ${frontmatter[key]}\n`
      } else {
        constructedFrontMatter += `${key}: "${frontmatter[key]}"\n`
      }
    } else if (
      typeof frontmatter[key] === 'object' &&
      frontmatter[key].length
    ) {
      constructedFrontMatter += `${key}:\n`
      frontmatter[key].map(value => {
        constructedFrontMatter += `- ${value}\n`
      })
    }
  })

  return '---\n' + constructedFrontMatter + '---\n'
}
