const method = require('./process-markdown')

const htmlStub = require('../tests/stub.html.js')
const markdownStub = require('../tests/stub.md.js')

test('html should be converted to expected markdown', async () => {
  const processed = await method(htmlStub)
  expect(processed).toEqual(markdownStub)
})
