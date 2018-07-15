const path = require('path')
const fs = require('fs')
const request = require('request')
const processMarkdown = require('./utils/process-markdown')
const extractFilename = require('./utils/extract-filename')

const convertURLToMarkdown = async (sourceURL, { outputPath } = {}) => {
  const response = await new Promise((resolve, reject) => {
    return request(
      {
        uri: sourceURL,
        method: 'GET'
      },
      (err, httpResponse, body) => {
        if (err) reject(err)

        const asMarkdown = processMarkdown(body, { sourceURL })
        const filename = extractFilename(sourceURL)

        if (outputPath) {
          if (!fs.existsSync(path.resolve(__dirname, outputPath, filename))) {
            fs.mkdirSync(path.resolve(__dirname, outputPath, filename))
          }
          fs.writeFileSync(
            path.resolve(__dirname, outputPath, filename, 'index.md'),
            asMarkdown
          )
        }

        resolve(asMarkdown)
      }
    )
  })
  return response
}

const inputURL = process.argv[2]
const outputPath = process.argv[3] || __dirname

if (!inputURL) {
  console.error('No URL specified')
} else {
  convertURLToMarkdown(inputURL, {
    outputPath
  })
}

module.exports = convertURLToMarkdown
