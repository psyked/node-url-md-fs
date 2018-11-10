#!/usr/bin/env node

const path = require('path')
const fs = require('fs-extra')
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

        const asMarkdown = processMarkdown(body, { sourceURL, outputPath })
        const filename = extractFilename(sourceURL)

        console.log(path.resolve(outputPath, filename))
        if (outputPath) {
          fs.mkdirp(path.resolve(outputPath, filename), () => {
            fs.writeFileSync(
              path.resolve(outputPath, filename, 'index.md'),
              asMarkdown
            )
          })
        }

        resolve(asMarkdown)
      }
    )
  })
  return response
}

const inputURL = process.argv[2]
const outputPath = process.argv[3] || path.resolve('./')

if (!inputURL) {
  console.error('No URL specified')
} else {
  convertURLToMarkdown(inputURL, {
    outputPath
  })
}

module.exports = convertURLToMarkdown
