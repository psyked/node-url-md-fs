const sourceHTML = require('../../tests/medium.html')
const method = require('./extract-metadata')
test('metadata items are extracted from html source', () => {
  // act
  const result = method(sourceHTML)

  // assert
  // validate response type
  expect(result).not.toBeUndefined()
  expect(typeof result).toBe('object')

  // validate response properties
  expect(result.description).not.toBeUndefined()
  expect(result.description).toEqual(
    `I’ve recently worked with the team behind the Derby University website [https://www.derby.ac.uk/] and one of the details that I really like about the implementation of the design is that it features…`
  )
})
