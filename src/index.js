// core node fs bits
const path = require('path')
const fs = require('fs')

// request
const request = require('request')

const processMarkdown = require('./process-markdown')

module.exports = async sourceURL => {
  const response = await new Promise((resolve, reject) => {
    request(
      {
        uri: sourceURL,
        method: 'GET',
      },
      (err, httpResponse, body) => {
        if (err) return reject(err)

        const asMarkdown = processMarkdown(body)

        fs.writeFileSync(path.resolve(__dirname, '../output.md'), asMarkdown)
        return resolve(sourceURL)
      }
    )
  })
  return response
}
