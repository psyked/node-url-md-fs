// core node fs bits
const path = require('path')
const fs = require('fs')

// request
const request = require('request')

const processMarkdown = require('./process-markdown')

module.exports = async sourceURL => {
  const response = await new Promise((resolve, reject) => {
    return request(
      {
        uri: sourceURL,
        method: 'GET',
      },
      (err, httpResponse, body) => {
        if (err) reject(err)

        const asMarkdown = processMarkdown(body)

        fs.writeFileSync(path.resolve(__dirname, '../output.md'), asMarkdown)

        resolve(sourceURL)
      }
    )
  })
  return response
}
