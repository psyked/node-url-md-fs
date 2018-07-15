const filters = require('./extract-metadata')
test('Common Metadata filters', () => {
  expect(filters.length).not.toBeUndefined()
})
