const method = require('./process-markdown')

const htmlHTML = require('../tests/cern.html')
const htmlMD = require('../tests/cern.md')

test('html should be converted to expected markdown', () => {
  expect(method(htmlHTML)).toEqual(htmlMD)
})

const mediumHTML = require('../tests/medium.html')
const mediumMD = require('../tests/medium.md')

test('medium post should be converted to expected markdown', () => {
  expect(method(mediumHTML)).toEqual(mediumMD)
})
