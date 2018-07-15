const path = require('path')
const cheerio = require('cheerio')
const TurndownService = require('turndown')
const turndownService = new TurndownService({ headingStyle: 'atx' })
const metaParser = require('./frontmatter/extract-metadata')
const extractFilename = require('./extract-filename')
const commonFilters = require('./frontmatter/common-metadata-filters')
const assetDownloader = require('./asset/download-asset')

module.exports = (body, { sourceURL, outputPath = '' } = {}) => {
  let $ = cheerio.load(body)
  let html = $('.postArticle-content').html() || $('main,body').html() || ''

  const metadata = metaParser(body)
  const markdown = turndownService.turndown(html)
  let constructedFrontMatter = ''

  const keys = Object.keys(metadata).filter(
    key => commonFilters.indexOf(key) === -1
  )

  keys.forEach(key => {
    if (key === 'article:published_time') {
      constructedFrontMatter += `${key}: ${metadata[key]}\n`
    } else {
      constructedFrontMatter += `${key}: "${metadata[key]}"\n`
    }
  })

  constructedFrontMatter =
    `path: ${extractFilename(sourceURL)}\n` + constructedFrontMatter

  const regex = /!\[.*\]\((.*)\)/g
  const matches = []
  let match
  while ((match = regex.exec(markdown)) && matches.push(match[1])) {}

  const markdownWithRelativePaths = markdown.replace(
    /(!\[.*?\]\()(.*)\/(.*?)(\))/g,
    '$1$3$4'
  )

  const assetsToDownload = matches
  if (assetsToDownload) {
    assetsToDownload.forEach(asset => {
      assetDownloader({
        url: asset,
        dest: path.resolve(__dirname, outputPath, extractFilename(sourceURL))
      })
    })
  }

  return '---\n' + constructedFrontMatter + '---\n' + markdownWithRelativePaths
}
