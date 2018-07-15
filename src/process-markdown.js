const cheerio = require('cheerio')
const TurndownService = require('turndown')
const turndownService = new TurndownService({ headingStyle: 'atx' })
const metaParser = require('./utils/extract-metadata')
const commonFilters = require('./utils/common-metadata-filters')

module.exports = body => {
  let $ = cheerio.load(body)
  let html = $('.postArticle-content').html() || $('main,body').html() || ''

  const metadata = metaParser(body)
  const markdown = turndownService.turndown(html)
  let constructedFrontMatter = ''

  const keys = Object.keys(metadata).filter(
    key => commonFilters.indexOf(key) === -1
  )

  keys.forEach(key => {
    constructedFrontMatter += `${key}: ${metadata[key]}\n`
  })

  return '---\n' + constructedFrontMatter + '---\n' + markdown
}
