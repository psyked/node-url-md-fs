const core = require('./index.js')

test('simple test against html', async () => {
  // arrange
  const response = await core('http://info.cern.ch/')

  // act

  // assert
  expect(response).toBe('http://info.cern.ch/')
})

test('simple test against medium', async () => {
  // arrange
  const response = await core(
    'https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9'
  )

  // act

  // assert
  expect(response).toBe(
    'https://medium.com/@psyked/fluid-widths-in-responsive-websites-2a02499295d9'
  )
})
