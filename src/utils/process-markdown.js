// external libs
const path = require('path')
const cheerio = require('cheerio')
const TurndownService = require('turndown')

// internal libs
const metaParser = require('./frontmatter/extract-metadata')
const extractFilename = require('./extract-filename')
const remapKeys = require('./frontmatter/remap-frontmatter-keys')
const renderFrontmatter = require('./frontmatter/render-frontmatter')
const assetDownloader = require('./asset/download-asset')
const commonFilters = require('./frontmatter/common-metadata-filters')

const turndownService = new TurndownService({
  headingStyle: 'atx',
  hr: '---'
})

const remapTitles = frontmatter => {
  const filteredFM = {}
  for (let key in frontmatter) {
    if (commonFilters.indexOf(key) === -1) {
      const value = frontmatter[key]
      const asArray = key.split(':')
      const newKey = asArray.pop()
      filteredFM[newKey] = value
    }
  }
  // filteredFM['og:title'] = undefined
  return {
    ...filteredFM,
    title: (filteredFM['title'] || '').replace(
      /(.*?) – [\w\s]*? – Medium/g,
      '$1'
    )
  }
}

const postProcess = output => {
  return output.replace(/---\n---/g, '---')
}

module.exports = (body, { sourceURL, outputPath = '' } = {}) => {
  let $ = cheerio.load(body)
  let html = $('.postArticle-content').html() || $('main,body').html() || ''

  const metadata = remapTitles(remapKeys(metaParser(body)))
  const markdown = turndownService.turndown(html)

  const regex = /!\[.*\]\((.*)\)/g
  const assetsToDownload = []
  let match
  while ((match = regex.exec(markdown)) && assetsToDownload.push(match[1])) {}

  assetsToDownload.forEach(asset => {
    assetDownloader({
      url: asset,
      dest: path.resolve(__dirname, outputPath, extractFilename(sourceURL))
    })
  })

  const markdownWithRelativePaths = markdown.replace(
    /(!\[.*?\]\()(.*)\/(.*?)(\))/g,
    '$1$3$4'
  )

  return postProcess(
    renderFrontmatter(metadata, sourceURL) + markdownWithRelativePaths
  )
}
