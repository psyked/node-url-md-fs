// core node fs bits
const path = require('path')
const fs = require('fs')

// request
const request = require('request')

// request conversion
const toMarkdown = require('to-markdown')
const cheerio = require('cheerio')

const converters = require('./conversion/markdown-process')

module.exports = async sourceURL => {
  const response = await new Promise((resolve, reject) => {
    request(
      {
        uri: sourceURL,
        method: 'GET',
      },
      (err, httpResponse, body) => {
        if (err) return reject(err)

        let $ = cheerio.load(body)
        let html = $('.postArticle-content').html() || ''

        const asMarkdown = toMarkdown(html, { gfm: true, converters })

        fs.writeFileSync(path.resolve(__dirname, '../output.md'), asMarkdown)
        return resolve(sourceURL)
      }
    )
  })
  return response
}
