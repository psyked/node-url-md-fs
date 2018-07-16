const extractFilename = require('../extract-filename')

module.exports = (frontmatter, sourceURL) => {
  let constructedFrontMatter = ''

  const keys = Object.keys(frontmatter)

  constructedFrontMatter += `path: /blog/${extractFilename(sourceURL)}/\n`

  keys.forEach(key => {
    if (key === 'published_time' || key === 'date') {
      constructedFrontMatter += `${key}: ${frontmatter[key]}\n`
    } else {
      constructedFrontMatter += `${key}: "${frontmatter[key]}"\n`
    }
  })

  return '---\n' + constructedFrontMatter + '---\n'
}
