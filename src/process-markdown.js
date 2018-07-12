const toMarkdown = require('to-markdown')
const cheerio = require('cheerio')

const converters = require('./markdown-config/converters')

module.exports = body => {
  let $ = cheerio.load(body)
  let html = $('.postArticle-content').html() || ''

  html = html.replace(/\s/gi, ' ')

  return toMarkdown(html, {
    gfm: true,
    converters,
  })
}
