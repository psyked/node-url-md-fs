const TurndownService = require('turndown')
const turndownService = new TurndownService({ headingStyle: 'atx' })
const cheerio = require('cheerio')

module.exports = body => {
  let $ = cheerio.load(body)
  let html = $('.postArticle-content').html() || $('main,body').html() || ''

  return turndownService.turndown(html)
}
