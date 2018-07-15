const method = require('./process-markdown')

const htmlHTML = require('../tests/cern.html')
const htmlMD = require('../tests/cern.md')

test('html should be converted to expected markdown', () => {
  expect(method(htmlHTML, { sourceURL: 'http://info.cern.ch/' })).toEqual(
    htmlMD
  )
})

const mediumHTML = require('../tests/medium.html')
const mediumMD = require('../tests/medium.md')

test('medium post should be converted to expected markdown', () => {
  expect(
    method(mediumHTML, {
      sourceURL:
        'https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9'
    })
  ).toEqual(mediumMD)
})
